# Player(s)

This endpoint retrieves one or more player profiles, with basic stats, card collection and battle logs. Some fields that were previously available has been removed, e.g. seasons, shop offers and experience.

!> Note: in our earlier iteration, the endpoint is called `profile`, it is now `player`

## HTTP Request

```
GET http://api.cr-api.com/player/<TAG>
GET http://api.cr-api.com/player/<TAG>,<TAG>,<TAG>
```

Parameter | Description
--- | ---
TAG | The player tag of the user to retrieve

## Response

### Single Player

http://api.cr-api.com/player/8L9L9GL

<a href="/json/player_8L9L9GL.json">Full JSON response</a>

You can see an implementation of this at http://cr-api.com/profile/8L9L9GL


### Multiple Players


http://api.cr-api.com/player/L88P2282,9CQ2U8QJ,8L9L9GL

The above command returns JSON structured like this, where `{}` denotes a single player response.

<a href="/json/player_L88P2282,9CQ2U8QJ,8L9L9GL.json">Full JSON response</a>

```json
[
    {},
    {}
]
```

You can see an example of this at http://cr-api.com/profile/L88P2282,9CQ2U8QJ,8L9L9GL
