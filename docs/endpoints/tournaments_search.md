# Tournaments Search

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
        "type": "open",
        "status": "inPreparation",
        "creatorTag": "#99Y90URP8",
        "name": "Andrei Geanta",
        "maxCapacity": 50,
        "preparationDuration": 7200,
        "duration": 3600,
        "createTime": 1520249970,
        "startTime": null,
        "endTime": null,
        "playerCount": 50,
        "members": []
    },
    {
        "tag": "C9LRLP0",
        "type": "passwordProtected",
        "status": "inProgress",
        "creatorTag": "#989G8QLCG",
        "name": "ali",
        "description": "vous pouvez pas rejoindre",
        "maxCapacity": 100,
        "preparationDuration": 7200,
        "duration": 3600,
        "createTime": 1520251673,
        "startTime": null,
        "endTime": null,
        "playerCount": 29,
        "members": []
    },
]
```

## Implementations

https://royaleapi.com/tournament/search?name=a
