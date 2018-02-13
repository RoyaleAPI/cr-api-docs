# Endpoints

This endpoint returns all the available endpoints from the API.

## HTTP Request

`http://api.cr-api.com/endpoints`

## Response

http://api.cr-api.com/endpoints

```json
[
    "/version",
    "/players?/:tag",
    "/players?/:tag/battles?",
    "/players?/:tag/chests?",
    "/clans?/search",
    "/clans?/:tag",
    "/clans?/:tag/battles?",
    "/clans?/:tag/history",
    "/tournaments?/open",
    "/tournaments?/known",
    "/tournaments?/:tag",
    "/top/clans?/:cc?",
    "/top/players?/:cc?",
    "/popular/clans?",
    "/popular/players?",
    "/popular/tournaments?",
    "/popular/decks?",
    "/auth/stats",
    "/endpoints"
]
```

`/players?` above denotes that you can in fact call the player endpoint as `/player` or `/players`. They are identical.
