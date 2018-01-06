# Frequently Asked Questions

## What are the valid characters in a Supercell tag?

All the tags used in Supercell games (Clash Royale, Clash of Clans, etc) are made up with these characters `0289CGJLPQRUVY` — the numbers `0289` and the letters `CGJLPQRUVY`. If you don’t want the API to return invalid tag errors, check and make sure that the tags you use are valid before making your requests. For convenience, you may wish to check and convert the letter `O` to `0` as this is a common mistake made by the users. They must also be in uppercase. Please pre-process these for end-users if you wish to avoid errors.

## How can my clan family be listed on the website?

Please read the [family configuration](https://github.com/cr-api/cr-api/wiki/Family-Config) documentation on our Github wiki and [open an issue](https://github.com/cr-api/cr-api/issues) with the completed YAML configuration.

## How do I report bugs?

Please [open an issue](https://github.com/cr-api/cr-api/issues).

## How do I request a feature?

Please [open an issue](https://github.com/cr-api/cr-api/issues).

## My developer key is not working, can you help me?

It is highly unusual that your key will not work. Before asking us for help, first try to do a request with cURL and verify that you are in fact getting the same error message. For example, if your token is `a123b4567`, run the following command and see if you can get a response. If the cURL works and your code does not, it means that there is something wrong with your code and not with our API nor your developer key.

```bash
curl --header "auth: a123b4567" http://api.cr-api.com/clan/2CCCP
```

## Should I mention or DM Selfish / SML on Discord if I have a problem?

No. We read almost all messages on the server. If you in fact have a pressing issue, you should [open an issue](https://github.com/cr-api/cr-api/issues) on Github. This ensures that we don’t lose your question in the sea of Discord notifications, and make sure that someone will address the problem you are having.

You can ask your questions on Discord, however, without tagging us specifically.

## There are multiple wrappers available for (insert language here), which one should I use?

You should pick the library on your own. Wrappers that appear in our [Showcase](/showcase) are not official endorsements by the team. Use your own judgement.

## There is a wrapper available for my language already, can I write another one?

Yes, you are free to write additional wrappers and we will put it on the list when it is availble.
