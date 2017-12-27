# Get Multiple Clans

This endpoint retrieves multiple clans. You can request up to 15 clans in each request.

## HTTP Request

`GET http://api.cr-api.com/clan/<TAG>,<TAG>,<TAG>`

### URL Parameters

Parameter | Description
--- | ---
TAG | The clan tag of the clan to retrieve. Use a comma to separate each clan tag.

## Response

http://api.cr-api.com/clan/2CCCP,2U2GGQJ

<a href="/json/clan_2CCCP,2U2GGQJ.json">Full JSON response</a> with the two clans above.

The above command returns JSON structured as follows, where `{}` denotes a full JSON response from a [single clan request](/clans/single_clan)

```json
[
    {},
    {}
]
```

## Implementation

You can see an example of this at http://cr-api.com/clan/family/racf/members
