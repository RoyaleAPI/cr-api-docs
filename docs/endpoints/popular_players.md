# Popular Players

This endpoint returns statistics about how often a player’s data has been requested from the API.


## HTTP Request

`GET https://api.royaleapi.com/popular/players`

Name | Method | Description
--- | --- | ---
/popular/players | GET | Most requested players and stats

### Query String Parameters

Name | Data Type | Required / Optional | Description
--- | --- | --- | ---
`max` | number | optional | A single digit to indicate the maximum amount of results the API should return

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
