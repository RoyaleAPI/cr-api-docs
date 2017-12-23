# Errors

If the API responses with `200` then it is a good response. Anything else contains an error.

The Clash Royale API uses the following error codes:

Error Code| Meaning
--- | ---
400	| Bad Request -- Your request sucks.
401	| Unauthorized -- No authentication was provided, or key invalid.
404	| Not Found -- The specified clan could not be found.
500	| Internal Server Error -- We had a problem with our server. Try again later.
503	| Service Unavailable -- We're temporarily offline for maintenance. Please try again later.
