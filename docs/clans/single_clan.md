# Get Single Clan

This endpoint retrieves a specific clan.

## HTTP Request

`GET http://api.cr-api.com/clan/<TAG>`

### URL Parameters

Parameter | Description
--- | ---
TAG | The clan tag of the clan to retrieve

## Response

http://api.cr-api.com/clan/2CCCP

<a href="/json/clan_2CCCP.json">Full JSON response</a>

The above command returns JSON structured like this:

```json
{
    "tag": "2CCCP",
    "name": "Reddit Alpha",
    "description": "Minimum 5100🏆to join. When full, #50/50 sent to Reddit Bravo #2U2GGQJ 🚀http://discord.gg/RACF 🚀http://twitch.tv/woody",
    "type": "invite only",
    "score": 51337,
    "memberCount": 44,
    "requiredScore": 4600,
    "donations": 29100,
    "clanChest": {
        "crowns": 1187,
        "status": "completed"
    },
    "badge": 16000167,
    "location": {
        "name": "Christmas Island",
        "isCountry": true,
        "code": "CX"
    },
    "members": [
        {
            "name": "dharanikota",
            "tag": "88L8Q8UJ",
            "rank": 1,
            "role": "elder",
            "expLevel": 13,
            "trophies": 5538,
            "clanChestCrowns": 0,
            "clanChestCrownsPercent": 0,
            "donations": 0,
            "donationsReceived": 0,
            "donationsDelta": 0,
            "donationsPercent": 0,
            "arena": {
                "name": "Master III",
                "arena": "League 6",
                "arenaID": 17,
                "trophyLimit": 5500
            }
        },
        {
            "name": "Nicki Bey",
            "tag": "Q8JGYLCY",
            "rank": 2,
            "previousRank": 2,
            "role": "elder",
            "expLevel": 13,
            "trophies": 5439,
            "clanChestCrowns": 47,
            "clanChestCrownsPercent": 0.04,
            "donations": 0,
            "donationsReceived": 720,
            "donationsDelta": -720,
            "donationsPercent": 0,
            "arena": {
                "name": "Master II",
                "arena": "League 5",
                "arenaID": 16,
                "trophyLimit": 5200
            }
        },
    ]
}
```

## Implementation

You can see an implementation of this at http://cr-api.com/clan/2CCCP
