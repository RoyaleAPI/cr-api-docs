# Get Top Clans

This endpoint retrieves the Global 200 top clans on the leaderboard.

## HTTP Request

`http://api.cr-api.com/top/clans`

## Response

http://api.cr-api.com/top/clans

The above command returns JSON structured as below. In the actual response, there will be 200 clans total.

<a href="/json/top_clans.json">Full JSON response</a>

```json
[
    {
        "tag": "LCVUYCR",
        "name": "Nova eSports",
        "score": 57903,
        "memberCount": 50,
        "rank": 1,
        "previousRank": 1,
        "badge": 16000044,
        "location": {
            "name": "International",
            "isCountry": false,
            "code": "_INT"
        }
    },
    {
        "tag": "8VRJC2V2",
        "name": "风暴",
        "score": 56895,
        "memberCount": 50,
        "rank": 2,
        "previousRank": 2,
        "badge": 16000097,
        "location": {
            "name": "China",
            "isCountry": true,
            "code": "CN"
        }
    },
]
```

## Implementation

You can see an example of this at http://cr-api.com/clans
