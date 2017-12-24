#  Authentication

All API requests must be accompanied by a developer key. This key is a unique identifier to an individual developer and you should not share it with anyone else.

## Authenticated Requests

We support the following methods for authenticating your requests. Custom header is the recommended method. The query string method is mostly added for your convenience.

### Query String

Add `auth=<token>` to your API requests to authenticate them. For example:

Name | Value
--- | ---
Your developer key | `a123b4567`
API request URL | `http://api.cr-api.com/clan/2cccp`
API request URL with developer key | `http://api.cr-api.com/clan/2cccp?auth=a123b4567`

### Custom Header

Add a key named `auth` with value `<token>` to your header when you make your requests.

Here is a Python code fragment for how to do this:

```python
headers = {"auth": "a123b4567"}
try:
    async with aiohttp.ClientSession() as session:
        async with session.get(url, headers=headers) as resp:
            if resp.status != 200:
                error = True
            else:
                data = await resp.json()
except json.decoder.JSONDecodeError:
    raise
except asyncio.TimeoutError:
    raise
```

## Key Management

###  Generating new keys

You can obtain and manage your developer key on [our discord server](http://discord.me/cr_api).

1. Go to the #developer-key channel.
2. Type `!crapikey get`
3. The bot will send you a DM (direct message) with your key.

###  Forgotten keys

To get a reminder of your developer key, visit the Discord channel above and type `!crapikey get` again and the bot will remind you a DM again.

### Removing keys

If you feel that your key may have been compromised, please contact open an issue on [Github](http://github.com/cr-api/cr-api) and we will create a new one for you.

## Key Activation

1. Once issued, your key will be active.
2. Your developer key will remain active as long as you remain a user on our Discord server. Your key will be automatically disabled once you have left the server.

## API Abuse

We reserve the right to permanently blacklist keys / developers who have been shown to abuse the API with requests.
