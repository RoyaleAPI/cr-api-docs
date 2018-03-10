# Frequently Asked Questions

## What are the valid characters in a Supercell tag?

All the tags used in Supercell games (Clash Royale, Clash of Clans, etc) are made up with these characters `0289CGJLPQRUVY` — the numbers `0289` and the letters `CGJLPQRUVY`. If you don’t want the API to return invalid tag errors, check and make sure that the tags you use are valid before making your requests. For convenience, you may wish to check and convert the letter `O` to `0` as this is a common mistake made by the users. They must also be in uppercase. Please pre-process these for end-users if you wish to avoid errors.

## Is there a rate limit for the API requests?

Yes and no. The way rate limits work is that there is a timebox and a count. You can do whatever you want within that range, so if we allow 10 requests per hour (just a random number of course), we are saying that we don’t mind if you perform 10 requests in parallel once an hour, or once every 6 minutes. That’s on you to decide and limit. In our case, we don’t limit by user, but we try to balance the whole community. The end result is that nobody is hurt as long as we don’t have to pay for extra servers.

If one community member is abusive, they are blocked. But there is no hard number. Everyone is welcome to play ball, and the rate currently stands on **1 req/sec/user** (ballpark figure).

To reiterate, as long as your requests are **properly spaced and spread out**, we are good. We want to avoid hard limitations, because if we enabled those (and they have already been implemented — it’s a switch that we simply need to turn on), everyone’s max rate will decrease significantly.

Since we are covering all the costs to operate this API and provide it freely to the community, we would not increase our current spending to allow overuse.

## How can my clan family be listed on the website?

Please read the [family configuration](https://github.com/cr-api/cr-api-ux/wiki/Family-Config) documentation on our UX Github wiki and [open an issue](https://github.com/cr-api/cr-api-ux/issues) with the completed YAML configuration.

## How do I report bugs?

Please [open an issue](https://github.com/cr-api/cr-api/issues).

## How do I request a feature?

Please [open an issue](https://github.com/cr-api/cr-api/issues).

## My developer key is not working, can you help me?

It is highly unusual that your key will not work. Before asking us for help, first try to do a request with cURL and verify that you are in fact getting the same error message. For example, if your token is `a123b4567`, run the following command and see if you can get a response. If the cURL works and your code does not, it means that there is something wrong with your code and not with our API nor your developer key.

```bash
curl --header "auth: a123b4567" https://api.royaleapi.com/clan/2CCCP
```

## Should I mention or DM Selfish / SML on Discord if I have a problem?

No. We read almost all messages on the server. If you in fact have a pressing issue, you should [open an issue](https://github.com/cr-api/cr-api/issues) on Github. This ensures that we don’t lose your question in the sea of Discord notifications, and make sure that someone will address the problem you are having.

You can ask your questions on Discord, however, without tagging us specifically.

## There are multiple wrappers available for (insert language here), which one should I use?

You should pick the library on your own. Wrappers that appear in our [wrapper list](/wrappers.md) are not official endorsements by the team. Use your own judgement.

## There is a wrapper available for my language already, can I write another one?

Yes, you are free to write additional wrappers and we will put it on the list when it is available.
