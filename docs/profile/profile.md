# Profile

This endpoint retrieves a specific profile, with player information, card collection and battle logs. Some fields that were previously available has been removed, e.g. seasons, shop offers and experience.

## HTTP Request

`GET http://api.cr-api.com/player/<TAG>`

!> Note: in our earlier iteration, the endpoint is called `profile`, it is now `player`

### URL Parameters

Parameter | Description
--- | ---
TAG | The player tag of the user to retrieve

## Response

http://api.cr-api.com/player/8L9L9GL

The above command returns JSON structured like this:

```json
{
    "tag": "8L9L9GL",
    "name": "Jo͛hͥn̽",
    "trophies": 5188,
    "arena": {
        "name": "Master I",
        "arena": "League 4",
        "arenaID": 15,
        "trophyLimit": 4900
    },
    "clan": {
        "tag": "2CCCP",
        "name": "Reddit Alpha",
        "role": "coLeader",
        "donations": 256,
        "donationsReceived": 400,
        "badge": 16000167
    },
    "stats": {
        "tournamentCardsWon": 6624,
        "maxTrophies": 5724,
        "threeCrownWins": 1464,
        "cardsFound": 81,
        "favoriteCard": {
            "name": "Miner",
            "maxLevel": 5,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
            },
            "key": "miner",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 6,
            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
        },
        "totalDonations": 65225,
        "challengeMaxWins": 18,
        "challengeCardsWon": 270343,
        "level": 13
    },
    "games": {
        "total": 16941,
        "tournamentGames": 1822,
        "wins": 8682,
        "losses": 5868,
        "draws": 14127
    },
    "chestCycle": {
        "upcoming": [
            "silver",
            "silver",
            "magical",
            "silver",
            "silver",
            "gold",
            "silver",
            "silver",
            "silver"
        ],
        "superMagical": 295,
        "magical": 2,
        "legendary": 255,
        "epic": 179,
        "giant": 29
    },
    "leagueStatistics": {
        "currentSeason": {
            "rank": 79,
            "trophies": 5188
        },
        "previousSeason": {
            "id": "2017-11",
            "rank": 4801,
            "trophies": 5260,
            "bestTrophies": 5260
        },
        "bestSeason": {
            "id": "2017-10",
            "rank": 1965,
            "trophies": 5555
        }
    },
    "currentDeck": [
        {
            "name": "Royal Ghost",
            "level": 1,
            "maxLevel": 5,
            "count": 1,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
            },
            "key": "royal-ghost",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 10,
            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
        },
        {
            "name": "Guards",
            "level": 4,
            "maxLevel": 8,
            "count": 226,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
            },
            "key": "guards",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 7,
            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
        },
        {
            "name": "Zap",
            "level": 13,
            "maxLevel": 13,
            "count": 100,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
            },
            "key": "zap",
            "elixir": 2,
            "type": "Spell",
            "rarity": "Common",
            "arena": 5,
            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
        },
        {
            "name": "Inferno Tower",
            "level": 10,
            "maxLevel": 11,
            "count": 945,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/GSHY_wrooMMLET6bG_WJB8redtwx66c4i80ipi4gYOM.png"
            },
            "key": "inferno-tower",
            "elixir": 5,
            "type": "Building",
            "rarity": "Rare",
            "arena": 4,
            "description": "Defensive building, roasts targets for damage that increases over time. Burns through even the biggest and toughest enemies!"
        },
        {
            "name": "Poison",
            "level": 7,
            "maxLevel": 8,
            "count": 23,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
            },
            "key": "poison",
            "elixir": 4,
            "type": "Spell",
            "rarity": "Epic",
            "arena": 5,
            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
        },
        {
            "name": "Electro Wizard",
            "level": 4,
            "maxLevel": 5,
            "count": 6,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/RsFaHgB3w6vXsTjXdPr3x8l_GbV9TbOUCvIx07prbrQ.png"
            },
            "key": "electro-wizard",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 7,
            "description": "He lands with a \"POW!\", stuns nearby enemies and shoots lightning with both hands! What a show off."
        },
        {
            "name": "Miner",
            "level": 4,
            "maxLevel": 5,
            "count": 8,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
            },
            "key": "miner",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 6,
            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
        },
        {
            "name": "Ice Spirit",
            "level": 13,
            "maxLevel": 13,
            "count": 100,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
            },
            "key": "ice-spirit",
            "elixir": 1,
            "type": "Troop",
            "rarity": "Common",
            "arena": 8,
            "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty."
        }
    ],
    "cards": [
        {
            "name": "Goblins",
            "level": 13,
            "maxLevel": 13,
            "count": 100,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
            },
            "key": "goblins",
            "elixir": 2,
            "type": "Troop",
            "rarity": "Common",
            "arena": 1,
            "description": "Three fast, unarmored melee attackers. Small, fast, green and mean!"
        },
        {
            "name": "Skeleton Army",
            "level": 6,
            "maxLevel": 8,
            "count": 116,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/fAOToOi1pRy7svN2xQS6mDkhQw2pj9m_17FauaNqyl4.png"
            },
            "key": "skeleton-army",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 0,
            "description": "Spawns an army of Skeletons. Meet Larry and his friends Harry, Gerry, Terry, Mary, etc."
        },
        {
            "name": "Mini P.E.K.K.A",
            "level": 11,
            "maxLevel": 11,
            "count": 0,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/Fmltc4j3Ve9vO_xhHHPEO3PRP3SmU2oKp2zkZQHRZT4.png"
            },
            "key": "mini-pekka",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Rare",
            "arena": 0,
            "description": "The Arena is a certified butterfly-free zone. No distractions for P.E.K.K.A, only destruction."
        },
        {
            "name": "Rage",
            "level": 1,
            "maxLevel": 8,
            "count": 272,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/bGP21OOmcpHMJ5ZA79bHVV2D-NzPtDkvBskCNJb7pg0.png"
            },
            "key": "rage",
            "elixir": 2,
            "type": "Spell",
            "rarity": "Epic",
            "arena": 3,
            "description": "Increases troop movement and attack speed. Buildings attack faster and summon troops quicker, too. Chaaaarge!"
        },
        {
            "name": "The Log",
            "level": 4,
            "maxLevel": 5,
            "count": 7,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
            },
            "key": "the-log",
            "elixir": 2,
            "type": "Spell",
            "rarity": "Legendary",
            "arena": 6,
            "description": "A spilt bottle of Rage turned an innocent tree trunk into \"The Log\". Now, it seeks revenge by crushing anything in its path!"
        },
        {
            "name": "Ice Wizard",
            "level": 1,
            "maxLevel": 5,
            "count": 8,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/W3dkw0HTw9n1jB-zbknY2w3wHuyuLxSRIAV5fUT1SEY.png"
            },
            "key": "ice-wizard",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 5,
            "description": "This chill caster throws ice shards that slow down enemies' movement and attack speed. Despite being freezing cold, he has a handlebar mustache that's too hot for TV."
        },
        {
            "name": "Furnace",
            "level": 7,
            "maxLevel": 11,
            "count": 2410,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/iqbDiG7yYRIzvCPXdt9zPb3IvMt7F7Gi4wIPnh2x4aI.png"
            },
            "key": "furnace",
            "elixir": 4,
            "type": "Building",
            "rarity": "Rare",
            "arena": 5,
            "description": "The Furnace spawns two Fire Spirits at a time. It also makes great brick-oven pancakes."
        },
        {
            "name": "Heal",
            "level": 7,
            "maxLevel": 11,
            "count": 1972,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/GITl06sa2nGRLPvboyXbGEv5E3I-wAwn1Eqa5esggbc.png"
            },
            "key": "heal",
            "elixir": 3,
            "type": "Spell",
            "rarity": "Rare",
            "arena": 10,
            "description": "Heal your troops to keep them in the fight! Friendly troops are healed over time while in the target area. Doesn't affect buildings."
        },
        {
            "name": "Golem",
            "level": 6,
            "maxLevel": 8,
            "count": 154,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/npdmCnET7jmVjJvjJQkFnNSNnDxYHDBigbvIAloFMds.png"
            },
            "key": "golem",
            "elixir": 8,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 6,
            "description": "Slow but durable, only attacks buildings. When destroyed, explosively splits into two Golemites and deals area damage!"
        },
        {
            "name": "Tombstone",
            "level": 10,
            "maxLevel": 11,
            "count": 813,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png"
            },
            "key": "tombstone",
            "elixir": 3,
            "type": "Building",
            "rarity": "Rare",
            "arena": 2,
            "description": "Troop building that periodically deploys Skeletons to fight the enemy. When destroyed, spawns 4 Skeletons. Creepy!"
        },
        {
            "name": "Witch",
            "level": 4,
            "maxLevel": 8,
            "count": 212,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/cfwk1vzehVyHC-uloEIH6NOI0hOdofCutR5PyhIgO6w.png"
            },
            "key": "witch",
            "elixir": 5,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 0,
            "description": "Summons Skeletons, shoots destructo beams, has glowing pink eyes that unfortunately don't shoot lasers."
        },
        {
            "name": "Tesla",
            "level": 13,
            "maxLevel": 13,
            "count": 100,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/OiwnGrxFMNiHetYEerE-UZt0L_uYNzFY7qV_CA_OxR4.png"
            },
            "key": "tesla",
            "elixir": 4,
            "type": "Building",
            "rarity": "Common",
            "arena": 4,
            "description": "Defensive building. Whenever it's not zapping the enemy, the power of Electrickery is best kept grounded."
        },
        {
            "name": "Skeleton Barrel",
            "level": 9,
            "maxLevel": 13,
            "count": 5200,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/vCB4DWCcrGbTkarjcOiVz4aNDx6GWLm0yUepg9E1MGo.png"
            },
            "key": "skeleton-barrel",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Common",
            "arena": 6,
            "description": "It's a Skeleton party in the sky, until all the balloons pop... then it's a Skeleton party on the ground!"
        },
        {
            "name": "Barbarian Hut",
            "level": 7,
            "maxLevel": 11,
            "count": 2410,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/ho0nOG2y3Ch86elHHcocQs8Fv_QNe0cFJ2CijsxABZA.png"
            },
            "key": "barbarian-hut",
            "elixir": 7,
            "type": "Building",
            "rarity": "Rare",
            "arena": 3,
            "description": "Troop building that periodically deploys Barbarians to fight the enemy. Time to make the Barbarians."
        },
        {
            "name": "Minion Horde",
            "level": 13,
            "maxLevel": 13,
            "count": 100,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/Wyjq5l0IXHTkX9Rmpap6HaH08MvjbxFp1xBO9a47YSI.png"
            },
            "key": "minion-horde",
            "elixir": 5,
            "type": "Troop",
            "rarity": "Common",
            "arena": 4,
            "description": "Six fast, unarmored flying attackers. Three's a crowd, six is a horde!"
        },
        {
            "name": "Minions",
            "level": 13,
            "maxLevel": 13,
            "count": 100,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/yHGpoEnmUWPGV_hBbhn-Kk-Bs838OjGzWzJJlQpQKQA.png"
            },
            "key": "minions",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Common",
            "arena": 2,
            "description": "Three fast, unarmored flying attackers. Roses are red, minions are blue, they can fly, and will crush you!"
        },
        {
            "name": "Battle Ram",
            "level": 7,
            "maxLevel": 11,
            "count": 2410,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/dyc50V2cplKi4H7pq1B3I36pl_sEH5DQrNHboS_dbbM.png"
            },
            "key": "battle-ram",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Rare",
            "arena": 6,
            "description": "Two Barbarians holding a big log charge at the nearest building, dealing significant damage if they connect; then they go to town with their swords!"
        },
        {
            "name": "Bomb Tower",
            "level": 1,
            "maxLevel": 11,
            "count": 2382,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/rirYRyHPc97emRjoH-c1O8uZCBzPVnToaGuNGusF3TQ.png"
            },
            "key": "bomb-tower",
            "elixir": 5,
            "type": "Building",
            "rarity": "Rare",
            "arena": 2,
            "description": "Defensive building that houses a Bomber. Deals area damage to anything dumb enough to stand near it."
        },
        {
            "name": "Goblin Barrel",
            "level": 7,
            "maxLevel": 8,
            "count": 170,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/CoZdp5PpsTH858l212lAMeJxVJ0zxv9V-f5xC8Bvj5g.png"
            },
            "key": "goblin-barrel",
            "elixir": 3,
            "type": "Spell",
            "rarity": "Epic",
            "arena": 1,
            "description": "Spawns three Goblins anywhere in the Arena. It's going to be a thrilling ride, boys!"
        },
        {
            "name": "Freeze",
            "level": 6,
            "maxLevel": 8,
            "count": 134,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/I1M20_Zs_p_BS1NaNIVQjuMJkYI_1-ePtwYZahn0JXQ.png"
            },
            "key": "freeze",
            "elixir": 4,
            "type": "Spell",
            "rarity": "Epic",
            "arena": 4,
            "description": "Freezes troops and buildings, making them unable to move or attack. Everybody chill."
        },
        {
            "name": "Graveyard",
            "level": 4,
            "maxLevel": 5,
            "count": 1,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png"
            },
            "key": "graveyard",
            "elixir": 5,
            "type": "Spell",
            "rarity": "Legendary",
            "arena": 5,
            "description": "Surprise! It's a party. A Skeleton party, anywhere in the Arena. Yay!"
        },
        {
            "name": "P.E.K.K.A",
            "level": 7,
            "maxLevel": 8,
            "count": 41,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/MlArURKhn_zWAZY-Xj1qIRKLVKquarG25BXDjUQajNs.png"
            },
            "key": "pekka",
            "elixir": 7,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 4,
            "description": "A heavily armored, slow melee fighter. Swings from the hip but packs a huge punch."
        },
        {
            "name": "Clone",
            "level": 4,
            "maxLevel": 8,
            "count": 206,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/mHVCet-1TkwWq-pxVIU2ZWY9_2z7Z7wtP25ArEUsP_g.png"
            },
            "key": "clone",
            "elixir": 3,
            "type": "Spell",
            "rarity": "Epic",
            "arena": 8,
            "description": "Duplicates all friendly troops in the target area. Cloned troops are fragile, but pack the same punch as the original! Doesn't affect buildings."
        },
        {
            "name": "Cannon Cart",
            "level": 4,
            "maxLevel": 8,
            "count": 130,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/aqwxRz8HXzqlMCO4WMXNA1txynjXTsLinknqsgZLbok.png"
            },
            "key": "cannon-cart",
            "elixir": 5,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 10,
            "description": "A Cannon on wheels?! Bet they won't see that coming! Once you break its shield, it becomes a Cannon not on wheels."
        },
        {
            "name": "Night Witch",
            "level": 1,
            "maxLevel": 5,
            "count": 4,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/NpCrXDEDBBJgNv9QrBAcJmmMFbS7pe3KCY8xJ5VB18A.png"
            },
            "key": "night-witch",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 8,
            "description": "Summons Bats to do her bidding, even after death! If you get too close, she isn't afraid of pitching in with her mean-looking battle staff."
        },
        {
            "name": "Bomber",
            "level": 9,
            "maxLevel": 13,
            "count": 8900,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/12n1CesxKIcqVYntjxcF36EFA-ONw7Z-DoL0_rQrbdo.png"
            },
            "key": "bomber",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Common",
            "arena": 0,
            "description": "Small, lightly protected skeleton that throws bombs. Deals area damage that can wipe out a swarm of enemies."
        },
        {
            "name": "Wizard",
            "level": 7,
            "maxLevel": 11,
            "count": 2410,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/Mej7vnv4H_3p_8qPs_N6_GKahy6HDr7pU7i9eTHS84U.png"
            },
            "key": "wizard",
            "elixir": 5,
            "type": "Troop",
            "rarity": "Rare",
            "arena": 5,
            "description": "The most awesome man to ever set foot in the arena, the Wizard will blow you away with his handsomeness... and/or fireballs."
        },
        {
            "name": "Flying Machine",
            "level": 7,
            "maxLevel": 11,
            "count": 960,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/hzKNE3QwFcrSrDDRuVW3QY_OnrDPijSiIp-PsWgFevE.png"
            },
            "key": "flying-machine",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Rare",
            "arena": 9,
            "description": "The Master Builder has sent his first contraption to the Arena! It's a fast and fun flying machine, but fragile!"
        },
        {
            "name": "Skeletons",
            "level": 13,
            "maxLevel": 13,
            "count": 100,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/oO7iKMU5m0cdxhYPZA3nWQiAUh2yoGgdThLWB1rVSec.png"
            },
            "key": "skeletons",
            "elixir": 1,
            "type": "Troop",
            "rarity": "Common",
            "arena": 2,
            "description": "Three fast, very weak melee fighters. Surround your enemies with this pile of bones!"
        },
        {
            "name": "Barbarians",
            "level": 13,
            "maxLevel": 13,
            "count": 100,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/TvJsuu2S4yhyk1jVYUAQwdKOnW4U77KuWWOTPOWnwfI.png"
            },
            "key": "barbarians",
            "elixir": 5,
            "type": "Troop",
            "rarity": "Common",
            "arena": 3,
            "description": "A horde of melee attackers with mean mustaches and even meaner tempers."
        },
        {
            "name": "Hog Rider",
            "level": 11,
            "maxLevel": 11,
            "count": 9,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/Ubu0oUl8tZkusnkZf8Xv9Vno5IO29Y-jbZ4fhoNJ5oc.png"
            },
            "key": "hog-rider",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Rare",
            "arena": 4,
            "description": "Fast melee troop that targets buildings and can jump over the river. He followed the echoing call of \"Hog Riderrrrr\" all the way through the Arena doors."
        },
        {
            "name": "Zappies",
            "level": 7,
            "maxLevel": 11,
            "count": 40,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/QZfHRpLRmutZbCr5fpLnTpIp89vLI6NrAwzGZ8tHEc4.png"
            },
            "key": "zappies",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Rare",
            "arena": 11,
            "description": "Spawns a pack of miniature Zap machines. Who controls them...? Only the Master Builder knows."
        },
        {
            "name": "Baby Dragon",
            "level": 4,
            "maxLevel": 8,
            "count": 223,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/cjC9n4AvEZJ3urkVh-rwBkJ-aRSsydIMqSAV48hAih0.png"
            },
            "key": "baby-dragon",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 0,
            "description": "Flying troop that deals area damage. Baby dragons hatch cute, hungry and ready for a barbeque."
        },
        {
            "name": "Giant Skeleton",
            "level": 4,
            "maxLevel": 8,
            "count": 188,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/0p0gd0XaVRu1Hb1iSG1hTYbz2AN6aEiZnhaAib5O8Z8.png"
            },
            "key": "giant-skeleton",
            "elixir": 6,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 2,
            "description": "The bigger the skeleton, the bigger the bomb. Carries a bomb that blows up when the Giant Skeleton dies."
        },
        {
            "name": "Bandit",
            "level": 1,
            "maxLevel": 5,
            "count": 11,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/QWDdXMKJNpv0go-HYaWQWP6p8uIOHjqn-zX7G0p3DyM.png"
            },
            "key": "bandit",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 9,
            "description": "The Bandit dashes to her target and delivers an extra big hit! While dashing, she can't be touched. The mask keeps her identity safe... and gives her bonus cool points!"
        },
        {
            "name": "Goblin Gang",
            "level": 13,
            "maxLevel": 13,
            "count": 100,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png"
            },
            "key": "goblin-gang",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Common",
            "arena": 9,
            "description": "Spawns five Goblins - three with knives, two with spears - at a discounted Elixir cost. It's like a Goblin Value Pack!"
        },
        {
            "name": "Prince",
            "level": 7,
            "maxLevel": 8,
            "count": 27,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/3JntJV62aY0G1Qh6LIs-ek-0ayeYFY3VItpG7cb9I60.png"
            },
            "key": "prince",
            "elixir": 5,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 0,
            "description": "Don't let the little pony fool you. Once the Prince gets a running start, you WILL be trampled. Deals double damage once he gets charging."
        },
        {
            "name": "Lava Hound",
            "level": 1,
            "maxLevel": 5,
            "count": 15,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/unicRQ975sBY2oLtfgZbAI56ZvaWz7azj-vXTLxc0r8.png"
            },
            "key": "lava-hound",
            "elixir": 7,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 4,
            "description": "The Lava Hound is a majestic flying beast that attacks buildings. The Lava Pups are less majestic angry babies that attack anything."
        },
        {
            "name": "Arrows",
            "level": 13,
            "maxLevel": 13,
            "count": 100,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/Flsoci-Y6y8ZFVi5uRFTmgkPnCmMyMVrU7YmmuPvSBo.png"
            },
            "key": "arrows",
            "elixir": 3,
            "type": "Spell",
            "rarity": "Common",
            "arena": 0,
            "description": "Arrows pepper a large area, damaging all enemies hit. Reduced damage to Crown Towers."
        },
        {
            "name": "Royal Giant",
            "level": 13,
            "maxLevel": 13,
            "count": 100,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/mnlRaNtmfpQx2e6mp70sLd0ND-pKPF70Cf87_agEKg4.png"
            },
            "key": "royal-giant",
            "elixir": 6,
            "type": "Troop",
            "rarity": "Common",
            "arena": 7,
            "description": "Destroying enemy buildings with his massive cannon is his job; making a raggedy blond beard look good is his passion."
        },
        {
            "name": "Mirror",
            "level": 4,
            "maxLevel": 8,
            "count": 211,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/wC6Cm9rKLEOk72zTsukVwxewKIoO4ZcMJun54zCPWvA.png"
            },
            "key": "mirror",
            "elixir": 1,
            "type": "Spell",
            "rarity": "Epic",
            "arena": 5,
            "description": "Mirrors your last card played for +1 Elixir."
        },
        {
            "name": "Balloon",
            "level": 7,
            "maxLevel": 8,
            "count": 50,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/qBipxLo-3hhCnPrApp2Nn3b2NgrSrvwzWytvREev0CY.png"
            },
            "key": "balloon",
            "elixir": 5,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 2,
            "description": "As pretty as they are, you won't want a parade of THESE balloons showing up on the horizon. Drops powerful bombs and when shot down, crashes dealing area damage."
        },
        {
            "name": "Giant",
            "level": 11,
            "maxLevel": 11,
            "count": 1,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/Axr4ox5_b7edmLsoHxBX3vmgijAIibuF6RImTbqLlXE.png"
            },
            "key": "giant",
            "elixir": 5,
            "type": "Troop",
            "rarity": "Rare",
            "arena": 0,
            "description": "Slow but durable, only attacks buildings. A real one-man wrecking crew!"
        },
        {
            "name": "Ice Golem",
            "level": 11,
            "maxLevel": 11,
            "count": 7,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/r05cmpwV1o7i7FHodtZwW3fmjbXCW34IJCsDEV5cZC4.png"
            },
            "key": "ice-golem",
            "elixir": 2,
            "type": "Troop",
            "rarity": "Rare",
            "arena": 8,
            "description": "He's tough, targets buildings and explodes when destroyed, slowing nearby enemies. Made entirely out of ice... or is he?! Yes."
        },
        {
            "name": "Knight",
            "level": 13,
            "maxLevel": 13,
            "count": 100,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png"
            },
            "key": "knight",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Common",
            "arena": 0,
            "description": "A tough melee fighter. The Barbarian's handsome, cultured cousin. Rumor has it that he was knighted based on the sheer awesomeness of his mustache alone."
        },
        {
            "name": "Mortar",
            "level": 13,
            "maxLevel": 13,
            "count": 100,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/lPOSw6H7YOHq2miSCrf7ZDL3ANjhJdPPDYOTujdNrVE.png"
            },
            "key": "mortar",
            "elixir": 4,
            "type": "Building",
            "rarity": "Common",
            "arena": 6,
            "description": "Defensive building with a long range. Shoots exploding boulders that deal area damage. Cannot shoot at targets that get very close!"
        },
        {
            "name": "Three Musketeers",
            "level": 11,
            "maxLevel": 11,
            "count": 0,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/_J2GhbkX3vswaFk1wG-dopwiHyNc_YiPhwroiKF3Mek.png"
            },
            "key": "three-musketeers",
            "elixir": 9,
            "type": "Troop",
            "rarity": "Rare",
            "arena": 7,
            "description": "Trio of powerful, independent markswomen, fighting for justice and honor. Disrespecting them would not be just a mistake, it would be a cardinal sin!"
        },
        {
            "name": "Sparky",
            "level": 1,
            "maxLevel": 5,
            "count": 12,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/2GKMkBrArZXgQxf2ygFjDs4VvGYPbx8F6Lj_68iVhIM.png"
            },
            "key": "sparky",
            "elixir": 6,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 6,
            "description": "Sparky slowly charges up, then unloads MASSIVE area damage. Overkill isn't in her vocabulary."
        },
        {
            "name": "Musketeer",
            "level": 11,
            "maxLevel": 11,
            "count": 0,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/Tex1C48UTq9FKtAX-3tzG0FJmc9jzncUZG3bb5Vf-Ds.png"
            },
            "key": "musketeer",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Rare",
            "arena": 0,
            "description": "Don't be fooled by her delicately coiffed hair, the Musketeer is a mean shot with her trusty boomstick."
        },
        {
            "name": "Fireball",
            "level": 11,
            "maxLevel": 11,
            "count": 8,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png"
            },
            "key": "fireball",
            "elixir": 4,
            "type": "Spell",
            "rarity": "Rare",
            "arena": 0,
            "description": "Annnnnd... Fireball. Incinerates a small area, dealing high damage. Reduced damage to Crown Towers."
        },
        {
            "name": "Rocket",
            "level": 11,
            "maxLevel": 11,
            "count": 0,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/Ie07nQNK9CjhKOa4-arFAewi4EroqaA-86Xo7r5tx94.png"
            },
            "key": "rocket",
            "elixir": 6,
            "type": "Spell",
            "rarity": "Rare",
            "arena": 3,
            "description": "Deals high damage to a small area. Looks really awesome doing it. Reduced damage to Crown Towers."
        },
        {
            "name": "Lumberjack",
            "level": 1,
            "maxLevel": 5,
            "count": 16,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/E6RWrnCuk13xMX5OE1EQtLEKTZQV6B78d00y8PlXt6Q.png"
            },
            "key": "lumberjack",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 8,
            "description": "He chops trees by day and hunts The Log by night. His bottle of Rage spills everywhere when he dies."
        },
        {
            "name": "Tornado",
            "level": 7,
            "maxLevel": 8,
            "count": 73,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/QJB-QK1QJHdw4hjpAwVSyZBozc2ZWAR9pQ-SMUyKaT0.png"
            },
            "key": "tornado",
            "elixir": 3,
            "type": "Spell",
            "rarity": "Epic",
            "arena": 6,
            "description": "Drags enemy troops to its center while dealing damage over time, just like a magnet. A big, swirling, Tornado-y magnet. Doesn't affect buildings."
        },
        {
            "name": "X-Bow",
            "level": 7,
            "maxLevel": 8,
            "count": 51,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/zVQ9Hme1hlj9Dc6e1ORl9xWwglcSrP7ejow5mAhLUJc.png"
            },
            "key": "x-bow",
            "elixir": 6,
            "type": "Building",
            "rarity": "Epic",
            "arena": 3,
            "description": "Nice tower you got there. Would be a shame if this X-Bow whittled it down from this side of the Arena..."
        },
        {
            "name": "Princess",
            "level": 5,
            "maxLevel": 5,
            "count": 0,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/bAwMcqp9EKVIKH3ZLm_m0MqZFSG72zG-vKxpx8aKoVs.png"
            },
            "key": "princess",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 7,
            "description": "This stunning Princess shoots flaming arrows from long range. If you're feeling warm feelings towards her, it's probably because you're on fire."
        },
        {
            "name": "Valkyrie",
            "level": 8,
            "maxLevel": 11,
            "count": 2206,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/0lIoYf3Y_plFTzo95zZL93JVxpfb3MMgFDDhgSDGU9A.png"
            },
            "key": "valkyrie",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Rare",
            "arena": 1,
            "description": "Tough melee fighter, deals area damage around her. Swarm or horde, no problem! She can take them all out with a few spins."
        },
        {
            "name": "Dart Goblin",
            "level": 10,
            "maxLevel": 11,
            "count": 943,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/BmpK3bqEAviflqHCdxxnfm-_l3pRPJw3qxHkwS55nCY.png"
            },
            "key": "dart-goblin",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Rare",
            "arena": 9,
            "description": "Runs fast, shoots far and chews gum. How does he blow darts with a mouth full of gum? Years of didgeridoo lessons."
        },
        {
            "name": "Elite Barbarians",
            "level": 13,
            "maxLevel": 13,
            "count": 100,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/C88C5JH_F3lLZj6K-tLcMo5DPjrFmvzIb1R2M6xCfTE.png"
            },
            "key": "elite-barbarians",
            "elixir": 6,
            "type": "Troop",
            "rarity": "Common",
            "arena": 7,
            "description": "Spawns a pair of leveled up Barbarians. They're like regular Barbarians, only harder, better, faster and stronger."
        },
        {
            "name": "Cannon",
            "level": 13,
            "maxLevel": 13,
            "count": 100,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/nZK1y-beLxO5vnlyUhK6-2zH2NzXJwqykcosqQ1cmZ8.png"
            },
            "key": "cannon",
            "elixir": 3,
            "type": "Building",
            "rarity": "Common",
            "arena": 3,
            "description": "Defensive building. Shoots cannonballs with deadly effect, but cannot target flying troops."
        },
        {
            "name": "Executioner",
            "level": 7,
            "maxLevel": 8,
            "count": 35,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/9XL5BP2mqzV8kza6KF8rOxrpCZTyuGLp2l413DTjEoM.png"
            },
            "key": "executioner",
            "elixir": 5,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 9,
            "description": "He throws his axe like a boomerang, striking all enemies on the way out AND back. It's a miracle he doesn't lose an arm."
        },
        {
            "name": "Goblin Hut",
            "level": 7,
            "maxLevel": 11,
            "count": 2180,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/l8ZdzzNLcwB4u7ihGgxNFQOjCT_njFuAhZr7D6PRF7E.png"
            },
            "key": "goblin-hut",
            "elixir": 5,
            "type": "Building",
            "rarity": "Rare",
            "arena": 1,
            "description": "Building that spawns Spear Goblins. But don't look inside. You don't want to see how they are made."
        },
        {
            "name": "Fire Spirits",
            "level": 13,
            "maxLevel": 13,
            "count": 100,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/16-BqusVvynIgYI8_Jci3LDC-r8AI_xaIYLgXqtlmS8.png"
            },
            "key": "fire-spirits",
            "elixir": 2,
            "type": "Troop",
            "rarity": "Common",
            "arena": 5,
            "description": "These three Fire Spirits are on a kamikaze mission to give you a warm hug. It'd be adorable if they weren't on fire."
        },
        {
            "name": "Archers",
            "level": 13,
            "maxLevel": 13,
            "count": 100,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/W4Hmp8MTSdXANN8KdblbtHwtsbt0o749BbxNqmJYfA8.png"
            },
            "key": "archers",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Common",
            "arena": 0,
            "description": "A pair of lightly armored ranged attackers. They'll help you take down ground and air units, but you're on your own with hair coloring advice."
        },
        {
            "name": "Lightning",
            "level": 7,
            "maxLevel": 8,
            "count": 36,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/fpnESbYqe5GyZmaVVYe-SEu7tE0Kxh_HZyVigzvLjks.png"
            },
            "key": "lightning",
            "elixir": 6,
            "type": "Spell",
            "rarity": "Epic",
            "arena": 1,
            "description": "Bolts of lightning damage and stun up to three enemy troops or buildings with the most hitpoints in the target area. Reduced damage to Crown Towers."
        },
        {
            "name": "Bowler",
            "level": 7,
            "maxLevel": 8,
            "count": 43,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/SU4qFXmbQXWjvASxVI6z9IJuTYolx4A0MKK90sTIE88.png"
            },
            "key": "bowler",
            "elixir": 5,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 8,
            "description": "This big blue dude digs the simple things in life - Dark Elixir drinks and throwing rocks. His massive boulders roll through their target, hitting everything behind for a strike!"
        },
        {
            "name": "Mega Minion",
            "level": 11,
            "maxLevel": 11,
            "count": 1,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/-T_e4YLbuhPBKbYnBwQfXgynNpp5eOIN_0RracYwL9c.png"
            },
            "key": "mega-minion",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Rare",
            "arena": 7,
            "description": "Flying, armored and powerful. What could be its weakness?! Cupcakes."
        },
        {
            "name": "Hunter",
            "level": 3,
            "maxLevel": 8,
            "count": 2,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/VNabB1WKnYtYRSG7X_FZfnZjQDHTBs9A96OGMFmecrA.png"
            },
            "key": "hunter",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 9,
            "description": "He deals BIG damage up close - not so much at range. What he lacks in accuracy, he makes up for with his impressively bushy eyebrows."
        },
        {
            "name": "Spear Goblins",
            "level": 9,
            "maxLevel": 13,
            "count": 8900,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/FSDFotjaXidI4ku_WFpVCTWS1hKGnFh1sxX0lxM43_E.png"
            },
            "key": "spear-goblins",
            "elixir": 2,
            "type": "Troop",
            "rarity": "Common",
            "arena": 1,
            "description": "Three unarmored ranged attackers. Who the heck taught these guys to throw spears!?! Who thought that was a good idea?!"
        },
        {
            "name": "Elixir Collector",
            "level": 10,
            "maxLevel": 11,
            "count": 820,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/BGLo3Grsp81c72EpxLLk-Sofk3VY56zahnUNOv3JcT0.png"
            },
            "key": "elixir-collector",
            "elixir": 6,
            "type": "Building",
            "rarity": "Rare",
            "arena": 6,
            "description": "You gotta spend Elixir to make Elixir."
        },
        {
            "name": "Inferno Dragon",
            "level": 4,
            "maxLevel": 5,
            "count": 0,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/y5HDbKtTbWG6En6TGWU0xoVIGs1-iQpIP4HC-VM7u8A.png"
            },
            "key": "inferno-dragon",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 4,
            "description": "Shoots a focused beam of fire that increases in damage over time. Wears a helmet because flying can be dangerous."
        },
        {
            "name": "Bats",
            "level": 13,
            "maxLevel": 13,
            "count": 100,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
            },
            "key": "bats",
            "elixir": 2,
            "type": "Troop",
            "rarity": "Common",
            "arena": 8,
            "description": "Spawns a handful of tiny flying creatures with big ears. Having big ears doesn't mean they're good listeners."
        },
        {
            "name": "Dark Prince",
            "level": 4,
            "maxLevel": 8,
            "count": 226,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/M7fXlrKXHu2IvpSGpk36kXVstslbR08Bbxcy0jQcln8.png"
            },
            "key": "dark-prince",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 7,
            "description": "The Dark Prince deals area damage and lets his spiked club do the talking for him - because when he does talk, it sounds like he has a bucket on his head."
        },
        {
            "name": "Mega Knight",
            "level": 1,
            "maxLevel": 5,
            "count": 4,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/O2NycChSNhn_UK9nqBXUhhC_lILkiANzPuJjtjoz0CE.png"
            },
            "key": "mega-knight",
            "elixir": 7,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 10,
            "description": "He lands with the force of 1,000 mustaches, then jumps from one foe to the next dealing huge area damage. Stand aside!"
        },
        {
            "name": "Royal Ghost",
            "level": 1,
            "maxLevel": 5,
            "count": 1,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
            },
            "key": "royal-ghost",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 10,
            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
        },
        {
            "name": "Guards",
            "level": 4,
            "maxLevel": 8,
            "count": 226,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
            },
            "key": "guards",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 7,
            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
        },
        {
            "name": "Zap",
            "level": 13,
            "maxLevel": 13,
            "count": 100,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
            },
            "key": "zap",
            "elixir": 2,
            "type": "Spell",
            "rarity": "Common",
            "arena": 5,
            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
        },
        {
            "name": "Inferno Tower",
            "level": 10,
            "maxLevel": 11,
            "count": 945,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/GSHY_wrooMMLET6bG_WJB8redtwx66c4i80ipi4gYOM.png"
            },
            "key": "inferno-tower",
            "elixir": 5,
            "type": "Building",
            "rarity": "Rare",
            "arena": 4,
            "description": "Defensive building, roasts targets for damage that increases over time. Burns through even the biggest and toughest enemies!"
        },
        {
            "name": "Poison",
            "level": 7,
            "maxLevel": 8,
            "count": 23,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
            },
            "key": "poison",
            "elixir": 4,
            "type": "Spell",
            "rarity": "Epic",
            "arena": 5,
            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
        },
        {
            "name": "Electro Wizard",
            "level": 4,
            "maxLevel": 5,
            "count": 6,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/RsFaHgB3w6vXsTjXdPr3x8l_GbV9TbOUCvIx07prbrQ.png"
            },
            "key": "electro-wizard",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 7,
            "description": "He lands with a \"POW!\", stuns nearby enemies and shoots lightning with both hands! What a show off."
        },
        {
            "name": "Miner",
            "level": 4,
            "maxLevel": 5,
            "count": 8,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
            },
            "key": "miner",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 6,
            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
        },
        {
            "name": "Ice Spirit",
            "level": 13,
            "maxLevel": 13,
            "count": 100,
            "iconUrls": {
                "medium": "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
            },
            "key": "ice-spirit",
            "elixir": 1,
            "type": "Troop",
            "rarity": "Common",
            "arena": 8,
            "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty."
        }
    ],
    "achievements": [
        {
            "name": "Team Player",
            "stars": 3,
            "value": 394,
            "target": 1,
            "info": "Join a Clan"
        },
        {
            "name": "Friend in Need",
            "stars": 3,
            "value": 65225,
            "target": 2500,
            "info": "Donate 2500 cards"
        },
        {
            "name": "Road to Glory",
            "stars": 3,
            "value": 17,
            "target": 6,
            "info": "Reach Arena 6"
        },
        {
            "name": "Gatherer",
            "stars": 3,
            "value": 81,
            "target": 40,
            "info": "Collect 40 cards"
        },
        {
            "name": "TV Royale",
            "stars": 3,
            "value": 1,
            "target": 1,
            "info": "Watch a TV Royale Replay"
        },
        {
            "name": "Tournament Rewards",
            "stars": 1,
            "value": 6624,
            "target": 20000,
            "info": "Win 20000 cards from tournaments"
        },
        {
            "name": "Tournament Host",
            "stars": 0,
            "value": 0,
            "target": 1,
            "info": "Create and finish one tournament"
        },
        {
            "name": "Tournament Player",
            "stars": 3,
            "value": 146,
            "target": 1,
            "info": "Join a tournament"
        },
        {
            "name": "Challenge Streak",
            "stars": 3,
            "value": 18,
            "target": 12,
            "info": "Get 12 wins in a single challenge"
        },
        {
            "name": "Practice with Friends",
            "stars": 3,
            "value": 444,
            "target": 10,
            "info": "Win 10 Friendly Battles"
        },
        {
            "name": "Special Challenge",
            "stars": 3,
            "value": 63,
            "target": 5,
            "info": "Participate in 5 unique Special Event Challenges"
        },
        {
            "name": "Friend in Need II",
            "stars": 3,
            "value": 65225,
            "target": 25000,
            "info": "Donate 25000 cards"
        }
    ],
    "battles": [
        {
            "type": "challenge",
            "mode": {
                "name": "Challenge",
                "deck": "Collection",
                "cardLevels": "Tournament",
                "overtimeSeconds": 180,
                "players": "PvP",
                "sameDeck": false
            },
            "utcTime": 1513983206,
            "deckType": "slotDeck",
            "teamSize": 1,
            "winner": 1,
            "teamCrowns": 1,
            "opponentCrowns": 0,
            "team": [
                {
                    "tag": "8L9L9GL",
                    "name": "Jo͛hͥn̽",
                    "crownsEarned": 1,
                    "startTrophies": 5188,
                    "clan": {
                        "tag": "2CCCP",
                        "name": "Reddit Alpha",
                        "badge": 16000167
                    },
                    "deck": [
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Guards",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
                            },
                            "key": "guards",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 7,
                            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Inferno Tower",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/GSHY_wrooMMLET6bG_WJB8redtwx66c4i80ipi4gYOM.png"
                            },
                            "key": "inferno-tower",
                            "elixir": 5,
                            "type": "Building",
                            "rarity": "Rare",
                            "arena": 4,
                            "description": "Defensive building, roasts targets for damage that increases over time. Burns through even the biggest and toughest enemies!"
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Electro Wizard",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/RsFaHgB3w6vXsTjXdPr3x8l_GbV9TbOUCvIx07prbrQ.png"
                            },
                            "key": "electro-wizard",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 7,
                            "description": "He lands with a \"POW!\", stuns nearby enemies and shoots lightning with both hands! What a show off."
                        },
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Ice Spirit",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                            },
                            "key": "ice-spirit",
                            "elixir": 1,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty."
                        }
                    ]
                }
            ],
            "opponent": [
                {
                    "tag": "82RV8GV80",
                    "name": "GavurboğaN",
                    "crownsEarned": 0,
                    "startTrophies": 3844,
                    "clan": {
                        "tag": "2QVYG2J0",
                        "name": "dostlarklan",
                        "badge": 16000030
                    },
                    "deck": [
                        {
                            "name": "Mega Knight",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/O2NycChSNhn_UK9nqBXUhhC_lILkiANzPuJjtjoz0CE.png"
                            },
                            "key": "mega-knight",
                            "elixir": 7,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He lands with the force of 1,000 mustaches, then jumps from one foe to the next dealing huge area damage. Stand aside!"
                        },
                        {
                            "name": "Executioner",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/9XL5BP2mqzV8kza6KF8rOxrpCZTyuGLp2l413DTjEoM.png"
                            },
                            "key": "executioner",
                            "elixir": 5,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 9,
                            "description": "He throws his axe like a boomerang, striking all enemies on the way out AND back. It's a miracle he doesn't lose an arm."
                        },
                        {
                            "name": "Elixir Collector",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/BGLo3Grsp81c72EpxLLk-Sofk3VY56zahnUNOv3JcT0.png"
                            },
                            "key": "elixir-collector",
                            "elixir": 6,
                            "type": "Building",
                            "rarity": "Rare",
                            "arena": 6,
                            "description": "You gotta spend Elixir to make Elixir."
                        },
                        {
                            "name": "Prince",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3JntJV62aY0G1Qh6LIs-ek-0ayeYFY3VItpG7cb9I60.png"
                            },
                            "key": "prince",
                            "elixir": 5,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 0,
                            "description": "Don't let the little pony fool you. Once the Prince gets a running start, you WILL be trampled. Deals double damage once he gets charging."
                        },
                        {
                            "name": "Wizard",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Mej7vnv4H_3p_8qPs_N6_GKahy6HDr7pU7i9eTHS84U.png"
                            },
                            "key": "wizard",
                            "elixir": 5,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 5,
                            "description": "The most awesome man to ever set foot in the arena, the Wizard will blow you away with his handsomeness... and/or fireballs."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "P.E.K.K.A",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/MlArURKhn_zWAZY-Xj1qIRKLVKquarG25BXDjUQajNs.png"
                            },
                            "key": "pekka",
                            "elixir": 7,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 4,
                            "description": "A heavily armored, slow melee fighter. Swings from the hip but packs a huge punch."
                        },
                        {
                            "name": "Bats",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
                            },
                            "key": "bats",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns a handful of tiny flying creatures with big ears. Having big ears doesn't mean they're good listeners."
                        }
                    ]
                }
            ],
            "arena": {
                "name": "Electro Valley",
                "arena": "Arena 11",
                "arenaID": 10,
                "trophyLimit": 3000
            }
        },
        {
            "type": "challenge",
            "mode": {
                "name": "Challenge",
                "deck": "Collection",
                "cardLevels": "Tournament",
                "overtimeSeconds": 180,
                "players": "PvP",
                "sameDeck": false
            },
            "utcTime": 1513983016,
            "deckType": "slotDeck",
            "teamSize": 1,
            "winner": -1,
            "teamCrowns": 0,
            "opponentCrowns": 1,
            "team": [
                {
                    "tag": "8L9L9GL",
                    "name": "Jo͛hͥn̽",
                    "crownsEarned": 0,
                    "startTrophies": 5188,
                    "clan": {
                        "tag": "2CCCP",
                        "name": "Reddit Alpha",
                        "badge": 16000167
                    },
                    "deck": [
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Guards",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
                            },
                            "key": "guards",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 7,
                            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Inferno Tower",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/GSHY_wrooMMLET6bG_WJB8redtwx66c4i80ipi4gYOM.png"
                            },
                            "key": "inferno-tower",
                            "elixir": 5,
                            "type": "Building",
                            "rarity": "Rare",
                            "arena": 4,
                            "description": "Defensive building, roasts targets for damage that increases over time. Burns through even the biggest and toughest enemies!"
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Electro Wizard",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/RsFaHgB3w6vXsTjXdPr3x8l_GbV9TbOUCvIx07prbrQ.png"
                            },
                            "key": "electro-wizard",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 7,
                            "description": "He lands with a \"POW!\", stuns nearby enemies and shoots lightning with both hands! What a show off."
                        },
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Ice Spirit",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                            },
                            "key": "ice-spirit",
                            "elixir": 1,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty."
                        }
                    ]
                }
            ],
            "opponent": [
                {
                    "tag": "229CV82G",
                    "name": "Luiz ot",
                    "crownsEarned": 1,
                    "startTrophies": 4506,
                    "clan": {
                        "tag": "GG2J8Q9",
                        "name": "Evolution RJ II",
                        "badge": 16000058
                    },
                    "deck": [
                        {
                            "name": "Giant",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Axr4ox5_b7edmLsoHxBX3vmgijAIibuF6RImTbqLlXE.png"
                            },
                            "key": "giant",
                            "elixir": 5,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 0,
                            "description": "Slow but durable, only attacks buildings. A real one-man wrecking crew!"
                        },
                        {
                            "name": "Prince",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3JntJV62aY0G1Qh6LIs-ek-0ayeYFY3VItpG7cb9I60.png"
                            },
                            "key": "prince",
                            "elixir": 5,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 0,
                            "description": "Don't let the little pony fool you. Once the Prince gets a running start, you WILL be trampled. Deals double damage once he gets charging."
                        },
                        {
                            "name": "Mega Minion",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/-T_e4YLbuhPBKbYnBwQfXgynNpp5eOIN_0RracYwL9c.png"
                            },
                            "key": "mega-minion",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 7,
                            "description": "Flying, armored and powerful. What could be its weakness?! Cupcakes."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Guards",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
                            },
                            "key": "guards",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 7,
                            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
                        },
                        {
                            "name": "Musketeer",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Tex1C48UTq9FKtAX-3tzG0FJmc9jzncUZG3bb5Vf-Ds.png"
                            },
                            "key": "musketeer",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 0,
                            "description": "Don't be fooled by her delicately coiffed hair, the Musketeer is a mean shot with her trusty boomstick."
                        },
                        {
                            "name": "Ice Spirit",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                            },
                            "key": "ice-spirit",
                            "elixir": 1,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty."
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        }
                    ]
                }
            ],
            "arena": {
                "name": "Spell Valley",
                "arena": "Arena 5",
                "arenaID": 5,
                "trophyLimit": 1400
            }
        },
        {
            "type": "challenge",
            "mode": {
                "name": "Challenge",
                "deck": "Collection",
                "cardLevels": "Tournament",
                "overtimeSeconds": 180,
                "players": "PvP",
                "sameDeck": false
            },
            "utcTime": 1513982480,
            "deckType": "slotDeck",
            "teamSize": 1,
            "winner": 1,
            "teamCrowns": 1,
            "opponentCrowns": 0,
            "team": [
                {
                    "tag": "8L9L9GL",
                    "name": "Jo͛hͥn̽",
                    "crownsEarned": 1,
                    "startTrophies": 5188,
                    "clan": {
                        "tag": "2CCCP",
                        "name": "Reddit Alpha",
                        "badge": 16000167
                    },
                    "deck": [
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Guards",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
                            },
                            "key": "guards",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 7,
                            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Inferno Tower",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/GSHY_wrooMMLET6bG_WJB8redtwx66c4i80ipi4gYOM.png"
                            },
                            "key": "inferno-tower",
                            "elixir": 5,
                            "type": "Building",
                            "rarity": "Rare",
                            "arena": 4,
                            "description": "Defensive building, roasts targets for damage that increases over time. Burns through even the biggest and toughest enemies!"
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Electro Wizard",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/RsFaHgB3w6vXsTjXdPr3x8l_GbV9TbOUCvIx07prbrQ.png"
                            },
                            "key": "electro-wizard",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 7,
                            "description": "He lands with a \"POW!\", stuns nearby enemies and shoots lightning with both hands! What a show off."
                        },
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Ice Spirit",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                            },
                            "key": "ice-spirit",
                            "elixir": 1,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty."
                        }
                    ]
                }
            ],
            "opponent": [
                {
                    "tag": "J22C0U",
                    "name": "Matt",
                    "crownsEarned": 0,
                    "startTrophies": 4609,
                    "clan": {
                        "tag": "8UQ2",
                        "name": "Lost Phoenix",
                        "badge": 16000002
                    },
                    "deck": [
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Ice Golem",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/r05cmpwV1o7i7FHodtZwW3fmjbXCW34IJCsDEV5cZC4.png"
                            },
                            "key": "ice-golem",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 8,
                            "description": "He's tough, targets buildings and explodes when destroyed, slowing nearby enemies. Made entirely out of ice... or is he?! Yes."
                        },
                        {
                            "name": "Mini P.E.K.K.A",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Fmltc4j3Ve9vO_xhHHPEO3PRP3SmU2oKp2zkZQHRZT4.png"
                            },
                            "key": "mini-pekka",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 0,
                            "description": "The Arena is a certified butterfly-free zone. No distractions for P.E.K.K.A, only destruction."
                        },
                        {
                            "name": "Mega Knight",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/O2NycChSNhn_UK9nqBXUhhC_lILkiANzPuJjtjoz0CE.png"
                            },
                            "key": "mega-knight",
                            "elixir": 7,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He lands with the force of 1,000 mustaches, then jumps from one foe to the next dealing huge area damage. Stand aside!"
                        },
                        {
                            "name": "Mega Minion",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/-T_e4YLbuhPBKbYnBwQfXgynNpp5eOIN_0RracYwL9c.png"
                            },
                            "key": "mega-minion",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 7,
                            "description": "Flying, armored and powerful. What could be its weakness?! Cupcakes."
                        },
                        {
                            "name": "Balloon",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/qBipxLo-3hhCnPrApp2Nn3b2NgrSrvwzWytvREev0CY.png"
                            },
                            "key": "balloon",
                            "elixir": 5,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 2,
                            "description": "As pretty as they are, you won't want a parade of THESE balloons showing up on the horizon. Drops powerful bombs and when shot down, crashes dealing area damage."
                        },
                        {
                            "name": "Ice Spirit",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                            },
                            "key": "ice-spirit",
                            "elixir": 1,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        }
                    ]
                }
            ],
            "arena": {
                "name": "Master I",
                "arena": "League 4",
                "arenaID": 15,
                "trophyLimit": 4900
            }
        },
        {
            "type": "challenge",
            "mode": {
                "name": "Challenge",
                "deck": "Collection",
                "cardLevels": "Tournament",
                "overtimeSeconds": 180,
                "players": "PvP",
                "sameDeck": false
            },
            "utcTime": 1513982185,
            "deckType": "slotDeck",
            "teamSize": 1,
            "winner": 1,
            "teamCrowns": 1,
            "opponentCrowns": 0,
            "team": [
                {
                    "tag": "8L9L9GL",
                    "name": "Jo͛hͥn̽",
                    "crownsEarned": 1,
                    "startTrophies": 5188,
                    "clan": {
                        "tag": "2CCCP",
                        "name": "Reddit Alpha",
                        "badge": 16000167
                    },
                    "deck": [
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Guards",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
                            },
                            "key": "guards",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 7,
                            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Inferno Tower",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/GSHY_wrooMMLET6bG_WJB8redtwx66c4i80ipi4gYOM.png"
                            },
                            "key": "inferno-tower",
                            "elixir": 5,
                            "type": "Building",
                            "rarity": "Rare",
                            "arena": 4,
                            "description": "Defensive building, roasts targets for damage that increases over time. Burns through even the biggest and toughest enemies!"
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Electro Wizard",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/RsFaHgB3w6vXsTjXdPr3x8l_GbV9TbOUCvIx07prbrQ.png"
                            },
                            "key": "electro-wizard",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 7,
                            "description": "He lands with a \"POW!\", stuns nearby enemies and shoots lightning with both hands! What a show off."
                        },
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Ice Spirit",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                            },
                            "key": "ice-spirit",
                            "elixir": 1,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty."
                        }
                    ]
                }
            ],
            "opponent": [
                {
                    "tag": "QYGPR88U",
                    "name": "maestro bastian",
                    "crownsEarned": 0,
                    "startTrophies": 3924,
                    "clan": {
                        "tag": "UYU80J8",
                        "name": "CHILE CACHAÑA",
                        "badge": 16000038
                    },
                    "deck": [
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Giant",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Axr4ox5_b7edmLsoHxBX3vmgijAIibuF6RImTbqLlXE.png"
                            },
                            "key": "giant",
                            "elixir": 5,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 0,
                            "description": "Slow but durable, only attacks buildings. A real one-man wrecking crew!"
                        },
                        {
                            "name": "Ice Spirit",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                            },
                            "key": "ice-spirit",
                            "elixir": 1,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty."
                        },
                        {
                            "name": "Mega Minion",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/-T_e4YLbuhPBKbYnBwQfXgynNpp5eOIN_0RracYwL9c.png"
                            },
                            "key": "mega-minion",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 7,
                            "description": "Flying, armored and powerful. What could be its weakness?! Cupcakes."
                        },
                        {
                            "name": "Prince",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3JntJV62aY0G1Qh6LIs-ek-0ayeYFY3VItpG7cb9I60.png"
                            },
                            "key": "prince",
                            "elixir": 5,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 0,
                            "description": "Don't let the little pony fool you. Once the Prince gets a running start, you WILL be trampled. Deals double damage once he gets charging."
                        },
                        {
                            "name": "Guards",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
                            },
                            "key": "guards",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 7,
                            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
                        },
                        {
                            "name": "Musketeer",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Tex1C48UTq9FKtAX-3tzG0FJmc9jzncUZG3bb5Vf-Ds.png"
                            },
                            "key": "musketeer",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 0,
                            "description": "Don't be fooled by her delicately coiffed hair, the Musketeer is a mean shot with her trusty boomstick."
                        }
                    ]
                }
            ],
            "arena": {
                "name": "Challenger II",
                "arena": "League 2",
                "arenaID": 13,
                "trophyLimit": 4300
            }
        },
        {
            "type": "challenge",
            "mode": {
                "name": "Challenge",
                "deck": "Collection",
                "cardLevels": "Tournament",
                "overtimeSeconds": 180,
                "players": "PvP",
                "sameDeck": false
            },
            "utcTime": 1513981861,
            "deckType": "slotDeck",
            "teamSize": 1,
            "winner": 1,
            "teamCrowns": 1,
            "opponentCrowns": 0,
            "team": [
                {
                    "tag": "8L9L9GL",
                    "name": "Jo͛hͥn̽",
                    "crownsEarned": 1,
                    "startTrophies": 5188,
                    "clan": {
                        "tag": "2CCCP",
                        "name": "Reddit Alpha",
                        "badge": 16000167
                    },
                    "deck": [
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Guards",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
                            },
                            "key": "guards",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 7,
                            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Inferno Tower",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/GSHY_wrooMMLET6bG_WJB8redtwx66c4i80ipi4gYOM.png"
                            },
                            "key": "inferno-tower",
                            "elixir": 5,
                            "type": "Building",
                            "rarity": "Rare",
                            "arena": 4,
                            "description": "Defensive building, roasts targets for damage that increases over time. Burns through even the biggest and toughest enemies!"
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Electro Wizard",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/RsFaHgB3w6vXsTjXdPr3x8l_GbV9TbOUCvIx07prbrQ.png"
                            },
                            "key": "electro-wizard",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 7,
                            "description": "He lands with a \"POW!\", stuns nearby enemies and shoots lightning with both hands! What a show off."
                        },
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Ice Spirit",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                            },
                            "key": "ice-spirit",
                            "elixir": 1,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty."
                        }
                    ]
                }
            ],
            "opponent": [
                {
                    "tag": "2QYVUV09",
                    "name": "Firestorm",
                    "crownsEarned": 0,
                    "startTrophies": 4634,
                    "clan": {
                        "tag": "YL2CP",
                        "name": "Fuerza Mexicana",
                        "badge": 16000081
                    },
                    "deck": [
                        {
                            "name": "Goblins",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
                            },
                            "key": "goblins",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 1,
                            "description": "Three fast, unarmored melee attackers. Small, fast, green and mean!"
                        },
                        {
                            "name": "Bats",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
                            },
                            "key": "bats",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns a handful of tiny flying creatures with big ears. Having big ears doesn't mean they're good listeners."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Mega Knight",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/O2NycChSNhn_UK9nqBXUhhC_lILkiANzPuJjtjoz0CE.png"
                            },
                            "key": "mega-knight",
                            "elixir": 7,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He lands with the force of 1,000 mustaches, then jumps from one foe to the next dealing huge area damage. Stand aside!"
                        },
                        {
                            "name": "Ice Golem",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/r05cmpwV1o7i7FHodtZwW3fmjbXCW34IJCsDEV5cZC4.png"
                            },
                            "key": "ice-golem",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 8,
                            "description": "He's tough, targets buildings and explodes when destroyed, slowing nearby enemies. Made entirely out of ice... or is he?! Yes."
                        },
                        {
                            "name": "Hog Rider",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Ubu0oUl8tZkusnkZf8Xv9Vno5IO29Y-jbZ4fhoNJ5oc.png"
                            },
                            "key": "hog-rider",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 4,
                            "description": "Fast melee troop that targets buildings and can jump over the river. He followed the echoing call of \"Hog Riderrrrr\" all the way through the Arena doors."
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Inferno Dragon",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/y5HDbKtTbWG6En6TGWU0xoVIGs1-iQpIP4HC-VM7u8A.png"
                            },
                            "key": "inferno-dragon",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 4,
                            "description": "Shoots a focused beam of fire that increases in damage over time. Wears a helmet because flying can be dangerous."
                        }
                    ]
                }
            ],
            "arena": {
                "name": "Challenger II",
                "arena": "League 2",
                "arenaID": 13,
                "trophyLimit": 4300
            }
        },
        {
            "type": "challenge",
            "mode": {
                "name": "Challenge",
                "deck": "Collection",
                "cardLevels": "Tournament",
                "overtimeSeconds": 180,
                "players": "PvP",
                "sameDeck": false
            },
            "utcTime": 1513981629,
            "deckType": "slotDeck",
            "teamSize": 1,
            "winner": 1,
            "teamCrowns": 1,
            "opponentCrowns": 0,
            "team": [
                {
                    "tag": "8L9L9GL",
                    "name": "Jo͛hͥn̽",
                    "crownsEarned": 1,
                    "startTrophies": 5188,
                    "clan": {
                        "tag": "2CCCP",
                        "name": "Reddit Alpha",
                        "badge": 16000167
                    },
                    "deck": [
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Guards",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
                            },
                            "key": "guards",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 7,
                            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Inferno Tower",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/GSHY_wrooMMLET6bG_WJB8redtwx66c4i80ipi4gYOM.png"
                            },
                            "key": "inferno-tower",
                            "elixir": 5,
                            "type": "Building",
                            "rarity": "Rare",
                            "arena": 4,
                            "description": "Defensive building, roasts targets for damage that increases over time. Burns through even the biggest and toughest enemies!"
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Electro Wizard",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/RsFaHgB3w6vXsTjXdPr3x8l_GbV9TbOUCvIx07prbrQ.png"
                            },
                            "key": "electro-wizard",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 7,
                            "description": "He lands with a \"POW!\", stuns nearby enemies and shoots lightning with both hands! What a show off."
                        },
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Ice Spirit",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                            },
                            "key": "ice-spirit",
                            "elixir": 1,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty."
                        }
                    ]
                }
            ],
            "opponent": [
                {
                    "tag": "20VYVGJP2",
                    "name": "Jose",
                    "crownsEarned": 0,
                    "startTrophies": 4250,
                    "clan": {
                        "tag": "9PCVGYCJ",
                        "name": "LAST KINGS HN",
                        "badge": 16000097
                    },
                    "deck": [
                        {
                            "name": "Ice Spirit",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                            },
                            "key": "ice-spirit",
                            "elixir": 1,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty."
                        },
                        {
                            "name": "Archers",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/W4Hmp8MTSdXANN8KdblbtHwtsbt0o749BbxNqmJYfA8.png"
                            },
                            "key": "archers",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 0,
                            "description": "A pair of lightly armored ranged attackers. They'll help you take down ground and air units, but you're on your own with hair coloring advice."
                        },
                        {
                            "name": "Bats",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
                            },
                            "key": "bats",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns a handful of tiny flying creatures with big ears. Having big ears doesn't mean they're good listeners."
                        },
                        {
                            "name": "Rocket",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Ie07nQNK9CjhKOa4-arFAewi4EroqaA-86Xo7r5tx94.png"
                            },
                            "key": "rocket",
                            "elixir": 6,
                            "type": "Spell",
                            "rarity": "Rare",
                            "arena": 3,
                            "description": "Deals high damage to a small area. Looks really awesome doing it. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Mortar",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lPOSw6H7YOHq2miSCrf7ZDL3ANjhJdPPDYOTujdNrVE.png"
                            },
                            "key": "mortar",
                            "elixir": 4,
                            "type": "Building",
                            "rarity": "Common",
                            "arena": 6,
                            "description": "Defensive building with a long range. Shoots exploding boulders that deal area damage. Cannot shoot at targets that get very close!"
                        },
                        {
                            "name": "Tornado",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/QJB-QK1QJHdw4hjpAwVSyZBozc2ZWAR9pQ-SMUyKaT0.png"
                            },
                            "key": "tornado",
                            "elixir": 3,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 6,
                            "description": "Drags enemy troops to its center while dealing damage over time, just like a magnet. A big, swirling, Tornado-y magnet. Doesn't affect buildings."
                        },
                        {
                            "name": "The Log",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
                            },
                            "key": "the-log",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "A spilt bottle of Rage turned an innocent tree trunk into \"The Log\". Now, it seeks revenge by crushing anything in its path!"
                        },
                        {
                            "name": "Knight",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png"
                            },
                            "key": "knight",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 0,
                            "description": "A tough melee fighter. The Barbarian's handsome, cultured cousin. Rumor has it that he was knighted based on the sheer awesomeness of his mustache alone."
                        }
                    ]
                }
            ],
            "arena": {
                "name": "Frozen Peak",
                "arena": "Arena 8",
                "arenaID": 8,
                "trophyLimit": 2300
            }
        },
        {
            "type": "challenge",
            "mode": {
                "name": "Challenge",
                "deck": "Collection",
                "cardLevels": "Tournament",
                "overtimeSeconds": 180,
                "players": "PvP",
                "sameDeck": false
            },
            "utcTime": 1513981405,
            "deckType": "slotDeck",
            "teamSize": 1,
            "winner": 1,
            "teamCrowns": 1,
            "opponentCrowns": 0,
            "team": [
                {
                    "tag": "8L9L9GL",
                    "name": "Jo͛hͥn̽",
                    "crownsEarned": 1,
                    "startTrophies": 5188,
                    "clan": {
                        "tag": "2CCCP",
                        "name": "Reddit Alpha",
                        "badge": 16000167
                    },
                    "deck": [
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Guards",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
                            },
                            "key": "guards",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 7,
                            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Inferno Tower",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/GSHY_wrooMMLET6bG_WJB8redtwx66c4i80ipi4gYOM.png"
                            },
                            "key": "inferno-tower",
                            "elixir": 5,
                            "type": "Building",
                            "rarity": "Rare",
                            "arena": 4,
                            "description": "Defensive building, roasts targets for damage that increases over time. Burns through even the biggest and toughest enemies!"
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Electro Wizard",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/RsFaHgB3w6vXsTjXdPr3x8l_GbV9TbOUCvIx07prbrQ.png"
                            },
                            "key": "electro-wizard",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 7,
                            "description": "He lands with a \"POW!\", stuns nearby enemies and shoots lightning with both hands! What a show off."
                        },
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Ice Spirit",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                            },
                            "key": "ice-spirit",
                            "elixir": 1,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty."
                        }
                    ]
                }
            ],
            "opponent": [
                {
                    "tag": "2YG8JP",
                    "name": "O-Yama",
                    "crownsEarned": 0,
                    "startTrophies": 4805,
                    "clan": {
                        "tag": "J8P8P8Q",
                        "name": "I T A P E T Y",
                        "badge": 16000058
                    },
                    "deck": [
                        {
                            "name": "Hog Rider",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Ubu0oUl8tZkusnkZf8Xv9Vno5IO29Y-jbZ4fhoNJ5oc.png"
                            },
                            "key": "hog-rider",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 4,
                            "description": "Fast melee troop that targets buildings and can jump over the river. He followed the echoing call of \"Hog Riderrrrr\" all the way through the Arena doors."
                        },
                        {
                            "name": "Goblin Gang",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png"
                            },
                            "key": "goblin-gang",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 9,
                            "description": "Spawns five Goblins - three with knives, two with spears - at a discounted Elixir cost. It's like a Goblin Value Pack!"
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Bats",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
                            },
                            "key": "bats",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns a handful of tiny flying creatures with big ears. Having big ears doesn't mean they're good listeners."
                        },
                        {
                            "name": "Three Musketeers",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/_J2GhbkX3vswaFk1wG-dopwiHyNc_YiPhwroiKF3Mek.png"
                            },
                            "key": "three-musketeers",
                            "elixir": 9,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 7,
                            "description": "Trio of powerful, independent markswomen, fighting for justice and honor. Disrespecting them would not be just a mistake, it would be a cardinal sin!"
                        },
                        {
                            "name": "Knight",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png"
                            },
                            "key": "knight",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 0,
                            "description": "A tough melee fighter. The Barbarian's handsome, cultured cousin. Rumor has it that he was knighted based on the sheer awesomeness of his mustache alone."
                        },
                        {
                            "name": "Ice Spirit",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                            },
                            "key": "ice-spirit",
                            "elixir": 1,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty."
                        },
                        {
                            "name": "Elixir Collector",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/BGLo3Grsp81c72EpxLLk-Sofk3VY56zahnUNOv3JcT0.png"
                            },
                            "key": "elixir-collector",
                            "elixir": 6,
                            "type": "Building",
                            "rarity": "Rare",
                            "arena": 6,
                            "description": "You gotta spend Elixir to make Elixir."
                        }
                    ]
                }
            ],
            "arena": {
                "name": "Challenger I",
                "arena": "League 1",
                "arenaID": 12,
                "trophyLimit": 4000
            }
        },
        {
            "type": "challenge",
            "mode": {
                "name": "Challenge",
                "deck": "Collection",
                "cardLevels": "Tournament",
                "overtimeSeconds": 180,
                "players": "PvP",
                "sameDeck": false
            },
            "utcTime": 1513981146,
            "deckType": "slotDeck",
            "teamSize": 1,
            "winner": 1,
            "teamCrowns": 1,
            "opponentCrowns": 0,
            "team": [
                {
                    "tag": "8L9L9GL",
                    "name": "Jo͛hͥn̽",
                    "crownsEarned": 1,
                    "startTrophies": 5188,
                    "clan": {
                        "tag": "2CCCP",
                        "name": "Reddit Alpha",
                        "badge": 16000167
                    },
                    "deck": [
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Guards",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
                            },
                            "key": "guards",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 7,
                            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Inferno Tower",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/GSHY_wrooMMLET6bG_WJB8redtwx66c4i80ipi4gYOM.png"
                            },
                            "key": "inferno-tower",
                            "elixir": 5,
                            "type": "Building",
                            "rarity": "Rare",
                            "arena": 4,
                            "description": "Defensive building, roasts targets for damage that increases over time. Burns through even the biggest and toughest enemies!"
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Electro Wizard",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/RsFaHgB3w6vXsTjXdPr3x8l_GbV9TbOUCvIx07prbrQ.png"
                            },
                            "key": "electro-wizard",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 7,
                            "description": "He lands with a \"POW!\", stuns nearby enemies and shoots lightning with both hands! What a show off."
                        },
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Ice Spirit",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                            },
                            "key": "ice-spirit",
                            "elixir": 1,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty."
                        }
                    ]
                }
            ],
            "opponent": [
                {
                    "tag": "8GU0Y8UP2",
                    "name": "Rezende",
                    "crownsEarned": 0,
                    "startTrophies": 3149,
                    "clan": {
                        "tag": "URG8G2U",
                        "name": "Gigantes",
                        "badge": 16000047
                    },
                    "deck": [
                        {
                            "name": "Ice Spirit",
                            "level": 8,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                            },
                            "key": "ice-spirit",
                            "elixir": 1,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty."
                        },
                        {
                            "name": "Electro Wizard",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/RsFaHgB3w6vXsTjXdPr3x8l_GbV9TbOUCvIx07prbrQ.png"
                            },
                            "key": "electro-wizard",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 7,
                            "description": "He lands with a \"POW!\", stuns nearby enemies and shoots lightning with both hands! What a show off."
                        },
                        {
                            "name": "Princess",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/bAwMcqp9EKVIKH3ZLm_m0MqZFSG72zG-vKxpx8aKoVs.png"
                            },
                            "key": "princess",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 7,
                            "description": "This stunning Princess shoots flaming arrows from long range. If you're feeling warm feelings towards her, it's probably because you're on fire."
                        },
                        {
                            "name": "Tornado",
                            "level": 3,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/QJB-QK1QJHdw4hjpAwVSyZBozc2ZWAR9pQ-SMUyKaT0.png"
                            },
                            "key": "tornado",
                            "elixir": 3,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 6,
                            "description": "Drags enemy troops to its center while dealing damage over time, just like a magnet. A big, swirling, Tornado-y magnet. Doesn't affect buildings."
                        },
                        {
                            "name": "P.E.K.K.A",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/MlArURKhn_zWAZY-Xj1qIRKLVKquarG25BXDjUQajNs.png"
                            },
                            "key": "pekka",
                            "elixir": 7,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 4,
                            "description": "A heavily armored, slow melee fighter. Swings from the hip but packs a huge punch."
                        },
                        {
                            "name": "Knight",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png"
                            },
                            "key": "knight",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 0,
                            "description": "A tough melee fighter. The Barbarian's handsome, cultured cousin. Rumor has it that he was knighted based on the sheer awesomeness of his mustache alone."
                        },
                        {
                            "name": "Bats",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
                            },
                            "key": "bats",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns a handful of tiny flying creatures with big ears. Having big ears doesn't mean they're good listeners."
                        },
                        {
                            "name": "Wizard",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Mej7vnv4H_3p_8qPs_N6_GKahy6HDr7pU7i9eTHS84U.png"
                            },
                            "key": "wizard",
                            "elixir": 5,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 5,
                            "description": "The most awesome man to ever set foot in the arena, the Wizard will blow you away with his handsomeness... and/or fireballs."
                        }
                    ]
                }
            ],
            "arena": {
                "name": "Legendary Arena",
                "arena": "Arena 12",
                "arenaID": 11,
                "trophyLimit": 3800
            }
        },
        {
            "type": "challenge",
            "mode": {
                "name": "Challenge",
                "deck": "Collection",
                "cardLevels": "Tournament",
                "overtimeSeconds": 180,
                "players": "PvP",
                "sameDeck": false
            },
            "utcTime": 1513980806,
            "deckType": "slotDeck",
            "teamSize": 1,
            "winner": -1,
            "teamCrowns": 0,
            "opponentCrowns": 1,
            "team": [
                {
                    "tag": "8L9L9GL",
                    "name": "Jo͛hͥn̽",
                    "crownsEarned": 0,
                    "startTrophies": 5188,
                    "clan": {
                        "tag": "2CCCP",
                        "name": "Reddit Alpha",
                        "badge": 16000167
                    },
                    "deck": [
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Guards",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
                            },
                            "key": "guards",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 7,
                            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Inferno Tower",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/GSHY_wrooMMLET6bG_WJB8redtwx66c4i80ipi4gYOM.png"
                            },
                            "key": "inferno-tower",
                            "elixir": 5,
                            "type": "Building",
                            "rarity": "Rare",
                            "arena": 4,
                            "description": "Defensive building, roasts targets for damage that increases over time. Burns through even the biggest and toughest enemies!"
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Electro Wizard",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/RsFaHgB3w6vXsTjXdPr3x8l_GbV9TbOUCvIx07prbrQ.png"
                            },
                            "key": "electro-wizard",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 7,
                            "description": "He lands with a \"POW!\", stuns nearby enemies and shoots lightning with both hands! What a show off."
                        },
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Ice Spirit",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                            },
                            "key": "ice-spirit",
                            "elixir": 1,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty."
                        }
                    ]
                }
            ],
            "opponent": [
                {
                    "tag": "9J0C2QPR",
                    "name": "NewCzRush",
                    "crownsEarned": 1,
                    "startTrophies": 4385,
                    "clan": {
                        "tag": "22L0C8JR",
                        "name": "蕃薯島民",
                        "badge": 16000153
                    },
                    "deck": [
                        {
                            "name": "Giant",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Axr4ox5_b7edmLsoHxBX3vmgijAIibuF6RImTbqLlXE.png"
                            },
                            "key": "giant",
                            "elixir": 5,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 0,
                            "description": "Slow but durable, only attacks buildings. A real one-man wrecking crew!"
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Goblins",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
                            },
                            "key": "goblins",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 1,
                            "description": "Three fast, unarmored melee attackers. Small, fast, green and mean!"
                        },
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Inferno Dragon",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/y5HDbKtTbWG6En6TGWU0xoVIGs1-iQpIP4HC-VM7u8A.png"
                            },
                            "key": "inferno-dragon",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 4,
                            "description": "Shoots a focused beam of fire that increases in damage over time. Wears a helmet because flying can be dangerous."
                        },
                        {
                            "name": "Minions",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/yHGpoEnmUWPGV_hBbhn-Kk-Bs838OjGzWzJJlQpQKQA.png"
                            },
                            "key": "minions",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 2,
                            "description": "Three fast, unarmored flying attackers. Roses are red, minions are blue, they can fly, and will crush you!"
                        },
                        {
                            "name": "Rocket",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Ie07nQNK9CjhKOa4-arFAewi4EroqaA-86Xo7r5tx94.png"
                            },
                            "key": "rocket",
                            "elixir": 6,
                            "type": "Spell",
                            "rarity": "Rare",
                            "arena": 3,
                            "description": "Deals high damage to a small area. Looks really awesome doing it. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Ice Wizard",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/W3dkw0HTw9n1jB-zbknY2w3wHuyuLxSRIAV5fUT1SEY.png"
                            },
                            "key": "ice-wizard",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 5,
                            "description": "This chill caster throws ice shards that slow down enemies' movement and attack speed. Despite being freezing cold, he has a handlebar mustache that's too hot for TV."
                        }
                    ]
                }
            ],
            "arena": {
                "name": "Master I",
                "arena": "League 4",
                "arenaID": 15,
                "trophyLimit": 4900
            }
        },
        {
            "type": "challenge",
            "mode": {
                "name": "Challenge",
                "deck": "Collection",
                "cardLevels": "Tournament",
                "overtimeSeconds": 180,
                "players": "PvP",
                "sameDeck": false
            },
            "utcTime": 1513980606,
            "deckType": "slotDeck",
            "teamSize": 1,
            "winner": 1,
            "teamCrowns": 1,
            "opponentCrowns": 0,
            "team": [
                {
                    "tag": "8L9L9GL",
                    "name": "Jo͛hͥn̽",
                    "crownsEarned": 1,
                    "startTrophies": 5188,
                    "clan": {
                        "tag": "2CCCP",
                        "name": "Reddit Alpha",
                        "badge": 16000167
                    },
                    "deck": [
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Guards",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
                            },
                            "key": "guards",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 7,
                            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Inferno Tower",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/GSHY_wrooMMLET6bG_WJB8redtwx66c4i80ipi4gYOM.png"
                            },
                            "key": "inferno-tower",
                            "elixir": 5,
                            "type": "Building",
                            "rarity": "Rare",
                            "arena": 4,
                            "description": "Defensive building, roasts targets for damage that increases over time. Burns through even the biggest and toughest enemies!"
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Electro Wizard",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/RsFaHgB3w6vXsTjXdPr3x8l_GbV9TbOUCvIx07prbrQ.png"
                            },
                            "key": "electro-wizard",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 7,
                            "description": "He lands with a \"POW!\", stuns nearby enemies and shoots lightning with both hands! What a show off."
                        },
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Ice Spirit",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                            },
                            "key": "ice-spirit",
                            "elixir": 1,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty."
                        }
                    ]
                }
            ],
            "opponent": [
                {
                    "tag": "280RU9RQU",
                    "name": "lil' muscles",
                    "crownsEarned": 0,
                    "startTrophies": 4233,
                    "clan": {
                        "tag": "90R9C8",
                        "name": "*Top Guns*",
                        "badge": 16000028
                    },
                    "deck": [
                        {
                            "name": "Hog Rider",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Ubu0oUl8tZkusnkZf8Xv9Vno5IO29Y-jbZ4fhoNJ5oc.png"
                            },
                            "key": "hog-rider",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 4,
                            "description": "Fast melee troop that targets buildings and can jump over the river. He followed the echoing call of \"Hog Riderrrrr\" all the way through the Arena doors."
                        },
                        {
                            "name": "Knight",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png"
                            },
                            "key": "knight",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 0,
                            "description": "A tough melee fighter. The Barbarian's handsome, cultured cousin. Rumor has it that he was knighted based on the sheer awesomeness of his mustache alone."
                        },
                        {
                            "name": "Freeze",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/I1M20_Zs_p_BS1NaNIVQjuMJkYI_1-ePtwYZahn0JXQ.png"
                            },
                            "key": "freeze",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 4,
                            "description": "Freezes troops and buildings, making them unable to move or attack. Everybody chill."
                        },
                        {
                            "name": "Goblin Barrel",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/CoZdp5PpsTH858l212lAMeJxVJ0zxv9V-f5xC8Bvj5g.png"
                            },
                            "key": "goblin-barrel",
                            "elixir": 3,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 1,
                            "description": "Spawns three Goblins anywhere in the Arena. It's going to be a thrilling ride, boys!"
                        },
                        {
                            "name": "Executioner",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/9XL5BP2mqzV8kza6KF8rOxrpCZTyuGLp2l413DTjEoM.png"
                            },
                            "key": "executioner",
                            "elixir": 5,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 9,
                            "description": "He throws his axe like a boomerang, striking all enemies on the way out AND back. It's a miracle he doesn't lose an arm."
                        },
                        {
                            "name": "Skeleton Army",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/fAOToOi1pRy7svN2xQS6mDkhQw2pj9m_17FauaNqyl4.png"
                            },
                            "key": "skeleton-army",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 0,
                            "description": "Spawns an army of Skeletons. Meet Larry and his friends Harry, Gerry, Terry, Mary, etc."
                        },
                        {
                            "name": "Tornado",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/QJB-QK1QJHdw4hjpAwVSyZBozc2ZWAR9pQ-SMUyKaT0.png"
                            },
                            "key": "tornado",
                            "elixir": 3,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 6,
                            "description": "Drags enemy troops to its center while dealing damage over time, just like a magnet. A big, swirling, Tornado-y magnet. Doesn't affect buildings."
                        },
                        {
                            "name": "Goblin Gang",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png"
                            },
                            "key": "goblin-gang",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 9,
                            "description": "Spawns five Goblins - three with knives, two with spears - at a discounted Elixir cost. It's like a Goblin Value Pack!"
                        }
                    ]
                }
            ],
            "arena": {
                "name": "Master I",
                "arena": "League 4",
                "arenaID": 15,
                "trophyLimit": 4900
            }
        },
        {
            "type": "challenge",
            "mode": {
                "name": "Challenge",
                "deck": "Collection",
                "cardLevels": "Tournament",
                "overtimeSeconds": 180,
                "players": "PvP",
                "sameDeck": false
            },
            "utcTime": 1513980409,
            "deckType": "slotDeck",
            "teamSize": 1,
            "winner": 1,
            "teamCrowns": 1,
            "opponentCrowns": 0,
            "team": [
                {
                    "tag": "8L9L9GL",
                    "name": "Jo͛hͥn̽",
                    "crownsEarned": 1,
                    "startTrophies": 5188,
                    "clan": {
                        "tag": "2CCCP",
                        "name": "Reddit Alpha",
                        "badge": 16000167
                    },
                    "deck": [
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Guards",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
                            },
                            "key": "guards",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 7,
                            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Inferno Tower",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/GSHY_wrooMMLET6bG_WJB8redtwx66c4i80ipi4gYOM.png"
                            },
                            "key": "inferno-tower",
                            "elixir": 5,
                            "type": "Building",
                            "rarity": "Rare",
                            "arena": 4,
                            "description": "Defensive building, roasts targets for damage that increases over time. Burns through even the biggest and toughest enemies!"
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Electro Wizard",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/RsFaHgB3w6vXsTjXdPr3x8l_GbV9TbOUCvIx07prbrQ.png"
                            },
                            "key": "electro-wizard",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 7,
                            "description": "He lands with a \"POW!\", stuns nearby enemies and shoots lightning with both hands! What a show off."
                        },
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Ice Spirit",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                            },
                            "key": "ice-spirit",
                            "elixir": 1,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty."
                        }
                    ]
                }
            ],
            "opponent": [
                {
                    "tag": "CQ90Q2QG",
                    "name": "Jengy",
                    "crownsEarned": 0,
                    "startTrophies": 3407,
                    "clan": {
                        "tag": "YJPJUJ8",
                        "name": "Italia Monkeyyy",
                        "badge": 16000171
                    },
                    "deck": [
                        {
                            "name": "Ice Golem",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/r05cmpwV1o7i7FHodtZwW3fmjbXCW34IJCsDEV5cZC4.png"
                            },
                            "key": "ice-golem",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 8,
                            "description": "He's tough, targets buildings and explodes when destroyed, slowing nearby enemies. Made entirely out of ice... or is he?! Yes."
                        },
                        {
                            "name": "Princess",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/bAwMcqp9EKVIKH3ZLm_m0MqZFSG72zG-vKxpx8aKoVs.png"
                            },
                            "key": "princess",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 7,
                            "description": "This stunning Princess shoots flaming arrows from long range. If you're feeling warm feelings towards her, it's probably because you're on fire."
                        },
                        {
                            "name": "Mega Minion",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/-T_e4YLbuhPBKbYnBwQfXgynNpp5eOIN_0RracYwL9c.png"
                            },
                            "key": "mega-minion",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 7,
                            "description": "Flying, armored and powerful. What could be its weakness?! Cupcakes."
                        },
                        {
                            "name": "Musketeer",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Tex1C48UTq9FKtAX-3tzG0FJmc9jzncUZG3bb5Vf-Ds.png"
                            },
                            "key": "musketeer",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 0,
                            "description": "Don't be fooled by her delicately coiffed hair, the Musketeer is a mean shot with her trusty boomstick."
                        },
                        {
                            "name": "P.E.K.K.A",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/MlArURKhn_zWAZY-Xj1qIRKLVKquarG25BXDjUQajNs.png"
                            },
                            "key": "pekka",
                            "elixir": 7,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 4,
                            "description": "A heavily armored, slow melee fighter. Swings from the hip but packs a huge punch."
                        },
                        {
                            "name": "Witch",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/cfwk1vzehVyHC-uloEIH6NOI0hOdofCutR5PyhIgO6w.png"
                            },
                            "key": "witch",
                            "elixir": 5,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 0,
                            "description": "Summons Skeletons, shoots destructo beams, has glowing pink eyes that unfortunately don't shoot lasers."
                        },
                        {
                            "name": "Inferno Dragon",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/y5HDbKtTbWG6En6TGWU0xoVIGs1-iQpIP4HC-VM7u8A.png"
                            },
                            "key": "inferno-dragon",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 4,
                            "description": "Shoots a focused beam of fire that increases in damage over time. Wears a helmet because flying can be dangerous."
                        },
                        {
                            "name": "The Log",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
                            },
                            "key": "the-log",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "A spilt bottle of Rage turned an innocent tree trunk into \"The Log\". Now, it seeks revenge by crushing anything in its path!"
                        }
                    ]
                }
            ],
            "arena": {
                "name": "Goblin Stadium",
                "arena": "Arena 1",
                "arenaID": 1,
                "trophyLimit": 0
            }
        },
        {
            "type": "challenge",
            "mode": {
                "name": "Challenge",
                "deck": "Collection",
                "cardLevels": "Tournament",
                "overtimeSeconds": 180,
                "players": "PvP",
                "sameDeck": false
            },
            "utcTime": 1513980062,
            "deckType": "slotDeck",
            "teamSize": 1,
            "winner": 1,
            "teamCrowns": 1,
            "opponentCrowns": 0,
            "team": [
                {
                    "tag": "8L9L9GL",
                    "name": "Jo͛hͥn̽",
                    "crownsEarned": 1,
                    "startTrophies": 5188,
                    "clan": {
                        "tag": "2CCCP",
                        "name": "Reddit Alpha",
                        "badge": 16000167
                    },
                    "deck": [
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Guards",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
                            },
                            "key": "guards",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 7,
                            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Inferno Tower",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/GSHY_wrooMMLET6bG_WJB8redtwx66c4i80ipi4gYOM.png"
                            },
                            "key": "inferno-tower",
                            "elixir": 5,
                            "type": "Building",
                            "rarity": "Rare",
                            "arena": 4,
                            "description": "Defensive building, roasts targets for damage that increases over time. Burns through even the biggest and toughest enemies!"
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Electro Wizard",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/RsFaHgB3w6vXsTjXdPr3x8l_GbV9TbOUCvIx07prbrQ.png"
                            },
                            "key": "electro-wizard",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 7,
                            "description": "He lands with a \"POW!\", stuns nearby enemies and shoots lightning with both hands! What a show off."
                        },
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Ice Spirit",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                            },
                            "key": "ice-spirit",
                            "elixir": 1,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty."
                        }
                    ]
                }
            ],
            "opponent": [
                {
                    "tag": "2JUG28828",
                    "name": "trolls",
                    "crownsEarned": 0,
                    "startTrophies": 3123,
                    "clan": {
                        "tag": "2VYRLCUG",
                        "name": "Kaos Urbano",
                        "badge": 16000027
                    },
                    "deck": [
                        {
                            "name": "Inferno Dragon",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/y5HDbKtTbWG6En6TGWU0xoVIGs1-iQpIP4HC-VM7u8A.png"
                            },
                            "key": "inferno-dragon",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 4,
                            "description": "Shoots a focused beam of fire that increases in damage over time. Wears a helmet because flying can be dangerous."
                        },
                        {
                            "name": "Bats",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
                            },
                            "key": "bats",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns a handful of tiny flying creatures with big ears. Having big ears doesn't mean they're good listeners."
                        },
                        {
                            "name": "Giant",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Axr4ox5_b7edmLsoHxBX3vmgijAIibuF6RImTbqLlXE.png"
                            },
                            "key": "giant",
                            "elixir": 5,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 0,
                            "description": "Slow but durable, only attacks buildings. A real one-man wrecking crew!"
                        },
                        {
                            "name": "Fireball",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png"
                            },
                            "key": "fireball",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Rare",
                            "arena": 0,
                            "description": "Annnnnd... Fireball. Incinerates a small area, dealing high damage. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Goblin Barrel",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/CoZdp5PpsTH858l212lAMeJxVJ0zxv9V-f5xC8Bvj5g.png"
                            },
                            "key": "goblin-barrel",
                            "elixir": 3,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 1,
                            "description": "Spawns three Goblins anywhere in the Arena. It's going to be a thrilling ride, boys!"
                        },
                        {
                            "name": "The Log",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
                            },
                            "key": "the-log",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "A spilt bottle of Rage turned an innocent tree trunk into \"The Log\". Now, it seeks revenge by crushing anything in its path!"
                        },
                        {
                            "name": "Night Witch",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/NpCrXDEDBBJgNv9QrBAcJmmMFbS7pe3KCY8xJ5VB18A.png"
                            },
                            "key": "night-witch",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 8,
                            "description": "Summons Bats to do her bidding, even after death! If you get too close, she isn't afraid of pitching in with her mean-looking battle staff."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        }
                    ]
                }
            ],
            "arena": {
                "name": "Master I",
                "arena": "League 4",
                "arenaID": 15,
                "trophyLimit": 4900
            }
        },
        {
            "type": "challenge",
            "mode": {
                "name": "Challenge",
                "deck": "Collection",
                "cardLevels": "Tournament",
                "overtimeSeconds": 180,
                "players": "PvP",
                "sameDeck": false
            },
            "utcTime": 1513979709,
            "deckType": "slotDeck",
            "teamSize": 1,
            "winner": 1,
            "teamCrowns": 1,
            "opponentCrowns": 0,
            "team": [
                {
                    "tag": "8L9L9GL",
                    "name": "Jo͛hͥn̽",
                    "crownsEarned": 1,
                    "startTrophies": 5188,
                    "clan": {
                        "tag": "2CCCP",
                        "name": "Reddit Alpha",
                        "badge": 16000167
                    },
                    "deck": [
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Guards",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
                            },
                            "key": "guards",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 7,
                            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Skeleton Barrel",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/vCB4DWCcrGbTkarjcOiVz4aNDx6GWLm0yUepg9E1MGo.png"
                            },
                            "key": "skeleton-barrel",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 6,
                            "description": "It's a Skeleton party in the sky, until all the balloons pop... then it's a Skeleton party on the ground!"
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Bats",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
                            },
                            "key": "bats",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns a handful of tiny flying creatures with big ears. Having big ears doesn't mean they're good listeners."
                        },
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Inferno Dragon",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/y5HDbKtTbWG6En6TGWU0xoVIGs1-iQpIP4HC-VM7u8A.png"
                            },
                            "key": "inferno-dragon",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 4,
                            "description": "Shoots a focused beam of fire that increases in damage over time. Wears a helmet because flying can be dangerous."
                        }
                    ]
                }
            ],
            "opponent": [
                {
                    "tag": "2G8QRVCP2",
                    "name": "Supercell",
                    "crownsEarned": 0,
                    "startTrophies": 3113,
                    "clan": {
                        "tag": "8GUVUP9G",
                        "name": "The kings",
                        "badge": 16000014
                    },
                    "deck": [
                        {
                            "name": "Lumberjack",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/E6RWrnCuk13xMX5OE1EQtLEKTZQV6B78d00y8PlXt6Q.png"
                            },
                            "key": "lumberjack",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 8,
                            "description": "He chops trees by day and hunts The Log by night. His bottle of Rage spills everywhere when he dies."
                        },
                        {
                            "name": "Hog Rider",
                            "level": 6,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Ubu0oUl8tZkusnkZf8Xv9Vno5IO29Y-jbZ4fhoNJ5oc.png"
                            },
                            "key": "hog-rider",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 4,
                            "description": "Fast melee troop that targets buildings and can jump over the river. He followed the echoing call of \"Hog Riderrrrr\" all the way through the Arena doors."
                        },
                        {
                            "name": "Skeleton Army",
                            "level": 3,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/fAOToOi1pRy7svN2xQS6mDkhQw2pj9m_17FauaNqyl4.png"
                            },
                            "key": "skeleton-army",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 0,
                            "description": "Spawns an army of Skeletons. Meet Larry and his friends Harry, Gerry, Terry, Mary, etc."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Wizard",
                            "level": 6,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Mej7vnv4H_3p_8qPs_N6_GKahy6HDr7pU7i9eTHS84U.png"
                            },
                            "key": "wizard",
                            "elixir": 5,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 5,
                            "description": "The most awesome man to ever set foot in the arena, the Wizard will blow you away with his handsomeness... and/or fireballs."
                        },
                        {
                            "name": "Ice Spirit",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                            },
                            "key": "ice-spirit",
                            "elixir": 1,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty."
                        },
                        {
                            "name": "P.E.K.K.A",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/MlArURKhn_zWAZY-Xj1qIRKLVKquarG25BXDjUQajNs.png"
                            },
                            "key": "pekka",
                            "elixir": 7,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 4,
                            "description": "A heavily armored, slow melee fighter. Swings from the hip but packs a huge punch."
                        },
                        {
                            "name": "Fireball",
                            "level": 6,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png"
                            },
                            "key": "fireball",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Rare",
                            "arena": 0,
                            "description": "Annnnnd... Fireball. Incinerates a small area, dealing high damage. Reduced damage to Crown Towers."
                        }
                    ]
                }
            ],
            "arena": {
                "name": "Builder's Workshop",
                "arena": "Arena 6",
                "arenaID": 6,
                "trophyLimit": 1700
            }
        },
        {
            "type": "challenge",
            "mode": {
                "name": "Challenge",
                "deck": "Collection",
                "cardLevels": "Tournament",
                "overtimeSeconds": 180,
                "players": "PvP",
                "sameDeck": false
            },
            "utcTime": 1513979515,
            "deckType": "slotDeck",
            "teamSize": 1,
            "winner": 3,
            "teamCrowns": 3,
            "opponentCrowns": 0,
            "team": [
                {
                    "tag": "8L9L9GL",
                    "name": "Jo͛hͥn̽",
                    "crownsEarned": 3,
                    "startTrophies": 5188,
                    "clan": {
                        "tag": "2CCCP",
                        "name": "Reddit Alpha",
                        "badge": 16000167
                    },
                    "deck": [
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Guards",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
                            },
                            "key": "guards",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 7,
                            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Skeleton Barrel",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/vCB4DWCcrGbTkarjcOiVz4aNDx6GWLm0yUepg9E1MGo.png"
                            },
                            "key": "skeleton-barrel",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 6,
                            "description": "It's a Skeleton party in the sky, until all the balloons pop... then it's a Skeleton party on the ground!"
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Bats",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
                            },
                            "key": "bats",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns a handful of tiny flying creatures with big ears. Having big ears doesn't mean they're good listeners."
                        },
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Inferno Dragon",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/y5HDbKtTbWG6En6TGWU0xoVIGs1-iQpIP4HC-VM7u8A.png"
                            },
                            "key": "inferno-dragon",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 4,
                            "description": "Shoots a focused beam of fire that increases in damage over time. Wears a helmet because flying can be dangerous."
                        }
                    ]
                }
            ],
            "opponent": [
                {
                    "tag": "CQY9Y8P8",
                    "name": "LilDickyD",
                    "crownsEarned": 0,
                    "startTrophies": 3096,
                    "clan": {
                        "tag": "29V0PPR",
                        "name": "CoCadiles",
                        "badge": 16000024
                    },
                    "deck": [
                        {
                            "name": "Bats",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
                            },
                            "key": "bats",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns a handful of tiny flying creatures with big ears. Having big ears doesn't mean they're good listeners."
                        },
                        {
                            "name": "Minions",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/yHGpoEnmUWPGV_hBbhn-Kk-Bs838OjGzWzJJlQpQKQA.png"
                            },
                            "key": "minions",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 2,
                            "description": "Three fast, unarmored flying attackers. Roses are red, minions are blue, they can fly, and will crush you!"
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Princess",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/bAwMcqp9EKVIKH3ZLm_m0MqZFSG72zG-vKxpx8aKoVs.png"
                            },
                            "key": "princess",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 7,
                            "description": "This stunning Princess shoots flaming arrows from long range. If you're feeling warm feelings towards her, it's probably because you're on fire."
                        },
                        {
                            "name": "P.E.K.K.A",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/MlArURKhn_zWAZY-Xj1qIRKLVKquarG25BXDjUQajNs.png"
                            },
                            "key": "pekka",
                            "elixir": 7,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 4,
                            "description": "A heavily armored, slow melee fighter. Swings from the hip but packs a huge punch."
                        },
                        {
                            "name": "Battle Ram",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/dyc50V2cplKi4H7pq1B3I36pl_sEH5DQrNHboS_dbbM.png"
                            },
                            "key": "battle-ram",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 6,
                            "description": "Two Barbarians holding a big log charge at the nearest building, dealing significant damage if they connect; then they go to town with their swords!"
                        },
                        {
                            "name": "Tornado",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/QJB-QK1QJHdw4hjpAwVSyZBozc2ZWAR9pQ-SMUyKaT0.png"
                            },
                            "key": "tornado",
                            "elixir": 3,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 6,
                            "description": "Drags enemy troops to its center while dealing damage over time, just like a magnet. A big, swirling, Tornado-y magnet. Doesn't affect buildings."
                        },
                        {
                            "name": "Rage",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/bGP21OOmcpHMJ5ZA79bHVV2D-NzPtDkvBskCNJb7pg0.png"
                            },
                            "key": "rage",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 3,
                            "description": "Increases troop movement and attack speed. Buildings attack faster and summon troops quicker, too. Chaaaarge!"
                        }
                    ]
                }
            ],
            "arena": {
                "name": "Builder's Workshop",
                "arena": "Arena 6",
                "arenaID": 6,
                "trophyLimit": 1700
            }
        },
        {
            "type": "PvP",
            "mode": {
                "name": "Ladder",
                "deck": "Collection",
                "cardLevels": "Ladder",
                "overtimeSeconds": 60,
                "players": "PvP",
                "sameDeck": false
            },
            "utcTime": 1513977120,
            "deckType": "slotDeck",
            "teamSize": 1,
            "winner": 1,
            "teamCrowns": 1,
            "opponentCrowns": 0,
            "team": [
                {
                    "tag": "8L9L9GL",
                    "name": "Jo͛hͥn̽",
                    "crownsEarned": 1,
                    "startTrophies": 5157,
                    "clan": {
                        "tag": "2CCCP",
                        "name": "Reddit Alpha",
                        "badge": 16000167
                    },
                    "deck": [
                        {
                            "name": "Knight",
                            "level": 13,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png"
                            },
                            "key": "knight",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 0,
                            "description": "A tough melee fighter. The Barbarian's handsome, cultured cousin. Rumor has it that he was knighted based on the sheer awesomeness of his mustache alone."
                        },
                        {
                            "name": "Mortar",
                            "level": 13,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lPOSw6H7YOHq2miSCrf7ZDL3ANjhJdPPDYOTujdNrVE.png"
                            },
                            "key": "mortar",
                            "elixir": 4,
                            "type": "Building",
                            "rarity": "Common",
                            "arena": 6,
                            "description": "Defensive building with a long range. Shoots exploding boulders that deal area damage. Cannot shoot at targets that get very close!"
                        },
                        {
                            "name": "Miner",
                            "level": 4,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "The Log",
                            "level": 4,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
                            },
                            "key": "the-log",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "A spilt bottle of Rage turned an innocent tree trunk into \"The Log\". Now, it seeks revenge by crushing anything in its path!"
                        },
                        {
                            "name": "Minion Horde",
                            "level": 13,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Wyjq5l0IXHTkX9Rmpap6HaH08MvjbxFp1xBO9a47YSI.png"
                            },
                            "key": "minion-horde",
                            "elixir": 5,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 4,
                            "description": "Six fast, unarmored flying attackers. Three's a crowd, six is a horde!"
                        },
                        {
                            "name": "Goblin Gang",
                            "level": 13,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png"
                            },
                            "key": "goblin-gang",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 9,
                            "description": "Spawns five Goblins - three with knives, two with spears - at a discounted Elixir cost. It's like a Goblin Value Pack!"
                        },
                        {
                            "name": "Ice Spirit",
                            "level": 13,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                            },
                            "key": "ice-spirit",
                            "elixir": 1,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty."
                        },
                        {
                            "name": "Princess",
                            "level": 5,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/bAwMcqp9EKVIKH3ZLm_m0MqZFSG72zG-vKxpx8aKoVs.png"
                            },
                            "key": "princess",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 7,
                            "description": "This stunning Princess shoots flaming arrows from long range. If you're feeling warm feelings towards her, it's probably because you're on fire."
                        }
                    ]
                }
            ],
            "opponent": [
                {
                    "tag": "8UJ9002V",
                    "name": "1989h112",
                    "crownsEarned": 0,
                    "startTrophies": 5177,
                    "clan": {
                        "tag": "82PPURGV",
                        "name": "BrengiTitans",
                        "badge": 16000012
                    },
                    "deck": [
                        {
                            "name": "Archers",
                            "level": 13,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/W4Hmp8MTSdXANN8KdblbtHwtsbt0o749BbxNqmJYfA8.png"
                            },
                            "key": "archers",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 0,
                            "description": "A pair of lightly armored ranged attackers. They'll help you take down ground and air units, but you're on your own with hair coloring advice."
                        },
                        {
                            "name": "Royal Giant",
                            "level": 13,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/mnlRaNtmfpQx2e6mp70sLd0ND-pKPF70Cf87_agEKg4.png"
                            },
                            "key": "royal-giant",
                            "elixir": 6,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 7,
                            "description": "Destroying enemy buildings with his massive cannon is his job; making a raggedy blond beard look good is his passion."
                        },
                        {
                            "name": "Tesla",
                            "level": 13,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/OiwnGrxFMNiHetYEerE-UZt0L_uYNzFY7qV_CA_OxR4.png"
                            },
                            "key": "tesla",
                            "elixir": 4,
                            "type": "Building",
                            "rarity": "Common",
                            "arena": 4,
                            "description": "Defensive building. Whenever it's not zapping the enemy, the power of Electrickery is best kept grounded."
                        },
                        {
                            "name": "Arrows",
                            "level": 13,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Flsoci-Y6y8ZFVi5uRFTmgkPnCmMyMVrU7YmmuPvSBo.png"
                            },
                            "key": "arrows",
                            "elixir": 3,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 0,
                            "description": "Arrows pepper a large area, damaging all enemies hit. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Knight",
                            "level": 13,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png"
                            },
                            "key": "knight",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 0,
                            "description": "A tough melee fighter. The Barbarian's handsome, cultured cousin. Rumor has it that he was knighted based on the sheer awesomeness of his mustache alone."
                        },
                        {
                            "name": "Mega Minion",
                            "level": 10,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/-T_e4YLbuhPBKbYnBwQfXgynNpp5eOIN_0RracYwL9c.png"
                            },
                            "key": "mega-minion",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 7,
                            "description": "Flying, armored and powerful. What could be its weakness?! Cupcakes."
                        },
                        {
                            "name": "The Log",
                            "level": 3,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
                            },
                            "key": "the-log",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "A spilt bottle of Rage turned an innocent tree trunk into \"The Log\". Now, it seeks revenge by crushing anything in its path!"
                        },
                        {
                            "name": "Fireball",
                            "level": 11,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png"
                            },
                            "key": "fireball",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Rare",
                            "arena": 0,
                            "description": "Annnnnd... Fireball. Incinerates a small area, dealing high damage. Reduced damage to Crown Towers."
                        }
                    ]
                }
            ],
            "arena": {
                "name": "Master I",
                "arena": "League 4",
                "arenaID": 15,
                "trophyLimit": 4900
            }
        },
        {
            "type": "PvP",
            "mode": {
                "name": "Ladder",
                "deck": "Collection",
                "cardLevels": "Ladder",
                "overtimeSeconds": 60,
                "players": "PvP",
                "sameDeck": false
            },
            "utcTime": 1513976563,
            "deckType": "slotDeck",
            "teamSize": 1,
            "winner": 1,
            "teamCrowns": 1,
            "opponentCrowns": 0,
            "team": [
                {
                    "tag": "8L9L9GL",
                    "name": "Jo͛hͥn̽",
                    "crownsEarned": 1,
                    "startTrophies": 5131,
                    "clan": {
                        "tag": "2CCCP",
                        "name": "Reddit Alpha",
                        "badge": 16000167
                    },
                    "deck": [
                        {
                            "name": "Knight",
                            "level": 13,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png"
                            },
                            "key": "knight",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 0,
                            "description": "A tough melee fighter. The Barbarian's handsome, cultured cousin. Rumor has it that he was knighted based on the sheer awesomeness of his mustache alone."
                        },
                        {
                            "name": "Mortar",
                            "level": 13,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lPOSw6H7YOHq2miSCrf7ZDL3ANjhJdPPDYOTujdNrVE.png"
                            },
                            "key": "mortar",
                            "elixir": 4,
                            "type": "Building",
                            "rarity": "Common",
                            "arena": 6,
                            "description": "Defensive building with a long range. Shoots exploding boulders that deal area damage. Cannot shoot at targets that get very close!"
                        },
                        {
                            "name": "Miner",
                            "level": 4,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "The Log",
                            "level": 4,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
                            },
                            "key": "the-log",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "A spilt bottle of Rage turned an innocent tree trunk into \"The Log\". Now, it seeks revenge by crushing anything in its path!"
                        },
                        {
                            "name": "Minion Horde",
                            "level": 13,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Wyjq5l0IXHTkX9Rmpap6HaH08MvjbxFp1xBO9a47YSI.png"
                            },
                            "key": "minion-horde",
                            "elixir": 5,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 4,
                            "description": "Six fast, unarmored flying attackers. Three's a crowd, six is a horde!"
                        },
                        {
                            "name": "Goblin Gang",
                            "level": 13,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png"
                            },
                            "key": "goblin-gang",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 9,
                            "description": "Spawns five Goblins - three with knives, two with spears - at a discounted Elixir cost. It's like a Goblin Value Pack!"
                        },
                        {
                            "name": "Ice Spirit",
                            "level": 13,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                            },
                            "key": "ice-spirit",
                            "elixir": 1,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty."
                        },
                        {
                            "name": "Princess",
                            "level": 5,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/bAwMcqp9EKVIKH3ZLm_m0MqZFSG72zG-vKxpx8aKoVs.png"
                            },
                            "key": "princess",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 7,
                            "description": "This stunning Princess shoots flaming arrows from long range. If you're feeling warm feelings towards her, it's probably because you're on fire."
                        }
                    ]
                }
            ],
            "opponent": [
                {
                    "tag": "YGU98Q8",
                    "name": "Royal Assassin",
                    "crownsEarned": 0,
                    "startTrophies": 5090,
                    "clan": {
                        "tag": "J98LC80",
                        "name": "gym rats",
                        "badge": 16000164
                    },
                    "deck": [
                        {
                            "name": "Goblins",
                            "level": 13,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
                            },
                            "key": "goblins",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 1,
                            "description": "Three fast, unarmored melee attackers. Small, fast, green and mean!"
                        },
                        {
                            "name": "Ice Wizard",
                            "level": 3,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/W3dkw0HTw9n1jB-zbknY2w3wHuyuLxSRIAV5fUT1SEY.png"
                            },
                            "key": "ice-wizard",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 5,
                            "description": "This chill caster throws ice shards that slow down enemies' movement and attack speed. Despite being freezing cold, he has a handlebar mustache that's too hot for TV."
                        },
                        {
                            "name": "Zap",
                            "level": 13,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "The Log",
                            "level": 3,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
                            },
                            "key": "the-log",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "A spilt bottle of Rage turned an innocent tree trunk into \"The Log\". Now, it seeks revenge by crushing anything in its path!"
                        },
                        {
                            "name": "Furnace",
                            "level": 11,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/iqbDiG7yYRIzvCPXdt9zPb3IvMt7F7Gi4wIPnh2x4aI.png"
                            },
                            "key": "furnace",
                            "elixir": 4,
                            "type": "Building",
                            "rarity": "Rare",
                            "arena": 5,
                            "description": "The Furnace spawns two Fire Spirits at a time. It also makes great brick-oven pancakes."
                        },
                        {
                            "name": "Knight",
                            "level": 13,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png"
                            },
                            "key": "knight",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 0,
                            "description": "A tough melee fighter. The Barbarian's handsome, cultured cousin. Rumor has it that he was knighted based on the sheer awesomeness of his mustache alone."
                        },
                        {
                            "name": "Miner",
                            "level": 3,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Three Musketeers",
                            "level": 11,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/_J2GhbkX3vswaFk1wG-dopwiHyNc_YiPhwroiKF3Mek.png"
                            },
                            "key": "three-musketeers",
                            "elixir": 9,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 7,
                            "description": "Trio of powerful, independent markswomen, fighting for justice and honor. Disrespecting them would not be just a mistake, it would be a cardinal sin!"
                        }
                    ]
                }
            ],
            "arena": {
                "name": "Master I",
                "arena": "League 4",
                "arenaID": 15,
                "trophyLimit": 4900
            }
        },
        {
            "type": "PvP",
            "mode": {
                "name": "Ladder",
                "deck": "Collection",
                "cardLevels": "Ladder",
                "overtimeSeconds": 60,
                "players": "PvP",
                "sameDeck": false
            },
            "utcTime": 1513976312,
            "deckType": "slotDeck",
            "teamSize": 1,
            "winner": -1,
            "teamCrowns": 0,
            "opponentCrowns": 1,
            "team": [
                {
                    "tag": "8L9L9GL",
                    "name": "Jo͛hͥn̽",
                    "crownsEarned": 0,
                    "startTrophies": 5162,
                    "clan": {
                        "tag": "2CCCP",
                        "name": "Reddit Alpha",
                        "badge": 16000167
                    },
                    "deck": [
                        {
                            "name": "Knight",
                            "level": 13,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png"
                            },
                            "key": "knight",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 0,
                            "description": "A tough melee fighter. The Barbarian's handsome, cultured cousin. Rumor has it that he was knighted based on the sheer awesomeness of his mustache alone."
                        },
                        {
                            "name": "Mortar",
                            "level": 13,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lPOSw6H7YOHq2miSCrf7ZDL3ANjhJdPPDYOTujdNrVE.png"
                            },
                            "key": "mortar",
                            "elixir": 4,
                            "type": "Building",
                            "rarity": "Common",
                            "arena": 6,
                            "description": "Defensive building with a long range. Shoots exploding boulders that deal area damage. Cannot shoot at targets that get very close!"
                        },
                        {
                            "name": "Miner",
                            "level": 4,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "The Log",
                            "level": 4,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
                            },
                            "key": "the-log",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "A spilt bottle of Rage turned an innocent tree trunk into \"The Log\". Now, it seeks revenge by crushing anything in its path!"
                        },
                        {
                            "name": "Minion Horde",
                            "level": 13,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Wyjq5l0IXHTkX9Rmpap6HaH08MvjbxFp1xBO9a47YSI.png"
                            },
                            "key": "minion-horde",
                            "elixir": 5,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 4,
                            "description": "Six fast, unarmored flying attackers. Three's a crowd, six is a horde!"
                        },
                        {
                            "name": "Goblin Gang",
                            "level": 13,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png"
                            },
                            "key": "goblin-gang",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 9,
                            "description": "Spawns five Goblins - three with knives, two with spears - at a discounted Elixir cost. It's like a Goblin Value Pack!"
                        },
                        {
                            "name": "Ice Spirit",
                            "level": 13,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png"
                            },
                            "key": "ice-spirit",
                            "elixir": 1,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty."
                        },
                        {
                            "name": "Princess",
                            "level": 5,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/bAwMcqp9EKVIKH3ZLm_m0MqZFSG72zG-vKxpx8aKoVs.png"
                            },
                            "key": "princess",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 7,
                            "description": "This stunning Princess shoots flaming arrows from long range. If you're feeling warm feelings towards her, it's probably because you're on fire."
                        }
                    ]
                }
            ],
            "opponent": [
                {
                    "tag": "PGLYQPQ2",
                    "name": "ཎ ࿗尺ØららƬƐ尺࿗ན",
                    "crownsEarned": 1,
                    "startTrophies": 5143,
                    "clan": {
                        "tag": "82YYQR98",
                        "name": "Sandstorm Kw",
                        "badge": 16000097
                    },
                    "deck": [
                        {
                            "name": "Goblin Hut",
                            "level": 11,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/l8ZdzzNLcwB4u7ihGgxNFQOjCT_njFuAhZr7D6PRF7E.png"
                            },
                            "key": "goblin-hut",
                            "elixir": 5,
                            "type": "Building",
                            "rarity": "Rare",
                            "arena": 1,
                            "description": "Building that spawns Spear Goblins. But don't look inside. You don't want to see how they are made."
                        },
                        {
                            "name": "Fireball",
                            "level": 11,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png"
                            },
                            "key": "fireball",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Rare",
                            "arena": 0,
                            "description": "Annnnnd... Fireball. Incinerates a small area, dealing high damage. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Furnace",
                            "level": 11,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/iqbDiG7yYRIzvCPXdt9zPb3IvMt7F7Gi4wIPnh2x4aI.png"
                            },
                            "key": "furnace",
                            "elixir": 4,
                            "type": "Building",
                            "rarity": "Rare",
                            "arena": 5,
                            "description": "The Furnace spawns two Fire Spirits at a time. It also makes great brick-oven pancakes."
                        },
                        {
                            "name": "Musketeer",
                            "level": 11,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Tex1C48UTq9FKtAX-3tzG0FJmc9jzncUZG3bb5Vf-Ds.png"
                            },
                            "key": "musketeer",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 0,
                            "description": "Don't be fooled by her delicately coiffed hair, the Musketeer is a mean shot with her trusty boomstick."
                        },
                        {
                            "name": "Zap",
                            "level": 13,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Hog Rider",
                            "level": 11,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Ubu0oUl8tZkusnkZf8Xv9Vno5IO29Y-jbZ4fhoNJ5oc.png"
                            },
                            "key": "hog-rider",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 4,
                            "description": "Fast melee troop that targets buildings and can jump over the river. He followed the echoing call of \"Hog Riderrrrr\" all the way through the Arena doors."
                        },
                        {
                            "name": "Barbarians",
                            "level": 13,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/TvJsuu2S4yhyk1jVYUAQwdKOnW4U77KuWWOTPOWnwfI.png"
                            },
                            "key": "barbarians",
                            "elixir": 5,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 3,
                            "description": "A horde of melee attackers with mean mustaches and even meaner tempers."
                        },
                        {
                            "name": "The Log",
                            "level": 4,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
                            },
                            "key": "the-log",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "A spilt bottle of Rage turned an innocent tree trunk into \"The Log\". Now, it seeks revenge by crushing anything in its path!"
                        }
                    ]
                }
            ],
            "arena": {
                "name": "Master I",
                "arena": "League 4",
                "arenaID": 15,
                "trophyLimit": 4900
            }
        },
        {
            "type": "challenge",
            "mode": {
                "name": "Challenge",
                "deck": "Collection",
                "cardLevels": "Tournament",
                "overtimeSeconds": 180,
                "players": "PvP",
                "sameDeck": false
            },
            "utcTime": 1513976047,
            "deckType": "slotDeck",
            "teamSize": 1,
            "winner": -3,
            "teamCrowns": 0,
            "opponentCrowns": 3,
            "team": [
                {
                    "tag": "8L9L9GL",
                    "name": "Jo͛hͥn̽",
                    "crownsEarned": 0,
                    "startTrophies": 5162,
                    "clan": {
                        "tag": "2CCCP",
                        "name": "Reddit Alpha",
                        "badge": 16000167
                    },
                    "deck": [
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Guards",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
                            },
                            "key": "guards",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 7,
                            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Skeleton Barrel",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/vCB4DWCcrGbTkarjcOiVz4aNDx6GWLm0yUepg9E1MGo.png"
                            },
                            "key": "skeleton-barrel",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 6,
                            "description": "It's a Skeleton party in the sky, until all the balloons pop... then it's a Skeleton party on the ground!"
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Bats",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
                            },
                            "key": "bats",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns a handful of tiny flying creatures with big ears. Having big ears doesn't mean they're good listeners."
                        },
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Inferno Dragon",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/y5HDbKtTbWG6En6TGWU0xoVIGs1-iQpIP4HC-VM7u8A.png"
                            },
                            "key": "inferno-dragon",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 4,
                            "description": "Shoots a focused beam of fire that increases in damage over time. Wears a helmet because flying can be dangerous."
                        }
                    ]
                }
            ],
            "opponent": [
                {
                    "tag": "PJ0QJU0",
                    "name": ".:*PASHEKIN*:.",
                    "crownsEarned": 3,
                    "startTrophies": 4809,
                    "clan": {
                        "tag": "8GLGVLLR",
                        "name": "Kings Empire",
                        "badge": 16000013
                    },
                    "deck": [
                        {
                            "name": "Ice Golem",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/r05cmpwV1o7i7FHodtZwW3fmjbXCW34IJCsDEV5cZC4.png"
                            },
                            "key": "ice-golem",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 8,
                            "description": "He's tough, targets buildings and explodes when destroyed, slowing nearby enemies. Made entirely out of ice... or is he?! Yes."
                        },
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Mega Minion",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/-T_e4YLbuhPBKbYnBwQfXgynNpp5eOIN_0RracYwL9c.png"
                            },
                            "key": "mega-minion",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 7,
                            "description": "Flying, armored and powerful. What could be its weakness?! Cupcakes."
                        },
                        {
                            "name": "Guards",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
                            },
                            "key": "guards",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 7,
                            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
                        },
                        {
                            "name": "Inferno Dragon",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/y5HDbKtTbWG6En6TGWU0xoVIGs1-iQpIP4HC-VM7u8A.png"
                            },
                            "key": "inferno-dragon",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 4,
                            "description": "Shoots a focused beam of fire that increases in damage over time. Wears a helmet because flying can be dangerous."
                        },
                        {
                            "name": "Graveyard",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png"
                            },
                            "key": "graveyard",
                            "elixir": 5,
                            "type": "Spell",
                            "rarity": "Legendary",
                            "arena": 5,
                            "description": "Surprise! It's a party. A Skeleton party, anywhere in the Arena. Yay!"
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        }
                    ]
                }
            ],
            "arena": {
                "name": "Legendary Arena",
                "arena": "Arena 12",
                "arenaID": 11,
                "trophyLimit": 3800
            }
        },
        {
            "type": "challenge",
            "mode": {
                "name": "Challenge",
                "deck": "Collection",
                "cardLevels": "Tournament",
                "overtimeSeconds": 180,
                "players": "PvP",
                "sameDeck": false
            },
            "utcTime": 1513975984,
            "deckType": "slotDeck",
            "teamSize": 1,
            "winner": -1,
            "teamCrowns": 0,
            "opponentCrowns": 1,
            "team": [
                {
                    "tag": "8L9L9GL",
                    "name": "Jo͛hͥn̽",
                    "crownsEarned": 0,
                    "startTrophies": 5162,
                    "clan": {
                        "tag": "2CCCP",
                        "name": "Reddit Alpha",
                        "badge": 16000167
                    },
                    "deck": [
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Guards",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
                            },
                            "key": "guards",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 7,
                            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Skeleton Barrel",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/vCB4DWCcrGbTkarjcOiVz4aNDx6GWLm0yUepg9E1MGo.png"
                            },
                            "key": "skeleton-barrel",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 6,
                            "description": "It's a Skeleton party in the sky, until all the balloons pop... then it's a Skeleton party on the ground!"
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Bats",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
                            },
                            "key": "bats",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns a handful of tiny flying creatures with big ears. Having big ears doesn't mean they're good listeners."
                        },
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Inferno Dragon",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/y5HDbKtTbWG6En6TGWU0xoVIGs1-iQpIP4HC-VM7u8A.png"
                            },
                            "key": "inferno-dragon",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 4,
                            "description": "Shoots a focused beam of fire that increases in damage over time. Wears a helmet because flying can be dangerous."
                        }
                    ]
                }
            ],
            "opponent": [
                {
                    "tag": "U2QVGYU",
                    "name": "ghost",
                    "crownsEarned": 1,
                    "startTrophies": 5016,
                    "clan": {
                        "tag": "QL8LGC",
                        "name": "KURD CLAN PRO",
                        "badge": 16000146
                    },
                    "deck": [
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Knight",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png"
                            },
                            "key": "knight",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 0,
                            "description": "A tough melee fighter. The Barbarian's handsome, cultured cousin. Rumor has it that he was knighted based on the sheer awesomeness of his mustache alone."
                        },
                        {
                            "name": "Skeleton Barrel",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/vCB4DWCcrGbTkarjcOiVz4aNDx6GWLm0yUepg9E1MGo.png"
                            },
                            "key": "skeleton-barrel",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 6,
                            "description": "It's a Skeleton party in the sky, until all the balloons pop... then it's a Skeleton party on the ground!"
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Minions",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/yHGpoEnmUWPGV_hBbhn-Kk-Bs838OjGzWzJJlQpQKQA.png"
                            },
                            "key": "minions",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 2,
                            "description": "Three fast, unarmored flying attackers. Roses are red, minions are blue, they can fly, and will crush you!"
                        },
                        {
                            "name": "Goblin Gang",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png"
                            },
                            "key": "goblin-gang",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 9,
                            "description": "Spawns five Goblins - three with knives, two with spears - at a discounted Elixir cost. It's like a Goblin Value Pack!"
                        },
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        }
                    ]
                }
            ],
            "arena": {
                "name": "Hog Mountain",
                "arena": "Arena 10",
                "arenaID": 10,
                "trophyLimit": 3000
            }
        },
        {
            "type": "challenge",
            "mode": {
                "name": "Challenge",
                "deck": "Collection",
                "cardLevels": "Tournament",
                "overtimeSeconds": 180,
                "players": "PvP",
                "sameDeck": false
            },
            "utcTime": 1513973979,
            "deckType": "slotDeck",
            "teamSize": 1,
            "winner": 1,
            "teamCrowns": 2,
            "opponentCrowns": 1,
            "team": [
                {
                    "tag": "8L9L9GL",
                    "name": "Jo͛hͥn̽",
                    "crownsEarned": 2,
                    "startTrophies": 5162,
                    "clan": {
                        "tag": "2CCCP",
                        "name": "Reddit Alpha",
                        "badge": 16000167
                    },
                    "deck": [
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Guards",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
                            },
                            "key": "guards",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 7,
                            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Skeleton Barrel",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/vCB4DWCcrGbTkarjcOiVz4aNDx6GWLm0yUepg9E1MGo.png"
                            },
                            "key": "skeleton-barrel",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 6,
                            "description": "It's a Skeleton party in the sky, until all the balloons pop... then it's a Skeleton party on the ground!"
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Bats",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
                            },
                            "key": "bats",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns a handful of tiny flying creatures with big ears. Having big ears doesn't mean they're good listeners."
                        },
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Inferno Dragon",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/y5HDbKtTbWG6En6TGWU0xoVIGs1-iQpIP4HC-VM7u8A.png"
                            },
                            "key": "inferno-dragon",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 4,
                            "description": "Shoots a focused beam of fire that increases in damage over time. Wears a helmet because flying can be dangerous."
                        }
                    ]
                }
            ],
            "opponent": [
                {
                    "tag": "88UQ29CP",
                    "name": "Gravity",
                    "crownsEarned": 1,
                    "startTrophies": 4234,
                    "clan": {
                        "tag": "J0090C",
                        "name": "Royal LegendsCZ",
                        "badge": 16000003
                    },
                    "deck": [
                        {
                            "name": "Ice Golem",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/r05cmpwV1o7i7FHodtZwW3fmjbXCW34IJCsDEV5cZC4.png"
                            },
                            "key": "ice-golem",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 8,
                            "description": "He's tough, targets buildings and explodes when destroyed, slowing nearby enemies. Made entirely out of ice... or is he?! Yes."
                        },
                        {
                            "name": "Inferno Dragon",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/y5HDbKtTbWG6En6TGWU0xoVIGs1-iQpIP4HC-VM7u8A.png"
                            },
                            "key": "inferno-dragon",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 4,
                            "description": "Shoots a focused beam of fire that increases in damage over time. Wears a helmet because flying can be dangerous."
                        },
                        {
                            "name": "Spear Goblins",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/FSDFotjaXidI4ku_WFpVCTWS1hKGnFh1sxX0lxM43_E.png"
                            },
                            "key": "spear-goblins",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 1,
                            "description": "Three unarmored ranged attackers. Who the heck taught these guys to throw spears!?! Who thought that was a good idea?!"
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Fireball",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png"
                            },
                            "key": "fireball",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Rare",
                            "arena": 0,
                            "description": "Annnnnd... Fireball. Incinerates a small area, dealing high damage. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Bats",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
                            },
                            "key": "bats",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns a handful of tiny flying creatures with big ears. Having big ears doesn't mean they're good listeners."
                        },
                        {
                            "name": "Balloon",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/qBipxLo-3hhCnPrApp2Nn3b2NgrSrvwzWytvREev0CY.png"
                            },
                            "key": "balloon",
                            "elixir": 5,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 2,
                            "description": "As pretty as they are, you won't want a parade of THESE balloons showing up on the horizon. Drops powerful bombs and when shot down, crashes dealing area damage."
                        }
                    ]
                }
            ],
            "arena": {
                "name": "Master I",
                "arena": "League 4",
                "arenaID": 15,
                "trophyLimit": 4900
            }
        },
        {
            "type": "challenge",
            "mode": {
                "name": "Challenge",
                "deck": "Collection",
                "cardLevels": "Tournament",
                "overtimeSeconds": 180,
                "players": "PvP",
                "sameDeck": false
            },
            "utcTime": 1513973755,
            "deckType": "slotDeck",
            "teamSize": 1,
            "winner": 1,
            "teamCrowns": 1,
            "opponentCrowns": 0,
            "team": [
                {
                    "tag": "8L9L9GL",
                    "name": "Jo͛hͥn̽",
                    "crownsEarned": 1,
                    "startTrophies": 5162,
                    "clan": {
                        "tag": "2CCCP",
                        "name": "Reddit Alpha",
                        "badge": 16000167
                    },
                    "deck": [
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Guards",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
                            },
                            "key": "guards",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 7,
                            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Skeleton Barrel",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/vCB4DWCcrGbTkarjcOiVz4aNDx6GWLm0yUepg9E1MGo.png"
                            },
                            "key": "skeleton-barrel",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 6,
                            "description": "It's a Skeleton party in the sky, until all the balloons pop... then it's a Skeleton party on the ground!"
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Bats",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
                            },
                            "key": "bats",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns a handful of tiny flying creatures with big ears. Having big ears doesn't mean they're good listeners."
                        },
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Inferno Dragon",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/y5HDbKtTbWG6En6TGWU0xoVIGs1-iQpIP4HC-VM7u8A.png"
                            },
                            "key": "inferno-dragon",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 4,
                            "description": "Shoots a focused beam of fire that increases in damage over time. Wears a helmet because flying can be dangerous."
                        }
                    ]
                }
            ],
            "opponent": [
                {
                    "tag": "80PG9P080",
                    "name": "silentvoice",
                    "crownsEarned": 0,
                    "startTrophies": 4085,
                    "clan": {
                        "tag": "8R2C2ULY",
                        "name": "We*Are*Crazy",
                        "badge": 16000072
                    },
                    "deck": [
                        {
                            "name": "Knight",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png"
                            },
                            "key": "knight",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 0,
                            "description": "A tough melee fighter. The Barbarian's handsome, cultured cousin. Rumor has it that he was knighted based on the sheer awesomeness of his mustache alone."
                        },
                        {
                            "name": "Bats",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
                            },
                            "key": "bats",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns a handful of tiny flying creatures with big ears. Having big ears doesn't mean they're good listeners."
                        },
                        {
                            "name": "Baby Dragon",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/cjC9n4AvEZJ3urkVh-rwBkJ-aRSsydIMqSAV48hAih0.png"
                            },
                            "key": "baby-dragon",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 0,
                            "description": "Flying troop that deals area damage. Baby dragons hatch cute, hungry and ready for a barbeque."
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Bowler",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/SU4qFXmbQXWjvASxVI6z9IJuTYolx4A0MKK90sTIE88.png"
                            },
                            "key": "bowler",
                            "elixir": 5,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 8,
                            "description": "This big blue dude digs the simple things in life - Dark Elixir drinks and throwing rocks. His massive boulders roll through their target, hitting everything behind for a strike!"
                        },
                        {
                            "name": "Ice Wizard",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/W3dkw0HTw9n1jB-zbknY2w3wHuyuLxSRIAV5fUT1SEY.png"
                            },
                            "key": "ice-wizard",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 5,
                            "description": "This chill caster throws ice shards that slow down enemies' movement and attack speed. Despite being freezing cold, he has a handlebar mustache that's too hot for TV."
                        },
                        {
                            "name": "Graveyard",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Icp8BIyyfBTj1ncCJS7mb82SY7TPV-MAE-J2L2R48DI.png"
                            },
                            "key": "graveyard",
                            "elixir": 5,
                            "type": "Spell",
                            "rarity": "Legendary",
                            "arena": 5,
                            "description": "Surprise! It's a party. A Skeleton party, anywhere in the Arena. Yay!"
                        },
                        {
                            "name": "Tornado",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/QJB-QK1QJHdw4hjpAwVSyZBozc2ZWAR9pQ-SMUyKaT0.png"
                            },
                            "key": "tornado",
                            "elixir": 3,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 6,
                            "description": "Drags enemy troops to its center while dealing damage over time, just like a magnet. A big, swirling, Tornado-y magnet. Doesn't affect buildings."
                        }
                    ]
                }
            ],
            "arena": {
                "name": "Frozen Peak",
                "arena": "Arena 8",
                "arenaID": 8,
                "trophyLimit": 2300
            }
        },
        {
            "type": "challenge",
            "mode": {
                "name": "Challenge",
                "deck": "Collection",
                "cardLevels": "Tournament",
                "overtimeSeconds": 180,
                "players": "PvP",
                "sameDeck": false
            },
            "utcTime": 1513973563,
            "deckType": "slotDeck",
            "teamSize": 1,
            "winner": -1,
            "teamCrowns": 1,
            "opponentCrowns": 2,
            "team": [
                {
                    "tag": "8L9L9GL",
                    "name": "Jo͛hͥn̽",
                    "crownsEarned": 1,
                    "startTrophies": 5162,
                    "clan": {
                        "tag": "2CCCP",
                        "name": "Reddit Alpha",
                        "badge": 16000167
                    },
                    "deck": [
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Guards",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
                            },
                            "key": "guards",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 7,
                            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Skeleton Barrel",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/vCB4DWCcrGbTkarjcOiVz4aNDx6GWLm0yUepg9E1MGo.png"
                            },
                            "key": "skeleton-barrel",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 6,
                            "description": "It's a Skeleton party in the sky, until all the balloons pop... then it's a Skeleton party on the ground!"
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Bats",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
                            },
                            "key": "bats",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns a handful of tiny flying creatures with big ears. Having big ears doesn't mean they're good listeners."
                        },
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Inferno Dragon",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/y5HDbKtTbWG6En6TGWU0xoVIGs1-iQpIP4HC-VM7u8A.png"
                            },
                            "key": "inferno-dragon",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 4,
                            "description": "Shoots a focused beam of fire that increases in damage over time. Wears a helmet because flying can be dangerous."
                        }
                    ]
                }
            ],
            "opponent": [
                {
                    "tag": "UUP9JJ0",
                    "name": "terratremix",
                    "crownsEarned": 2,
                    "startTrophies": 4560,
                    "clan": {
                        "tag": "8R9CQ2VG",
                        "name": "R3X CC",
                        "badge": 16000000
                    },
                    "deck": [
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Ice Golem",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/r05cmpwV1o7i7FHodtZwW3fmjbXCW34IJCsDEV5cZC4.png"
                            },
                            "key": "ice-golem",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 8,
                            "description": "He's tough, targets buildings and explodes when destroyed, slowing nearby enemies. Made entirely out of ice... or is he?! Yes."
                        },
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Inferno Dragon",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/y5HDbKtTbWG6En6TGWU0xoVIGs1-iQpIP4HC-VM7u8A.png"
                            },
                            "key": "inferno-dragon",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 4,
                            "description": "Shoots a focused beam of fire that increases in damage over time. Wears a helmet because flying can be dangerous."
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Guards",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
                            },
                            "key": "guards",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 7,
                            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
                        },
                        {
                            "name": "Electro Wizard",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/RsFaHgB3w6vXsTjXdPr3x8l_GbV9TbOUCvIx07prbrQ.png"
                            },
                            "key": "electro-wizard",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 7,
                            "description": "He lands with a \"POW!\", stuns nearby enemies and shoots lightning with both hands! What a show off."
                        }
                    ]
                }
            ],
            "arena": {
                "name": "Goblin Stadium",
                "arena": "Arena 1",
                "arenaID": 1,
                "trophyLimit": 0
            }
        },
        {
            "type": "challenge",
            "mode": {
                "name": "Challenge",
                "deck": "Collection",
                "cardLevels": "Tournament",
                "overtimeSeconds": 180,
                "players": "PvP",
                "sameDeck": false
            },
            "utcTime": 1513973257,
            "deckType": "slotDeck",
            "teamSize": 1,
            "winner": 1,
            "teamCrowns": 2,
            "opponentCrowns": 1,
            "team": [
                {
                    "tag": "8L9L9GL",
                    "name": "Jo͛hͥn̽",
                    "crownsEarned": 2,
                    "startTrophies": 5162,
                    "clan": {
                        "tag": "2CCCP",
                        "name": "Reddit Alpha",
                        "badge": 16000167
                    },
                    "deck": [
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Guards",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
                            },
                            "key": "guards",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 7,
                            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Skeleton Barrel",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/vCB4DWCcrGbTkarjcOiVz4aNDx6GWLm0yUepg9E1MGo.png"
                            },
                            "key": "skeleton-barrel",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 6,
                            "description": "It's a Skeleton party in the sky, until all the balloons pop... then it's a Skeleton party on the ground!"
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Bats",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
                            },
                            "key": "bats",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns a handful of tiny flying creatures with big ears. Having big ears doesn't mean they're good listeners."
                        },
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Inferno Dragon",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/y5HDbKtTbWG6En6TGWU0xoVIGs1-iQpIP4HC-VM7u8A.png"
                            },
                            "key": "inferno-dragon",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 4,
                            "description": "Shoots a focused beam of fire that increases in damage over time. Wears a helmet because flying can be dangerous."
                        }
                    ]
                }
            ],
            "opponent": [
                {
                    "tag": "2GJLQVC9Y",
                    "name": "....2",
                    "crownsEarned": 1,
                    "startTrophies": 4002,
                    "clan": {
                        "tag": "9Y29VQU8",
                        "name": "NOVA I CLASHERS",
                        "badge": 16000144
                    },
                    "deck": [
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Furnace",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/iqbDiG7yYRIzvCPXdt9zPb3IvMt7F7Gi4wIPnh2x4aI.png"
                            },
                            "key": "furnace",
                            "elixir": 4,
                            "type": "Building",
                            "rarity": "Rare",
                            "arena": 5,
                            "description": "The Furnace spawns two Fire Spirits at a time. It also makes great brick-oven pancakes."
                        },
                        {
                            "name": "Skeleton Army",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/fAOToOi1pRy7svN2xQS6mDkhQw2pj9m_17FauaNqyl4.png"
                            },
                            "key": "skeleton-army",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 0,
                            "description": "Spawns an army of Skeletons. Meet Larry and his friends Harry, Gerry, Terry, Mary, etc."
                        },
                        {
                            "name": "The Log",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
                            },
                            "key": "the-log",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "A spilt bottle of Rage turned an innocent tree trunk into \"The Log\". Now, it seeks revenge by crushing anything in its path!"
                        },
                        {
                            "name": "Fire Spirits",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/16-BqusVvynIgYI8_Jci3LDC-r8AI_xaIYLgXqtlmS8.png"
                            },
                            "key": "fire-spirits",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "These three Fire Spirits are on a kamikaze mission to give you a warm hug. It'd be adorable if they weren't on fire."
                        },
                        {
                            "name": "Wizard",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Mej7vnv4H_3p_8qPs_N6_GKahy6HDr7pU7i9eTHS84U.png"
                            },
                            "key": "wizard",
                            "elixir": 5,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 5,
                            "description": "The most awesome man to ever set foot in the arena, the Wizard will blow you away with his handsomeness... and/or fireballs."
                        },
                        {
                            "name": "P.E.K.K.A",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/MlArURKhn_zWAZY-Xj1qIRKLVKquarG25BXDjUQajNs.png"
                            },
                            "key": "pekka",
                            "elixir": 7,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 4,
                            "description": "A heavily armored, slow melee fighter. Swings from the hip but packs a huge punch."
                        },
                        {
                            "name": "Princess",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/bAwMcqp9EKVIKH3ZLm_m0MqZFSG72zG-vKxpx8aKoVs.png"
                            },
                            "key": "princess",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 7,
                            "description": "This stunning Princess shoots flaming arrows from long range. If you're feeling warm feelings towards her, it's probably because you're on fire."
                        }
                    ]
                }
            ],
            "arena": {
                "name": "Challenger III",
                "arena": "League 3",
                "arenaID": 14,
                "trophyLimit": 4600
            }
        },
        {
            "type": "challenge",
            "mode": {
                "name": "Challenge",
                "deck": "Collection",
                "cardLevels": "Tournament",
                "overtimeSeconds": 180,
                "players": "PvP",
                "sameDeck": false
            },
            "utcTime": 1513973034,
            "deckType": "slotDeck",
            "teamSize": 1,
            "winner": 2,
            "teamCrowns": 2,
            "opponentCrowns": 0,
            "team": [
                {
                    "tag": "8L9L9GL",
                    "name": "Jo͛hͥn̽",
                    "crownsEarned": 2,
                    "startTrophies": 5162,
                    "clan": {
                        "tag": "2CCCP",
                        "name": "Reddit Alpha",
                        "badge": 16000167
                    },
                    "deck": [
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Guards",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
                            },
                            "key": "guards",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 7,
                            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Skeleton Barrel",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/vCB4DWCcrGbTkarjcOiVz4aNDx6GWLm0yUepg9E1MGo.png"
                            },
                            "key": "skeleton-barrel",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 6,
                            "description": "It's a Skeleton party in the sky, until all the balloons pop... then it's a Skeleton party on the ground!"
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Bats",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
                            },
                            "key": "bats",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns a handful of tiny flying creatures with big ears. Having big ears doesn't mean they're good listeners."
                        },
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Inferno Dragon",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/y5HDbKtTbWG6En6TGWU0xoVIGs1-iQpIP4HC-VM7u8A.png"
                            },
                            "key": "inferno-dragon",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 4,
                            "description": "Shoots a focused beam of fire that increases in damage over time. Wears a helmet because flying can be dangerous."
                        }
                    ]
                }
            ],
            "opponent": [
                {
                    "tag": "RQ98YRUJ",
                    "name": "Emre Reyiz <3",
                    "crownsEarned": 0,
                    "startTrophies": 3233,
                    "clan": {
                        "tag": "UCJ2YY0",
                        "name": "DOSTLUK VADİSİ",
                        "badge": 16000146
                    },
                    "deck": [
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Skeleton Army",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/fAOToOi1pRy7svN2xQS6mDkhQw2pj9m_17FauaNqyl4.png"
                            },
                            "key": "skeleton-army",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 0,
                            "description": "Spawns an army of Skeletons. Meet Larry and his friends Harry, Gerry, Terry, Mary, etc."
                        },
                        {
                            "name": "Executioner",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/9XL5BP2mqzV8kza6KF8rOxrpCZTyuGLp2l413DTjEoM.png"
                            },
                            "key": "executioner",
                            "elixir": 5,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 9,
                            "description": "He throws his axe like a boomerang, striking all enemies on the way out AND back. It's a miracle he doesn't lose an arm."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Mega Knight",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/O2NycChSNhn_UK9nqBXUhhC_lILkiANzPuJjtjoz0CE.png"
                            },
                            "key": "mega-knight",
                            "elixir": 7,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He lands with the force of 1,000 mustaches, then jumps from one foe to the next dealing huge area damage. Stand aside!"
                        },
                        {
                            "name": "Ice Wizard",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/W3dkw0HTw9n1jB-zbknY2w3wHuyuLxSRIAV5fUT1SEY.png"
                            },
                            "key": "ice-wizard",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 5,
                            "description": "This chill caster throws ice shards that slow down enemies' movement and attack speed. Despite being freezing cold, he has a handlebar mustache that's too hot for TV."
                        },
                        {
                            "name": "The Log",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
                            },
                            "key": "the-log",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "A spilt bottle of Rage turned an innocent tree trunk into \"The Log\". Now, it seeks revenge by crushing anything in its path!"
                        },
                        {
                            "name": "Electro Wizard",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/RsFaHgB3w6vXsTjXdPr3x8l_GbV9TbOUCvIx07prbrQ.png"
                            },
                            "key": "electro-wizard",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 7,
                            "description": "He lands with a \"POW!\", stuns nearby enemies and shoots lightning with both hands! What a show off."
                        }
                    ]
                }
            ],
            "arena": {
                "name": "Electro Valley",
                "arena": "Arena 11",
                "arenaID": 10,
                "trophyLimit": 3000
            }
        },
        {
            "type": "challenge",
            "mode": {
                "name": "Challenge",
                "deck": "Collection",
                "cardLevels": "Tournament",
                "overtimeSeconds": 180,
                "players": "PvP",
                "sameDeck": false
            },
            "utcTime": 1513972827,
            "deckType": "slotDeck",
            "teamSize": 1,
            "winner": -1,
            "teamCrowns": 0,
            "opponentCrowns": 1,
            "team": [
                {
                    "tag": "8L9L9GL",
                    "name": "Jo͛hͥn̽",
                    "crownsEarned": 0,
                    "startTrophies": 5162,
                    "clan": {
                        "tag": "2CCCP",
                        "name": "Reddit Alpha",
                        "badge": 16000167
                    },
                    "deck": [
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Guards",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png"
                            },
                            "key": "guards",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 7,
                            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers."
                        },
                        {
                            "name": "Zap",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png"
                            },
                            "key": "zap",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Common",
                            "arena": 5,
                            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers."
                        },
                        {
                            "name": "Skeleton Barrel",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/vCB4DWCcrGbTkarjcOiVz4aNDx6GWLm0yUepg9E1MGo.png"
                            },
                            "key": "skeleton-barrel",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 6,
                            "description": "It's a Skeleton party in the sky, until all the balloons pop... then it's a Skeleton party on the ground!"
                        },
                        {
                            "name": "Poison",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/98HDkG2189yOULcVG9jz2QbJKtfuhH21DIrIjkOjxI8.png"
                            },
                            "key": "poison",
                            "elixir": 4,
                            "type": "Spell",
                            "rarity": "Epic",
                            "arena": 5,
                            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!"
                        },
                        {
                            "name": "Bats",
                            "level": 9,
                            "maxLevel": 13,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png"
                            },
                            "key": "bats",
                            "elixir": 2,
                            "type": "Troop",
                            "rarity": "Common",
                            "arena": 8,
                            "description": "Spawns a handful of tiny flying creatures with big ears. Having big ears doesn't mean they're good listeners."
                        },
                        {
                            "name": "Miner",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png"
                            },
                            "key": "miner",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel."
                        },
                        {
                            "name": "Inferno Dragon",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/y5HDbKtTbWG6En6TGWU0xoVIGs1-iQpIP4HC-VM7u8A.png"
                            },
                            "key": "inferno-dragon",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 4,
                            "description": "Shoots a focused beam of fire that increases in damage over time. Wears a helmet because flying can be dangerous."
                        }
                    ]
                }
            ],
            "opponent": [
                {
                    "tag": "9J9LVUJR",
                    "name": "Hannibal",
                    "crownsEarned": 1,
                    "startTrophies": 5013,
                    "clan": {
                        "tag": "99Y09VG2",
                        "name": "Supremos™",
                        "badge": 16000012
                    },
                    "deck": [
                        {
                            "name": "Golem",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/npdmCnET7jmVjJvjJQkFnNSNnDxYHDBigbvIAloFMds.png"
                            },
                            "key": "golem",
                            "elixir": 8,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 6,
                            "description": "Slow but durable, only attacks buildings. When destroyed, explosively splits into two Golemites and deals area damage!"
                        },
                        {
                            "name": "The Log",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png"
                            },
                            "key": "the-log",
                            "elixir": 2,
                            "type": "Spell",
                            "rarity": "Legendary",
                            "arena": 6,
                            "description": "A spilt bottle of Rage turned an innocent tree trunk into \"The Log\". Now, it seeks revenge by crushing anything in its path!"
                        },
                        {
                            "name": "Night Witch",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/NpCrXDEDBBJgNv9QrBAcJmmMFbS7pe3KCY8xJ5VB18A.png"
                            },
                            "key": "night-witch",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 8,
                            "description": "Summons Bats to do her bidding, even after death! If you get too close, she isn't afraid of pitching in with her mean-looking battle staff."
                        },
                        {
                            "name": "Royal Ghost",
                            "level": 1,
                            "maxLevel": 5,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/3En2cz0ISQAaMTHY3hj3rTveFN2kJYq-H4VxvdJNvCM.png"
                            },
                            "key": "royal-ghost",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Legendary",
                            "arena": 10,
                            "description": "He drifts invisibly through the Arena until he's startled by an enemy... then he attacks! Then he's invisible again! Zzzz."
                        },
                        {
                            "name": "Elixir Collector",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/BGLo3Grsp81c72EpxLLk-Sofk3VY56zahnUNOv3JcT0.png"
                            },
                            "key": "elixir-collector",
                            "elixir": 6,
                            "type": "Building",
                            "rarity": "Rare",
                            "arena": 6,
                            "description": "You gotta spend Elixir to make Elixir."
                        },
                        {
                            "name": "Mega Minion",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/-T_e4YLbuhPBKbYnBwQfXgynNpp5eOIN_0RracYwL9c.png"
                            },
                            "key": "mega-minion",
                            "elixir": 3,
                            "type": "Troop",
                            "rarity": "Rare",
                            "arena": 7,
                            "description": "Flying, armored and powerful. What could be its weakness?! Cupcakes."
                        },
                        {
                            "name": "Baby Dragon",
                            "level": 4,
                            "maxLevel": 8,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/cjC9n4AvEZJ3urkVh-rwBkJ-aRSsydIMqSAV48hAih0.png"
                            },
                            "key": "baby-dragon",
                            "elixir": 4,
                            "type": "Troop",
                            "rarity": "Epic",
                            "arena": 0,
                            "description": "Flying troop that deals area damage. Baby dragons hatch cute, hungry and ready for a barbeque."
                        },
                        {
                            "name": "Rocket",
                            "level": 7,
                            "maxLevel": 11,
                            "iconUrls": {
                                "medium": "https://api-assets.clashroyale.com/cards/300/Ie07nQNK9CjhKOa4-arFAewi4EroqaA-86Xo7r5tx94.png"
                            },
                            "key": "rocket",
                            "elixir": 6,
                            "type": "Spell",
                            "rarity": "Rare",
                            "arena": 3,
                            "description": "Deals high damage to a small area. Looks really awesome doing it. Reduced damage to Crown Towers."
                        }
                    ]
                }
            ],
            "arena": {
                "name": "Electro Valley",
                "arena": "Arena 11",
                "arenaID": 10,
                "trophyLimit": 3000
            }
        }
    ]
}
```

## Implementation

You can see an implementation of this at http://cr-api.com/profile/8L9L9GL
