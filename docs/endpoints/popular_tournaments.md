# Popular Tournaments

!> This endpoint has yet to be implemented. Please be patient as we add the endpoints from v2. The endpoint will return a 501 Not Implemented error.

This endpoint returns statistics about how often a tournament has been requested from the API.

You may want to use [pagination](pagination) for this request.

## HTTP Request

`GET https://api.royaleapi.com/popular/tournaments`

## Response

This returns a list of [tournaments](/endpoints/tournaments) add add the `popularity` field to the response.

<a href="/json/popular_tournaments.json">Full JSON response</a>

```json
[
    {
        "popularity": {
            "hits": "35",
            "hitsPerDayAvg": 11.67
        },
        "tag": "...",
    },
    {}
]
```
