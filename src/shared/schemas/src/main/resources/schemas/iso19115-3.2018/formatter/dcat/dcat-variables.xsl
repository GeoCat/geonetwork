<?xml version="1.0" encoding="UTF-8"?>
<!--

    (c) 2003 Open Source Geospatial Foundation - all rights reserved
    This code is licensed under the GPL 2.0 license,
    available at the root application directory.

-->
<xsl:stylesheet version="3.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                exclude-result-prefixes="#all">
  <xsl:param name="expandSkosConcept"
             select="'true'"/>
  <xsl:param name="isExpandSkosConcept"
             select="xs:boolean($expandSkosConcept)"/>

  <xsl:variable name="isPreservingIsoType"
                as="xs:boolean"
                select="true()"/>

  <!-- The first resourceConstraints is accessRights,
  then rights is used for additional constraints information.
  https://github.com/SEMICeu/GeoDCAT-AP/issues/82
  -->
  <xsl:variable name="isPreservingAllResourceConstraints"
                as="xs:boolean"
                select="true()"/>

  <xsl:variable name="europaPublicationBaseUri" select="'http://publications.europa.eu/resource/authority/'"/>
  <xsl:variable name="europaPublicationCorporateBody" select="concat($europaPublicationBaseUri,'corporate-body/')"/>
  <xsl:variable name="europaPublicationCountry" select="concat($europaPublicationBaseUri,'country/')"/>
  <xsl:variable name="europaPublicationFrequency" select="concat($europaPublicationBaseUri,'frequency/')"/>
  <xsl:variable name="europaPublicationFileType" select="concat($europaPublicationBaseUri,'file-type/')"/>
  <xsl:variable name="europaPublicationLanguage" select="concat($europaPublicationBaseUri,'language/')"/>

  <xsl:variable name="isoCodeListBaseUri" select="'http://standards.iso.org/iso/19115/resources/Codelists/cat/codelists.xml#'"/>

  <!-- Mapping ISO element path to corresponding DCAT names -->
  <xsl:variable name="isoToDcatCommonNames"
                as="node()*">
    <entry key="dct:title">mdb:MD_Metadata/mdb:identificationInfo/mri:MD_DataIdentification/mri:citation/cit:CI_Citation/cit:title</entry>
    <entry key="dct:title">mdb:MD_Metadata/mdb:identificationInfo/srv:SV_ServiceIdentification/mri:citation/cit:CI_Citation/cit:title</entry>
    <entry key="dct:title">mdb:MD_Metadata/mdb:metadataStandard/cit:CI_Citation/cit:title</entry>
    <entry key="dcat:version" isMultilingual="false">mdb:MD_Metadata/mdb:identificationInfo/mri:MD_DataIdentification/mri:citation/cit:CI_Citation/cit:edition</entry>
    <entry key="dcat:version" isMultilingual="false">mdb:MD_Metadata/mdb:identificationInfo/srv:SV_ServiceIdentification/mri:citation/cit:CI_Citation/cit:edition</entry>
    <entry key="dct:description">mdb:MD_Metadata/mdb:identificationInfo/mri:MD_DataIdentification/mri:abstract</entry>
    <entry key="dct:description">mdb:MD_Metadata/mdb:identificationInfo/srv:SV_ServiceIdentification/mri:abstract</entry>
    <entry key="dct:description">mdb:MD_Metadata/mdb:identificationInfo/mri:MD_DataIdentification/mri:graphicOverview/mcc:MD_BrowseGraphic/mcc:fileDescription</entry>
    <entry key="dct:description">mdb:MD_Metadata/mdb:identificationInfo/srv:SV_ServiceIdentification/mri:graphicOverview/mcc:MD_BrowseGraphic/mcc:fileDescription</entry>
    <entry key="dct:title">mdb:MD_Metadata/mdb:distributionInfo/mrd:MD_Distribution/mrd:transferOptions/mrd:MD_DigitalTransferOptions/mrd:onLine/cit:CI_OnlineResource/cit:name</entry>
    <entry key="dct:description">mdb:MD_Metadata/mdb:distributionInfo/mrd:MD_Distribution/mrd:transferOptions/mrd:MD_DigitalTransferOptions/mrd:onLine/cit:CI_OnlineResource/cit:description</entry>
    <entry key="dct:title">mdb:MD_Metadata/mdb:contentInfo/mrc:MD_FeatureCatalogueDescription/mrc:featureCatalogueCitation/cit:CI_Citation/cit:onlineResource/cit:CI_OnlineResource/cit:name</entry>
    <entry key="dct:description">mdb:MD_Metadata/mdb:contentInfo/mrc:MD_FeatureCatalogueDescription/mrc:featureCatalogueCitation/cit:CI_Citation/cit:onlineResource/cit:CI_OnlineResource/cit:description</entry>
    <entry key="dct:title">mdb:MD_Metadata/mdb:resourceLineage/mrl:LI_Lineage/mrl:additionalDocumentation/cit:CI_Citation/cit:onlineResource/cit:CI_OnlineResource/cit:name</entry>
    <entry key="dct:description">mdb:MD_Metadata/mdb:resourceLineage/mrl:LI_Lineage/mrl:additionalDocumentation/cit:CI_Citation/cit:onlineResource/cit:CI_OnlineResource/cit:description</entry>
    <entry key="dct:title">mdb:MD_Metadata/mdb:portrayalCatalogueInfo/mpc:MD_PortrayalCatalogueReference/mpc:portrayalCatalogueCitation/cit:CI_Citation/cit:onlineResource/cit:CI_OnlineResource/cit:name</entry>
    <entry key="dct:description">mdb:MD_Metadata/mdb:portrayalCatalogueInfo/mpc:MD_PortrayalCatalogueReference/mpc:portrayalCatalogueCitation/cit:CI_Citation/cit:onlineResource/cit:CI_OnlineResource/cit:description</entry>
    <entry key="dct:title">mdb:MD_Metadata/mdb:distributionInfo/mrd:MD_Distribution/mrd:distributor/mrd:MD_Distributor/mrd:distributorTransferOptions/mrd:MD_DigitalTransferOptions/mrd:onLine/cit:CI_OnlineResource/cit:name</entry>
    <entry key="dct:description">mdb:MD_Metadata/mdb:distributionInfo/mrd:MD_Distribution/mrd:distributor/mrd:MD_Distributor/mrd:distributorTransferOptions/mrd:MD_DigitalTransferOptions/mrd:onLine/cit:CI_OnlineResource/cit:description</entry>
    <entry key="owl:versionInfo">mdb:MD_Metadata/mdb:metadataStandard/cit:CI_Citation/cit:edition</entry>
    <entry key="adms:versionNotes">mdb:MD_Metadata/mdb:resourceLineage/mrl:LI_Lineage/mrl:statement</entry>
  </xsl:variable>

  <xsl:variable name="isoDateTypeToDcatCommonNames"
                as="node()*">
    <entry key="dct:issued">creation</entry>
    <entry key="dct:issued">publication</entry>
    <entry key="dct:modified">revision</entry>
  </xsl:variable>

  <xsl:variable name="isoContactRoleToDcatCommonNames"
                as="node()*">
    <entry key="dct:creator" as="foaf">author</entry>
    <entry key="dct:publisher" as="foaf">publisher</entry>
    <entry key="dcat:contactPoint" as="vcard">pointOfContact</entry>
    <entry key="dct:rightsHolder" as="foaf">owner</entry> <!-- TODO: Check if dcat or only in profile -->
    <!-- Others are prov:qualifiedAttribution -->
  </xsl:variable>

  <!-- DCAT resource type from ISO hierarchy level -->
  <xsl:variable name="dcatResourceTypeToIso"
                as="node()*">
    <entry key="DatasetSeries">series</entry>
    <entry key="Dataset">dataset</entry>
    <entry key="Dataset">nonGeographicDataset</entry>
    <entry key="Dataset"></entry>
    <entry key="DataService">service</entry>
    <entry key="Catalogue">?</entry>
  </xsl:variable>

  <!-- https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#section-7 -->
  <xsl:variable name="dcmiTypeVocabularyToIso"
                as="node()*">
    <entry key="Collection">series</entry>
    <entry key="Dataset">dataset</entry>
    <entry key="Dataset">nonGeographicDataset</entry>
    <entry key="Event"></entry>
    <entry key="Image"></entry>
    <entry key="InteractiveResource"></entry>
    <entry key="MovingImage"></entry>
    <entry key="PhysicalObject"></entry>
    <entry key="Service">service</entry>
    <entry key="Software">software</entry>
    <entry key="Sound"></entry>
    <entry key="StillImage"></entry>
    <entry key="Text"></entry>
  </xsl:variable>


  <xsl:variable name="formatLabelToUri"
                as="node()*">
    <entry key="http://publications.europa.eu/resource/authority/file-type/GRID_ASCII">aaigrid</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/GRID">aig</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/ATOM">atom</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/ATOM">atom:feed</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/CSV">text/csv</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/CSV">csv</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/XML">csw</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/DBF">dbf</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/BIN">dgn</entry>
    <entry key="https://www.iana.org/assignments/media-types/image/vn.djvu">djvu</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/DOC">doc</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/DOCX">docx</entry>
    <entry key="https://www.iana.org/assignments/media-types/image/vn.dxf">dxf</entry>
    <entry key="https://www.iana.org/assignments/media-types/image/vn.dwg">image/vnd.dwg</entry>
    <entry key="https://www.iana.org/assignments/media-types/image/vn.dwg">dwg</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/ECW">ecw</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/ECW">ecwp</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/EXE">elp</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/EPUB">epub</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/GDB">fgeo</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/GDB">gdb</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/GDB">application/x-filegdb</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/GDB">ESRI File Geodatabase (.fgdb)</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/GEOJSON">geojson</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/GEOJSON">application/geo+json</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/GPKG">application/geopackage+vnd.sqlite3</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/GPKG">application/geopackage+sqlite3</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/GPKG">geopackage</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/RSS">georss</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/TIFF">image/tiff</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/GEOTIFF">geotiff</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/GEOTIFF">application/x-worldfile</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/GIF">gif</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/GML">gml</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/GML">application/gml+xml</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/GMZ">gmz</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/GMZ">application/x-gmz</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/GPKG">gpkg</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/XML">gpx</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/GRID">grid</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/GRID_ASCII">grid_ascii</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/CSV">gtfs</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/TIFF">gtiff</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/GZIP">gzip</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/HTML">text/html</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/HTML">html</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/JPEG">jpeg</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/JPEG">jpg</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/JSON">json</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/JSON">OGC API - Coverages</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/JSON">OGC API - Records</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/GEOJSON">OGC API - Features</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/JSON_LD">json-ld</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/JSON_LD">json_ld</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/JSON_LD">jsonld</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/KML">kml</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/KMZ">kmz</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/LAS">las</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/LAZ">laz</entry>
    <entry key="https://www.iana.org/assignments/media-types/application/marc">marc</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/MDB">mdb</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/MXD">mxd</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/RDF_N_TRIPLES">n-triples</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/N3">n3</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/NETCDF">netcdf</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/ODS">ods</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/ODT">odt</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/XML">ogc:csw</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/XML">ogc:sos</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/WCS_SRVC">ogc:wcs</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/WFS_SRVC">ogc:wfs</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/GML">ogc:wfs-g</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/XML">ogc:wmc</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/WMS_SRVC">ogc:wms</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/WMTS_SRVC">ogc:wmts</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/GML">ogc:wps</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/TXT">pc-axis</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/PDF">pdf</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/PDF">application/pdf</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/MDB">pgeo</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/PNG">png</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/RAR">rar</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/rdf/RDF_XML">xml</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/N3">rdf-n3</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/RDF_TURTLE">rdf-turtle</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/RDF_XML">rdf-xml</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/RDF_N_TRIPLES">rdf_n_triples</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/N3">rdf_n3</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/RDF_TURTLE">rdf_turtle</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/RDF_XML">rdf_xml</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/RSS">rss</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/RTF">rtf</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/ZIP">application/zip</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/ZIP">scorm</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/SHP">shp</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/SHP">application/vnd.shp</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/SHP">application/x-shapefile</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/REST">ESRI:REST</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/SHP">ESRI Shapefile</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/SHP">ESRI Shapefile (.shp)</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/XML">sos</entry>
    <entry key="https://www.iana.org/assignments/media-types/application/vnd.sqlite3">spatialite</entry>
    <entry key="https://www.iana.org/assignments/media-types/application/vnd.sqlite3">sqlite</entry>
    <entry key="https://www.iana.org/assignments/media-types/application/vnd.sqlite3">sqlite3</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/SVG">svg</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/TXT">text</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/TXT">text/csv</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/TIFF">tiff</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/TMX">tmx</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/TSV">tsv</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/RDF_TURTLE">ttl</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/RDF_TURTLE">turtle</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/TXT">txt</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/JSON">vcard-json</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/XML">vcard-xml</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/XML">xbrl</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/XHTML">xhtml</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/XLS">xls</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/XLSX">xlsx</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/XLSX">application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/XML">application/xml</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/XML">xml</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/WCS_SRVC">wcs</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/WFS_SRVC">wfs</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/GML">wfs-g</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/XML">wmc</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/WMS_SRVC">wms</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/WMTS_SRVC">wmts</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/GML">wps</entry>
    <entry key="http://publications.europa.eu/resource/authority/file-type/ZIP">zip</entry>
  </xsl:variable>

  <!-- DCAT uses the terminology code, while ISO uses bibliographic code.
       For some languages like Dutch, French or German the values differ. -->
  <xsl:variable name="isoToDcatLanguage"
                as="node()*">
    <entry key="dut">nld</entry> <!-- Dutch -->
    <entry key="cze">ces</entry> <!-- Czech -->
    <entry key="ger">deu</entry> <!-- German -->
    <entry key="gre">ell</entry> <!-- Greek -->
    <entry key="fre">fra</entry> <!-- French -->
    <entry key="rum">ron</entry> <!-- Romanian -->
    <entry key="slo">slk</entry> <!-- Slovak -->
    <entry key="ice">isl</entry> <!-- Icelandic-->
  </xsl:variable>
</xsl:stylesheet>
