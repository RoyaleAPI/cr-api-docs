# Get Top Players

This endpoint retrieves the Global 200 top players on the leaderboard. Data is cached and currently set to update every 10 minutes.

## HTTP Request

`http://api.cr-api.com/top/players`

## Response

http://api.cr-api.com/top/players

The above command returns JSON structured like this:

```json

[
    {
        "name": "AndreiK",
        "tag": "2PCV808YJ",
        "rank": 1,
        "previousRank": 129,
        "expLevel": 13,
        "trophies": 6040,
        "clan": {
            "tag": "8R8YULRJ",
            "name": "Sandstorm",
            "badge": 16000097
        },
        "arena": {
            "name": "Champion",
            "arena": "League 7",
            "arenaID": 18,
            "trophyLimit": 5800
        }
    },
    {
        "name": "yousefq822'",
        "tag": "CC0CLGUC",
        "rank": 2,
        "previousRank": 2,
        "expLevel": 13,
        "trophies": 6018,
        "clan": {
            "tag": "82YYQR98",
            "name": "Sandstorm Kw",
            "badge": 16000097
        },
        "arena": {
            "name": "Champion",
            "arena": "League 7",
            "arenaID": 18,
            "trophyLimit": 5800
        }
    },
]
```
