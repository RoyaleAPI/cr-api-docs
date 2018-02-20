# Auth Stats
This endpoint returns information about the currently authenticated token.

## HTTP Request
`GET http://api.cr-api.com/auth/stats`

## Response
http://api.cr-api.com/auth/stats

<a href="/json/auth_stats.json">Full JSON Response</a>

```json
{
    "id": "180314310298304512",
    "lastRequest": 1519118289,
    "requestCount": {
        "2018-02-20": 38,
        "2018-02-19": 167,
    }
}
```