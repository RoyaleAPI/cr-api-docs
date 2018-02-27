# Popular Decks

This endpoint returns statistics about how often a deck's data has been requested from the API.

## HTTP Request

`GET http://api.cr-api.com/popular/decks`

Name | Method | Description
--- | --- | ---
/popular/decks | GET | Most requested decks and stats

### Query String Parameters

Name | Data Type | Required / Optional | Description
--- | --- | --- | ---
`max` | number | optional | A single digit to indicate the maximum amount of results the API should return

The above command returns JSON structured like this. In the actual response, there will be more decks:

<a href="/json/popular_decks.json">Full JSON response</a>

```json
[
    {
        "cards":[
            {
                "arena": 6,
                "description": "Slow but durable, only attacks buildings. When destroyed, explosively splits into two Golemites and deals area damage!",
                "elixir": 8,
                "icon": "https://api-assets.clashroyale.com/cards/300/npdmCnET7jmVjJvjJQkFnNSNnDxYHDBigbvIAloFMds.png",
                "id": 26000009,
                "key": "golem",
                "maxLevel": 8,
                "name": "Golem",
                "rarity": "Epic",
                "type": "Troop"
            }
        ],
        "decklink":"https://link.clashroyale.com/deck/en?deck=26000009;26000015;26000016;26000027;26000039;27000007;28000008;28000012",
        "popularity": 12
    }
]
```
