# Popular Clans

This endpoint returns statistics about how often a clan’s data has been requested from the API.


## HTTP Request

`GET http://api.cr-api.com/popular/clans`

Name | Method | Description
--- | --- | ---
/popular/clans | GET | Most requested clans and stats

It gives the same response from [Multiple clans](/clans/multiple_clans) except that it also adds a field called `popularity` with hits and average hits per day with the clan results.

<a href="/json/popular_clans.json">Full JSON response</a>

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
