import{_ as e,p as a,q as t,a1 as n}from"./framework-96b046e1.js";const s={},r=n(`<h1 id="clan-battles" tabindex="-1"><a class="header-anchor" href="#clan-battles" aria-hidden="true">#</a> Clan Battles</h1><p>This endpoint return battles played by people in your clan. Internally, the server fetches player profiles for everyone who are members. As it is an expensive request, you may wish to lengthen your timeout param in your request as it may take some time for you to receive your response.</p><p>You may want to use <a href="pagination">pagination</a> for this request.</p><h2 id="http-request" tabindex="-1"><a class="header-anchor" href="#http-request" aria-hidden="true">#</a> HTTP Request</h2><p><code>GET https://api.royaleapi.com/clan/:tag/battles</code></p><h3 id="url-parameters" tabindex="-1"><a class="header-anchor" href="#url-parameters" aria-hidden="true">#</a> URL Parameters</h3><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>TAG</code></td><td>The clan tag of the clan to retrieve</td></tr></tbody></table><h3 id="query-string-parameters" tabindex="-1"><a class="header-anchor" href="#query-string-parameters" aria-hidden="true">#</a> Query String Parameters</h3><table><thead><tr><th>Name</th><th>Data Type</th><th>Required / Optional</th><th>Description</th></tr></thead><tbody><tr><td><code>type</code></td><td>string</td><td>optional (default to <code>clanMate</code>)</td><td>Type of clan battles to filter (<code>all</code>, <code>war</code>, <code>challenge</code> or <code>clanMate</code>)</td></tr></tbody></table><h2 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> Response</h2><p>https://api.royaleapi.com/clan/9PJ82CRC/battles</p><p><a href="/json/clan_9PJ82CRC_battles.json">Full JSON Response</a></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h2><p>https://royaleapi.com/clan/9PJ82CRC/battles</p>`,15),o=[r];function i(d,l){return a(),t("div",null,o)}const p=e(s,[["render",i],["__file","clan_battles.html.vue"]]);export{p as default};
