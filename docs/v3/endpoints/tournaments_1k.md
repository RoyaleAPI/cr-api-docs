# 1k Tournaments

!> This endpoint has yet to be implemented. Please be patient as we add the endpoints from v2. The endpoint will return a 501 Not Implemented error.

This endpoint returns a list of tournaments that have 1000 max players.

You may want to use [pagination](pagination) for this request.

## HTTP Request
`GET https://v3-beta.royaleapi.com/tournaments/1k`

Name | Method | Description
--- | --- | ---
/tournaments/1k | GET | List of 1k tournaments

## Query String Parameters

All query string parameters default to `0`, set the value to `1` for it to be active

Name     | Data Type | Required / Optional | Description
-------- | --- | --- | ---
1k       | number | optional | Filters out only 1k tournaments
open     | number | optional | Filters out only open tournaments
full     | number | optional | Filters out only full tournaments
inprep   | number | optional | Filters out only tournaments in preperation
joinable | number | optional | Filters out only joinable tournaments

[/tournaments/open](/endpoints/tournaments_open), [/tournaments/1k](/endpoints/tournaments_1k), [/tournaments/inprep](/endpoints/tournaments_inprep), [/tournaments/full](/endpoints/tournaments_full) and [/tournaments/joinable](/endpoints/tournaments_joinable) already implement some of these filters. However, you can still mix and match!

## Response
https://v3-beta.royaleapi.com/tournaments/1k

The above command returns JSON structured like this. In the actual response, there will be a maximum of 100 tournaments:

<a href="/json/tournaments_1k.json">Full JSON response</a>

```json
[
    {
        "tag": "CQVCRRC",
        "name": "Nova SG Monthly Cup",
        "open": false,
        "currentPlayers": 44,
        "status": "inProgress",
        "createTime": 1529145581,
        "prepTime": 7200,
        "startTime": null,
        "endTime": null,
        "duration": 3600,
        "description": "good luck to SG Branch! #NovaStrong #AyisGOD",
        "updatedAt": 1529156328,
        "maxCapacity": 1000,
    }
]
```
