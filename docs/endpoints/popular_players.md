# Popular Players

::: tip Note
This endpoint has yet to be implemented. Please be patient as we add the endpoints from v2. The endpoint will return a 501 Not Implemented error.
:::

This endpoint returns statistics about how often a player’s data has been requested from the API.

You may want to use [pagination](pagination) for this request.

## HTTP Request

`GET https://api.royaleapi.com/popular/players`

## Response

It gives the same response from [multiple players](/endpoints/player?id=multiple-players) except that it also adds a field called `popularity` with hits and average hits per day with the clan results.

<a href="/json/popular_players.json">Full JSON response</a>

```json
[
    {
        "popularity": {
            "hits": "34506",
            "hitsPerDayAvg": 11502
        },
        "tag": "...",
    },
    {}
]
```
