# Multiple Profiles

This endpoint retrieves multiple profiles. You can request up to 5 profiles in each request.

## HTTP Request

`GET http://api.cr-api.com/profile/<TAG>,<TAG>,<TAG>`

### URL Parameters

Parameter | Description
--- | ---
TAG | The profile tag of the player to retrieve. Use a comma to separate each profile tag.

## Response

http://api.cr-api.com/profile/L88P2282,9CQ2U8QJ,8L9L9GL

The above command returns JSON structured like this:

```json
[
    {
        "tag": "L88P2282",
        "name": "Min",
        "trophies": 5183,
        "arena": {
            "imageURL": "/arena/league4.png",
            "arena": "League 4",
            "arenaID": 15,
            "name": "Master I",
            "trophyLimit": 4900
        },
        "legendaryTrophies": 12653,
        "nameChanged": false,
        "globalRank": 707,
        "clan": {
            "tag": "2U2GGQJ",
            "name": "Reddit Bravo",
            "role": "Co-Leader",
            "badge": {
                "url": "/badge/A_Char_Rocket_02.png",
                "filename": "A_Char_Rocket_02.png",
                "key": "A_Char_Rocket_02"
            }
        },
        "experience": {
            "level": 13,
            "xp": 0,
            "xpRequiredForLevelUp": "Max",
            "xpToLevelUp": 0
        },
        "stats": {
            "legendaryTrophies": 12653,
            "tournamentCardsWon": 1446,
            "maxTrophies": 5772,
            "threeCrownWins": 1489,
            "cardsFound": 77,
            "favoriteCard": "mortar",
            "totalDonations": 104428,
            "challengeMaxWins": 18,
            "challengeCardsWon": 78614,
            "level": 17
        },
        "games": {
            "total": 14354,
            "tournamentGames": 911,
            "wins": 7365,
            "losses": 5563,
            "draws": 1426,
            "currentWinStreak": -64
        },
        "chestCycle": {
            "position": 2774,
            "superMagicalPos": 2889,
            "legendaryPos": 3263,
            "epicPos": 2957
        },
        "shopOffers": {
            "legendary": 4,
            "epic": 5,
            "arena": null
        },
        "currentDeck": [
            {
                "name": "Mortar",
                "rarity": "Common",
                "level": 13,
                "count": 85,
                "requiredForUpgrade": "Maxed",
                "card_id": 66,
                "key": "mortar",
                "card_key": "mortar",
                "elixir": 4,
                "type": "Building",
                "arena": 6,
                "description": "Defensive building with a long range. Shoots exploding boulders that deal area damage. Cannot shoot at targets that get very close!",
                "decklink": "27000002",
                "leftToUpgrade": null
            },
            {
                "name": "Knight",
                "rarity": "Common",
                "level": 13,
                "count": 84,
                "requiredForUpgrade": "Maxed",
                "card_id": 1,
                "key": "knight",
                "card_key": "knight",
                "elixir": 3,
                "type": "Troop",
                "arena": 0,
                "description": "A tough melee fighter. The Barbarian's handsome, cultured cousin. Rumor has it that he was knighted based on the sheer awesomeness of his mustache alone.",
                "decklink": "26000000",
                "leftToUpgrade": null
            },
            {
                "name": "Archers",
                "rarity": "Common",
                "level": 13,
                "count": 47,
                "requiredForUpgrade": "Maxed",
                "card_id": 2,
                "key": "archers",
                "card_key": "archers",
                "elixir": 3,
                "type": "Troop",
                "arena": 0,
                "description": "A pair of lightly armored ranged attackers. They'll help you take down ground and air units, but you're on your own with hair coloring advice.",
                "decklink": "26000001",
                "leftToUpgrade": null
            },
            {
                "name": "Goblins",
                "rarity": "Common",
                "level": 13,
                "count": 61,
                "requiredForUpgrade": "Maxed",
                "card_id": 3,
                "key": "goblins",
                "card_key": "goblins",
                "elixir": 2,
                "type": "Troop",
                "arena": 1,
                "description": "Three fast, unarmored melee attackers. Small, fast, green and mean!",
                "decklink": "26000002",
                "leftToUpgrade": null
            },
            {
                "name": "Rocket",
                "rarity": "Rare",
                "level": 10,
                "count": 525,
                "requiredForUpgrade": 1000,
                "card_id": 81,
                "key": "rocket",
                "card_key": "rocket",
                "elixir": 6,
                "type": "Spell",
                "arena": 3,
                "description": "Deals high damage to a small area. Looks really awesome doing it. Reduced damage to Crown Towers.",
                "decklink": "28000003",
                "leftToUpgrade": 475
            },
            {
                "name": "Arrows",
                "rarity": "Common",
                "level": 13,
                "count": 100,
                "requiredForUpgrade": "Maxed",
                "card_id": 79,
                "key": "arrows",
                "card_key": "arrows",
                "elixir": 3,
                "type": "Spell",
                "arena": 0,
                "description": "Arrows pepper a large area, damaging all enemies hit. Reduced damage to Crown Towers.",
                "decklink": "28000001",
                "leftToUpgrade": null
            },
            {
                "name": "The Log",
                "rarity": "Legendary",
                "level": 3,
                "count": 5,
                "requiredForUpgrade": 10,
                "card_id": 89,
                "key": "the-log",
                "card_key": "the_log",
                "elixir": 2,
                "type": "Spell",
                "arena": 6,
                "description": "A spilt bottle of Rage turned an innocent tree trunk into \"The Log\". Now, it seeks revenge by crushing anything in its path!",
                "decklink": "28000011",
                "leftToUpgrade": 5
            },
            {
                "name": "Ice Spirit",
                "rarity": "Common",
                "level": 13,
                "count": 62,
                "requiredForUpgrade": "Maxed",
                "card_id": 31,
                "key": "ice-spirit",
                "card_key": "ice_spirit",
                "elixir": 1,
                "type": "Troop",
                "arena": 8,
                "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty.",
                "decklink": "26000030",
                "leftToUpgrade": null
            }
        ],
        "previousSeasons": [
            {
                "seasonNumber": 7,
                "seasonHighest": 5628,
                "seasonEnding": 5542,
                "seasonEndGlobalRank": 1288
            },
            {
                "seasonNumber": 6,
                "seasonHighest": 5772,
                "seasonEnding": 5551,
                "seasonEndGlobalRank": 1278
            },
            {
                "seasonNumber": 5,
                "seasonHighest": 5621,
                "seasonEnding": 5511,
                "seasonEndGlobalRank": 3382
            },
            {
                "seasonNumber": 4,
                "seasonHighest": 5514,
                "seasonEnding": 5347,
                "seasonEndGlobalRank": 5035
            },
            {
                "seasonNumber": 3,
                "seasonHighest": 5624,
                "seasonEnding": 5601,
                "seasonEndGlobalRank": 4451
            },
            {
                "seasonNumber": 2,
                "seasonHighest": 5220,
                "seasonEnding": 5043,
                "seasonEndGlobalRank": null
            },
            {
                "seasonNumber": 1,
                "seasonHighest": 5364,
                "seasonEnding": 5364,
                "seasonEndGlobalRank": 2557
            }
        ]
    },
    {
        "tag": "9CQ2U8QJ",
        "name": "phuie024",
        "trophies": 5025,
        "arena": {
            "imageURL": "/arena/league4.png",
            "arena": "League 4",
            "arenaID": 15,
            "name": "Master I",
            "trophyLimit": 4900
        },
        "legendaryTrophies": 14633,
        "nameChanged": false,
        "globalRank": 1837,
        "clan": {
            "tag": "2CCCP",
            "name": "Reddit Alpha",
            "role": "Co-Leader",
            "badge": {
                "url": "/badge/A_Char_Rocket_02.png",
                "filename": "A_Char_Rocket_02.png",
                "key": "A_Char_Rocket_02"
            }
        },
        "experience": {
            "level": 13,
            "xp": 0,
            "xpRequiredForLevelUp": "Max",
            "xpToLevelUp": 0
        },
        "stats": {
            "legendaryTrophies": 14633,
            "tournamentCardsWon": 10487,
            "maxTrophies": 5835,
            "threeCrownWins": 1336,
            "cardsFound": 77,
            "favoriteCard": "knight",
            "totalDonations": 86536,
            "challengeMaxWins": 20,
            "challengeCardsWon": 176367,
            "level": 18
        },
        "games": {
            "total": 17868,
            "tournamentGames": 1438,
            "wins": 8542,
            "losses": 7070,
            "draws": 2256,
            "currentWinStreak": 1
        },
        "chestCycle": {
            "position": 2420,
            "superMagicalPos": 2473,
            "legendaryPos": 2807,
            "epicPos": 2501
        },
        "shopOffers": {
            "legendary": 19,
            "epic": 3,
            "arena": null
        },
        "currentDeck": [
            {
                "name": "Rocket",
                "rarity": "Rare",
                "level": 11,
                "count": 0,
                "requiredForUpgrade": "Maxed",
                "card_id": 81,
                "key": "rocket",
                "card_key": "rocket",
                "elixir": 6,
                "type": "Spell",
                "arena": 3,
                "description": "Deals high damage to a small area. Looks really awesome doing it. Reduced damage to Crown Towers.",
                "decklink": "28000003",
                "leftToUpgrade": null
            },
            {
                "name": "Goblin Gang",
                "rarity": "Common",
                "level": 13,
                "count": 97,
                "requiredForUpgrade": "Maxed",
                "card_id": 42,
                "key": "goblin-gang",
                "card_key": "goblin_gang",
                "elixir": 3,
                "type": "Troop",
                "arena": 9,
                "description": "Spawns five Goblins - three with knives, two with spears - at a discounted Elixir cost. It's like a Goblin Value Pack!",
                "decklink": "26000041",
                "leftToUpgrade": null
            },
            {
                "name": "Princess",
                "rarity": "Legendary",
                "level": 4,
                "count": 6,
                "requiredForUpgrade": 20,
                "card_id": 27,
                "key": "princess",
                "card_key": "princess",
                "elixir": 3,
                "type": "Troop",
                "arena": 7,
                "description": "This stunning Princess shoots flaming arrows from long range. If you're feeling warm feelings towards her, it's probably because you're on fire.",
                "decklink": "26000026",
                "leftToUpgrade": 14
            },
            {
                "name": "The Log",
                "rarity": "Legendary",
                "level": 4,
                "count": 13,
                "requiredForUpgrade": 20,
                "card_id": 89,
                "key": "the-log",
                "card_key": "the_log",
                "elixir": 2,
                "type": "Spell",
                "arena": 6,
                "description": "A spilt bottle of Rage turned an innocent tree trunk into \"The Log\". Now, it seeks revenge by crushing anything in its path!",
                "decklink": "28000011",
                "leftToUpgrade": 7
            },
            {
                "name": "Knight",
                "rarity": "Common",
                "level": 13,
                "count": 100,
                "requiredForUpgrade": "Maxed",
                "card_id": 1,
                "key": "knight",
                "card_key": "knight",
                "elixir": 3,
                "type": "Troop",
                "arena": 0,
                "description": "A tough melee fighter. The Barbarian's handsome, cultured cousin. Rumor has it that he was knighted based on the sheer awesomeness of his mustache alone.",
                "decklink": "26000000",
                "leftToUpgrade": null
            },
            {
                "name": "Inferno Tower",
                "rarity": "Rare",
                "level": 11,
                "count": 2,
                "requiredForUpgrade": "Maxed",
                "card_id": 67,
                "key": "inferno-tower",
                "card_key": "inferno_tower",
                "elixir": 5,
                "type": "Building",
                "arena": 4,
                "description": "Defensive building, roasts targets for damage that increases over time. Burns through even the biggest and toughest enemies!",
                "decklink": "27000003",
                "leftToUpgrade": null
            },
            {
                "name": "Goblin Barrel",
                "rarity": "Epic",
                "level": 7,
                "count": 88,
                "requiredForUpgrade": 200,
                "card_id": 82,
                "key": "goblin-barrel",
                "card_key": "goblin_barrel",
                "elixir": 3,
                "type": "Spell",
                "arena": 1,
                "description": "Spawns three Goblins anywhere in the Arena. It's going to be a thrilling ride, boys!",
                "decklink": "28000004",
                "leftToUpgrade": 112
            },
            {
                "name": "Ice Spirit",
                "rarity": "Common",
                "level": 13,
                "count": 92,
                "requiredForUpgrade": "Maxed",
                "card_id": 31,
                "key": "ice-spirit",
                "card_key": "ice_spirit",
                "elixir": 1,
                "type": "Troop",
                "arena": 8,
                "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty.",
                "decklink": "26000030",
                "leftToUpgrade": null
            }
        ],
        "previousSeasons": [
            {
                "seasonNumber": 7,
                "seasonHighest": 5514,
                "seasonEnding": 5514,
                "seasonEndGlobalRank": 1207
            },
            {
                "seasonNumber": 6,
                "seasonHighest": 5470,
                "seasonEnding": 5418,
                "seasonEndGlobalRank": 2631
            },
            {
                "seasonNumber": 5,
                "seasonHighest": 5526,
                "seasonEnding": 5116,
                "seasonEndGlobalRank": null
            },
            {
                "seasonNumber": 4,
                "seasonHighest": 5549,
                "seasonEnding": 5381,
                "seasonEndGlobalRank": 4992
            },
            {
                "seasonNumber": 3,
                "seasonHighest": 5835,
                "seasonEnding": 5602,
                "seasonEndGlobalRank": 4429
            },
            {
                "seasonNumber": 2,
                "seasonHighest": 5717,
                "seasonEnding": 5684,
                "seasonEndGlobalRank": 1442
            },
            {
                "seasonNumber": 1,
                "seasonHighest": 5521,
                "seasonEnding": 5407,
                "seasonEndGlobalRank": 2206
            }
        ]
    },
    {
        "tag": "8L9L9GL",
        "name": "Jo͛hͥn̽",
        "trophies": 4955,
        "arena": {
            "imageURL": "/arena/league4.png",
            "arena": "League 4",
            "arenaID": 15,
            "name": "Master I",
            "trophyLimit": 4900
        },
        "legendaryTrophies": 12167,
        "nameChanged": true,
        "globalRank": 2981,
        "clan": {
            "tag": "2CCCP",
            "name": "Reddit Alpha",
            "role": "Leader",
            "badge": {
                "url": "/badge/A_Char_Rocket_02.png",
                "filename": "A_Char_Rocket_02.png",
                "key": "A_Char_Rocket_02"
            }
        },
        "experience": {
            "level": 13,
            "xp": 0,
            "xpRequiredForLevelUp": "Max",
            "xpToLevelUp": 0
        },
        "stats": {
            "legendaryTrophies": 12167,
            "tournamentCardsWon": 6624,
            "maxTrophies": 5724,
            "threeCrownWins": 1254,
            "cardsFound": 77,
            "favoriteCard": "golem",
            "totalDonations": 61912,
            "challengeMaxWins": 18,
            "challengeCardsWon": 250812,
            "level": 17
        },
        "games": {
            "total": 15110,
            "tournamentGames": 1822,
            "wins": 7565,
            "losses": 5406,
            "draws": 2139,
            "currentWinStreak": 3
        },
        "chestCycle": {
            "position": 2768,
            "superMagicalPos": 3304,
            "legendaryPos": 2927,
            "epicPos": 3188
        },
        "shopOffers": {
            "legendary": 16,
            "epic": 3,
            "arena": 2
        },
        "currentDeck": [
            {
                "name": "Golem",
                "rarity": "Epic",
                "level": 6,
                "count": 145,
                "requiredForUpgrade": 100,
                "card_id": 10,
                "key": "golem",
                "card_key": "golem",
                "elixir": 8,
                "type": "Troop",
                "arena": 6,
                "description": "Slow but durable, only attacks buildings. When destroyed, explosively splits into two Golemites and deals area damage!",
                "decklink": "26000009",
                "leftToUpgrade": -45
            },
            {
                "name": "Night Witch",
                "rarity": "Legendary",
                "level": 1,
                "count": 2,
                "requiredForUpgrade": 2,
                "card_id": 49,
                "key": "night-witch",
                "card_key": "night_witch",
                "elixir": 4,
                "type": "Troop",
                "arena": 8,
                "description": "Summons Bats to do her bidding, even after death! If you get too close, she isn't afraid of pitching in with her mean-looking battle staff.",
                "decklink": "26000048",
                "leftToUpgrade": 0
            },
            {
                "name": "Lumberjack",
                "rarity": "Legendary",
                "level": 1,
                "count": 13,
                "requiredForUpgrade": 2,
                "card_id": 36,
                "key": "lumberjack",
                "card_key": "lumberjack",
                "elixir": 4,
                "type": "Troop",
                "arena": 8,
                "description": "He chops trees by day and hunts The Log by night. His bottle of Rage spills everywhere when he dies.",
                "decklink": "26000035",
                "leftToUpgrade": -11
            },
            {
                "name": "Mega Minion",
                "rarity": "Rare",
                "level": 10,
                "count": 801,
                "requiredForUpgrade": 1000,
                "card_id": 40,
                "key": "mega-minion",
                "card_key": "mega_minion",
                "elixir": 3,
                "type": "Troop",
                "arena": 7,
                "description": "Flying, armored and powerful. What could be its weakness?! Cupcakes.",
                "decklink": "26000039",
                "leftToUpgrade": 199
            },
            {
                "name": "Elixir Collector",
                "rarity": "Rare",
                "level": 10,
                "count": 496,
                "requiredForUpgrade": 1000,
                "card_id": 71,
                "key": "elixir-collector",
                "card_key": "elixir_collector",
                "elixir": 6,
                "type": "Building",
                "arena": 6,
                "description": "You gotta spend Elixir to make Elixir.",
                "decklink": "27000007",
                "leftToUpgrade": 504
            },
            {
                "name": "Clone",
                "rarity": "Epic",
                "level": 4,
                "count": 185,
                "requiredForUpgrade": 20,
                "card_id": 91,
                "key": "clone",
                "card_key": "clone",
                "elixir": 3,
                "type": "Spell",
                "arena": 8,
                "description": "Duplicates all friendly troops in the target area. Cloned troops are fragile, but pack the same punch as the original! Doesn't affect buildings.",
                "decklink": "28000013",
                "leftToUpgrade": -165
            },
            {
                "name": "Arrows",
                "rarity": "Common",
                "level": 13,
                "count": 100,
                "requiredForUpgrade": "Maxed",
                "card_id": 79,
                "key": "arrows",
                "card_key": "arrows",
                "elixir": 3,
                "type": "Spell",
                "arena": 0,
                "description": "Arrows pepper a large area, damaging all enemies hit. Reduced damage to Crown Towers.",
                "decklink": "28000001",
                "leftToUpgrade": null
            },
            {
                "name": "Goblin Gang",
                "rarity": "Common",
                "level": 13,
                "count": 100,
                "requiredForUpgrade": "Maxed",
                "card_id": 42,
                "key": "goblin-gang",
                "card_key": "goblin_gang",
                "elixir": 3,
                "type": "Troop",
                "arena": 9,
                "description": "Spawns five Goblins - three with knives, two with spears - at a discounted Elixir cost. It's like a Goblin Value Pack!",
                "decklink": "26000041",
                "leftToUpgrade": null
            }
        ],
        "previousSeasons": [
            {
                "seasonNumber": 7,
                "seasonHighest": 5298,
                "seasonEnding": 5298,
                "seasonEndGlobalRank": 2781
            },
            {
                "seasonNumber": 6,
                "seasonHighest": 5448,
                "seasonEnding": 5448,
                "seasonEndGlobalRank": 2469
            },
            {
                "seasonNumber": 5,
                "seasonHighest": 5526,
                "seasonEnding": 5526,
                "seasonEndGlobalRank": 2635
            },
            {
                "seasonNumber": 4,
                "seasonHighest": 5402,
                "seasonEnding": 5373,
                "seasonEndGlobalRank": 5093
            },
            {
                "seasonNumber": 3,
                "seasonHighest": 5724,
                "seasonEnding": 5721,
                "seasonEndGlobalRank": 2896
            },
            {
                "seasonNumber": 2,
                "seasonHighest": 5548,
                "seasonEnding": 5514,
                "seasonEndGlobalRank": 3932
            },
            {
                "seasonNumber": 1,
                "seasonHighest": 5345,
                "seasonEnding": 5222,
                "seasonEndGlobalRank": 5897
            }
        ]
    }
]
```

## Implementation

You can see an example of this at http://cr-api.com/profile/L88P2282,9CQ2U8QJ,8L9L9GL
