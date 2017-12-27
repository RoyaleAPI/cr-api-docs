# Profile

This endpoint retrieves a specific profile, with player information, card collection and battle logs. Some fields that were previously available has been removed, e.g. seasons, shop offers and experience.

## HTTP Request

`GET http://api.cr-api.com/player/<TAG>`

!> Note: in our earlier iteration, the endpoint is called `profile`, it is now `player`

### URL Parameters

Parameter | Description
--- | ---
TAG | The player tag of the user to retrieve

## Response

http://api.cr-api.com/player/8L9L9GL

<a href="/json/player_8L9L9GL.json">Full JSON response</a>

## Implementation

You can see an implementation of this at http://cr-api.com/profile/8L9L9GL
