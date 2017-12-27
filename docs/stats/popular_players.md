# Popular Players

This endpoint returns statistics about how often a player’s data has been requested from the API.


## HTTP Request

`GET http://api.cr-api.com/popular/players`

Name | Method | Description
--- | --- | ---
/popular/players | GET | Most requested players and stats

It gives the same response from [multiple players](/clans/multiple_players) except that it also adds a field called `popularity` with hits and average hits per day with the clan results.

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
