# Frequently Asked Questions

## How do I get the upcoming chests for a user?

The [profile endpoint](/profile/profile) returns chest cycle info in this format:

```json
"chestCycle": {
   "position": 1893,
   "superMagicalPos": 2094,
   "legendaryPos": 1989,
   "epicPos": 1893
},
```

To find out upcoming chests:

- Look up chestCycle order in [constants endpoint](/info/constants)
- Loop through the full chest cycle to find the current index: `current_index = position % len(chestCycle)`
- Your next n chest are: `chestCycle[current_index]`, `chestCycle[current_index + 1]`, `chestCycle[current_index + 2]`, etc.
- To determine the next Giant or Magical chests, find the first index of `Giant` of `Magic` counting from the `current_index`. Remember to loop again from the beginning of chestCycle if you have exhausted the full cycle.
- Special chests: e.g. Super Magical, Legendary and Epic chests replace chests in the main cycle. In the example above, your next chest will be replaced by an Epic chest `epicPos - position = 1893 - 1893 = 0` and your legendary chest will appear at `legendaryPos - position = 1989 - 1893 = 96`.
- Number of chests opened so far is the same as your current position.

See [Github issue #21](https://github.com/cr-api/cr-api/issues/21) for a discussion about this.

!> Russian language translation by Spy727 — thanks!

# Часто Задаваемые Вопросы

## Как получить следующие n сундуки любого профиля?

[Конечная точка](/profile/profile) профиля возвращает информацию о цикле сундуков в этом формате:

```json
"chestCycle": {
   "position": 1893,
   "superMagicalPos": 2094,
   "legendaryPos": 1989,
   "epicPos": 1893
},
```


Чтобы узнать о n следующих сундуках:

- Посмотрите порядок сундуков в [константах](/info/constants)
- Проведите полный цикл сундуков, чтобы найти текущий индекс: `current_index = position % len(chestCycle)`
- Вашы следующие n сундуки: `chestCycle[current_index]`, `chestCycle[current_index + 1]`, `chestCycle[current_index + 2]` и т. д.
- Чтобы определить следующий гигантский или магический сундук, найдите первый индекс `Giant` или `Magic` после `current_index`. Не забудьте снова зациклиться от начала цикла сундуков если вы исчерпали полный цикл.
- Специальные сундуки: например, супермагические, легендарные и эпические сундуки заменяют сундуки в основном цикле. В приведенном выше примере ваш следующий сундук будет заменен эпическим сундуком потому что `epicPos - position = 1893 - 1893 = 0`, а ваш легендарный сундук появится в `legendaryPos - position = 1989 - 1893 = 96`.
- Количество сундуков, открытых до сих пор, совпадает с вашим текущим положением.

См. [Github Вопрос № 21](https://github.com/cr-api/cr-api/issues/21) для обсуждения этого вопроса.
