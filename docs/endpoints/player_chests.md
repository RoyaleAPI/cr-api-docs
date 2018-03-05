# Player Chests

This endpoint return battles played by one or more player profiles.

## HTTP Request

`GET https://api.royaleapi.com/player/<TAG>/chests`    
`GET https://api.royaleapi.com/player/<TAG>,<TAG>,<TAG>/chests`

### URL Parameters

Parameter | Description
--- | ---
TAG | The player tag of the user to retrieve

## Response

### Single Player
https://api.royaleapi.com/player/L88P2282/chests

The above command returns JSON structured like this:

<a href="/json/player_chests_8L9L9GL.json">Full JSON Response</a>

```json
{
    "upcoming": [
        "silver",
        "gold",
        "silver",
        "silver",
        "silver",
        "silver",
        "gold",
        "silver",
        "silver"
    ],
    "superMagical": 559,
    "magical": 19,
    "legendary": 79,
    "epic": 699,
    "giant": 94
}
```
You can see an implementation of this at https://royaleapi.com/player/L88P2282/chests

### Multiple Players
https://api.royaleapi.com/player/8L9L9GL,L88P2282,9CQ2U8QJ/chests

The above command returns JSON structured like this. In the actual response, there will be more chest cycles:

<a href="/json/player_chests_8L9L9GL,L88P2282,9CQ2U8QJ.json">Full JSON Response</a>

```json
[
    {
        "upcoming": [
            "silver",
            "silver",
            "gold",
            "silver",
            "gold",
            "silver",
            "silver",
            "silver",
            "silver"
        ],
        "superMagical": 83,
        "magical": 30,
        "legendary": 43,
        "epic": 606,
        "giant": 57
    }
]
```