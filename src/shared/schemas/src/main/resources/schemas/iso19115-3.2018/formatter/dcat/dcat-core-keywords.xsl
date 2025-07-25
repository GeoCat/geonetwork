<?xml version="1.0" encoding="UTF-8"?>
<!--

    (c) 2003 Open Source Geospatial Foundation - all rights reserved
    This code is licensed under the GPL 2.0 license,
    available at the root application directory.

-->
<xsl:stylesheet version="3.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:mdb="http://standards.iso.org/iso/19115/-3/mdb/2.0"
                xmlns:mri="http://standards.iso.org/iso/19115/-3/mri/1.0"
                xmlns:gco="http://standards.iso.org/iso/19115/-3/gco/1.0"
                xmlns:gcx="http://standards.iso.org/iso/19115/-3/gcx/1.0"
                xmlns:cit="http://standards.iso.org/iso/19115/-3/cit/2.0"
                xmlns:dct="http://purl.org/dc/terms/"
                xmlns:dcat="http://www.w3.org/ns/dcat#"
                xmlns:skos="http://www.w3.org/2004/02/skos/core#"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                exclude-result-prefixes="#all">

  <!--
  RDF Property:	dcat:theme
  Type:	owl:ObjectProperty
  Definition:	A main category of the resource. A resource can have multiple themes.
  Sub-property of:	dcterms:subject
  Usage note:	The set of themes used to categorize the resources are organized in a skos:ConceptScheme, skos:Collection, owl:Ontology or similar, describing all the categories and their relations in the catalog.

  RDF Property:	dcat:keyword
  Definition:	A keyword or tag describing the resource.
  Range:	rdfs:Literal
  -->
  <xsl:template mode="iso19115-3-to-dcat"
                match="mri:descriptiveKeywords">
    <xsl:for-each select="*/mri:keyword[*/text() != '']">
      <xsl:apply-templates mode="iso19115-3-to-dcat"
                           select="."/>
    </xsl:for-each>
  </xsl:template>

  <!--
  dcat:keyword is a rdfs:Literal and not a skos:Concept.
  Main drawback is that the keyword is not linked to a concept in a concept scheme
  which is often the case in ISO encoding using Anchor.
  Using dcat:theme when an Anchor is present.
  -->
  <xsl:template mode="iso19115-3-to-dcat"
                match="mdb:identificationInfo/*/mri:descriptiveKeywords/*/mri:keyword[gcx:Anchor/@xlink:href != '']"
                priority="2">
    <xsl:variable name="isDcatTheme"
                  select="../mri:thesaurusName/*/cit:title/*/@xlink:href = ('http://publications.europa.eu/resource/authority/data-theme')"/>

    <xsl:choose>
      <xsl:when test="$isDcatTheme">
        <dcat:theme>
      <skos:Concept>
        <xsl:call-template name="rdf-object-ref-attribute"/>
        <xsl:call-template name="rdf-localised">
          <xsl:with-param name="nodeName"
                          select="'skos:prefLabel'"/>
        </xsl:call-template>
      </skos:Concept>
    </dcat:theme>
  </xsl:when>
      <xsl:otherwise>
        <dct:subject>
          <xsl:attribute name="rdf:resource" select="gcx:Anchor/@xlink:href"/>
        </dct:subject>
        <xsl:call-template name="rdf-localised">
          <xsl:with-param name="nodeName"
                          select="'dcat:keyword'"/>
        </xsl:call-template>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template mode="iso19115-3-to-dcat"
                match="mdb:identificationInfo/*/mri:descriptiveKeywords/*/mri:keyword[gco:CharacterString/text() != '']"
                priority="2">
    <xsl:call-template name="rdf-localised">
      <xsl:with-param name="nodeName"
                      select="'dcat:keyword'"/>
    </xsl:call-template>
  </xsl:template>

  <xsl:template mode="iso19115-3-to-dcat"
                match="mdb:identificationInfo/*/mri:descriptiveKeywords/*/mri:keyword"/>
</xsl:stylesheet>
