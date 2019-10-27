# Frequently Asked Questions

## When will v3 be live?

There is currently no ETA. RoyaleAPI has only 1 developer and he has his own personal life as well. Keep up to date in the Discord Server.

## What are the valid characters in a Supercell tag?

All the tags used in Supercell games (Clash Royale, Clash of Clans, etc) are made up with these characters `0289CGJLPQRUVY` — the numbers `0289` and the letters `CGJLPQRUVY`. If you don’t want the API to return invalid tag errors, check and make sure that the tags you use are valid before making your requests. For convenience, you may wish to check and convert the letter `O` to `0` as this is a common mistake made by the users. They must also be in uppercase. Please pre-process these for end-users if you wish to avoid errors.

## Is there a rate limit for the API requests?

Yes. There is a fixed ratelimit per second that you can check by looking at the `Response Headers` returned by the API and the value of `x-ratelimit-limit` header. When you hit the ratelimit, a 429 response will be returned

## What headers are returned by the API?
Name | Type | Description
--- | --- | ---
`x-ratelimit-limit` | number | Total amount of requests you can make to the API per second
`x-ratelimit-remaining` | number | Number of requests remaining for that time window
`x-ratelimit-retry-after` | number | Time in microseconds until the next request is available (only returned if you hit the ratelimit)
`x-cached` | boolean | This is only returned if the data is cached

## How can my clan family be listed on the website?

Please read the [family configuration](https://github.com/RoyaleAPI/cr-api-ux/wiki/Family-Config) documentation on our UX Github wiki and [open an issue](https://github.com/RoyaleAPI/cr-api-ux/issues) with the completed YAML configuration.

## How do I report bugs?

Please [open an issue](https://github.com/RoyaleAPI/cr-api/issues).

## How do I request a feature?

If you don’t see a specific feature, it is most likely because we aren’t able to get those data, or we are limited by Supercell guidelines on what we can show you publicly. If the data is public and you feel that it is missing, please [open an issue](https://github.com/RoyaleAPI/cr-api/issues).

## My developer key is not working, can you help me?

It is highly unusual that your key will not work. Before asking us for help, first try to do a request with cURL and verify that you are in fact getting the same error message. For example, if your token is `a1234.567.890`, run the following command and see if you can get a response. If the cURL works and your code does not, it means that there is something wrong with your code and not with our API nor your developer key.

```bash
curl --header "auth: a1234.567.890" https://api.royaleapi.com/clan/9PJ82CRC
```

## Should I mention or DM Selfish / SML on Discord if I have a problem?

No. We read almost all messages on the server. If you in fact have a pressing issue, you should [open an issue](https://github.com/RoyaleAPI/cr-api/issues) on Github. This ensures that we don’t lose your question in the sea of Discord notifications, and make sure that someone will address the problem you are having.

You can ask your questions on Discord, however, without tagging us specifically.

## There are multiple wrappers available for (insert language here), which one should I use?

You should pick the library on your own. Wrappers that appear in our [wrapper list](/wrappers.md) are not official endorsements by the team. Use your own judgement.

## There is a wrapper available for my language already, can I write another one?

Yes, you are free to write additional wrappers and we will put it on the list when it is available.

## Will shop offers / clan war card collection / … be added to the API?

Supercell considers many of the things that a player can see in-game to be private. With the exception of the battle logs, which can be accessed via the API, these other private data will probably never appear on our endpoints.
