# Clan War

This endpoint returns data about the current clan war. [/clan/:tag/warlog](/endpoints/clan_warlog.md) will return data about the previous clan wars and [/clan/:tag/battles](/endpoints/clan_battles.md?id=query-string-parameters) will return battles of the last few wars with the use of `war` set as the `type`.

## HTTP Request

`GET https://api.royaleapi.com/clan/<TAG>/war`

### URL Parameters

Parameter | Description
--- | ---
`TAG` | The clan tag of the clan to retrieve

## Response

Different responses might be provided if the clan is on different `state`s (`warDay` or `collectionDay`)

```json
{
  "state": "warDay or collectionDay",
  "clan": {
    ...
    "badge": {...}
  },
  "participants": [...]
}
```


### Full JSON Responses
https://api.royaleapi.com/clan/9PJ82CRC/war <a href="/json/clan_war_9PJ82CRC.json">100T Alpha (#9PJ82CRC)</a>    
https://api.royaleapi.com/clan/9LPVG9UC/war <a href="/json/clan_war_9LPVG9UC.json">100T Zen (#9LPVG9UC)</a>