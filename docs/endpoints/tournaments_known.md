# Known Tournaments

This endpoint returns a list of tournaments people have used the [/tournaments](/endpoint/tournaments) endpoint to search for.

## HTTP Request
`GET http://api.cr-api.com/tournaments/known`

## Response
http://api.cr-api.com/tournaments/known

The above command returns JSON structured like this. In the actual response, there will be a maximum of 100 tournaments:

<a href="/json/tournaments_known.json">Full JSON response</a>

```json
[
    {
        "tag": "CUUVGVP",
        "type": "open",
        "status": "inPreparation",
        "name": "hola",
        "capacity": 50,
        "playerCount": 50,
        "maxCapacity": 50,
        "preparationDuration": 7200,
        "duration": 3600,
        "createTime": 1518090895,
        "startTime": null,
        "endTime": null
    }
]
```