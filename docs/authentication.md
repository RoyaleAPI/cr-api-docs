#  Authentication

All API requests must be accompanied by a developer key. This key is a unique identifier to an individual developer and you should not share it with anyone else.

## Authenticated Requests

You must authenticate your requests using **custom headers**. Add a key named `auth` with value `<token>` to your header when you make your requests.

Additionally, we support **Bearer Token** authorization. Bearer tokens use a field named `Authorization` with value `Bearer <token>` in the header.

!> Query string `auth=<token>` authentication no longer works. Please use custom headers instead.

## Key Management

1. Once issued, your key will be active.
2. Your developer key will remain active as long as you remain a user on our Discord server. Your key will be automatically disabled once you have left the server.
3. We reserve the right to permanently blacklist keys / developers who have been shown to abuse the API with requests.


### Generating new keys

You can obtain and manage your developer key on [our discord server](https://discord.me/RoyaleAPI).

1. Go to the #developer-key channel.
2. Type `!crapikey get`
3. The bot will send you a DM (direct message) with your key.

### Forgotten keys

To get a reminder of your developer key, visit the Discord channel above and type `!crapikey get` again and the bot will remind you a DM again.

### Removing keys

If you feel that your key may have been compromised, please contact open an issue on [Github](https://github.com/cr-api/cr-api) and we will create a new one for you.

### Key Statistics

You can receive request statistics of your key on our Discord server. Go to the `#developer-key` channel and type `!crapikey stats`. Your stats will be visible to everyone else in the channel.

## Code examples

Here are some code fragments on how to add custom headers in different languages.

| Endpoint | URL | token |
| --- | --- | --- |
| clan | https://api.cr-api.com/clan/2CCCP | `a123b4567` |

### cURL

```bash
curl --header "auth: a123b4567" https://api.cr-api.com/clan/2CCCP
```

```bash
curl -X GET \
  https://api.cr-api.com/clan/2CCCP \
  -H 'Authorization: Bearer a123b4567' \
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

### C# RestSharp #

```csharp
var client = new RestClient("https://api.cr-api.com/clan/2CCCP");
var request = new RestRequest(Method.GET);
request.AddHeader("auth", "a123b4567");
IRestResponse response = client.Execute(request);
```

### Java OK HTTP

```java
OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("https://api.cr-api.com/clan/2CCCP")
  .get()
  .addHeader("auth", "a123b4567")
  .build();

Response response = client.newCall(request).execute();
```

### Java Unirest

```java
HttpResponse<String> response = Unirest.get("https://api.cr-api.com/clan/2CCCP")
  .header("auth", "a123b4567")
  .asString();
```

### Javascript jQuery AJAX

We don’t recommend that you access the API on the client side as you will be exposing your token publicly. However, this is how you would do it with [jQuery](https://api.jquery.com/):

```javascript
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.cr-api.com/clan/2CCCP",
  "method": "GET",
  "headers": {
    "auth": "a123b4567"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

### Node.js

```javascript
const request = require("request");
request('https://api.cr-api.com/clan/2CCCP', {headers: {auth: 'a123b4567'}})
```

Detail example:

```javascript
var request = require("request");

var options = { method: 'GET',
  url: 'https://api.cr-api.com/clan/2CCCP',
  headers: { auth: 'a123b4567' }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
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

$test = file_get_contents("https://api.cr-api.com/clan/2CCCP",true, $context);
```

### PHP HttpRequest

```php
<?php

$request = new HttpRequest();
$request->setUrl('https://api.cr-api.com/clan/2CCCP');
$request->setMethod(HTTP_METH_GET);

$request->setHeaders(array(
  'auth' => 'a123b4567'
));

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}
```

### PHP pecl_http

```php
<?php

$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://api.cr-api.com/clan/2CCCP');
$request->setRequestMethod('GET');
$request->setHeaders(array(
  'auth' => 'a123b4567'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
```

### Python http.client (Python 3)

```python
import http.client

conn = http.client.HTTPConnection("api.cr-api.com")

headers = {
    'auth': "a123b4567",
    }

conn.request("GET", "/clan/2CCCP", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

### Python (aiohttp)

Asynchronous python using the [aiohttp](https://aiohttp.readthedocs.io/) library.

```python
import aiohttp
headers = {"auth": "a123b4567"}
url = "https://api.cr-api.com/clan/2CCCP"
async with aiohttp.ClientSession() as session:
    async with session.get(url, headers=headers) as resp:
        data = await resp.json()
```

### Python (requests)

Synchronous (blocking) Python using the [requests](https://docs.python-requests.org) library.

```python
import requests

url = "https://api.cr-api.com/clan/2CCCP"

headers = {
    'auth': "a123b4567"
    }

response = requests.request("GET", url, headers=headers)

data = response.json()
```

### Ruby (NET::Http)

```ruby

require 'uri'
require 'net/http'

url = URI("https://api.cr-api.com/clan/2CCCP")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Get.new(url)
request["auth"] = 'a123b4567'

response = http.request(request)
puts response.read_body
```

### Swift (NSURL)

```swift
import Foundation

let headers = [
  "auth": "a123b4567",
  "Cache-Control": "no-cache",
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.cr-api.com/clan/2CCCP")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "GET"
request.allHTTPHeaderFields = headers

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
```
