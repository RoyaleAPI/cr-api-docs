# Pagination

!> This feature has yet to be implemented. Please be patient as we add the features from v2.

For any of our endpoints that returns an array, you may use query string params to filter out data you don't need.

Name | Data Type | Required / Optional | Description
--- | --- | --- | ---
`max` | number | optional | Amount of results to return (if available)
`page` | string | optional | Page to start from (zero-based)

## Examples
Endpoint | Data returned
--- | ---
`/clan/search?name=xxx` | `[a, b, c, d, e, f]`    
`/clan/search?name=xxx&max=2` |`[a, b]`
`/clan/search?name=xxx&max=2&page=1` | `[c, d]`
`/clan/search?name=xxx&max=3&page=1` | `[d, e, f]`    
