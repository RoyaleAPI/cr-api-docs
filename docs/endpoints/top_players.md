# Get Top Players

This endpoint retrieves the Global 200 top players on the leaderboard. Data is cached and currently set to update every 10 minutes.

## HTTP Request

`https://api.royaleapi.com/top/players/<LOCATION_KEY>`

### URL Parameters

Parameter | Description
--- | ---
`LOCATION_KEY` | two-letter code of the location. Omit the `LOCATION_KEY` to get the global leaderboard.

 See [cr-api-data/json/regions.json](https://github.com/cr-api/cr-api-data/blob/master/json/regions.json) for the full list of acceptable keys.

 !> Unlike clans, players do not belong to regions (denoted by `_` underscore prefix). Players only belong to a country. Clans can be set to a region because it is a clan setting.

## Response

https://api.royaleapi.com/top/players

<a href="/json/top_players.json">Full JSON response</a>

The above command returns JSON structured like this:

```json

[
    {
        "name": "Gianlu❤️Guapa™",
        "tag": "2PQC2VU92",
        "rank": 1,
        "previousRank": 8,
        "expLevel": 13,
        "trophies": 6158,
        "donationsDelta": null,
        "clan": {
            "tag": "9QJQYYYJ",
            "name": "Gladiators™️",
            "badge": {
                "name": "Sword_04",
                "category": "01_Symbol",
                "id": 16000007,
                "image": "https://cr-api.github.io/cr-api-assets/badges/Sword_04.png"
            }
        },
        "arena": {
            "name": "Grand Champion",
            "arena": "League 8",
            "arenaID": 20,
            "trophyLimit": 6100
        }
    },
    {
        "name": "战大",
        "tag": "2V0P9GVV",
        "rank": 2,
        "previousRank": 391,
        "expLevel": 13,
        "trophies": 6148,
        "donationsDelta": null,
        "clan": {
            "tag": "LCVUYCR",
            "name": "Nova eSports",
            "badge": {
                "name": "Star_Shine_03",
                "category": "01_Symbol",
                "id": 16000044,
                "image": "https://cr-api.github.io/cr-api-assets/badges/Star_Shine_03.png"
            }
        },
        "arena": {
            "name": "Grand Champion",
            "arena": "League 8",
            "arenaID": 20,
            "trophyLimit": 6100
        }
    },
]
```

## Implementation

- https://royaleapi.com/players/leaderboard
- https://royaleapi.com/players/leaderboard/us
