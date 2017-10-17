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
    "trophies": 4944,
    "arena": {
        "imageURL": "/arena/league4.png",
        "arena": "League 4",
        "arenaID": 15,
        "name": "Master I",
        "trophyLimit": 4900
    },
    "legendaryTrophies": 19746,
    "nameChanged": false,
    "globalRank": 3027,
    "clan": {
        "tag": "922VCJ",
        "name": "Orange Juice",
        "role": "Member",
        "badge": {
            "url": "/badge/Orange_01.png",
            "filename": "Orange_01.png",
            "key": "Orange_01"
        }
    },
    "experience": {
        "level": 13,
        "xp": 0,
        "xpRequiredForLevelUp": "Max",
        "xpToLevelUp": 0
    },
    "stats": {
        "legendaryTrophies": 19746,
        "tournamentCardsWon": 32208,
        "maxTrophies": 6276,
        "threeCrownWins": 1439,
        "cardsFound": 77,
        "favoriteCard": "bowler",
        "totalDonations": 35117,
        "challengeMaxWins": 20,
        "challengeCardsWon": 421404,
        "level": 19
    },
    "games": {
        "total": 15643,
        "tournamentGames": 3246,
        "wins": 8154,
        "losses": 6088,
        "draws": 1401,
        "currentWinStreak": -63
    },
    "chestCycle": {
        "position": 1893,
        "superMagicalPos": 2094,
        "legendaryPos": 1989,
        "epicPos": 1893
    },
    "shopOffers": {
        "legendary": 26,
        "epic": 8,
        "arena": null
    },
    "currentDeck": [
        {
            "name": "Graveyard",
            "rarity": "Legendary",
            "level": 4,
            "count": 14,
            "requiredForUpgrade": 20,
            "card_id": 88,
            "key": "graveyard",
            "card_key": "graveyard",
            "elixir": 5,
            "type": "Spell",
            "arena": 5,
            "description": "Surprise! It's a party. A Skeleton party, anywhere in the Arena. Yay!",
            "decklink": "28000010",
            "leftToUpgrade": 6
        },
        {
            "name": "Ice Golem",
            "rarity": "Rare",
            "level": 11,
            "count": 9,
            "requiredForUpgrade": "Maxed",
            "card_id": 39,
            "key": "ice-golem",
            "card_key": "ice_golem",
            "elixir": 2,
            "type": "Troop",
            "arena": 8,
            "description": "He's tough, targets buildings and explodes when destroyed, slowing nearby enemies. Made entirely out of ice... or is he?! Yes.",
            "decklink": "26000038",
            "leftToUpgrade": null
        },
        {
            "name": "Bowler",
            "rarity": "Epic",
            "level": 8,
            "count": 5,
            "requiredForUpgrade": "Maxed",
            "card_id": 35,
            "key": "bowler",
            "card_key": "bowler",
            "elixir": 5,
            "type": "Troop",
            "arena": 8,
            "description": "This big blue dude digs the simple things in life - Dark Elixir drinks and throwing rocks. His massive boulders roll through their target, hitting everything behind for a strike!",
            "decklink": "26000034",
            "leftToUpgrade": null
        },
        {
            "name": "Bats",
            "rarity": "Common",
            "level": 13,
            "count": 87,
            "requiredForUpgrade": "Maxed",
            "card_id": 50,
            "key": "bats",
            "card_key": "bats",
            "elixir": 2,
            "type": "Troop",
            "arena": 8,
            "description": "Spawns a handful of tiny flying creatures with big ears. Having big ears doesn't mean they're good listeners.",
            "decklink": "26000049",
            "leftToUpgrade": null
        },
        {
            "name": "Poison",
            "rarity": "Epic",
            "level": 8,
            "count": 5,
            "requiredForUpgrade": "Maxed",
            "card_id": 87,
            "key": "poison",
            "card_key": "poison",
            "elixir": 4,
            "type": "Spell",
            "arena": 5,
            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!",
            "decklink": "28000009",
            "leftToUpgrade": null
        },
        {
            "name": "Zap",
            "rarity": "Common",
            "level": 13,
            "count": 100,
            "requiredForUpgrade": "Maxed",
            "card_id": 86,
            "key": "zap",
            "card_key": "zap",
            "elixir": 2,
            "type": "Spell",
            "arena": 5,
            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers.",
            "decklink": "28000008",
            "leftToUpgrade": null
        },
        {
            "name": "Tombstone",
            "rarity": "Rare",
            "level": 11,
            "count": 10,
            "requiredForUpgrade": "Maxed",
            "card_id": 73,
            "key": "tombstone",
            "card_key": "tombstone",
            "elixir": 3,
            "type": "Building",
            "arena": 2,
            "description": "Troop building that periodically deploys Skeletons to fight the enemy. When destroyed, spawns 4 Skeletons. Creepy!",
            "decklink": "27000009",
            "leftToUpgrade": null
        },
        {
            "name": "Inferno Dragon",
            "rarity": "Legendary",
            "level": 4,
            "count": 3,
            "requiredForUpgrade": 20,
            "card_id": 38,
            "key": "inferno-dragon",
            "card_key": "inferno_dragon",
            "elixir": 4,
            "type": "Troop",
            "arena": 4,
            "description": "Shoots a focused beam of fire that increases in damage over time. Wears a helmet because flying can be dangerous.",
            "decklink": "26000037",
            "leftToUpgrade": 17
        }
    ],
    "previousSeasons": [
        {
            "seasonNumber": 7,
            "seasonHighest": 5678,
            "seasonEnding": 5388,
            "seasonEndGlobalRank": 1865
        },
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
