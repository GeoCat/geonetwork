/*
 * (c) 2003 Open Source Geospatial Foundation - all rights reserved
 * This code is licensed under the GPL 2.0 license,
 * available at the root application directory.
 */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech) (7.7.0).
 * https://openapi-generator.tech Do not edit the class manually.
 */
package org.geonetwork.tasks.ogcapi.processes.generated;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.annotation.Generated;
import java.util.Optional;
import org.geonetwork.tasks.ogcapi.processes.generated.model.OgcApiProcessesExceptionDto;
import org.geonetwork.tasks.ogcapi.processes.generated.model.OgcApiProcessesJobListDto;
import org.geonetwork.tasks.ogcapi.processes.generated.model.OgcApiProcessesResultsDto;
import org.geonetwork.tasks.ogcapi.processes.generated.model.OgcApiProcessesStatusInfoDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.context.request.NativeWebRequest;

@Generated(
    value = "org.openapitools.codegen.languages.SpringCodegen",
    date = "2024-08-06T16:12:06.105974013+02:00[Europe/Paris]",
    comments = "Generator version: 7.7.0")
@Validated
@Tag(name = "Dismiss", description = "the Dismiss API")
public interface JobsApi {

  default Optional<NativeWebRequest> getRequest() {
    return Optional.empty();
  }

  /**
   * DELETE /jobs/{jobId} : cancel a job execution, remove a finished job Cancel a job execution and
   * remove it from the jobs list. For more information, see [Section
   * 13](https://docs.ogc.org/is/18-062/18-062.html#Dismiss).
   *
   * @param jobId local identifier of a job (required)
   * @return The status of a job. (status code 200) or The requested URI was not found. (status code
   *     404) or A server error occurred. (status code 500)
   */
  @Operation(
      operationId = "dismiss",
      summary = "cancel a job execution, remove a finished job",
      description =
          "Cancel a job execution and remove it from the jobs list.  For more information, see"
              + " [Section 13](https://docs.ogc.org/is/18-062/18-062.html#Dismiss). ",
      tags = {"Dismiss"},
      responses = {
        @ApiResponse(
            responseCode = "200",
            description = "The status of a job.",
            content = {
              @Content(
                  mediaType = "application/json",
                  schema = @Schema(implementation = OgcApiProcessesStatusInfoDto.class)),
              @Content(
                  mediaType = "text/html",
                  schema = @Schema(implementation = OgcApiProcessesStatusInfoDto.class))
            }),
        @ApiResponse(
            responseCode = "404",
            description = "The requested URI was not found.",
            content = {
              @Content(
                  mediaType = "application/json",
                  schema = @Schema(implementation = OgcApiProcessesExceptionDto.class)),
              @Content(
                  mediaType = "text/html",
                  schema = @Schema(implementation = OgcApiProcessesExceptionDto.class))
            }),
        @ApiResponse(
            responseCode = "500",
            description = "A server error occurred.",
            content = {
              @Content(
                  mediaType = "application/json",
                  schema = @Schema(implementation = OgcApiProcessesExceptionDto.class)),
              @Content(
                  mediaType = "text/html",
                  schema = @Schema(implementation = OgcApiProcessesExceptionDto.class))
            })
      })
  @RequestMapping(
      method = RequestMethod.DELETE,
      value = "/jobs/{jobId}",
      produces = {"application/json", "text/html"})
  default ResponseEntity<OgcApiProcessesStatusInfoDto> dismiss(
      @Parameter(
              name = "jobId",
              description = "local identifier of a job",
              required = true,
              in = ParameterIn.PATH)
          @PathVariable("jobId")
          String jobId) {
    getRequest()
        .ifPresent(
            request -> {
              for (MediaType mediaType : MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                  String exampleString =
                      "{ \"jobID\" : \"jobID\", \"processID\" : \"processID\", \"created\" :"
                          + " \"2000-01-23T04:56:07.000+00:00\", \"progress\" : 8, \"started\" :"
                          + " \"2000-01-23T04:56:07.000+00:00\", \"finished\" :"
                          + " \"2000-01-23T04:56:07.000+00:00\", \"links\" : [ { \"hreflang\" :"
                          + " \"en\", \"rel\" : \"service\", \"href\" : \"href\", \"type\" :"
                          + " \"application/json\", \"title\" : \"title\" }, { \"hreflang\" :"
                          + " \"en\", \"rel\" : \"service\", \"href\" : \"href\", \"type\" :"
                          + " \"application/json\", \"title\" : \"title\" } ], \"type\" :"
                          + " \"process\", \"message\" : \"message\", \"updated\" :"
                          + " \"2000-01-23T04:56:07.000+00:00\", \"status\" : \"accepted\" }";
                  ApiUtil.setExampleResponse(request, "application/json", exampleString);
                  break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                  String exampleString =
                      "{ \"instance\" : \"instance\", \"detail\" : \"detail\", \"type\" : \"type\","
                          + " \"title\" : \"title\", \"status\" : 0 }";
                  ApiUtil.setExampleResponse(request, "application/json", exampleString);
                  break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("text/html"))) {
                  String exampleString = "Custom MIME type example not yet supported: text/html";
                  ApiUtil.setExampleResponse(request, "text/html", exampleString);
                  break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                  String exampleString =
                      "{ \"instance\" : \"instance\", \"detail\" : \"detail\", \"type\" : \"type\","
                          + " \"title\" : \"title\", \"status\" : 0 }";
                  ApiUtil.setExampleResponse(request, "application/json", exampleString);
                  break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("text/html"))) {
                  String exampleString = "Custom MIME type example not yet supported: text/html";
                  ApiUtil.setExampleResponse(request, "text/html", exampleString);
                  break;
                }
              }
            });
    return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
  }

  /**
   * GET /jobs : retrieve the list of jobs. Lists available jobs. For more information, see [Section
   * 11](https://docs.ogc.org/is/18-062/18-062.html#sc_job_list).
   *
   * @return A list of jobs for this process. (status code 200) or The requested URI was not found.
   *     (status code 404)
   */
  @Operation(
      operationId = "getJobs",
      summary = "retrieve the list of jobs.",
      description =
          "Lists available jobs.  For more information, see [Section"
              + " 11](https://docs.ogc.org/is/18-062/18-062.html#sc_job_list). ",
      tags = {"JobList"},
      responses = {
        @ApiResponse(
            responseCode = "200",
            description = "A list of jobs for this process.",
            content = {
              @Content(
                  mediaType = "application/json",
                  schema = @Schema(implementation = OgcApiProcessesJobListDto.class)),
              @Content(
                  mediaType = "text/html",
                  schema = @Schema(implementation = OgcApiProcessesJobListDto.class))
            }),
        @ApiResponse(
            responseCode = "404",
            description = "The requested URI was not found.",
            content = {
              @Content(
                  mediaType = "application/json",
                  schema = @Schema(implementation = OgcApiProcessesExceptionDto.class)),
              @Content(
                  mediaType = "text/html",
                  schema = @Schema(implementation = OgcApiProcessesExceptionDto.class))
            })
      })
  @RequestMapping(
      method = RequestMethod.GET,
      value = "/jobs",
      produces = {"application/json", "text/html"})
  default ResponseEntity<OgcApiProcessesJobListDto> getJobs() {

    getRequest()
        .ifPresent(
            request -> {
              for (MediaType mediaType : MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                  String exampleString =
                      "{ \"jobs\" : [ { \"jobID\" : \"jobID\", \"processID\" : \"processID\","
                          + " \"created\" : \"2000-01-23T04:56:07.000+00:00\", \"progress\" : 8,"
                          + " \"started\" : \"2000-01-23T04:56:07.000+00:00\", \"finished\" :"
                          + " \"2000-01-23T04:56:07.000+00:00\", \"links\" : [ { \"hreflang\" :"
                          + " \"en\", \"rel\" : \"service\", \"href\" : \"href\", \"type\" :"
                          + " \"application/json\", \"title\" : \"title\" }, { \"hreflang\" :"
                          + " \"en\", \"rel\" : \"service\", \"href\" : \"href\", \"type\" :"
                          + " \"application/json\", \"title\" : \"title\" } ], \"type\" :"
                          + " \"process\", \"message\" : \"message\", \"updated\" :"
                          + " \"2000-01-23T04:56:07.000+00:00\", \"status\" : \"accepted\" }, {"
                          + " \"jobID\" : \"jobID\", \"processID\" : \"processID\", \"created\" :"
                          + " \"2000-01-23T04:56:07.000+00:00\", \"progress\" : 8, \"started\" :"
                          + " \"2000-01-23T04:56:07.000+00:00\", \"finished\" :"
                          + " \"2000-01-23T04:56:07.000+00:00\", \"links\" : [ { \"hreflang\" :"
                          + " \"en\", \"rel\" : \"service\", \"href\" : \"href\", \"type\" :"
                          + " \"application/json\", \"title\" : \"title\" }, { \"hreflang\" :"
                          + " \"en\", \"rel\" : \"service\", \"href\" : \"href\", \"type\" :"
                          + " \"application/json\", \"title\" : \"title\" } ], \"type\" :"
                          + " \"process\", \"message\" : \"message\", \"updated\" :"
                          + " \"2000-01-23T04:56:07.000+00:00\", \"status\" : \"accepted\" } ],"
                          + " \"links\" : [ { \"hreflang\" : \"en\", \"rel\" : \"service\","
                          + " \"href\" : \"href\", \"type\" : \"application/json\", \"title\" :"
                          + " \"title\" }, { \"hreflang\" : \"en\", \"rel\" : \"service\", \"href\""
                          + " : \"href\", \"type\" : \"application/json\", \"title\" : \"title\" }"
                          + " ] }";
                  ApiUtil.setExampleResponse(request, "application/json", exampleString);
                  break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                  String exampleString =
                      "{ \"instance\" : \"instance\", \"detail\" : \"detail\", \"type\" : \"type\","
                          + " \"title\" : \"title\", \"status\" : 0 }";
                  ApiUtil.setExampleResponse(request, "application/json", exampleString);
                  break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("text/html"))) {
                  String exampleString = "Custom MIME type example not yet supported: text/html";
                  ApiUtil.setExampleResponse(request, "text/html", exampleString);
                  break;
                }
              }
            });
    return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
  }

  /**
   * GET /jobs/{jobId}/results : retrieve the result(s) of a job Lists available results of a job.
   * In case of a failure, lists exceptions instead. For more information, see [Section
   * 7.13](https://docs.ogc.org/is/18-062/18-062.html#sc_retrieve_job_results).
   *
   * @param jobId local identifier of a job (required)
   * @return The results of a job. (status code 200) or The requested URI was not found. (status
   *     code 404) or A server error occurred. (status code 500)
   */
  @Operation(
      operationId = "getResult",
      summary = "retrieve the result(s) of a job",
      description =
          "Lists available results of a job. In case of a failure, lists exceptions instead.  For"
              + " more information, see [Section"
              + " 7.13](https://docs.ogc.org/is/18-062/18-062.html#sc_retrieve_job_results). ",
      tags = {"Result"},
      responses = {
        @ApiResponse(
            responseCode = "200",
            description = "The results of a job.",
            content = {
              @Content(
                  mediaType = "application/json",
                  schema = @Schema(implementation = OgcApiProcessesResultsDto.class)),
              @Content(
                  mediaType = "text/html",
                  schema = @Schema(implementation = OgcApiProcessesResultsDto.class))
            }),
        @ApiResponse(
            responseCode = "404",
            description = "The requested URI was not found.",
            content = {
              @Content(
                  mediaType = "application/json",
                  schema = @Schema(implementation = OgcApiProcessesExceptionDto.class)),
              @Content(
                  mediaType = "text/html",
                  schema = @Schema(implementation = OgcApiProcessesExceptionDto.class))
            }),
        @ApiResponse(
            responseCode = "500",
            description = "A server error occurred.",
            content = {
              @Content(
                  mediaType = "application/json",
                  schema = @Schema(implementation = OgcApiProcessesExceptionDto.class)),
              @Content(
                  mediaType = "text/html",
                  schema = @Schema(implementation = OgcApiProcessesExceptionDto.class))
            })
      })
  @RequestMapping(
      method = RequestMethod.GET,
      value = "/jobs/{jobId}/results",
      produces = {"application/json", "text/html"})
  default ResponseEntity<OgcApiProcessesResultsDto> getResult(
      @Parameter(
              name = "jobId",
              description = "local identifier of a job",
              required = true,
              in = ParameterIn.PATH)
          @PathVariable("jobId")
          String jobId) {
    getRequest()
        .ifPresent(
            request -> {
              for (MediaType mediaType : MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                  String exampleString = "null";
                  ApiUtil.setExampleResponse(request, "application/json", exampleString);
                  break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                  String exampleString =
                      "{ \"instance\" : \"instance\", \"detail\" : \"detail\", \"type\" : \"type\","
                          + " \"title\" : \"title\", \"status\" : 0 }";
                  ApiUtil.setExampleResponse(request, "application/json", exampleString);
                  break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("text/html"))) {
                  String exampleString = "Custom MIME type example not yet supported: text/html";
                  ApiUtil.setExampleResponse(request, "text/html", exampleString);
                  break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                  String exampleString =
                      "{ \"instance\" : \"instance\", \"detail\" : \"detail\", \"type\" : \"type\","
                          + " \"title\" : \"title\", \"status\" : 0 }";
                  ApiUtil.setExampleResponse(request, "application/json", exampleString);
                  break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("text/html"))) {
                  String exampleString = "Custom MIME type example not yet supported: text/html";
                  ApiUtil.setExampleResponse(request, "text/html", exampleString);
                  break;
                }
              }
            });
    return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
  }

  /**
   * GET /jobs/{jobId} : retrieve the status of a job Shows the status of a job. For more
   * information, see [Section
   * 7.12](https://docs.ogc.org/is/18-062/18-062.html#sc_retrieve_status_info).
   *
   * @param jobId local identifier of a job (required)
   * @return The status of a job. (status code 200) or The requested URI was not found. (status code
   *     404) or A server error occurred. (status code 500)
   */
  @Operation(
      operationId = "getStatus",
      summary = "retrieve the status of a job",
      description =
          "Shows the status of a job.   For more information, see [Section"
              + " 7.12](https://docs.ogc.org/is/18-062/18-062.html#sc_retrieve_status_info). ",
      tags = {"Status"},
      responses = {
        @ApiResponse(
            responseCode = "200",
            description = "The status of a job.",
            content = {
              @Content(
                  mediaType = "application/json",
                  schema = @Schema(implementation = OgcApiProcessesStatusInfoDto.class)),
              @Content(
                  mediaType = "text/html",
                  schema = @Schema(implementation = OgcApiProcessesStatusInfoDto.class))
            }),
        @ApiResponse(
            responseCode = "404",
            description = "The requested URI was not found.",
            content = {
              @Content(
                  mediaType = "application/json",
                  schema = @Schema(implementation = OgcApiProcessesExceptionDto.class)),
              @Content(
                  mediaType = "text/html",
                  schema = @Schema(implementation = OgcApiProcessesExceptionDto.class))
            }),
        @ApiResponse(
            responseCode = "500",
            description = "A server error occurred.",
            content = {
              @Content(
                  mediaType = "application/json",
                  schema = @Schema(implementation = OgcApiProcessesExceptionDto.class)),
              @Content(
                  mediaType = "text/html",
                  schema = @Schema(implementation = OgcApiProcessesExceptionDto.class))
            })
      })
  @RequestMapping(
      method = RequestMethod.GET,
      value = "/jobs/{jobId}",
      produces = {"application/json", "text/html"})
  default ResponseEntity<OgcApiProcessesStatusInfoDto> getStatus(
      @Parameter(
              name = "jobId",
              description = "local identifier of a job",
              required = true,
              in = ParameterIn.PATH)
          @PathVariable("jobId")
          String jobId) {
    getRequest()
        .ifPresent(
            request -> {
              for (MediaType mediaType : MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                  String exampleString =
                      "{ \"jobID\" : \"jobID\", \"processID\" : \"processID\", \"created\" :"
                          + " \"2000-01-23T04:56:07.000+00:00\", \"progress\" : 8, \"started\" :"
                          + " \"2000-01-23T04:56:07.000+00:00\", \"finished\" :"
                          + " \"2000-01-23T04:56:07.000+00:00\", \"links\" : [ { \"hreflang\" :"
                          + " \"en\", \"rel\" : \"service\", \"href\" : \"href\", \"type\" :"
                          + " \"application/json\", \"title\" : \"title\" }, { \"hreflang\" :"
                          + " \"en\", \"rel\" : \"service\", \"href\" : \"href\", \"type\" :"
                          + " \"application/json\", \"title\" : \"title\" } ], \"type\" :"
                          + " \"process\", \"message\" : \"message\", \"updated\" :"
                          + " \"2000-01-23T04:56:07.000+00:00\", \"status\" : \"accepted\" }";
                  ApiUtil.setExampleResponse(request, "application/json", exampleString);
                  break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                  String exampleString =
                      "{ \"instance\" : \"instance\", \"detail\" : \"detail\", \"type\" : \"type\","
                          + " \"title\" : \"title\", \"status\" : 0 }";
                  ApiUtil.setExampleResponse(request, "application/json", exampleString);
                  break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("text/html"))) {
                  String exampleString = "Custom MIME type example not yet supported: text/html";
                  ApiUtil.setExampleResponse(request, "text/html", exampleString);
                  break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                  String exampleString =
                      "{ \"instance\" : \"instance\", \"detail\" : \"detail\", \"type\" : \"type\","
                          + " \"title\" : \"title\", \"status\" : 0 }";
                  ApiUtil.setExampleResponse(request, "application/json", exampleString);
                  break;
                }
                if (mediaType.isCompatibleWith(MediaType.valueOf("text/html"))) {
                  String exampleString = "Custom MIME type example not yet supported: text/html";
                  ApiUtil.setExampleResponse(request, "text/html", exampleString);
                  break;
                }
              }
            });
    return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
  }
}