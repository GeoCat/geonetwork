<!--

    (c) 2003 Open Source Geospatial Foundation - all rights reserved
    This code is licensed under the GPL 2.0 license,
    available at the root application directory.

-->
<!--

    (c) 2020 Open Source Geospatial Foundation - all rights reserved
    This code is licensed under the GPL 2.0 license,
    available at the root application directory.

-->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                version="3.0"
                exclude-result-prefixes="#all">

  <xsl:variable name="excludedCodelists"
                as="xs:string*"
                select="('CI_RoleCode', 'CI_DateTypeCode', 'MD_CharacterSetCode', 'LanguageCode')"/>

</xsl:stylesheet>
