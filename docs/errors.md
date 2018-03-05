# Errors

If the API responses with `200` then it is a good response. Anything else contains an error.

The Clash Royale API uses the following error codes:

Error Code| Meaning
--- | ---
400	| Bad Request -- Your request sucks.
401	| Unauthorized -- No authentication was provided, or key invalid.
404	| Not Found -- The specified player / clan cannot be found. Could be invalid tags.
500	| Internal Server Error -- We had a problem with our server. Try again later.
503	| Service Unavailable -- We're temporarily offline for maintenance. Please try again later.

## Error response

All the error responses come in this format:

```json
{
    "error": true,
    "status": 404,
    "message": "Not found | Additional information and support: https://discord.me/RoyaleAPI"
}
```

Field| Description
--- | ---
error	| Boolean – will always be true if it is an error.
status	| The error code
message	| A human readable message explaining the error.
