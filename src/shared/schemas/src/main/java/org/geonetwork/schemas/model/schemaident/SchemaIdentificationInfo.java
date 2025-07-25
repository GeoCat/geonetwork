/*
 * (c) 2003 Open Source Geospatial Foundation - all rights reserved
 * This code is licensed under the GPL 2.0 license,
 * available at the root application directory.
 */
//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.3.1
// See <a href="https://javaee.github.io/jaxb-v2/">https://javaee.github.io/jaxb-v2/</a>
// Any modifications to this file will be lost upon recompilation of the source schema.
// Generated on: 2025.06.04 at 11:39:43 AM CEST
//

package org.geonetwork.schemas.model.schemaident;

import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlRootElement;
import jakarta.xml.bind.annotation.XmlType;
import java.util.ArrayList;
import java.util.List;

/**
 * All schema identity files must have the elements defined in this type:
 *
 * <p>name = unique name of the schema used in GeoNetwork (lower case, and if a profile then it should be named after
 * the base schema using base-schema-name.profile-name eg. iso19139.mcp)
 *
 * <p>id = unique identifier for the schema
 *
 * <p>version = official version number of the schema
 *
 * <p>depends = names of other schemas that this schema depends on. This schema will fail to load if these schemas are
 * not present.
 *
 * <p>schemaLocation = official URL of XML schema definitions (XSD) for this metadata schema
 *
 * <p>autodetect = information used to detect whether a metadata record belongs to this schema
 *
 * <p>Java class for schemaType complex type.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 *
 * <pre>
 * &lt;complexType name="schemaType"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="name" type="{http://www.w3.org/2001/XMLSchema}string"/&gt;
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}string"/&gt;
 *         &lt;element name="version" type="{http://www.w3.org/2001/XMLSchema}string"/&gt;
 *         &lt;element name="appMinorVersionSupported" type="{http://www.w3.org/2001/XMLSchema}string"/&gt;
 *         &lt;element name="appMajorVersionSupported" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="title" type="{http://geonetwork-opensource.org/schemas/schema-ident}title" maxOccurs="unbounded" minOccurs="0"/&gt;
 *         &lt;element name="description" type="{http://geonetwork-opensource.org/schemas/schema-ident}description" maxOccurs="unbounded" minOccurs="0"/&gt;
 *         &lt;element name="standardUrl" type="{http://geonetwork-opensource.org/schemas/schema-ident}standardUrl" maxOccurs="unbounded" minOccurs="0"/&gt;
 *         &lt;element name="depends" type="{http://www.w3.org/2001/XMLSchema}string" maxOccurs="unbounded" minOccurs="0"/&gt;
 *         &lt;element name="schemaLocation" type="{http://www.w3.org/2001/XMLSchema}string"/&gt;
 *         &lt;element name="autodetect" type="{http://geonetwork-opensource.org/schemas/schema-ident}autodetectType"/&gt;
 *         &lt;element name="filters" type="{http://geonetwork-opensource.org/schemas/schema-ident}filters" minOccurs="0"/&gt;
 *         &lt;element name="formatters" type="{http://geonetwork-opensource.org/schemas/schema-ident}formatters" minOccurs="0"/&gt;
 *         &lt;element name="readwriteUuid" type="{http://www.w3.org/2001/XMLSchema}boolean" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(
        name = "schemaType",
        propOrder = {
            "name",
            "id",
            "version",
            "appMinorVersionSupported",
            "appMajorVersionSupported",
            "titles",
            "descriptions",
            "standardUrls",
            "depends",
            "schemaLocation",
            "autodetect",
            "filters",
            "formatters",
            "readwriteUuid"
        })
@XmlRootElement(name = "schema")
public class SchemaIdentificationInfo {

    @XmlElement(required = true)
    protected String name;

    @XmlElement(required = true)
    protected String id;

    @XmlElement(required = true)
    protected String version;

    @XmlElement(required = true)
    protected String appMinorVersionSupported;

    protected String appMajorVersionSupported;

    @XmlElement(name = "title")
    protected List<Title> titles;

    @XmlElement(name = "description")
    protected List<Description> descriptions;

    @XmlElement(name = "standardUrl")
    protected List<StandardUrl> standardUrls;

    protected List<String> depends;

    @XmlElement(required = true)
    protected String schemaLocation;

    @XmlElement(required = true)
    protected AutodetectType autodetect;

    protected Filters filters;
    protected Formatters formatters;
    protected Boolean readwriteUuid;

    /**
     * Gets the value of the name property.
     *
     * @return possible object is {@link String }
     */
    public String getName() {
        return name;
    }

    /**
     * Sets the value of the name property.
     *
     * @param value allowed object is {@link String }
     */
    public void setName(String value) {
        this.name = value;
    }

    /**
     * Gets the value of the id property.
     *
     * @return possible object is {@link String }
     */
    public String getId() {
        return id;
    }

    /**
     * Sets the value of the id property.
     *
     * @param value allowed object is {@link String }
     */
    public void setId(String value) {
        this.id = value;
    }

    /**
     * Gets the value of the version property.
     *
     * @return possible object is {@link String }
     */
    public String getVersion() {
        return version;
    }

    /**
     * Sets the value of the version property.
     *
     * @param value allowed object is {@link String }
     */
    public void setVersion(String value) {
        this.version = value;
    }

    /**
     * Gets the value of the appMinorVersionSupported property.
     *
     * @return possible object is {@link String }
     */
    public String getAppMinorVersionSupported() {
        return appMinorVersionSupported;
    }

    /**
     * Sets the value of the appMinorVersionSupported property.
     *
     * @param value allowed object is {@link String }
     */
    public void setAppMinorVersionSupported(String value) {
        this.appMinorVersionSupported = value;
    }

    /**
     * Gets the value of the appMajorVersionSupported property.
     *
     * @return possible object is {@link String }
     */
    public String getAppMajorVersionSupported() {
        return appMajorVersionSupported;
    }

    /**
     * Sets the value of the appMajorVersionSupported property.
     *
     * @param value allowed object is {@link String }
     */
    public void setAppMajorVersionSupported(String value) {
        this.appMajorVersionSupported = value;
    }

    /**
     * Gets the value of the titles property.
     *
     * <p>This accessor method returns a reference to the live list, not a snapshot. Therefore any modification you make
     * to the returned list will be present inside the JAXB object. This is why there is not a <CODE>set</CODE> method
     * for the titles property.
     *
     * <p>For example, to add a new item, do as follows:
     *
     * <pre>
     *    getTitles().add(newItem);
     * </pre>
     *
     * <p>Objects of the following type(s) are allowed in the list {@link Title }
     */
    public List<Title> getTitles() {
        if (titles == null) {
            titles = new ArrayList<Title>();
        }
        return this.titles;
    }

    /**
     * Gets the value of the descriptions property.
     *
     * <p>This accessor method returns a reference to the live list, not a snapshot. Therefore any modification you make
     * to the returned list will be present inside the JAXB object. This is why there is not a <CODE>set</CODE> method
     * for the descriptions property.
     *
     * <p>For example, to add a new item, do as follows:
     *
     * <pre>
     *    getDescriptions().add(newItem);
     * </pre>
     *
     * <p>Objects of the following type(s) are allowed in the list {@link Description }
     */
    public List<Description> getDescriptions() {
        if (descriptions == null) {
            descriptions = new ArrayList<Description>();
        }
        return this.descriptions;
    }

    /**
     * Gets the value of the standardUrls property.
     *
     * <p>This accessor method returns a reference to the live list, not a snapshot. Therefore any modification you make
     * to the returned list will be present inside the JAXB object. This is why there is not a <CODE>set</CODE> method
     * for the standardUrls property.
     *
     * <p>For example, to add a new item, do as follows:
     *
     * <pre>
     *    getStandardUrls().add(newItem);
     * </pre>
     *
     * <p>Objects of the following type(s) are allowed in the list {@link StandardUrl }
     */
    public List<StandardUrl> getStandardUrls() {
        if (standardUrls == null) {
            standardUrls = new ArrayList<StandardUrl>();
        }
        return this.standardUrls;
    }

    /**
     * Gets the value of the depends property.
     *
     * <p>This accessor method returns a reference to the live list, not a snapshot. Therefore any modification you make
     * to the returned list will be present inside the JAXB object. This is why there is not a <CODE>set</CODE> method
     * for the depends property.
     *
     * <p>For example, to add a new item, do as follows:
     *
     * <pre>
     *    getDepends().add(newItem);
     * </pre>
     *
     * <p>Objects of the following type(s) are allowed in the list {@link String }
     */
    public List<String> getDepends() {
        if (depends == null) {
            depends = new ArrayList<String>();
        }
        return this.depends;
    }

    /**
     * Gets the value of the schemaLocation property.
     *
     * @return possible object is {@link String }
     */
    public String getSchemaLocation() {
        return schemaLocation;
    }

    /**
     * Sets the value of the schemaLocation property.
     *
     * @param value allowed object is {@link String }
     */
    public void setSchemaLocation(String value) {
        this.schemaLocation = value;
    }

    /**
     * Gets the value of the autodetect property.
     *
     * @return possible object is {@link AutodetectType }
     */
    public AutodetectType getAutodetect() {
        return autodetect;
    }

    /**
     * Sets the value of the autodetect property.
     *
     * @param value allowed object is {@link AutodetectType }
     */
    public void setAutodetect(AutodetectType value) {
        this.autodetect = value;
    }

    /**
     * Gets the value of the filters property.
     *
     * @return possible object is {@link Filters }
     */
    public Filters getFilters() {
        return filters;
    }

    /**
     * Sets the value of the filters property.
     *
     * @param value allowed object is {@link Filters }
     */
    public void setFilters(Filters value) {
        this.filters = value;
    }

    /**
     * Gets the value of the formatters property.
     *
     * @return possible object is {@link Formatters }
     */
    public Formatters getFormatters() {
        return formatters;
    }

    /**
     * Sets the value of the formatters property.
     *
     * @param value allowed object is {@link Formatters }
     */
    public void setFormatters(Formatters value) {
        this.formatters = value;
    }

    /**
     * Gets the value of the readwriteUuid property.
     *
     * @return possible object is {@link Boolean }
     */
    public Boolean isReadwriteUuid() {
        return readwriteUuid;
    }

    /**
     * Sets the value of the readwriteUuid property.
     *
     * @param value allowed object is {@link Boolean }
     */
    public void setReadwriteUuid(Boolean value) {
        this.readwriteUuid = value;
    }
}
