# Known Tournaments

This endpoint returns a list of tournaments people have used the [/tournaments](/endpoints/tournaments) endpoint to search for.

You may want to use [pagination](pagination) for this request.

## HTTP Request
`GET https://api.royaleapi.com/tournaments/known`

Name | Method | Description
--- | --- | ---
/tournaments/known | GET | List of known tournaments

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
https://api.royaleapi.com/tournaments/known

The above command returns JSON structured like this. In the actual response, there will be a maximum of 100 tournaments:

<a href="/json/tournaments_known.json">Full JSON response</a>

```json
[
    {
        "tag": "CUUVGVP",
        "open": true,
        "status": "inPreparation",
        "name": "hola",
        "currentPlayers": 50,
        "maxPlayers": 50,
        "prepTime": 7200,
        "duration": 3600,
        "createTime": 1518090895,
        "startTime": null,
        "endTime": null
    }
]
```
