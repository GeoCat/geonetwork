/*
 * (c) 2003 Open Source Geospatial Foundation - all rights reserved
 * This code is licensed under the GPL 2.0 license,
 * available at the root application directory.
 */
package org.geonetwork.tasks.ogcapi.processes.generated.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.annotation.Generated;
import jakarta.validation.Valid;
import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlRootElement;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/** OgcApiProcessesDescriptionTypeDto */
@JsonTypeName("descriptionType")
@JacksonXmlRootElement(localName = "OgcApiProcessesDescriptionTypeDto")
@XmlRootElement(name = "OgcApiProcessesDescriptionTypeDto")
@XmlAccessorType(XmlAccessType.FIELD)
@Generated(
    value = "org.openapitools.codegen.languages.SpringCodegen",
    date = "2024-08-06T16:12:06.105974013+02:00[Europe/Paris]",
    comments = "Generator version: 7.7.0")
public class OgcApiProcessesDescriptionTypeDto {

  private String title;

  private String description;

  @Valid private List<String> keywords = new ArrayList<>();

  @Valid private List<@Valid OgcApiProcessesMetadataDto> metadata = new ArrayList<>();

  private OgcApiProcessesDescriptionTypeAdditionalParametersDto additionalParameters;

  /** Create a builder with no initialized field (except for the default values). */
  public static Builder builder() {
    return new Builder();
  }

  public OgcApiProcessesDescriptionTypeDto title(String title) {
    this.title = title;
    return this;
  }

  /**
   * Get title
   *
   * @return title
   */
  @Schema(name = "title", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("title")
  @JacksonXmlProperty(localName = "title")
  @XmlElement(name = "title")
  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public OgcApiProcessesDescriptionTypeDto description(String description) {
    this.description = description;
    return this;
  }

  /**
   * Get description
   *
   * @return description
   */
  @Schema(name = "description", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("description")
  @JacksonXmlProperty(localName = "description")
  @XmlElement(name = "description")
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public OgcApiProcessesDescriptionTypeDto keywords(List<String> keywords) {
    this.keywords = keywords;
    return this;
  }

  public OgcApiProcessesDescriptionTypeDto addKeywordsItem(String keywordsItem) {
    if (this.keywords == null) {
      this.keywords = new ArrayList<>();
    }
    this.keywords.add(keywordsItem);
    return this;
  }

  /**
   * Get keywords
   *
   * @return keywords
   */
  @Schema(name = "keywords", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("keywords")
  @JacksonXmlProperty(localName = "keywords")
  @JacksonXmlElementWrapper(useWrapping = false)
  @XmlElement(name = "keywords")
  public List<String> getKeywords() {
    return keywords;
  }

  public void setKeywords(List<String> keywords) {
    this.keywords = keywords;
  }

  public OgcApiProcessesDescriptionTypeDto metadata(
      List<@Valid OgcApiProcessesMetadataDto> metadata) {
    this.metadata = metadata;
    return this;
  }

  public OgcApiProcessesDescriptionTypeDto addMetadataItem(
      OgcApiProcessesMetadataDto metadataItem) {
    if (this.metadata == null) {
      this.metadata = new ArrayList<>();
    }
    this.metadata.add(metadataItem);
    return this;
  }

  /**
   * Get metadata
   *
   * @return metadata
   */
  @Valid
  @Schema(name = "metadata", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("metadata")
  @JacksonXmlProperty(localName = "metadata")
  @JacksonXmlElementWrapper(useWrapping = false)
  @XmlElement(name = "metadata")
  public List<@Valid OgcApiProcessesMetadataDto> getMetadata() {
    return metadata;
  }

  public void setMetadata(List<@Valid OgcApiProcessesMetadataDto> metadata) {
    this.metadata = metadata;
  }

  public OgcApiProcessesDescriptionTypeDto additionalParameters(
      OgcApiProcessesDescriptionTypeAdditionalParametersDto additionalParameters) {
    this.additionalParameters = additionalParameters;
    return this;
  }

  /**
   * Get additionalParameters
   *
   * @return additionalParameters
   */
  @Valid
  @Schema(name = "additionalParameters", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("additionalParameters")
  @JacksonXmlProperty(localName = "additionalParameters")
  @XmlElement(name = "additionalParameters")
  public OgcApiProcessesDescriptionTypeAdditionalParametersDto getAdditionalParameters() {
    return additionalParameters;
  }

  public void setAdditionalParameters(
      OgcApiProcessesDescriptionTypeAdditionalParametersDto additionalParameters) {
    this.additionalParameters = additionalParameters;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OgcApiProcessesDescriptionTypeDto descriptionType = (OgcApiProcessesDescriptionTypeDto) o;
    return Objects.equals(this.title, descriptionType.title)
        && Objects.equals(this.description, descriptionType.description)
        && Objects.equals(this.keywords, descriptionType.keywords)
        && Objects.equals(this.metadata, descriptionType.metadata)
        && Objects.equals(this.additionalParameters, descriptionType.additionalParameters);
  }

  @Override
  public int hashCode() {
    return Objects.hash(title, description, keywords, metadata, additionalParameters);
  }

  @Override
  public String toString() {
    String sb =
        "class OgcApiProcessesDescriptionTypeDto {\n"
            + "    title: "
            + toIndentedString(title)
            + "\n"
            + "    description: "
            + toIndentedString(description)
            + "\n"
            + "    keywords: "
            + toIndentedString(keywords)
            + "\n"
            + "    metadata: "
            + toIndentedString(metadata)
            + "\n"
            + "    additionalParameters: "
            + toIndentedString(additionalParameters)
            + "\n"
            + "}";
    return sb;
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

  /** Create a builder with a shallow copy of this instance. */
  public Builder toBuilder() {
    Builder builder = new Builder();
    return builder.copyOf(this);
  }

  public static class Builder {

    private OgcApiProcessesDescriptionTypeDto instance;

    public Builder() {
      this(new OgcApiProcessesDescriptionTypeDto());
    }

    protected Builder(OgcApiProcessesDescriptionTypeDto instance) {
      this.instance = instance;
    }

    protected Builder copyOf(OgcApiProcessesDescriptionTypeDto value) {
      this.instance.setTitle(value.title);
      this.instance.setDescription(value.description);
      this.instance.setKeywords(value.keywords);
      this.instance.setMetadata(value.metadata);
      this.instance.setAdditionalParameters(value.additionalParameters);
      return this;
    }

    public Builder title(String title) {
      this.instance.title(title);
      return this;
    }

    public Builder description(String description) {
      this.instance.description(description);
      return this;
    }

    public Builder keywords(List<String> keywords) {
      this.instance.keywords(keywords);
      return this;
    }

    public Builder metadata(List<@Valid OgcApiProcessesMetadataDto> metadata) {
      this.instance.metadata(metadata);
      return this;
    }

    public Builder additionalParameters(
        OgcApiProcessesDescriptionTypeAdditionalParametersDto additionalParameters) {
      this.instance.additionalParameters(additionalParameters);
      return this;
    }

    /**
     * returns a built OgcApiProcessesDescriptionTypeDto instance.
     *
     * <p>The builder is not reusable (NullPointerException)
     */
    public OgcApiProcessesDescriptionTypeDto build() {
      try {
        return this.instance;
      } finally {
        // ensure that this.instance is not reused
        this.instance = null;
      }
    }

    @Override
    public String toString() {
      return getClass() + "=(" + instance + ")";
    }
  }
}