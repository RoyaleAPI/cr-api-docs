# Get Top War Clans

!> This endpoint has yet to support Global leaderboards. Please be patient as we add the endpoints from v2. The endpoint will return a 404 Not Found error when not provided a location key.

This endpoint retrieves the Global 200 top clans on the leaderboard.

You may want to use [pagination](pagination) for this request.

## HTTP Request

`https://api.royaleapi.com/top/war/<LOCATION_KEY>`

### URL Parameters

Parameter | Description
--- | ---
`LOCATION_KEY` | two-letter code of the location. Omit the `LOCATION_KEY` to get the global leaderboard.

  See [cr-api-data/json/regions.json](https://github.com/RoyaleAPI/cr-api-data/blob/master/json/regions.json) for the full list of acceptable keys.

## Response

- https://api.royaleapi.com/top/war
- https://api.royaleapi.com/top/war/_eu
- https://api.royaleapi.com/top/war/us

The above command returns JSON structured as below. In the actual response, there will be 200 clans total.

<a href="/json/top_war.json">Full JSON response</a>

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

- https://royaleapi.com/clans/war
- https://royaleapi.com/clans/war/us
- https://royaleapi.com/clans/war/_as
