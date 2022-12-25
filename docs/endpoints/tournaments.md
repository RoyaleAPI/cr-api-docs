# Tournament(s)

::: tip Note
This endpoint has yet to be implemented. Please be patient as we add the endpoints from v2. The endpoint will return a 501 Not Implemented error.
:::

The tournaments endpoint is not overly useful unless you know the tournament tags already. You can use [/tournaments/known](/endpoints/tournaments_known) or [/tournaments/open](/endpoints/tournaments_open) to find new tournaments.

You can see information about the tournament before it has started and after it has ended.

## HTTP Request

`GET https://api.royaleapi.com/tournament/:tag,:tag`


### URL Parameters

Parameter | Description
--- | ---
`TAG` | The tournament tag to retrieve

## Response

### Single Tournament

https://api.royaleapi.com/tournament/20YU0VJ9

<a href="/json/tournament_20YU0VJ9.json">Full JSON Response</a>

```json
{
    "tag": "20YU0VJ9",
    "open": false,
    "status": "ended",
    "name": "Some random tourney",
    "description": "Some random tourney description",
    "maxPlayers": 100,
    "prepTime": 7200,
    "duration": 3600,
    "endedTime": "20171227T034657.000Z",
    "startTime": 1514342817,
    "createTime": 1514338911,
    "creator": {
        "tag": "YYPRL9CV",
        "name": "R.I.P PAPA KUSH",
        "score": 12
    },
    "members": [
        {
            "tag": "YQ9C8CV9",
            "name": "Dilan",
            "score": 274
        },
        {
            "tag": "2PYVPC9Q",
            "name": "steven2003",
            "score": 270
        },
    ]
}
```

You can see an example of this at https://royaleapi.com/tournament/20YU0VJ9

### Multiple Tournaments

https://api.royaleapi.com/tournament/CJYU0JQ,CJLPYQU

The above command returns JSON structured as follows, where `{}` denotes a full JSON response.

<a href="/json/tournament_CJYU0JQ,CJLPYQU.json">Full JSON response</a> with the two tournaments above.

```json
[
    {},
    {}
]
```
