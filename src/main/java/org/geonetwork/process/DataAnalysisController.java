package org.geonetwork.process;

import jakarta.validation.constraints.Max;
import org.geonetwork.data.AttributeStatistics;
import org.geonetwork.data.DataFormat;
import org.geonetwork.data.DatasetInfo;
import org.geonetwork.data.gdal.GdalDataAnalyzer;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/data/analysis")
public class DataAnalysisController {

  GdalDataAnalyzer analyzer;

  public DataAnalysisController(GdalDataAnalyzer gdalDataAnalyzer) {
    this.analyzer = gdalDataAnalyzer;
  }

  @GetMapping(path = "/status", produces = MediaType.APPLICATION_JSON_VALUE)
  @PreAuthorize("hasRole('Administrator')")
  public String status() {
    return analyzer.getStatus();
  }

  @GetMapping(path = "/formats", produces = MediaType.APPLICATION_JSON_VALUE)
  @PreAuthorize("hasRole('Administrator')")
  public List<DataFormat> formats() {
    return analyzer.getFormats();
  }

  @GetMapping(path = "/attribute/statistics", produces = MediaType.APPLICATION_JSON_VALUE)
  @PreAuthorize("hasRole('Administrator')")
  public List<AttributeStatistics> attributeStatistics(@RequestParam String datasource,
                                    @RequestParam String layer,
                                    @RequestParam String attribute) {

    return analyzer.getAttributesStatistics(
        datasource,
        layer,
        List.of(attribute));
  }

  @GetMapping(path = "/attribute/codelist", produces = MediaType.APPLICATION_JSON_VALUE)
  @PreAuthorize("hasRole('Administrator')")
  public List<Object> attributeCodelist(@RequestParam String datasource,
                                        @RequestParam String layer,
                                        @RequestParam String attribute,
                                        @RequestParam(defaultValue = "10") @Max(value = 100) int limit) {

    return analyzer.getAttributeUniqueValues(
        datasource,
        layer,
        attribute,
        limit);
  }

  @GetMapping(path = "/analysis", produces = MediaType.APPLICATION_JSON_VALUE)
  @PreAuthorize("hasRole('Administrator')")
  public ResponseEntity<DatasetInfo> analysis(@RequestParam String datasource,
                                              @RequestParam String layer) {
    Optional<DatasetInfo> layerProperties =
      analyzer.getLayerProperties(
        datasource,
        layer);

    if (layerProperties.isPresent()) {
      return new ResponseEntity<>(layerProperties.get(), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
}