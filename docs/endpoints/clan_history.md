# Clan History

This endpoint returns a time series of member stats. Clan stats are updated every 4 hours using UTC timezone. Currently it is enabled for a selected set of clans which meet our internal criteria.

## How to be included

To enable stats for your clan, add our URL `royaleapi.com` or `cr-api.com` in your clan description and make a request to the [/clan/:tag/track](/endpoints/clan_track) endpoint and we will start tracking it once we have detected it. You can verify that it has started if you visit the [clan tracking](/endpoints/clan_tracking). You may also visit the web site. If clan tracking is enabled, you should see the default message be replaced by the chart view with empty graphs.


## HTTP Request

`GET https://api.royaleapi.com/clan/:tag/history`

Name | Method | Description
--- | --- | ---
`/clan/:tag/history` | GET | Clan history.

### URL Parameters

Parameter | Description
--- | ---
`TAG` | The clan tag of the clan to retrieve


### Query String Parameters

Name | Data Type | Required / Optional | Description
--- | --- | --- | ---
`days` | number | Optional, default to 7 | This takes today's data + specified days

## Response

### Included in tracking

https://api.royaleapi.com/clan/2U2GGQJ/history

<a href="/json/clan_2U2GGQJ_history.json">Full JSON Response</a>

```json
{
    "2018-01-01-20-00": {
        "donations": 4070,
        "memberCount": 50,
        "members": [
            {
                "clanRank": 1,
                "crowns": 0,
                "donations": 58,
                "name": "Min",
                "tag": "L88P2282",
                "trophies": 4610
            },
            {
                "clanRank": 2,
                "crowns": 0,
                "donations": 76,
                "name": "matiz",
                "tag": "G0JVYY0",
                "trophies": 4443
            },
        ]
    },
    "2018-01-02-00-00": {

    },
}
```

### Not included in the tracking
https://api.royaleapi.com/clan/28JU8P0Y/history

Below is the full JSON Response with a 417 Expectation Failed error
```json
    {
    "error": true,
    "statusCode": 417,
    "statusText": "cannot fetch clan data: cannot fetch clan data: clan not tracked",
    "info": "Additional information and support: http://discord.me/royaleapi"
    }
```