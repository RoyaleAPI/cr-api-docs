# Multiple Profiles

This endpoint retrieves multiple profiles. You can request up to 5 profiles in each request.

## HTTP Request

`GET http://api.cr-api.com/player/<TAG>,<TAG>,<TAG>`

!> Note: in our earlier iteration, the endpoint is called `profile`, it is now `player`


### URL Parameters

Parameter | Description
--- | ---
TAG | The profile tag of the player to retrieve. Use a comma to separate each profile tag.

## Response

http://api.cr-api.com/player/L88P2282,9CQ2U8QJ,8L9L9GL

The above command returns JSON structured like this, where `{}` denotes a profile response as seen in [profile](/profile/profile)

<a href="/json/player_L88P2282,9CQ2U8QJ,8L9L9GL.json">Full JSON response</a>

```json
[
    {},
    {}
]
```

## Implementation

You can see an example of this at http://cr-api.com/profile/L88P2282,9CQ2U8QJ,8L9L9GL
