# Clan Tracking

This endpoint returns very basic data on whether a clan is included in the [Clan History Tracking](/endpoints/clan_history)

## HTTP Request

`GET https://v3-beta.royaleapi.com/clan/<TAG>/tracking`

### URL Parameters

Parameter | Description
--- | ---
`TAG` | The clan tag of the clan to retrieve

## Response

### Included in the tracking
https://v3-beta.royaleapi.com/clan/2CCCP/tracking

Below is the full JSON Response
```json
{
    "tag": "2CCCP",
    "active": true,
    "legible": true,
    "available": true,
    "snapshotCount": 218
}
```

### Not included in the tracking
https://v3-beta.royaleapi.com/clan/28JU8P0Y/tracking

Below is the full JSON Response with a 417 Expectation Failed error
```json
{
    "error": true,
    "statusCode": 417,
    "statusText": "Cannot fetch clan tracking: Cannot fetch clan tracking: clan not tracked",
    "info": "Additional information and support: http://discord.me/royaleapi"
}
```