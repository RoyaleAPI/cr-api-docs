# Player Verification

This endpoint verifies the owner of an account with a player API token.

## HTTP Request

`GET https://api.royaleapi.com/player/<TAG>/verify?token=<PLAYER_API_TOKEN>`    

### URL Parameters

Parameter | Description
--- | ---
TAG | The player tag of the user to check

### Query String Parameters

Name | Data Type | Required / Optional | Description
--- | --- | --- | ---
`PLAYER_API_TOKEN` | string | required | User's API Token from in-game settings. The token lasts for 6 minutes.

## Response

### Success

https://api.royaleapi.com/player/2P0LYQ/verify?token=rnwjwz4k

[Same response as /player/:tag](/endpoints/player?id=single-player)

### Failure

https://api.royaleapi.com/player/2P0LYQ/verify?token=invalidtoken

```json
{
  "error": true,
  "status": 400,
  "message": "Cant verify identity | Additional information and support: http://discord.me/royaleapi"
}
```
