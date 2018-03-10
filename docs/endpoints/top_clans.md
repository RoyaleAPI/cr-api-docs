# Get Top Clans

This endpoint retrieves the Global 200 top clans on the leaderboard.

## HTTP Request

`https://api.royaleapi.com/top/clans/<LOCATION_KEY>`

### URL Parameters

Parameter | Description
--- | ---
`LOCATION_KEY` | two-letter code of the location. Omit the `LOCATION_KEY` to get the global leaderboard.

  See [cr-api-data/json/regions.json](https://github.com/cr-api/cr-api-data/blob/master/json/regions.json) for the full list of acceptable keys.

## Response

- https://api.royaleapi.com/top/clans
- https://api.royaleapi.com/top/clans/_eu
- https://api.royaleapi.com/top/clans/us

The above command returns JSON structured as below. In the actual response, there will be 200 clans total.

<a href="/json/top_clans.json">Full JSON response</a>

```json
[
    {
        "tag": "8R8YULRJ",
        "name": "Sandstorm",
        "score": 59563,
        "memberCount": 50,
        "rank": 1,
        "previousRank": 2,
        "badge": {
            "name": "Twin_Peaks_02",
            "category": "01_Symbol",
            "id": 16000097,
            "image": "https://cr-api.github.io/cr-api-assets/badges/Twin_Peaks_02.png"
        },
        "location": {
            "name": "International",
            "isCountry": false,
            "code": "_INT"
        }
    },
    {
        "tag": "LCVUYCR",
        "name": "Nova eSports",
        "score": 59471,
        "memberCount": 45,
        "rank": 2,
        "previousRank": 1,
        "badge": {
            "name": "Star_Shine_03",
            "category": "01_Symbol",
            "id": 16000044,
            "image": "https://cr-api.github.io/cr-api-assets/badges/Star_Shine_03.png"
        },
        "location": {
            "name": "International",
            "isCountry": false,
            "code": "_INT"
        }
    },
]
```

## Implementation

- https://royaleapi.com/clans/leaderboard
- https://royaleapi.com/clans/leaderboard/us
- https://royaleapi.com/clans/leaderboard/_as
