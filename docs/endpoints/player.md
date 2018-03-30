# Player(s)

This endpoint retrieves one or more player profiles, with basic stats and card collection.

## HTTP Request

`GET https://api.royaleapi.com/player/<TAG>`
`GET https://api.royaleapi.com/player/<TAG>,<TAG>,<TAG>`

### URL Parameters

Parameter | Description
--- | ---
`TAG` | The player tag of the user to retrieve

## Response

### Single Player

https://api.royaleapi.com/player/8L9L9GL

<a href="/json/player_8L9L9GL.json">Full JSON response</a>

You can see an implementation of this at https://royaleapi.com/profile/8L9L9GL


### Multiple Players

!> Using this endpoint would make the server do the requests for you. Therefore, if you include more than 7 tags in a request, it might take an indefinite amount of time for the API to respond to you.

https://api.royaleapi.com/player/8L9L9GL,L88P2282,9CQ2U8QJ

The above command returns JSON structured like this, where `{}` denotes a single player response.

<a href="/json/player_8L9L9GL,L88P2282,9CQ2U8QJ.json">Full JSON response</a>

```json
[
    {},
    {}
]
```

You can see an example of this at https://royaleapi.com/profile/L88P2282,9CQ2U8QJ,8L9L9GL
