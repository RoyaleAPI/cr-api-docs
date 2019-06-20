# Full Tournaments

!> This endpoint has yet to be implemented. Please be patient as we add the endpoints from v2. The endpoint will return a 501 Not Implemented error.

This endpoint returns a list of tournaments that are full.

You may want to use [pagination](pagination) for this request.

## HTTP Request
`GET https://v3-beta.royaleapi.com/tournaments/full`

Name | Method | Description
--- | --- | ---
/tournaments/full | GET | List of full tournaments

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
https://v3-beta.royaleapi.com/tournaments/full

The above command returns JSON structured like this. In the actual response, there will be a maximum of 100 tournaments:

<a href="/json/tournaments_full.json">Full JSON response</a>

```json
[
    {
        "tag": "CUUVGVP",
        "name": "hola",
        "open": true,
        "maxPlayers": 50,
        "currentPlayers": 50,
        "status": "inPreparation",
        "createTime": 1532083780,
        "prepTime": 7200,
        "startTime": null,
        "endTime": null,
        "duration": 3600,
        "description": "",
        "updatedAt": 1532084406,
        "members": []
    }
]
```
