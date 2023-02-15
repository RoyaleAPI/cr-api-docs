import{_ as s,p as n,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="player-chests" tabindex="-1"><a class="header-anchor" href="#player-chests" aria-hidden="true">#</a> Player Chests</h1><p>This endpoint return upcoming chests for a specific player.</p><h2 id="http-request" tabindex="-1"><a class="header-anchor" href="#http-request" aria-hidden="true">#</a> HTTP Request</h2><p><code>GET https://api.royaleapi.com/player/:tag/chests</code></p><h3 id="url-parameters" tabindex="-1"><a class="header-anchor" href="#url-parameters" aria-hidden="true">#</a> URL Parameters</h3><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td>TAG</td><td>The player tag of the user to retrieve</td></tr></tbody></table><h2 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> Response</h2><p>https://api.royaleapi.com/player/8L9L9GL/chests</p><p>The above command returns JSON structured like this:</p><p><a href="/json/player_8L9L9GL_chests.json">Full JSON Response</a></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;upcoming&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;silver&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;gold&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;silver&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;silver&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;silver&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;silver&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;gold&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;silver&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;silver&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;superMagical&quot;</span><span class="token operator">:</span> <span class="token number">559</span><span class="token punctuation">,</span>
    <span class="token property">&quot;magical&quot;</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
    <span class="token property">&quot;legendary&quot;</span><span class="token operator">:</span> <span class="token number">79</span><span class="token punctuation">,</span>
    <span class="token property">&quot;epic&quot;</span><span class="token operator">:</span> <span class="token number">699</span><span class="token punctuation">,</span>
    <span class="token property">&quot;giant&quot;</span><span class="token operator">:</span> <span class="token number">94</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can see an implementation of this at https://royaleapi.com/player/L88P2282</p><h3 id="multiple-players" tabindex="-1"><a class="header-anchor" href="#multiple-players" aria-hidden="true">#</a> Multiple Players</h3><p>https://api.royaleapi.com/player/8L9L9GL,L88P2282,9CQ2U8QJ/chests</p><p>The above command returns JSON structured like this. In the actual response, there will be more chest cycles:</p><p><a href="/json/player_chests_8L9L9GL,L88P2282,9CQ2U8QJ.json">Full JSON Response</a></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;upcoming&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;silver&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;silver&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;gold&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;silver&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;gold&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;silver&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;silver&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;silver&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;silver&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;superMagical&quot;</span><span class="token operator">:</span> <span class="token number">83</span><span class="token punctuation">,</span>
        <span class="token property">&quot;magical&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
        <span class="token property">&quot;legendary&quot;</span><span class="token operator">:</span> <span class="token number">43</span><span class="token punctuation">,</span>
        <span class="token property">&quot;epic&quot;</span><span class="token operator">:</span> <span class="token number">606</span><span class="token punctuation">,</span>
        <span class="token property">&quot;giant&quot;</span><span class="token operator">:</span> <span class="token number">57</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[p];function i(l,r){return n(),a("div",null,o)}const u=s(t,[["render",i],["__file","player_chests.html.vue"]]);export{u as default};
