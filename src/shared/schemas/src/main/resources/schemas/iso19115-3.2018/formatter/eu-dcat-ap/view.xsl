<?xml version="1.0" encoding="UTF-8"?>
<!--

    (c) 2003 Open Source Geospatial Foundation - all rights reserved
    This code is licensed under the GPL 2.0 license,
    available at the root application directory.

-->
<xsl:stylesheet version="3.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                xmlns:mdb="http://standards.iso.org/iso/19115/-3/mdb/2.0"
                xmlns:mcc="http://standards.iso.org/iso/19115/-3/mcc/1.0"
                xmlns:gco="http://standards.iso.org/iso/19115/-3/gco/1.0"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                xmlns:dct="http://purl.org/dc/terms/"
                exclude-result-prefixes="#all">

  <xsl:import href="eu-dcat-ap-core.xsl"/>

  <!--
  https://joinup.ec.europa.eu/collection/semic-support-centre/solution/dcat-application-profile-data-portals-europe/release/300
  https://semiceu.github.io/DCAT-AP/releases/3.0.0/
  -->

  <xsl:template match="/"
                priority="2">
    <rdf:RDF>
      <xsl:call-template name="create-namespaces-eu-dcat-ap"/>
      <xsl:apply-templates mode="iso19115-3-to-dcat"
                           select="root/mdb:MD_Metadata|mdb:MD_Metadata"/>
    </rdf:RDF>
  </xsl:template>

</xsl:stylesheet>
