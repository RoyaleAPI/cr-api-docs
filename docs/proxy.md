# Proxy

!> **Update 2022-02-08:** Supercell made some changes with how tokens are handled. Because of this, you can no longer use `128.128.128.128` as IP. You should be able to continue to use this proxy by creating a new key with this IP `45.79.218.79`

We have developed a proxy solution that makes it possible for you to use the [official API](https://developer.clashroyale.com/) with dynamic IP addresses.

1. Create a key on the the official API and whitelist (include) this IP: `45.79.218.79`
2. Use your key to request API endpoints by substituting `https://api.clashroyale.com/` with `https://proxy.royaleapi.dev`
3. For example, to get a player profile:
    - `https://api.clashroyale.com/v1/players/%23C0G20PR2`
    - `https://proxy.royaleapi.dev/v1/players/%23C0G20PR2`
    
Please join our [Developer Discord server](https://discord.royaleapi.dev) if you need help!

## Proxy for other Supercell Games

Follow the instructions above, and substitute domains accordingly:

## Clash Royale API Proxy

- [Clash Royale API](https://developer.clashroyale.com) 
- https://api.clashroyale.com
- https://proxy.royaleapi.dev

## Clash of Clans API Proxy

- [Clash of Clans API](https://developer.clashofclans.com)
- https://api.clashofclans.com
- https://cocproxy.royaleapi.dev

## Brawl Stars API Proxy

- [Brawl Starss API](https://developer.clashofclans.com)
- https://api.brawlstars.com
- https://bsproxy.royaleapi.dev

