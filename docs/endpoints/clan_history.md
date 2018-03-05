# Clan History

This endpoint returns a time series of member stats. Clan stats are updated every 4 hours using UTC timezone. Currently it is enabled for a selected set of clans which meet our internal criteria.

## How to be included

To enable stats for your clan, add our URL `royaleapi.com` or `cr-api.com` in your clan description and make a request to this endpoint and we will start tracking it once we have detected it. You can verify that it has started if you visit [this endpoint](/endpoints/clan_tracking.md)

!> The `royaleapi.com` domain currently only works for our web implementation. For API requests, you should continue to use the `cr-api.com` domain.

## HTTP Request

`GET https://api.cr-api.com/clan/<TAG>/history`

Name | Method | Description
--- | --- | ---
`/clan/<TAG>/history` | GET | Clan history.

### URL Parameters

Name | Data Type | Required / Optional | Description
--- | --- | --- | ---
`<TAG>` | string | required | Clan tag.



## Response

https://api.cr-api.com/clan/2U2GGQJ/history

<a href="/json/clan_history_2U2GGQJ.json">Full JSON Response</a>

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
