# OMDB API

This API endpoint allows you to search for movie information using the OMDB API.

## Authentication

This endpoint requires an API key, which should be passed as a query parameter apikey.

## Endpoint Details

The API endpoint is accessed via an HTTP GET request at the following URL:

`https://www.omdbapi.com/?apikey={apiKey}&type=movie&i={id}`

## Parameters

| Name   | Type   | Required | Description                                      |
| ------ | ------ | -------- | ------------------------------------------------ |
| apikey | String | Yes      | API key for the OMDb API                         |
| i      | String | Yes      | The ID of the movie to retrieve details for      |
| type   | String | No       | The type of result to return. Defaults to movie. |

## Response Format

| Property   | Type   | Description                                              |
| ---------- | ------ | -------------------------------------------------------- |
| Title      | String | The title of the movie                                   |
| Year       | String | The release year of the movie                            |
| Rated      | String | The movie's rating                                       |
| Runtime    | String | The length of the movie                                  |
| Genre      | String | The movie's genre(s)                                     |
| Director   | String | The movie's director(s)                                  |
| Writer     | String | The movie's writer(s)                                    |
| Actors     | String | The movie's actor(s)                                     |
| Plot       | String | A brief summary of the movie's plot                      |
| Language   | String | The movie's language(s)                                  |
| Country    | String | The country where the movie was produced                 |
| Awards     | String | Any awards the movie has won                             |
| Poster     | String | URL to the movie's poster                                |
| Ratings    | Array  | An array of ratings for the movie from different sources |
| Metascore  | String | The Metascore rating for the movie                       |
| imdbRating | String | The IMDb rating for the movie                            |
| imdbVotes  | String | The number of votes on IMDb for the movie                |
| imdbID     | String | The IMDb ID for the movie                                |
| Type       | String | The type of result returned.                             |

## Error Handling

| Status Code | Description                                                 |
| ----------- | ----------------------------------------------------------- |
| 200         | The request was successful                                  |
| 400         | The request was invalid or missing required parameters      |
| 401         | The request was not authorized (missing or invalid API key) |
| 404         | The requested resource was not found                        |
| 429         | The user has exceeded the allowed number of requests        |
| 500         | An error occurred on the server side                        |

Invalid API key Movie not found!
