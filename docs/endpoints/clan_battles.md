# Clan Battles

This endpoint return battles played by people in your clan. Internally, the server fetches player profiles for everyone who are members. As it is an expensive request, you may wish to lengthen your timeout param in your request as it may take some time for you to receive your response.

## HTTP Request

`GET https://api.cr-api.com/clan/<TAG>/battles`

### URL Parameters

Name | Data Type | Required / Optional | Description
--- | --- | --- | ---
`<TAG>` | string | required | Clan tag.

## Response

https://api.cr-api.com/clan/2CCCP/battles

<a href="/json/clan_battles_2CCCP.json">Full JSON Response</a>

## Implementation

https://cr-api.com/clan/2CCCP/battles
