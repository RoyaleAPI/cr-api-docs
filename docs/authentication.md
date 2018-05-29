#  Authentication

All API requests must be accompanied by a developer key. This key is a unique identifier to an individual developer and you should not share it with anyone else.

## Authenticated Requests

You must authenticate your requests using **custom headers**. Add a key named `auth` with value `<token>` to your header when you make your requests.

Additionally, we support **Bearer Token** authorization. Bearer tokens use a field named `Authorization` with value `Bearer <token>` in the header.

!> Set your token as an **environment variable** or save it as part of the Authorization setting in your **Postman Collection** settings so you don’t need to ever type it again.

## Key Management

1. Once issued, your key will be active.
2. Your developer key will remain active as long as you remain a user on our Discord server. Your key will be automatically disabled once you have left the server.
3. We reserve the right to permanently blacklist keys / developers who have been shown to abuse the API with requests.

### Generating new keys

You can obtain and manage your developer key on [our discord server](https://discord.me/RoyaleAPI).

1. Ensure you have the `Allow Direct Messages from server members` option in `Privacy Settings` checked.
2. Go to the #developer-key channel.
3. Type `?crapikey get`
4. The bot will send you a DM (direct message) with your key.

### Forgotten keys

To get a reminder of your developer key, visit the Discord channel above and type `?crapikey get` again and the bot will remind you with a DM again.

### Removing keys

If you feel that your key may have been compromised, please contact open an issue on [Github](https://github.com/RoyaleAPI/cr-api) and we will create a new one for you.

### Key Statistics

!> Key Stats has been temporarily disabled.

You can receive request statistics of your key on our Discord server. Go to the `#developer-key` channel and type `?crapikey stats`. Your stats will be visible to everyone else in the channel.

## Code examples

Here are some code snippets on how to add custom headers in different languages.

| Endpoint | URL | token |
| --- | --- | --- |
| clan | https://api.royaleapi.com/clan/2CCCP | `a1234.567.890` |

### cURL

```bash
curl --header "auth: a1234.567.890" https://api.royaleapi.com/clan/2CCCP
```

```bash
curl -X GET \
  https://api.royaleapi.com/clan/2CCCP \
  -H 'Authorization: Bearer a1234.567.890' \
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
var client = new RestClient("https://api.royaleapi.com/clan/2CCCP");
var request = new RestRequest(Method.GET);
request.AddHeader("auth", "a1234.567.890");
IRestResponse response = client.Execute(request);
```

### Java OK HTTP

```java
OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("https://api.royaleapi.com/clan/2CCCP")
  .get()
  .addHeader("auth", "a1234.567.890")
  .build();

Response response = client.newCall(request).execute();
```

### Java Unirest

```java
HttpResponse<String> response = Unirest.get("https://api.royaleapi.com/clan/2CCCP")
  .header("auth", "a1234.567.890")
  .asString();
```

### Javascript jQuery AJAX

We don’t recommend that you access the API on the client side as you will be exposing your token publicly. However, this is how you would do it with [jQuery](https://api.jquery.com/):

```javascript
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.royaleapi.com/clan/2CCCP",
  "method": "GET",
  "headers": {
    "auth": "a1234.567.890"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

### Node.js

```javascript
const request = require("request");
request('https://api.royaleapi.com/clan/2CCCP', {headers: {auth: 'a1234.567.890'}})
```

Detailed example:

```javascript
var request = require("request");

var options = { method: 'GET',
  url: 'https://api.royaleapi.com/clan/2CCCP',
  headers: { auth: 'a1234.567.890' }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

### PHP

```php
$token = "a1234.567.890";
$opts = [
    "http" => [
        "header" => "auth:" . $token
    ]
];

$context = stream_context_create($opts);

$test = file_get_contents("https://api.royaleapi.com/clan/2CCCP",true, $context);
```

### PHP HttpRequest

```php
<?php

$request = new HttpRequest();
$request->setUrl('https://api.royaleapi.com/clan/2CCCP');
$request->setMethod(HTTP_METH_GET);

$request->setHeaders(array(
  'auth' => 'a1234.567.890'
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

$request->setRequestUrl('https://api.royaleapi.com/clan/2CCCP');
$request->setRequestMethod('GET');
$request->setHeaders(array(
  'auth' => 'a1234.567.890'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
```

### Python http.client (Python 3)

```python
import http.client

conn = http.client.HTTPConnection("api.royaleapi.com")

headers = {
    'auth': "a1234.567.890",
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
headers = {"auth": "a1234.567.890"}
url = "https://api.royaleapi.com/clan/2CCCP"
async with aiohttp.ClientSession() as session:
    async with session.get(url, headers=headers) as resp:
        data = await resp.json()
```

### Python (requests)

Synchronous (blocking) Python using the [requests](https://docs.python-requests.org) library.

```python
import requests

url = "https://api.royaleapi.com/clan/2CCCP"

headers = {
    'auth': "a1234.567.890"
    }

response = requests.request("GET", url, headers=headers)

data = response.json()
```

### Ruby (NET::Http)

```ruby

require 'uri'
require 'net/http'

url = URI("https://api.royaleapi.com/clan/2CCCP")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Get.new(url)
request["auth"] = 'a1234.567.890'

response = http.request(request)
puts response.read_body
```

### Swift (NSURL)

```swift
import Foundation

let headers = [
  "auth": "a1234.567.890",
  "Cache-Control": "no-cache",
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.royaleapi.com/clan/2CCCP")! as URL,
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
