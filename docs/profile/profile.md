# Profile

This endpoint retrieves a specific profile.

## HTTP Request

`GET http://api.cr-api.com/profile/<TAG>`

### URL Parameters

Parameter | Description
--- | ---
TAG | The player tag of the user to retrieve

## Response

http://api.cr-api.com/profile/Y99YRPYG

The above command returns JSON structured like this:

```json
{
    "tag": "Y99YRPYG",
    "name": "marcel_p",
    "trophies": 5166,
    "arena": {
        "imageURL": "/arena/league4.png",
        "arena": "League 4",
        "arenaID": 15,
        "name": "Master I",
        "trophyLimit": 4900
    },
    "legendaryTrophies": 19746,
    "nameChanged": false,
    "globalRank": 470,
    "clan": {
        "tag": "2CCCP",
        "name": "Reddit Alpha",
        "role": "Co-Leader",
        "badgeUrl": "/badge/A_Char_Rocket_02.png"
    },
    "experience": {
        "level": 13,
        "xp": 0,
        "xpRequiredForLevelUp": "Max",
        "xpToLevelUp": 0
    },
    "stats": {
        "legendaryTrophies": 19746,
        "accountAgeInDays": 304,
        "tournamentCardsWon": 32204,
        "maxTrophies": 6276,
        "threeCrownWins": 1353,
        "cardsFound": 76,
        "favoriteCard": "elixir_collector",
        "totalDonations": 34403,
        "challengeMaxWins": 20,
        "challengeCardsWon": 415957,
        "level": 19
    },
    "games": {
        "total": 14575,
        "tournamentGames": 3239,
        "wins": 7620,
        "losses": 5678,
        "draws": 1277,
        "currentWinStreak": -63
    },
    "chestCycle": {
        "position": 1833,
        "superMagicalPos": 2094,
        "legendaryPos": 1989,
        "epicPos": 1893
    },
    "shopOffers": {
        "legendary": 4,
        "epic": 11,
        "arena": null
    },
    "currentDeck": [
        {
            "name": "knight",
            "rarity": "common",
            "level": 13,
            "count": 100,
            "requiredForUpgrade": "Maxed",
            "leftToUpgrade": null
        },
        {
            "name": "x_bow",
            "rarity": "epic",
            "level": 8,
            "count": 1,
            "requiredForUpgrade": "Maxed",
            "leftToUpgrade": null
        },
        {
            "name": "fire_spirits",
            "rarity": "common",
            "level": 13,
            "count": 100,
            "requiredForUpgrade": "Maxed",
            "leftToUpgrade": null
        },
        {
            "name": "the_log",
            "rarity": "legendary",
            "level": 5,
            "count": 1,
            "requiredForUpgrade": "Maxed",
            "leftToUpgrade": null
        },
        {
            "name": "ice_spirit",
            "rarity": "common",
            "level": 13,
            "count": 100,
            "requiredForUpgrade": "Maxed",
            "leftToUpgrade": null
        },
        {
            "name": "mega_minion",
            "rarity": "rare",
            "level": 11,
            "count": 9,
            "requiredForUpgrade": "Maxed",
            "leftToUpgrade": null
        },
        {
            "name": "tesla",
            "rarity": "common",
            "level": 13,
            "count": 100,
            "requiredForUpgrade": "Maxed",
            "leftToUpgrade": null
        },
        {
            "name": "elixir_collector",
            "rarity": "rare",
            "level": 11,
            "count": 10,
            "requiredForUpgrade": "Maxed",
            "leftToUpgrade": null
        }
    ],
    "previousSeasons": [
        {
            "seasonNumber": 6,
            "seasonHighest": 6158,
            "seasonEnding": 6005,
            "seasonEndGlobalRank": 193
        },
        {
            "seasonNumber": 5,
            "seasonHighest": 6183,
            "seasonEnding": 6121,
            "seasonEndGlobalRank": 231
        },
        {
            "seasonNumber": 4,
            "seasonHighest": 6170,
            "seasonEnding": 6089,
            "seasonEndGlobalRank": null
        },
        {
            "seasonNumber": 2,
            "seasonHighest": 6276,
            "seasonEnding": 6201,
            "seasonEndGlobalRank": 123
        },
        {
            "seasonNumber": 1,
            "seasonHighest": 5914,
            "seasonEnding": 5866,
            "seasonEndGlobalRank": 207
        }
    ]
}
```

## Notes

- If the player has not played on his account or was not put in a league, his will not have any season data for that season, as seen in the example above.
- `null` values in fields denote that those fields are not applicable for the player.
    - For example, `null` in `globalRank` means the player is not within global top 10k and thus is not ranked.
    - If the player has a card in his deck that has been maxed, `leftToUpgrade` will be `null` because the card can no longer be upgraded.

## Implementation

You can see an implementation of this at http://cr-api.com/profile/Y99YRPYG
