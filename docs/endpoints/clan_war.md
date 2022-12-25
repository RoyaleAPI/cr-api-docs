# Clan War

This endpoint returns data about the current clan war. [/clan/:tag/warlog](/endpoints/clan_warlog) will return data about the previous clan wars and [/clan/:tag/battles](/endpoints/clan_battles?id=query-string-parameters) will return battles of the last few wars with the use of `war` set as the `type`.

## HTTP Request

`GET https://api.royaleapi.com/clan/:tag/war`

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
    - <a href="/json/clan_80LCC09P_war.json">Nova l Ger 4 (#80LCC09P)</a>
- Collection Day
    - https://api.royaleapi.com/clan/9PJ82CRC/war
    - <a href="/json/clan_9PJ82CRC_war.json">100T Alpha (#9PJ82CRC)</a>  
- War Day  
    - https://api.royaleapi.com/clan/9LPVG9UC/war
    - <a href="/json/clan_9LPVG9UC_war.json">100T Zen (#9LPVG9UC)</a>
