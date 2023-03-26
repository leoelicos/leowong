Sure, here is the documentation for the `OMDbAPIBySearch` function:

# OMDbAPIBySearch Endpoint

This API endpoint allows you to search for movies on OMDb by a string.

## Authentication

To use this endpoint, you need to obtain an API key from OMDb. You can sign up for an API key [here](http://www.omdbapi.com/apikey.aspx).

## Endpoint Details

### Request

- URL: `https://www.omdbapi.com/`
- Method: `GET`

### Parameters

| Parameter | Type   | Required | Description                                                            |
| --------- | ------ | -------- | ---------------------------------------------------------------------- |
| apikey    | string | yes      | Your OMDb API key.                                                     |
| type      | string | no       | Type of result to return: movie, series, or episode. Default is movie. |
| s         | string | yes      | Movie title to search for.                                             |
| page      | number | no       | Page number to retrieve.                                               |

### Response Format

| Parameter    | Type   | Description                         |
| ------------ | ------ | ----------------------------------- |
| Search       | array  | Array of movie search results.      |
| totalResults | string | Total number of results.            |
| Response     | string | API response status. True or False. |

#### Search object

| parameter    | Description                                       |
| ------------ | ------------------------------------------------- |
| Title        | The title of the movie                            |
| Year         | The year the movie was released                   |
| imdbID       | The ID of the movie on IMDb                       |
| Type         | The type of result (e.g., movie, series, episode) |
| Poster       | URL to the poster image of the movie              |
| totalResults | The total number of search results                |
| Response     | The response status (e.g., True, False)           |

### Error Handling

If there is an error retrieving the data from the OMDb API, the function will log the error to the console and return `undefined`.
