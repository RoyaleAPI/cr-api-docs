# Tournaments Search

!> This endpoint has yet to be implemented. Please be patient as we add the endpoints from v2. The endpoint will return a 501 Not Implemented error.

This endpoint allows you to search for a tournament given the name.

You may want to use [pagination](pagination) for this request.

## HTTP Request

`GET https://api.royaleapi.com/tournaments/search?name=<NAME>`

Name | Method | Description
--- | --- | ---
/tournaments/search | GET | Tournaments search

### Query String Parameters

Name | Data Type | Required / Optional | Description
--- | --- | --- | ---
`name` | string | required | Tournament name text search

## Response

https://api.royaleapi.com/tournaments/search?name=a

<a href="/json/tournaments_search_a.json">Full JSON response</a>

```json

[
    {
        "tag": "20CVYRV8",
        "open": true,
        "status": "inPreparation",
        "creatorTag": "#99Y90URP8",
        "name": "Andrei Geanta",
        "maxPlayers": 50,
        "prepTime": 7200,
        "duration": 3600,
        "createTime": 1520249970,
        "startTime": null,
        "endTime": null,
        "currentPlayers": 50,
        "members": []
    },
    {
        "tag": "C9LRLP0",
        "open": false,
        "status": "inProgress",
        "creatorTag": "#989G8QLCG",
        "name": "ali",
        "description": "vous pouvez pas rejoindre",
        "maxPlayers": 100,
        "prepTime": 7200,
        "duration": 3600,
        "createTime": 1520251673,
        "startTime": null,
        "endTime": null,
        "currentPlayers": 29,
        "members": []
    },
]
```

## Implementations

https://royaleapi.com/tournament/search?name=a
