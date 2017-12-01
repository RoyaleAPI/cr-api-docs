# Get Top Players

This endpoint retrieves the Global 200 top players on the leaderboard. Data is cached and currently set to update every 10 minutes.

## HTTP Request

`http://api.cr-api.com/top/players`

## Response

http://api.cr-api.com/top/players

The above command returns JSON structured like this:

```json

{
    "lastUpdated": 1512094321480,
    "players": [
        {
            "clan": {
                "name": "Mafio$o$"
            },
            "country": "ZA",
            "name": "sencerIsKing™",
            "previousRank": 12,
            "rank": 1,
            "tag": "2LLJC0PJ",
            "trophies": 6155
        },
        {
            "clan": {
                "name": "Mafio$o$"
            },
            "country": "FR",
            "name": "⛔️NO PASARAN⛔️",
            "previousRank": 37,
            "rank": 2,
            "tag": "G8R09PG8",
            "trophies": 6131
        },
    ]
}
```
