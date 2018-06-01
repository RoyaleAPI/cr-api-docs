# Clan War Log

This endpoint returns data about the past clan wars. [/clan/:tag/war](/endpoints/clan_war.md) will return data about the current clan war and [/clan/:tag/battles](/endpoints/clan_battles.md?id=query-string-parameters) will return battles of the last few wars with the use of `war` set as the `type`.

## HTTP Request

`GET https://api.royaleapi.com/clan/<TAG>/warlog`

### URL Parameters

Parameter | Description
--- | ---
`TAG` | The clan tag of the clan to retrieve

## Response
<a href="/json/clan_warlog_9PJ82CRC.json">Full JSON Response</a>

```json
[
    "createdDate": number,
    {"participants": ...},
    {"standings": ...},
    {"seasonNumber": number}
]
```