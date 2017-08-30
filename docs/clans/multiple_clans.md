# Get Multiple Clans

This endpoint retrieves multiple clans. You can request up to 15 clans in each request.

## HTTP Request

`GET http://api.cr-api.com/clan/<TAG>,<TAG>,<TAG>?members=0`

### URL Parameters

Parameter | Description
--- | ---
TAG | The clan tag of the clan to retrieve. Use a comma to separate each clan tag.

### Query Parameters

Parameter | Default | Description
--- | --- | ---
members | 1 | If set to 0, the result will not include members.


## Response

http://api.cr-api.com/clan/2CCCP,2U2GGQJ

The above command returns JSON structured like this:

```json
[
    {
        "name": "Reddit Alpha",
        "badge": 16000167,
        "type": 2,
        "memberCount": 43,
        "score": 52238,
        "requiredScore": 4600,
        "donations": 7120,
        "description": "Minimum 5200 🏆 to join 🚀When full, #50/50 sent to Reddit Bravo 🚀http://discord.gg/racf",
        "currentRank": 0,
        "badge_url": "/badge/A_Char_Rocket_02.png",
        "tag": "2CCCP",
        "typeName": "Invite Only",
        "region": {
            "isCountry": "true",
            "name": "Niue"
        },
        "members": [
            {
                "avatarId": {
                    "low": 1519054,
                    "high": 20,
                    "unsigned": false
                },
                "name": "PowRay",
                "arena": {
                    "imageURL": "/arena/league6.png",
                    "arena": "League 6",
                    "arenaID": 17,
                    "name": "Master III",
                    "trophyLimit": 5500
                },
                "role": 3,
                "expLevel": 13,
                "score": 5598,
                "donations": 78,
                "currenRank": 1,
                "previousRank": 2,
                "clanChestCrowns": 0,
                "homeID": {
                    "low": 1519054,
                    "high": 20,
                    "unsigned": false
                },
                "tag": "9RR0CPGU",
                "roleName": "Elder"
            },
            {
                "avatarId": {
                    "low": 16708,
                    "high": 3,
                    "unsigned": false
                },
                "name": "SaintBelikin",
                "arena": {
                    "imageURL": "/arena/league6.png",
                    "arena": "League 6",
                    "arenaID": 17,
                    "name": "Master III",
                    "trophyLimit": 5500
                },
                "role": 4,
                "expLevel": 13,
                "score": 5597,
                "donations": 0,
                "currenRank": 2,
                "previousRank": 0,
                "clanChestCrowns": 0,
                "homeID": {
                    "low": 16708,
                    "high": 3,
                    "unsigned": false
                },
                "tag": "QVPJRV",
                "roleName": "Co-Leader"
            }
        ]
    },
    {
        "name": "Reddit Bravo",
        "badge": 16000167,
        "type": 2,
        "memberCount": 44,
        "score": 50116,
        "requiredScore": 4600,
        "donations": 9060,
        "description": "Official feeder for Reddit Alpha! Best of r/ClashRoyale. #50 demoted at 50/50. Feeder:Reddit Charlie #2QUVVVP., 5000🏆 to join.",
        "currentRank": 0,
        "badge_url": "/badge/A_Char_Rocket_02.png",
        "tag": "2U2GGQJ",
        "typeName": "Invite Only",
        "region": {
            "isCountry": "true",
            "name": "Niue"
        },
        "members": [
        ]
    }
]
```

## Implementation

You can see an example of this at http://cr-api.com/clan/family/racf/members
