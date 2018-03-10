# Popular Tournaments

This endpoint returns statistics about how often a tournament has been requested from the API.


## HTTP Request

`GET https://api.royaleapi.com/popular/tournaments`

### Query String Parameters

Name | Data Type | Required / Optional | Description
--- | --- | --- | ---
`max` | number | optional | A single digit to indicate the maximum amount of results the API should return

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
