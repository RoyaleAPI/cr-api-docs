# Clans: Top Clans

This endpoint retrieves the Global 200 top clans on the leaderboard.

## HTTP Request

`http://api.cr-api.com/top/clans`

## Response

http://api.cr-api.com/top/clans

The above command returns JSON structured like this:

```json
{
    "clans": [
        {
            "badge_url": "/badge/Twin_Peaks_02.png",
            "memberCount": 49,
            "name": "Sandstorm",
            "previousRank": 2,
            "rank": 1,
            "region": {
                "isCountry": "false",
                "name": "International"
            },
            "score": 57741,
            "tag": "88JJ282G"
        },
        {
            "badge_url": "/badge/Star_Shine_03.png",
            "memberCount": 45,
            "name": "Nova eSports",
            "previousRank": 1,
            "rank": 2,
            "region": {
                "isCountry": "false",
                "name": "International"
            },
            "score": 57402,
            "tag": "LCVUYCR"
        },
    ],
    "lastUpdated": 1504049995278
}
```
