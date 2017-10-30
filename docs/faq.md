# Frequently Asked Questions

## How do I get the next chest in any profile?

The [profile endpoint](/profile/profile) returns chest cycle info in this format:

```json
"chestCycle": {
   "position": 1893,
   "superMagicalPos": 2094,
   "legendaryPos": 1989,
   "epicPos": 1893
},
```

To find out the next chests number of chests:

- Look up chestCycle order in [constants endpoint](http://api.cr-api.com/constants)
- Loop through the full chest cycle to find the current index: `current_index = position % len(chestCycle)`
- Your next n chest are: `chestCycle[current_index]`, `chestCycle[current_index + 1]`, `chestCycle[current_index + 2]`, etc.
- To determine the next Giant or Magical chests, find the first index of `Giant` of `Magic` counting from the `current_index`. Remember to loop again from the beginning of chestCycle if you have exhausted the full cycle.
- Special chests: e.g. Super Magical, Legendary and Epic chests replace chests in the main cycle. In the example above, your next chest will be replaced by an Epic chest `epicPos - position = 1893 - 1893 = 0` and your legendary chest will appear at `legendaryPos - position = 1989 - 1893 = 96`.
- Number of chests opened so far is the same as your current position.

See [Github issue #21](https://github.com/cr-api/cr-api/issues/21) for a discussion about this.
