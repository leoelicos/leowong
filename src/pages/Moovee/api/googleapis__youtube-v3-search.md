# YouTube Data API v3 - Search Endpoint

This API endpoint allows you to search for videos matching specific search terms, topics, locations, publication dates, and much more.

## Authentication

To use this API, you need to obtain a Google API key. You can do this by following the instructions on the [Google Developers website](https://developers.google.com/youtube/registering_an_application).

## Endpoint Details

The base URL for this endpoint is:

https://www.googleapis.com/youtube/v3/search

This endpoint accepts HTTP GET requests and requires the following parameters:

| Parameter | Required | Description                                                                                                                  |
| --------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| part      | Yes      | The part parameter specifies a comma-separated list of one or more resource properties that the API response should include. |
| key       | Yes      | Your application's API key.                                                                                                  |
| q         | Yes      | The q parameter specifies the query term to search for.                                                                      |
| type      | No       | The type parameter restricts the search results to a particular type of resource, such as videos or channels.                |

The API response includes a JSON object with the following properties:

| Property      | Description                                                                                          |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| kind          | The API resource type.                                                                               |
| etag          | The ETag of the response.                                                                            |
| nextPageToken | The token that can be used to retrieve the next page of search results.                              |
| prevPageToken | The token that can be used to retrieve the previous page of search results.                          |
| pageInfo      | Information about the search results.                                                                |
| items         | An array of search result items. Each item contains information about a video, channel, or playlist. |

For more information on the parameters and properties of this endpoint, please refer to the [official documentation](https://developers.google.com/youtube/v3/docs/search/list).
