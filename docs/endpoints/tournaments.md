# Tournaments

The tournaments endpoint is not overly useful unless you know the tournament tags already. It is not possible to search for tournaments nor see a list of open tournaments at the moment. Please don’t storm our Github and Discord to ask for them.

You can see information about the tournament before it has started and after it has ended.

## HTTP Request

`GET https://api.royaleapi.com/tournaments/<TAG>`


### URL Parameters

Parameter | Description
--- | ---
`TAG` | The tournament tag to retrieve

## Response

https://api.royaleapi.com/tournaments/20YU0VJ9

<a href="/json/tournaments_20YU0VJ9.json">Full JSON Response</a>

```json
{
    "tag": "20YU0VJ9",
    "type": "passwordProtected",
    "status": "ended",
    "name": "Some random tourney",
    "description": "Some random tourney description",
    "capacity": 100,
    "maxCapacity": 100,
    "preparationDuration": 7200,
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
