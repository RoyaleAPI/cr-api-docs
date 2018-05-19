# Clan Battles

This endpoint return battles played by people in your clan. Internally, the server fetches player profiles for everyone who are members. As it is an expensive request, you may wish to lengthen your timeout param in your request as it may take some time for you to receive your response.

## HTTP Request

`GET https://api.royaleapi.com/clan/<TAG>/battles`

### URL Parameters

Parameter | Description
--- | ---
`TAG` | The clan tag of the clan to retrieve

### Query String Parameters

Name | Data Type | Required / Optional | Description
--- | --- | --- | ---
`type` | string | optional (default to `clanMate`) | Type of clan battles to filter (`all`, `waror `clanMate`)

## Response

https://api.royaleapi.com/clan/2CCCP/battles

<a href="/json/clan_battles_2CCCP.json">Full JSON Response</a>
```json
[
    {},
    {},
    {}
]

## Implementation

https://royaleapi.com/clan/2CCCP/battles
