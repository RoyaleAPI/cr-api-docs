# Clan Search

This endpoint allows you to search for a clan.

You may want to use [pagination](pagination) for this request.

## HTTP Request

`GET https://v3-beta.royaleapi.com/clan/search?name=<NAME>&score=<SCORE>&minMembers=<MIN_MEMBERS>&maxMembers=<MAX_MEMBERS>&locationId=<LOCATION_ID>`

Name | Method | Description
--- | --- | ---
/clan/search | GET | Clan search

### Query String Parameters

You must provide at least one query string parameters to see results (this does not include `max`).


Name | Data Type | Required / Optional | Description
--- | --- | --- | ---
`name` | string | optional | Clan name text search.
`score` | number | optional | Minimum clan score.
`minMembers` | number | optional | Minimum number of members. 2-50
`maxMembers` | number | optional | Maximum number of members. 2-50
`locationId` | number | optional | Location ID. See [regions.json](https://github.com/RoyaleAPI/cr-api-data/blob/master/json/regions.json) for accepted values.

## Response

https://v3-beta.royaleapi.com/clan/search?name=abc

<a href="/json/clan_search_abc.json">Full JSON response</a>

```json

[
    {
        "tag": "G92LQVC",
        "name": "abc",
        "type": "invite only",
        "score": 13477,
        "memberCount": 26,
        "requiredScore": 0,
        "donations": 0,
        "badge": {
            "name": "Skull_03",
            "category": "01_Symbol",
            "id": 16000026,
            "image": "https://cr-api.github.io/cr-api-assets/badges/Skull_03.png"
        },
        "location": {
            "name": "China",
            "isCountry": true,
            "code": "CN"
        }
    },
    {
        "tag": "28PLGC29",
        "name": "ABC",
        "type": "open",
        "score": 13150,
        "memberCount": 50,
        "requiredScore": 0,
        "donations": 0,
        "badge": {
            "name": "Heart_02",
            "category": "01_Symbol",
            "id": 16000109,
            "image": "https://cr-api.github.io/cr-api-assets/badges/Heart_02.png"
        },
        "location": {
            "name": "China",
            "isCountry": true,
            "code": "CN"
        }
    },
]
```

## Implementations

https://royaleapi.com/clans/search
