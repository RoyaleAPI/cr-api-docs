# Open Tournaments

This endpoint returns a list of open tournaments.

## HTTP Request
`GET https://api.royaleapi.com/tournaments/open`

## Response
https://api.royaleapi.com/tournaments/open

The above command returns JSON structured like this. In the actual response, there will be a maximum of 100 tournaments:

<a href="/json/tournaments_open.json">Full JSON response</a>

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
  },
]
```