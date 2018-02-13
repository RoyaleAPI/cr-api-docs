# Player Battles

This endpoint return battles played by one or more player profiles.

## HTTP Request

`GET http://api.cr-api.com/player/<TAG>/battles`    
`GET http://api.cr-api.com/player/<TAG>,<TAG>,<TAG>/battles`

### URL Parameters

Parameter | Description
--- | ---
TAG | The player tag of the user to retrieve

## Response

### Single Player
http://api.cr-api.com/player/L88P2282/battles

The above command returns JSON structured like this. In the actual response, there will be 25 battles:

<a href="/json/player_battles_8L9L9GL.json">Full JSON Response</a>

```json
[
    {
        "type": "challenge",
        "challengeType": "classic",
        "mode": {
            "name": "Challenge",
            "deck": "Collection",
            "cardLevels": "Tournament",
            "overtimeSeconds": 180,
            "players": "PvP",
            "sameDeck": false
        },
        "winCountBefore": 3,
        "utcTime": 1518493016,
        "deckType": "slotDeck",
        "teamSize": 1,
        "winner": 3,
        "teamCrowns": 3,
        "opponentCrowns": 0,
        "team": [
            {
                "tag": "8L9L9GL",
                "name": "Jo\u035bh\u0365n\u033d",
                "crownsEarned": 3,
                "startTrophies": 4905,
                "clan": {
                    "tag": "2CCCP",
                    "name": "Reddit Alpha",
                    "badge": {
                        "name": "A_Char_Rocket_02",
                        "category": "03_Royale",
                        "id": 16000167,
                        "image": "https://cr-api.github.io/cr-api-assets/badges/A_Char_Rocket_02.png"
                    }
                },
                "deckLink": "https://link.clashroyale.com/deck/en?deck=26000048;26000027;26000041;28000009;26000036;26000046;26000039;28000008",
                "deck": [
                    {
                        "name": "Night Witch",
                        "level": 1,
                        "maxLevel": 5,
                        "rarity": "Legendary",
                        "requiredForUpgrade": 2,
                        "icon": "https://api-assets.clashroyale.com/cards/300/NpCrXDEDBBJgNv9QrBAcJmmMFbS7pe3KCY8xJ5VB18A.png",
                        "key": "night-witch",
                        "elixir": 4,
                        "type": "Troop",
                        "arena": 8,
                        "description": "Summons Bats to do her bidding, even after death! If you get too close, she isn't afraid of pitching in with her mean-looking battle staff.",
                        "id": 26000048
                    }
                ]
            }
        ],
        "opponent": [
            {
                "tag": "8L9UV9QGC",
                "name": "El.Intocable",
                "crownsEarned": 0,
                "startTrophies": 3927,
                "clan": {
                    "tag": "2YUP90RG",
                    "name": "aus kings3",
                    "badge": {
                        "name": "Crown_04",
                        "category": "01_Symbol",
                        "id": 16000015,
                        "image": "https://cr-api.github.io/cr-api-assets/badges/Crown_04.png"
                    }
                },
                "deckLink": "https://link.clashroyale.com/deck/en?deck=26000029;26000001;26000013;26000025;26000048;28000013;28000001;28000012",
                "deck": [
                    {
                        "name": "Lava Hound",
                        "level": 1,
                        "maxLevel": 5,
                        "rarity": "Legendary",
                        "requiredForUpgrade": 2,
                        "icon": "https://api-assets.clashroyale.com/cards/300/unicRQ975sBY2oLtfgZbAI56ZvaWz7azj-vXTLxc0r8.png",
                        "key": "lava-hound",
                        "elixir": 7,
                        "type": "Troop",
                        "arena": 4,
                        "description": "The Lava Hound is a majestic flying beast that attacks buildings. The Lava Pups are less majestic angry babies that attack anything.",
                        "id": 26000029
                    }
                ]
            }
        ],
        "arena": {
            "name": "Challenger II",
            "arena": "League 2",
            "arenaID": 14,
            "trophyLimit": 4300
        }
    }
]
```
You can see an implementation of this at http://cr-api.com/player/L88P2282/battles

### Multiple Tags
https://api.cr-api.com/player/8L9L9GL,L88P2282,9CQ2U8QJ/battles

<a href="/json/player_battles_8L9L9GL,L88P2282,9CQ2U8QJ.json">Full JSON Response</a>