#  Authentication

All API requests must be accompanied by a developer key. This key is a unique identifier to an individual developer and you should not share it with anyone else.

## Authenticated Requests

You must authenticate your requests using custom headers. Add a key named `auth` with value `<token>` to your header when you make your requests.

!> Query string `auth=<token>` authentication no longer works. Please use custom headers instead.

## Key Management

1. Once issued, your key will be active.
2. Your developer key will remain active as long as you remain a user on our Discord server. Your key will be automatically disabled once you have left the server.
3. We reserve the right to permanently blacklist keys / developers who have been shown to abuse the API with requests.


###  Generating new keys

You can obtain and manage your developer key on [our discord server](http://discord.me/cr_api).

1. Go to the #developer-key channel.
2. Type `!crapikey get`
3. The bot will send you a DM (direct message) with your key.

###  Forgotten keys

To get a reminder of your developer key, visit the Discord channel above and type `!crapikey get` again and the bot will remind you a DM again.

### Removing keys

If you feel that your key may have been compromised, please contact open an issue on [Github](http://github.com/cr-api/cr-api) and we will create a new one for you.


## Code examples

Here are some code fragments on how to add custom headers in different languages.

| Endpoint | URL | token |
| --- | --- | --- |
| clan | http://api.cr-api.com/clan/2cccp | `a123b4567` |

### Bash (Shell)

```bash
curl --header "auth: a123b4567" http://api.cr-api.com/clan/2cccp
```

### C# #

```csharp
public string Get(string url)
{
    WebHeaderCollection headers = new WebHeaderCollection();
    headers.Add($"auth: {AuthToken}");
    HttpWebRequest getRequest = (HttpWebRequest)WebRequest.Create(url);
    getRequest.Method = "GET";
    getRequest.Headers = headers;
    WebResponse apiResponse = getRequest.GetResponse();
    StreamReader reader = new StreamReader(apiResponse.GetResponseStream(), Encoding.UTF8);
    string responseString = reader.ReadToEnd();
    reader.Close();
    apiResponse.Close();

    return responseString;
}
```

### Node.js

```javascript
const request = require("request");
request('http://api.cr-api.com/clan/2cccp', {headers: {auth: 'a123b4567'}})
```

### PHP

```php
$token = "a1234567890z";
$opts = [
    "http" => [
        "header" => "auth:" . $token
    ]
];

$context = stream_context_create($opts);

$test = file_get_contents("http://api.cr-api.com/clan/2cccp",true, $context);
```

### Python: Asynchronous

Asynchronous python using the [aiohttp](http://aiohttp.readthedocs.io/) library.

```python
import aiohttp
headers = {"auth": "a123b4567"}
url = "http://api.cr-api.com/clan/2cccp"
async with aiohttp.ClientSession() as session:
    async with session.get(url, headers=headers) as resp:
        data = await resp.json()
```

### Python: Synchronous

Synchronous (blocking) Python using the [requests](http://docs.python-requests.org) library.

```python
import requests
headers = {"auth": "a123b4567"}
url = "http://api.cr-api.com/clan/2cccp"
r = requests.get(url, headers=headers)
data = r.json()
```

### Javascript (Client-Side)

We don’t generally recommend that you access the API on the client side as you will be exposing your token publicly. However, this is how you would do it with [jQuery](http://api.jquery.com/):

```javascript
$.ajax({
    url: 'http://api.cr-api.com/clan/2cccp',
    headers: {auth: 'a123b4567'}
});
```

Better:

```javascript
// Once:
$.ajaxSetup({ headers: {auth: 'a123b4567'}});

// Request with header:
$.ajax({ url: 'http://api.cr-api.com/clan/2cccp' });
```
