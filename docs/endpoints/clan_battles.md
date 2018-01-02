# Clan Battles

This endpoint return battles played by people in your clan. Internally, the server fetches player profiles for everyone who are members. As it is an expensive request, you may wish to lengthen your timeout param in your request as it may take some time for you to receive your response.

!> To be enabled: this endpoint might not work in the latest revision.

## HTTP Request

`GET http://api.cr-api.com/clan/<TAG>/battles`

Name | Method | Description
--- | --- | ---
/clan/search | GET | Clan search

### URL Parameters

Name | Data Type | Required / Optional | Description
--- | --- | --- | ---
`<TAG>` | string | required | Clan tag.



## Response

http://api.cr-api.com/clan/2CCCP/battles
