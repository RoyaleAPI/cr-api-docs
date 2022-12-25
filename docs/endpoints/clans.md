# Clans

This endpoint retrieves multiple clans. To retrieve a single clan, take a look at [/clan/:tag](/endpoints/clan).

## HTTP Request

`GET https://api.royaleapi.com/clans/:tags`

### URL Parameters

Parameter | Description
--- | ---
`TAGS` | A comma-seperated list of clan tags to retrieve

## Response

https://api.royaleapi.com/clans/9PJ82CRC,9UQJUJC9

<a href="/json/clans_9PJ82CRC,9UQJUJC9.json">Full JSON response</a>

The above command returns JSON structured like this:

```json
[
    {},
    {}
]
```

## Implementation

You can see an example of this at https://royaleapi.com/clan/family/racf/members