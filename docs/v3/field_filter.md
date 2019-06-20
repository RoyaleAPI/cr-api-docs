# Filtering Fields

For any of our endpoints, you may use query string params to optionally include or exclude fields that you don’t need.

Name | Data Type | Required / Optional | Description
--- | --- | --- | ---
`keys` | string | optional | Comma-separated included fields.
`exclude` | string | optional | Comma-separated excluded fields.

Only top-level fields are supported at the moment, but filtering lower-level fields e.g. receiving card keys inside a deck but without their full descriptions, is planned and may be implemented in the future. 

## Examples

If you just want the name and tag of a player, you may request the following:

`https://v3-beta.royaleapi.com/player/C0G20PR2?keys=name,tag`

Response:

```json
{
    "tag": "C0G20PR2",
    "name": "SML"
}
```

If you want to get the clan information without loading the member list:

`https://v3-beta.royaleapi.com/clan/2CCCP?exclude=members`

Response:

```json
{
    "tag": "2CCCP",
    "name": "Reddit Alpha",
    "description": "5500🏆 PB to join. When full, #50/50 sent to Reddit Bravo #2U2GGQJ 🚀https://discord.gg/RACF 🚀https://twitch.tv/woody",
    "type": "invite only",
    "score": 47682,
    "memberCount": 49,
    "requiredScore": 4600,
    "donations": 33070,
    "clanChest": {
        "status": "completed"
    },
    "badge": {
        "name": "A_Char_Rocket_02",
        "category": "03_Royale",
        "id": 16000167,
        "image": "https://cr-api.github.io/cr-api-assets/badges/A_Char_Rocket_02.png"
    },
    "location": {
        "name": "Antarctica",
        "isCountry": true,
        "code": "AQ"
    }
}
```
