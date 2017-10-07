# Get Multiple Clans

This endpoint retrieves multiple clans. You can request up to 15 clans in each request.

## HTTP Request

`GET http://api.cr-api.com/clan/<TAG>,<TAG>,<TAG>`

### URL Parameters

Parameter | Description
--- | ---
TAG | The clan tag of the clan to retrieve. Use a comma to separate each clan tag.

## Response

http://api.cr-api.com/clan/2CCCP,2U2GGQJ

The above command returns JSON structured like this:

```json
[
    {
        "name": "Reddit Alpha",
        "badge": {
            "url": "/badge/A_Char_Rocket_02.png",
            "filename": "A_Char_Rocket_02.png",
            "key": "A_Char_Rocket_02"
        },
        "type": 2,
        "memberCount": 46,
        "score": 45819,
        "requiredScore": 4300,
        "donations": 26770,
        "currentRank": 0,
        "description": "Minimum 5600 PB 🏆to join🚀 When full, #50/50 sent to Reddit Bravo #2U2GGQJ 🚀http://discord.gg/RACF 🚀http://twitch.tv/woody_cr",
        "tag": "2CCCP",
        "typeName": "Invite Only",
        "region": {
            "isCountry": "true",
            "name": "Niue"
        },
        "clanChest": {
            "clanChestCrowns": 1600,
            "clanChestCrownsPercent": 1,
            "clanChestCrownsRequired": 1600
        },
        "members": [
            {
                "name": "⭐️JAYisGOD⭐️",
                "arena": {
                    "imageURL": "/arena/league3.png",
                    "arena": "League 3",
                    "arenaID": 14,
                    "name": "Challenger III",
                    "trophyLimit": 4600
                },
                "role": 3,
                "expLevel": 13,
                "trophies": 4783,
                "donations": 278,
                "currentRank": 1,
                "previousRank": 0,
                "clanChestCrowns": 0,
                "tag": "9UR0UR8P",
                "roleName": "Elder",
                "score": 4783
            },
            {
                "name": "dio",
                "arena": {
                    "imageURL": "/arena/league3.png",
                    "arena": "League 3",
                    "arenaID": 14,
                    "name": "Challenger III",
                    "trophyLimit": 4600
                },
                "role": 3,
                "expLevel": 13,
                "trophies": 4768,
                "donations": 152,
                "currentRank": 2,
                "previousRank": 8,
                "clanChestCrowns": 28,
                "tag": "8JQQC2PV",
                "roleName": "Elder",
                "score": 4768
            },
            {
                "name": "yo mama",
                "arena": {
                    "imageURL": "/arena/league3.png",
                    "arena": "League 3",
                    "arenaID": 14,
                    "name": "Challenger III",
                    "trophyLimit": 4600
                },
                "role": 3,
                "expLevel": 13,
                "trophies": 4750,
                "donations": 28,
                "currentRank": 3,
                "previousRank": 2,
                "clanChestCrowns": 15,
                "tag": "20PV900V",
                "roleName": "Elder",
                "score": 4750
            },
            {
                "name": "Alonso23",
                "arena": {
                    "imageURL": "/arena/league3.png",
                    "arena": "League 3",
                    "arenaID": 14,
                    "name": "Challenger III",
                    "trophyLimit": 4600
                },
                "role": 3,
                "expLevel": 13,
                "trophies": 4749,
                "donations": 350,
                "currentRank": 4,
                "previousRank": 6,
                "clanChestCrowns": 44,
                "tag": "RVJLGLV",
                "roleName": "Elder",
                "score": 4749
            },
            {
                "name": "Mighty Sniper",
                "arena": {
                    "imageURL": "/arena/league3.png",
                    "arena": "League 3",
                    "arenaID": 14,
                    "name": "Challenger III",
                    "trophyLimit": 4600
                },
                "role": 1,
                "expLevel": 12,
                "trophies": 4723,
                "donations": 0,
                "currentRank": 5,
                "previousRank": 0,
                "clanChestCrowns": 0,
                "tag": "P8RJPV",
                "roleName": "Member",
                "score": 4723
            },
            {
                "name": "PowRay",
                "arena": {
                    "imageURL": "/arena/league3.png",
                    "arena": "League 3",
                    "arenaID": 14,
                    "name": "Challenger III",
                    "trophyLimit": 4600
                },
                "role": 3,
                "expLevel": 13,
                "trophies": 4717,
                "donations": 158,
                "currentRank": 6,
                "previousRank": 1,
                "clanChestCrowns": 0,
                "tag": "9RR0CPGU",
                "roleName": "Elder",
                "score": 4717
            },
            {
                "name": "xuqa.rzn",
                "arena": {
                    "imageURL": "/arena/league3.png",
                    "arena": "League 3",
                    "arenaID": 14,
                    "name": "Challenger III",
                    "trophyLimit": 4600
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4717,
                "donations": 300,
                "currentRank": 7,
                "previousRank": 20,
                "clanChestCrowns": 18,
                "tag": "J2RUC0J",
                "roleName": "Elder",
                "score": 4717
            },
            {
                "name": "The Crid",
                "arena": {
                    "imageURL": "/arena/league3.png",
                    "arena": "League 3",
                    "arenaID": 14,
                    "name": "Challenger III",
                    "trophyLimit": 4600
                },
                "role": 3,
                "expLevel": 13,
                "trophies": 4700,
                "donations": 1086,
                "currentRank": 8,
                "previousRank": 9,
                "clanChestCrowns": 7,
                "tag": "R8V0VYJ2",
                "roleName": "Elder",
                "score": 4700
            },
            {
                "name": "cece",
                "arena": {
                    "imageURL": "/arena/league3.png",
                    "arena": "League 3",
                    "arenaID": 14,
                    "name": "Challenger III",
                    "trophyLimit": 4600
                },
                "role": 3,
                "expLevel": 13,
                "trophies": 4684,
                "donations": 988,
                "currentRank": 9,
                "previousRank": 17,
                "clanChestCrowns": 2,
                "tag": "UJPPP9UL",
                "roleName": "Elder",
                "score": 4684
            },
            {
                "name": "AdamS93d",
                "arena": {
                    "imageURL": "/arena/league3.png",
                    "arena": "League 3",
                    "arenaID": 14,
                    "name": "Challenger III",
                    "trophyLimit": 4600
                },
                "role": 3,
                "expLevel": 13,
                "trophies": 4672,
                "donations": 315,
                "currentRank": 10,
                "previousRank": 3,
                "clanChestCrowns": 47,
                "tag": "9VV9JPGY",
                "roleName": "Elder",
                "score": 4672
            },
            {
                "name": "Change Name™",
                "arena": {
                    "imageURL": "/arena/league3.png",
                    "arena": "League 3",
                    "arenaID": 14,
                    "name": "Challenger III",
                    "trophyLimit": 4600
                },
                "role": 3,
                "expLevel": 13,
                "trophies": 4664,
                "donations": 0,
                "currentRank": 11,
                "previousRank": 11,
                "clanChestCrowns": 53,
                "tag": "R02RCLJL",
                "roleName": "Elder",
                "score": 4664
            },
            {
                "name": "Sergster",
                "arena": {
                    "imageURL": "/arena/league3.png",
                    "arena": "League 3",
                    "arenaID": 14,
                    "name": "Challenger III",
                    "trophyLimit": 4600
                },
                "role": 3,
                "expLevel": 13,
                "trophies": 4662,
                "donations": 428,
                "currentRank": 12,
                "previousRank": 13,
                "clanChestCrowns": 163,
                "tag": "CYL0P0P8",
                "roleName": "Elder",
                "score": 4662
            },
            {
                "name": "John",
                "arena": {
                    "imageURL": "/arena/league3.png",
                    "arena": "League 3",
                    "arenaID": 14,
                    "name": "Challenger III",
                    "trophyLimit": 4600
                },
                "role": 4,
                "expLevel": 13,
                "trophies": 4661,
                "donations": 283,
                "currentRank": 13,
                "previousRank": 14,
                "clanChestCrowns": 24,
                "tag": "9LL0VQ8L",
                "roleName": "Co-Leader",
                "score": 4661
            },
            {
                "name": "phuie024",
                "arena": {
                    "imageURL": "/arena/league3.png",
                    "arena": "League 3",
                    "arenaID": 14,
                    "name": "Challenger III",
                    "trophyLimit": 4600
                },
                "role": 4,
                "expLevel": 13,
                "trophies": 4627,
                "donations": 712,
                "currentRank": 14,
                "previousRank": 26,
                "clanChestCrowns": 3,
                "tag": "9CQ2U8QJ",
                "roleName": "Co-Leader",
                "score": 4627
            },
            {
                "name": "ApocD21",
                "arena": {
                    "imageURL": "/arena/league3.png",
                    "arena": "League 3",
                    "arenaID": 14,
                    "name": "Challenger III",
                    "trophyLimit": 4600
                },
                "role": 4,
                "expLevel": 13,
                "trophies": 4624,
                "donations": 616,
                "currentRank": 15,
                "previousRank": 10,
                "clanChestCrowns": 40,
                "tag": "YV9PC9PU",
                "roleName": "Co-Leader",
                "score": 4624
            },
            {
                "name": "Blaze",
                "arena": {
                    "imageURL": "/arena/league3.png",
                    "arena": "League 3",
                    "arenaID": 14,
                    "name": "Challenger III",
                    "trophyLimit": 4600
                },
                "role": 3,
                "expLevel": 13,
                "trophies": 4612,
                "donations": 20,
                "currentRank": 16,
                "previousRank": 0,
                "clanChestCrowns": 0,
                "tag": "YJLJ98U",
                "roleName": "Elder",
                "score": 4612
            },
            {
                "name": "Jeremy",
                "arena": {
                    "imageURL": "/arena/league3.png",
                    "arena": "League 3",
                    "arenaID": 14,
                    "name": "Challenger III",
                    "trophyLimit": 4600
                },
                "role": 3,
                "expLevel": 13,
                "trophies": 4609,
                "donations": 1064,
                "currentRank": 17,
                "previousRank": 15,
                "clanChestCrowns": 78,
                "tag": "22V8PCP",
                "roleName": "Elder",
                "score": 4609
            },
            {
                "name": "schmanik",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 13,
                "trophies": 4584,
                "donations": 182,
                "currentRank": 18,
                "previousRank": 19,
                "clanChestCrowns": 30,
                "tag": "2VYVG0LQ",
                "roleName": "Elder",
                "score": 4584
            },
            {
                "name": "John™",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 13,
                "trophies": 4566,
                "donations": 252,
                "currentRank": 19,
                "previousRank": 16,
                "clanChestCrowns": 47,
                "tag": "PL22YQUY",
                "roleName": "Elder",
                "score": 4566
            },
            {
                "name": "Slephnir",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4565,
                "donations": 856,
                "currentRank": 20,
                "previousRank": 24,
                "clanChestCrowns": 11,
                "tag": "Y09Y9YUQ",
                "roleName": "Elder",
                "score": 4565
            },
            {
                "name": "julian",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4550,
                "donations": 826,
                "currentRank": 21,
                "previousRank": 28,
                "clanChestCrowns": 64,
                "tag": "20VQRLCGG",
                "roleName": "Elder",
                "score": 4550
            },
            {
                "name": "Gus",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4542,
                "donations": 673,
                "currentRank": 22,
                "previousRank": 25,
                "clanChestCrowns": 2,
                "tag": "R90LR28J",
                "roleName": "Elder",
                "score": 4542
            },
            {
                "name": "Jo͛hͥn̽",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 2,
                "expLevel": 13,
                "trophies": 4528,
                "donations": 217,
                "currentRank": 23,
                "previousRank": 23,
                "clanChestCrowns": 31,
                "tag": "8L9L9GL",
                "roleName": "Leader",
                "score": 4528
            },
            {
                "name": "FayJai",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4527,
                "donations": 297,
                "currentRank": 24,
                "previousRank": 32,
                "clanChestCrowns": 34,
                "tag": "JQRYVPUR",
                "roleName": "Elder",
                "score": 4527
            },
            {
                "name": "BrianJarett",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 13,
                "trophies": 4524,
                "donations": 1419,
                "currentRank": 25,
                "previousRank": 43,
                "clanChestCrowns": 29,
                "tag": "QVCQGUQ9",
                "roleName": "Elder",
                "score": 4524
            },
            {
                "name": "Rapaz",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4503,
                "donations": 552,
                "currentRank": 26,
                "previousRank": 27,
                "clanChestCrowns": 57,
                "tag": "C0PPV",
                "roleName": "Elder",
                "score": 4503
            },
            {
                "name": "alpe123",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4503,
                "donations": 80,
                "currentRank": 27,
                "previousRank": 0,
                "clanChestCrowns": 0,
                "tag": "29RGGUGV",
                "roleName": "Elder",
                "score": 4503
            },
            {
                "name": "Bdubs",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 13,
                "trophies": 4500,
                "donations": 148,
                "currentRank": 28,
                "previousRank": 33,
                "clanChestCrowns": 45,
                "tag": "2Y29GRU9",
                "roleName": "Elder",
                "score": 4500
            },
            {
                "name": "mattyramrods",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 4,
                "expLevel": 12,
                "trophies": 4491,
                "donations": 682,
                "currentRank": 29,
                "previousRank": 22,
                "clanChestCrowns": 34,
                "tag": "L89QCL0Y",
                "roleName": "Co-Leader",
                "score": 4491
            },
            {
                "name": "Zoidberg",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 13,
                "trophies": 4484,
                "donations": 249,
                "currentRank": 30,
                "previousRank": 29,
                "clanChestCrowns": 20,
                "tag": "2082JGGV",
                "roleName": "Elder",
                "score": 4484
            },
            {
                "name": "Rayghar",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 13,
                "trophies": 4478,
                "donations": 1060,
                "currentRank": 31,
                "previousRank": 30,
                "clanChestCrowns": 27,
                "tag": "8RYR9L2J",
                "roleName": "Elder",
                "score": 4478
            },
            {
                "name": "Popcorn",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 4,
                "expLevel": 13,
                "trophies": 4476,
                "donations": 56,
                "currentRank": 32,
                "previousRank": 31,
                "clanChestCrowns": 8,
                "tag": "98JUYJPR",
                "roleName": "Co-Leader",
                "score": 4476
            },
            {
                "name": "TLLurMOMthnx4me",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4468,
                "donations": 1320,
                "currentRank": 33,
                "previousRank": 34,
                "clanChestCrowns": 104,
                "tag": "V2YGLRPU",
                "roleName": "Elder",
                "score": 4468
            },
            {
                "name": "dred",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4466,
                "donations": 140,
                "currentRank": 34,
                "previousRank": 18,
                "clanChestCrowns": 53,
                "tag": "29RUYGPCU",
                "roleName": "Elder",
                "score": 4466
            },
            {
                "name": "mizz",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 1,
                "expLevel": 13,
                "trophies": 4463,
                "donations": 0,
                "currentRank": 35,
                "previousRank": 0,
                "clanChestCrowns": 0,
                "tag": "P09C8929",
                "roleName": "Member",
                "score": 4463
            },
            {
                "name": "kenopaul",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4451,
                "donations": 130,
                "currentRank": 36,
                "previousRank": 21,
                "clanChestCrowns": 0,
                "tag": "8920PGGG",
                "roleName": "Elder",
                "score": 4451
            },
            {
                "name": "Sharox",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 13,
                "trophies": 4445,
                "donations": 332,
                "currentRank": 37,
                "previousRank": 35,
                "clanChestCrowns": 10,
                "tag": "9PLLP00P",
                "roleName": "Elder",
                "score": 4445
            },
            {
                "name": "Time2Rage",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4442,
                "donations": 1028,
                "currentRank": 38,
                "previousRank": 36,
                "clanChestCrowns": 42,
                "tag": "LPVGGVQJ",
                "roleName": "Elder",
                "score": 4442
            },
            {
                "name": "RaZdByGiZi",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4441,
                "donations": 212,
                "currentRank": 39,
                "previousRank": 45,
                "clanChestCrowns": 47,
                "tag": "89V8Q9QJ",
                "roleName": "Elder",
                "score": 4441
            },
            {
                "name": "Predator",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 13,
                "trophies": 4415,
                "donations": 1434,
                "currentRank": 40,
                "previousRank": 38,
                "clanChestCrowns": 22,
                "tag": "9QJUQG88",
                "roleName": "Elder",
                "score": 4415
            },
            {
                "name": "Dirty Italian",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4411,
                "donations": 174,
                "currentRank": 41,
                "previousRank": 39,
                "clanChestCrowns": 30,
                "tag": "P2Y0J92",
                "roleName": "Elder",
                "score": 4411
            },
            {
                "name": "JMOD",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 13,
                "trophies": 4395,
                "donations": 1016,
                "currentRank": 42,
                "previousRank": 40,
                "clanChestCrowns": 1,
                "tag": "8QCRLCLG",
                "roleName": "Elder",
                "score": 4395
            },
            {
                "name": "Nicki Bey",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 13,
                "trophies": 4390,
                "donations": 0,
                "currentRank": 43,
                "previousRank": 42,
                "clanChestCrowns": 23,
                "tag": "Q8JGYLCY",
                "roleName": "Elder",
                "score": 4390
            },
            {
                "name": "ragen",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4383,
                "donations": 330,
                "currentRank": 44,
                "previousRank": 47,
                "clanChestCrowns": 18,
                "tag": "LCUPCVCC",
                "roleName": "Elder",
                "score": 4383
            },
            {
                "name": "Emrys",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 11,
                "trophies": 4357,
                "donations": 0,
                "currentRank": 45,
                "previousRank": 44,
                "clanChestCrowns": 16,
                "tag": "2V00QG8Q",
                "roleName": "Elder",
                "score": 4357
            },
            {
                "name": "(~•_•~)! : )",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4329,
                "donations": 30,
                "currentRank": 46,
                "previousRank": 46,
                "clanChestCrowns": 25,
                "tag": "VGRCVGCP",
                "roleName": "Elder",
                "score": 4329
            }
        ]
    },
    {
        "name": "Reddit Bravo",
        "badge": {
            "url": "/badge/A_Char_Rocket_02.png",
            "filename": "A_Char_Rocket_02.png",
            "key": "A_Char_Rocket_02"
        },
        "type": 2,
        "memberCount": 43,
        "score": 43722,
        "requiredScore": 4300,
        "donations": 23730,
        "currentRank": 0,
        "description": "Official feeder for Reddit Alpha! Best of r/ClashRoyale. #50 demoted at 50/50. Feeder:Reddit Charlie #2QUVVVP. 5300🏆 PB to join",
        "tag": "2U2GGQJ",
        "typeName": "Invite Only",
        "region": {
            "isCountry": "true",
            "name": "Niue"
        },
        "clanChest": {
            "clanChestCrowns": 1600,
            "clanChestCrownsPercent": 1,
            "clanChestCrownsRequired": 1600
        },
        "members": [
            {
                "name": "monthescon",
                "arena": {
                    "imageURL": "/arena/league3.png",
                    "arena": "League 3",
                    "arenaID": 14,
                    "name": "Challenger III",
                    "trophyLimit": 4600
                },
                "role": 4,
                "expLevel": 12,
                "trophies": 4609,
                "donations": 773,
                "currentRank": 1,
                "previousRank": 3,
                "clanChestCrowns": 54,
                "tag": "2YL2Y92Q",
                "roleName": "Co-Leader",
                "score": 4609
            },
            {
                "name": "Horse",
                "arena": {
                    "imageURL": "/arena/league3.png",
                    "arena": "League 3",
                    "arenaID": 14,
                    "name": "Challenger III",
                    "trophyLimit": 4600
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4602,
                "donations": 983,
                "currentRank": 2,
                "previousRank": 2,
                "clanChestCrowns": 50,
                "tag": "QPYQ0UJL",
                "roleName": "Elder",
                "score": 4602
            },
            {
                "name": "kbsjedi",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 1,
                "expLevel": 13,
                "trophies": 4568,
                "donations": 607,
                "currentRank": 3,
                "previousRank": 4,
                "clanChestCrowns": 46,
                "tag": "2ULRGJYY",
                "roleName": "Member",
                "score": 4568
            },
            {
                "name": "matiz",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 4,
                "expLevel": 13,
                "trophies": 4555,
                "donations": 1446,
                "currentRank": 4,
                "previousRank": 1,
                "clanChestCrowns": 16,
                "tag": "G0JVYY0",
                "roleName": "Co-Leader",
                "score": 4555
            },
            {
                "name": "Kiwi Slayer",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4542,
                "donations": 20,
                "currentRank": 5,
                "previousRank": 9,
                "clanChestCrowns": 102,
                "tag": "2PVYPY8Q",
                "roleName": "Elder",
                "score": 4542
            },
            {
                "name": "Mirko",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4531,
                "donations": 626,
                "currentRank": 6,
                "previousRank": 10,
                "clanChestCrowns": 20,
                "tag": "8QP0U8CV",
                "roleName": "Elder",
                "score": 4531
            },
            {
                "name": "MCBC45",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4509,
                "donations": 966,
                "currentRank": 7,
                "previousRank": 5,
                "clanChestCrowns": 13,
                "tag": "9QYC2P0R",
                "roleName": "Elder",
                "score": 4509
            },
            {
                "name": "Pax Light",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4504,
                "donations": 584,
                "currentRank": 8,
                "previousRank": 6,
                "clanChestCrowns": 1,
                "tag": "QJVPLP0",
                "roleName": "Elder",
                "score": 4504
            },
            {
                "name": "chuzyu",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4504,
                "donations": 634,
                "currentRank": 9,
                "previousRank": 7,
                "clanChestCrowns": 30,
                "tag": "8QYCV9JY",
                "roleName": "Elder",
                "score": 4504
            },
            {
                "name": "ThorOMGitsHuge",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 1,
                "expLevel": 12,
                "trophies": 4486,
                "donations": 146,
                "currentRank": 10,
                "previousRank": 8,
                "clanChestCrowns": 44,
                "tag": "YJYYG9LU",
                "roleName": "Member",
                "score": 4486
            },
            {
                "name": "Prof X",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4480,
                "donations": 395,
                "currentRank": 11,
                "previousRank": 11,
                "clanChestCrowns": 20,
                "tag": "2JQ2JL2R",
                "roleName": "Elder",
                "score": 4480
            },
            {
                "name": "J-Dog_Squad",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4477,
                "donations": 748,
                "currentRank": 12,
                "previousRank": 19,
                "clanChestCrowns": 36,
                "tag": "2GCG0JVJ",
                "roleName": "Elder",
                "score": 4477
            },
            {
                "name": "mhuzak",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 1,
                "expLevel": 12,
                "trophies": 4476,
                "donations": 819,
                "currentRank": 13,
                "previousRank": 12,
                "clanChestCrowns": 7,
                "tag": "22VJLQ099",
                "roleName": "Member",
                "score": 4476
            },
            {
                "name": "meridian",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 2,
                "expLevel": 13,
                "trophies": 4449,
                "donations": 153,
                "currentRank": 14,
                "previousRank": 14,
                "clanChestCrowns": 24,
                "tag": "LG9G28U9",
                "roleName": "Leader",
                "score": 4449
            },
            {
                "name": "Alejandro",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 1,
                "expLevel": 12,
                "trophies": 4440,
                "donations": 102,
                "currentRank": 15,
                "previousRank": 15,
                "clanChestCrowns": 66,
                "tag": "P8Y2CPP8",
                "roleName": "Member",
                "score": 4440
            },
            {
                "name": "kelso",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 1,
                "expLevel": 12,
                "trophies": 4439,
                "donations": 883,
                "currentRank": 16,
                "previousRank": 17,
                "clanChestCrowns": 69,
                "tag": "Y0RLLLC",
                "roleName": "Member",
                "score": 4439
            },
            {
                "name": "UltimateHunter",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4437,
                "donations": 556,
                "currentRank": 17,
                "previousRank": 16,
                "clanChestCrowns": 53,
                "tag": "2URVYU2Q",
                "roleName": "Elder",
                "score": 4437
            },
            {
                "name": "RIP The Dream",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 1,
                "expLevel": 12,
                "trophies": 4419,
                "donations": 444,
                "currentRank": 18,
                "previousRank": 13,
                "clanChestCrowns": 27,
                "tag": "88YYVPQC",
                "roleName": "Member",
                "score": 4419
            },
            {
                "name": "Deicide",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4415,
                "donations": 527,
                "currentRank": 19,
                "previousRank": 25,
                "clanChestCrowns": 11,
                "tag": "VGYQQ0U",
                "roleName": "Elder",
                "score": 4415
            },
            {
                "name": "twizms",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 1,
                "expLevel": 13,
                "trophies": 4414,
                "donations": 76,
                "currentRank": 20,
                "previousRank": 21,
                "clanChestCrowns": 6,
                "tag": "JJQY9V2P",
                "roleName": "Member",
                "score": 4414
            },
            {
                "name": "alec leyner",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 1,
                "expLevel": 12,
                "trophies": 4413,
                "donations": 266,
                "currentRank": 21,
                "previousRank": 28,
                "clanChestCrowns": 13,
                "tag": "YLRVLV8Y",
                "roleName": "Member",
                "score": 4413
            },
            {
                "name": "tc",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 1,
                "expLevel": 12,
                "trophies": 4408,
                "donations": 998,
                "currentRank": 22,
                "previousRank": 18,
                "clanChestCrowns": 68,
                "tag": "GRUVQRCU",
                "roleName": "Member",
                "score": 4408
            },
            {
                "name": "bigzuke2",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4407,
                "donations": 872,
                "currentRank": 23,
                "previousRank": 24,
                "clanChestCrowns": 87,
                "tag": "JUG0Q2P8",
                "roleName": "Elder",
                "score": 4407
            },
            {
                "name": "Dryaan",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 1,
                "expLevel": 12,
                "trophies": 4407,
                "donations": 995,
                "currentRank": 24,
                "previousRank": 35,
                "clanChestCrowns": 43,
                "tag": "VPQCRJUJ",
                "roleName": "Member",
                "score": 4407
            },
            {
                "name": "Steven",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 4,
                "expLevel": 12,
                "trophies": 4384,
                "donations": 118,
                "currentRank": 25,
                "previousRank": 30,
                "clanChestCrowns": 32,
                "tag": "RLJCY020",
                "roleName": "Co-Leader",
                "score": 4384
            },
            {
                "name": "Donkey Kong",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 1,
                "expLevel": 13,
                "trophies": 4383,
                "donations": 343,
                "currentRank": 26,
                "previousRank": 22,
                "clanChestCrowns": 5,
                "tag": "GYPPGG8",
                "roleName": "Member",
                "score": 4383
            },
            {
                "name": "cjp",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 1,
                "expLevel": 12,
                "trophies": 4361,
                "donations": 474,
                "currentRank": 27,
                "previousRank": 20,
                "clanChestCrowns": 11,
                "tag": "2YGQRRJJ",
                "roleName": "Member",
                "score": 4361
            },
            {
                "name": "Projet's Méca",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 1,
                "expLevel": 12,
                "trophies": 4360,
                "donations": 191,
                "currentRank": 28,
                "previousRank": 23,
                "clanChestCrowns": 20,
                "tag": "R9982YGV",
                "roleName": "Member",
                "score": 4360
            },
            {
                "name": "Jordi11xDDD",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 1,
                "expLevel": 12,
                "trophies": 4355,
                "donations": 500,
                "currentRank": 29,
                "previousRank": 34,
                "clanChestCrowns": 28,
                "tag": "2GQUU9VY",
                "roleName": "Member",
                "score": 4355
            },
            {
                "name": "Saul Goodman",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 1,
                "expLevel": 12,
                "trophies": 4335,
                "donations": 771,
                "currentRank": 30,
                "previousRank": 26,
                "clanChestCrowns": 41,
                "tag": "PR8PV99",
                "roleName": "Member",
                "score": 4335
            },
            {
                "name": "pwncake",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 13,
                "trophies": 4335,
                "donations": 338,
                "currentRank": 31,
                "previousRank": 27,
                "clanChestCrowns": 147,
                "tag": "9V9G9008",
                "roleName": "Elder",
                "score": 4335
            },
            {
                "name": "iPK Alex",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 1,
                "expLevel": 12,
                "trophies": 4331,
                "donations": 622,
                "currentRank": 32,
                "previousRank": 29,
                "clanChestCrowns": 35,
                "tag": "2LLVV9YL",
                "roleName": "Member",
                "score": 4331
            },
            {
                "name": "JustPush",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 1,
                "expLevel": 12,
                "trophies": 4320,
                "donations": 102,
                "currentRank": 33,
                "previousRank": 39,
                "clanChestCrowns": 16,
                "tag": "8228LVCG",
                "roleName": "Member",
                "score": 4320
            },
            {
                "name": "César",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 1,
                "expLevel": 12,
                "trophies": 4318,
                "donations": 1063,
                "currentRank": 34,
                "previousRank": 31,
                "clanChestCrowns": 33,
                "tag": "80VQJJLP",
                "roleName": "Member",
                "score": 4318
            },
            {
                "name": "Murtadha",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 1,
                "expLevel": 12,
                "trophies": 4317,
                "donations": 352,
                "currentRank": 35,
                "previousRank": 38,
                "clanChestCrowns": 81,
                "tag": "RRJQPG9V",
                "roleName": "Member",
                "score": 4317
            },
            {
                "name": "doc",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 1,
                "expLevel": 13,
                "trophies": 4305,
                "donations": 84,
                "currentRank": 36,
                "previousRank": 32,
                "clanChestCrowns": 43,
                "tag": "Y80Q8G2G",
                "roleName": "Member",
                "score": 4305
            },
            {
                "name": "ronwelty",
                "arena": {
                    "imageURL": "/arena/league2.png",
                    "arena": "League 2",
                    "arenaID": 13,
                    "name": "Challenger II",
                    "trophyLimit": 4300
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4300,
                "donations": 587,
                "currentRank": 37,
                "previousRank": 33,
                "clanChestCrowns": 90,
                "tag": "PPU82PCP",
                "roleName": "Elder",
                "score": 4300
            },
            {
                "name": "BrianWasTaken",
                "arena": {
                    "imageURL": "/arena/league1.png",
                    "arena": "League 1",
                    "arenaID": 12,
                    "name": "Challenger I",
                    "trophyLimit": 4000
                },
                "role": 4,
                "expLevel": 12,
                "trophies": 4284,
                "donations": 586,
                "currentRank": 38,
                "previousRank": 37,
                "clanChestCrowns": 17,
                "tag": "PJVQUV82",
                "roleName": "Co-Leader",
                "score": 4284
            },
            {
                "name": "187",
                "arena": {
                    "imageURL": "/arena/league1.png",
                    "arena": "League 1",
                    "arenaID": 12,
                    "name": "Challenger I",
                    "trophyLimit": 4000
                },
                "role": 1,
                "expLevel": 11,
                "trophies": 4284,
                "donations": 486,
                "currentRank": 39,
                "previousRank": 36,
                "clanChestCrowns": 17,
                "tag": "JQL89CQ8",
                "roleName": "Member",
                "score": 4284
            },
            {
                "name": "caban",
                "arena": {
                    "imageURL": "/arena/league1.png",
                    "arena": "League 1",
                    "arenaID": 12,
                    "name": "Challenger I",
                    "trophyLimit": 4000
                },
                "role": 1,
                "expLevel": 13,
                "trophies": 4221,
                "donations": 1070,
                "currentRank": 40,
                "previousRank": 40,
                "clanChestCrowns": 31,
                "tag": "YCYLRPRC",
                "roleName": "Member",
                "score": 4221
            },
            {
                "name": "JackSpecticEYE",
                "arena": {
                    "imageURL": "/arena/league1.png",
                    "arena": "League 1",
                    "arenaID": 12,
                    "name": "Challenger I",
                    "trophyLimit": 4000
                },
                "role": 1,
                "expLevel": 12,
                "trophies": 4061,
                "donations": 184,
                "currentRank": 41,
                "previousRank": 41,
                "clanChestCrowns": 24,
                "tag": "9YYCJ0G",
                "roleName": "Member",
                "score": 4061
            },
            {
                "name": "Snafu",
                "arena": {
                    "imageURL": "/arena/league1.png",
                    "arena": "League 1",
                    "arenaID": 12,
                    "name": "Challenger I",
                    "trophyLimit": 4000
                },
                "role": 3,
                "expLevel": 12,
                "trophies": 4000,
                "donations": 112,
                "currentRank": 42,
                "previousRank": 42,
                "clanChestCrowns": 23,
                "tag": "2YQGVJCC",
                "roleName": "Elder",
                "score": 4000
            },
            {
                "name": "patkue",
                "arena": {
                    "imageURL": "/arena/league1.png",
                    "arena": "League 1",
                    "arenaID": 12,
                    "name": "Challenger I",
                    "trophyLimit": 4000
                },
                "role": 3,
                "expLevel": 13,
                "trophies": 4000,
                "donations": 0,
                "currentRank": 43,
                "previousRank": 43,
                "clanChestCrowns": 0,
                "tag": "Q0G08JR0",
                "roleName": "Elder",
                "score": 4000
            }
        ]
    }
]
```

## Implementation

You can see an example of this at http://cr-api.com/clan/family/racf/members
