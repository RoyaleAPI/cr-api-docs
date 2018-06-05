# Clan Tracking

This endpoint would allow the API to verify your clan description and get it added to the tracking list. For this endpoint to have any effect, you would want to read [How to be included in /clan/history](/endpoints/clan_history?id=how-to-be-included)

## HTTP Request

`GET https://api.royaleapi.com/clan/<TAG>/track`

### URL Parameters

Parameter | Description
--- | ---
`TAG` | The clan tag of the clan to check

## Response

!> Even if the API says `success: true`, it does not mean that your clan has been added to tracking. Do a request to [/clan/tracking](/endpoints/clan_tracking) to check that.

Below is the full JSON Response
```json
{
    "success": true
}
```