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
  "state": "look below for possible states",
  "warEndTime or collectionEndTime": number,
  "clan": {
    ...
    "badge": {...}
  },
  "participants": [...]
}
```


### Full JSON Responses

- Not In War
    ```json
    {
        "state": "notInWar"
    }
    ```
- Matchmaking
    - https://api.royaleapi.com/clan/80LCC09P/war
    - <a href="/json/clan_war_80LCC09P.json">Nova l Ger 4 (#80LCC09P)</a>
- Collection Day
    - https://api.royaleapi.com/clan/9PJ82CRC/war
    - <a href="/json/clan_war_9PJ82CRC.json">100T Alpha (#9PJ82CRC)</a>  
- War Day  
    - https://api.royaleapi.com/clan/9LPVG9UC/war
    - <a href="/json/clan_war_9LPVG9UC.json">100T Zen (#9LPVG9UC)</a>
