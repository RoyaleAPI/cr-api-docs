import{_ as n,M as o,p as h,q as d,R as e,t as a,N as t,V as l,a1 as i}from"./framework-96b046e1.js";const c={},u=i('<h1 id="frequently-asked-questions" tabindex="-1"><a class="header-anchor" href="#frequently-asked-questions" aria-hidden="true">#</a> Frequently Asked Questions</h1><h2 id="when-will-v3-be-live" tabindex="-1"><a class="header-anchor" href="#when-will-v3-be-live" aria-hidden="true">#</a> When will v3 be live?</h2><p>There is currently no ETA. RoyaleAPI has only 1 developer and he has his own personal life as well. Keep up to date in the Discord Server.</p><h2 id="what-are-the-valid-characters-in-a-supercell-tag" tabindex="-1"><a class="header-anchor" href="#what-are-the-valid-characters-in-a-supercell-tag" aria-hidden="true">#</a> What are the valid characters in a Supercell tag?</h2><p>All the tags used in Supercell games (Clash Royale, Clash of Clans, etc) are made up with these characters <code>0289CGJLPQRUVY</code> — the numbers <code>0289</code> and the letters <code>CGJLPQRUVY</code>. If you don’t want the API to return invalid tag errors, check and make sure that the tags you use are valid before making your requests. For convenience, you may wish to check and convert the letter <code>O</code> to <code>0</code> as this is a common mistake made by the users. They must also be in uppercase. Please pre-process these for end-users if you wish to avoid errors.</p><h2 id="is-there-a-rate-limit-for-the-api-requests" tabindex="-1"><a class="header-anchor" href="#is-there-a-rate-limit-for-the-api-requests" aria-hidden="true">#</a> Is there a rate limit for the API requests?</h2><p>Yes. There is a fixed ratelimit per second that you can check by looking at the <code>Response Headers</code> returned by the API and the value of <code>x-ratelimit-limit</code> header. When you hit the ratelimit, a 429 response will be returned</p><h2 id="what-headers-are-returned-by-the-api" tabindex="-1"><a class="header-anchor" href="#what-headers-are-returned-by-the-api" aria-hidden="true">#</a> What headers are returned by the API?</h2><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>x-ratelimit-limit</code></td><td>number</td><td>Total amount of requests you can make to the API per second</td></tr><tr><td><code>x-ratelimit-remaining</code></td><td>number</td><td>Number of requests remaining for that time window</td></tr><tr><td><code>x-ratelimit-retry-after</code></td><td>number</td><td>Time in microseconds until the next request is available (only returned if you hit the ratelimit)</td></tr><tr><td><code>x-cached</code></td><td>boolean</td><td>This is only returned if the data is cached</td></tr></tbody></table><h2 id="how-can-my-clan-family-be-listed-on-the-website" tabindex="-1"><a class="header-anchor" href="#how-can-my-clan-family-be-listed-on-the-website" aria-hidden="true">#</a> How can my clan family be listed on the website?</h2>',10),p={href:"https://github.com/RoyaleAPI/cr-api-ux/wiki/Family-Config",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/RoyaleAPI/cr-api-ux/issues",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"how-do-i-report-bugs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-do-i-report-bugs","aria-hidden":"true"},"#"),a(" How do I report bugs?")],-1),y={href:"https://github.com/RoyaleAPI/cr-api/issues",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"how-do-i-request-a-feature",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-do-i-request-a-feature","aria-hidden":"true"},"#"),a(" How do I request a feature?")],-1),w={href:"https://github.com/RoyaleAPI/cr-api/issues",target:"_blank",rel:"noopener noreferrer"},g=i(`<h2 id="my-developer-key-is-not-working-can-you-help-me" tabindex="-1"><a class="header-anchor" href="#my-developer-key-is-not-working-can-you-help-me" aria-hidden="true">#</a> My developer key is not working, can you help me?</h2><p>It is highly unusual that your key will not work. Before asking us for help, first try to do a request with cURL and verify that you are in fact getting the same error message. For example, if your token is <code>a1234.567.890</code>, run the following command and see if you can get a response. If the cURL works and your code does not, it means that there is something wrong with your code and not with our API nor your developer key.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--header</span> <span class="token string">&quot;auth: a1234.567.890&quot;</span> https://api.royaleapi.com/clan/9PJ82CRC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="should-i-mention-or-dm-selfish-sml-on-discord-if-i-have-a-problem" tabindex="-1"><a class="header-anchor" href="#should-i-mention-or-dm-selfish-sml-on-discord-if-i-have-a-problem" aria-hidden="true">#</a> Should I mention or DM Selfish / SML on Discord if I have a problem?</h2>`,4),_={href:"https://github.com/RoyaleAPI/cr-api/issues",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,"You can ask your questions on Discord, however, without tagging us specifically.",-1),k=e("h2",{id:"there-are-multiple-wrappers-available-for-insert-language-here-which-one-should-i-use",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#there-are-multiple-wrappers-available-for-insert-language-here-which-one-should-i-use","aria-hidden":"true"},"#"),a(" There are multiple wrappers available for (insert language here), which one should I use?")],-1),x=e("h2",{id:"there-is-a-wrapper-available-for-my-language-already-can-i-write-another-one",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#there-is-a-wrapper-available-for-my-language-already-can-i-write-another-one","aria-hidden":"true"},"#"),a(" There is a wrapper available for my language already, can I write another one?")],-1),I=e("p",null,"Yes, you are free to write additional wrappers and we will put it on the list when it is available.",-1),q=e("h2",{id:"will-shop-offers-clan-war-card-collection-be-added-to-the-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#will-shop-offers-clan-war-card-collection-be-added-to-the-api","aria-hidden":"true"},"#"),a(" Will shop offers / clan war card collection / … be added to the API?")],-1),P=e("p",null,"Supercell considers many of the things that a player can see in-game to be private. With the exception of the battle logs, which can be accessed via the API, these other private data will probably never appear on our endpoints.",-1);function A(R,T){const r=o("ExternalLinkIcon"),s=o("RouterLink");return h(),d("div",null,[u,e("p",null,[a("Please read the "),e("a",p,[a("family configuration"),t(r)]),a(" documentation on our UX Github wiki and "),e("a",m,[a("open an issue"),t(r)]),a(" with the completed YAML configuration.")]),f,e("p",null,[a("Please "),e("a",y,[a("open an issue"),t(r)]),a(".")]),b,e("p",null,[a("If you don’t see a specific feature, it is most likely because we aren’t able to get those data, or we are limited by Supercell guidelines on what we can show you publicly. If the data is public and you feel that it is missing, please "),e("a",w,[a("open an issue"),t(r)]),a(".")]),g,e("p",null,[a("No. We read almost all messages on the server. If you in fact have a pressing issue, you should "),e("a",_,[a("open an issue"),t(r)]),a(" on Github. This ensures that we don’t lose your question in the sea of Discord notifications, and make sure that someone will address the problem you are having.")]),v,k,e("p",null,[a("You should pick the library on your own. Wrappers that appear in our "),t(s,{to:"/wrappers.html"},{default:l(()=>[a("wrapper list")]),_:1}),a(" are not official endorsements by the team. Use your own judgement.")]),x,I,q,P])}const L=n(c,[["render",A],["__file","faq.html.vue"]]);export{L as default};
