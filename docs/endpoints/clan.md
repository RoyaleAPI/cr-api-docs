# Clan(s)

This endpoint retrieves a specific clan.

## HTTP Request

`GET https://api.royaleapi.com/clan/<TAG>`

### URL Parameters

Parameter | Description
--- | ---
`TAG` | The clan tag of the clan to retrieve

## Response

### Single Clan

https://api.royaleapi.com/clan/9PJ82CRC

<a href="/json/clan_9PJ82CRC.json">Full JSON response</a>

The above command returns JSON structured like this:

```json
{
    "tag": "9PJ82CRC",
    "name": "Reddit Alpha",
    "description": "Minimum 5200🏆to join. When full, #50/50 sent to Reddit Bravo #2U2GGQJ 🚀https://discord.gg/RACF 🚀https://twitch.tv/woody",
    "type": "invite only",
    "score": 53310,
    "memberCount": 46,
    "requiredScore": 4600,
    "donations": 13910,
    "clanChest": {
        "status": "inactive"
    },
    "badge": {
        "name": "A_Char_Rocket_02",
        "category": "03_Royale",
        "id": 16000167,
        "image": "https://cr-api.github.io/cr-api-assets/badges/A_Char_Rocket_02.png"
    },
    "location": {
        "name": "Christmas Island",
        "isCountry": true,
        "code": "CX"
    },
    "members": [
        {
            "name": "Nicki Bey",
            "tag": "Q8JGYLCY",
            "rank": 1,
            "previousRank": 1,
            "role": "elder",
            "expLevel": 13,
            "trophies": 5817,
            "clanChestCrowns": 47,
            "donations": 0,
            "donationsReceived": 360,
            "donationsDelta": -360,
            "donationsPercent": 0,
            "arena": {
                "name": "Champion",
                "arena": "League 7",
                "arenaID": 19,
                "trophyLimit": 5800
            }
        },
        {
            "name": "John™",
            "tag": "PL22YQUY",
            "rank": 2,
            "previousRank": 4,
            "role": "elder",
            "expLevel": 13,
            "trophies": 5677,
            "clanChestCrowns": 110,
            "donations": 348,
            "donationsReceived": 320,
            "donationsDelta": 28,
            "donationsPercent": 1.25,
            "arena": {
                "name": "Master III",
                "arena": "League 6",
                "arenaID": 18,
                "trophyLimit": 5500
            }
        },
    ]
}
```

You can see an example of this at https://royaleapi.com/clan/9PJ82CRC

### Multiple Clans

https://api.royaleapi.com/clan/9PJ82CRC,9UQJUJC9

The above command returns JSON structured as follows, where `{}` denotes a full JSON response.

<a href="/json/clan_9PJ82CRC,9UQJUJC9.json">Full JSON response</a>

```json
[
    {},
    {}
]
```

You can see an example of this at https://royaleapi.com/clan/family/racf/members
