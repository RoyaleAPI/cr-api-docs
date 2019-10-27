# Clan Weekly History

<!-- TODO: HAVE TO DOUBLE CHECK AS I DONT SEE ANYTHING WORKING HERE -->

This endpoint returns a time series of member stats. This is similar to [Clan History](/endpoints/clan_history) but has weekly statistics. Currently it is enabled for a selected set of clans which meet our internal criteria.

## How to be included

To enable stats for your clan, add our URL `royaleapi.com` or `cr-api.com` in your clan description and make a request to the [/clan/<TAG>/track](/endpoints/clan_track) endpoint and we will start tracking it once we have detected it. You can verify that it has started if you visit the [clan tracking](/endpoints/clan_tracking). You may also visit the web site. If clan tracking is enabled, you should see the default message be replaced by the chart view with empty graphs.


## HTTP Request

`GET https://api.royaleapi.com/clan/<TAG>/history/weekly`

Name | Method | Description
--- | --- | ---
`/clan/<TAG>/history/weekly` | GET | Clan history.

### URL Parameters

Parameter | Description
--- | ---
`TAG` | The clan tag of the clan to retrieve


### Query String Parameters

Name | Data Type | Required / Optional | Description
--- | --- | --- | ---
`days` | number | Optional, default to 7 | This takes today's data + specified days

## Response

### Included in the tracking

https://api.royaleapi.com/clan/2U2GGQJ/history/weekly

 <!-- <a href="/json/clan_2U2GGQJ_history_weekly.json">Full JSON Response</a> -->
!> Full JSON Response will be made available once more data is gathered.

```json
{
    "2018-01-01-23-00": {
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
    "2018-01-08-23-00": {
        ...
    },
}
```

### Not included in the tracking
https://api.royaleapi.com/clan/28JU8P0Y/history/weekly

Below is the full JSON Response with a 417 Expectation Failed error
```json
    {
    "error": true,
    "statusCode": 417,
    "statusText": "cannot fetch clan data: cannot fetch clan data: clan not tracked",
    "info": "Additional information and support: http://discord.me/royaleapi"
    }
```