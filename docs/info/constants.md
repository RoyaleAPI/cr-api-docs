# Constants

This endpoint returns constants returned by the API. Top level objects include:
- alliance (aka clan)
    - roles (str)
    - types (str)
- arenas
    - arena (str)
    - arenaID (int)
    - name (str)
    - trophyLimit (int)
- badges
    - id (str)
        - name (str)
- chestCycle
    - order (array)
        - `Silver`, `Gold`, `Giant`, `Magic`
- countryCodes
    - isCountry (bool)
    - name (str)
- rarities (array)
    - balance_multiplier (int)
    - chance_weight (int)
    - clone_relative_level (int)
    - donate_capacity (int)
    - donate_reward (int)
    - donate_xp (int)
    - gold_conversion_value (int)
    - level_count (int)
    - mirror_relative_level (int)
    - name (str)
    - power_level_multiplier (int array)
    - refund_gems (int)
    - relative_level (int)
    - sort_capacity (int)
    - upgrade_cost (int array)
    - upgrade_exp (int array)
    - upgrade_material_count (int array)
- cards
    - card\_id (int)
    - key (str): alpha lowercase, white space as hyphen `-`
    - card\_key (str): alpha lowercase, white space as underscore `_`
    - name (str): name in English, title case.
    - elixir (int)
    - type (str): Spell type
        - `Troop`, `Building`, `Spell`
    - rarity (str)
        - `Common`, `Rare`, `Epic`, `Legendary`
    - arena (int)
    - description (str): card description in English
    - decklink (str): card id used in decklinks

## HTTP Request

`http://api.cr-api.com/constants`

## Response

http://api.cr-api.com/constants

```json
{
    "alliance": {
        "roles": [
            null,
            "Member",
            "Leader",
            "Elder",
            "Co-Leader"
        ],
        "types": [
            null,
            "Open",
            "Invite Only",
            "Closed"
        ]
    },
    "arenas": [
        {
            "arena": "Arena 1",
            "arenaID": 1,
            "name": "Goblin Stadium",
            "trophyLimit": 0
        },
        {
            "arena": "Arena 2",
            "arenaID": 2,
            "name": "Bone Pit",
            "trophyLimit": 400
        },
        {
            "arena": "Arena 3",
            "arenaID": 3,
            "name": "Barbarian Bowl",
            "trophyLimit": 800
        },
        {
            "arena": "Arena 4",
            "arenaID": 4,
            "name": "P.E.K.K.A's Playhouse",
            "trophyLimit": 1100
        },
        {
            "arena": "Arena 5",
            "arenaID": 5,
            "name": "Spell Valley",
            "trophyLimit": 1400
        },
        {
            "arena": "Arena 6",
            "arenaID": 6,
            "name": "Builder's Workshop",
            "trophyLimit": 1700
        },
        {
            "arena": "Arena 7",
            "arenaID": 7,
            "name": "Royal Arena",
            "trophyLimit": 2000
        },
        {
            "arena": "Arena 8",
            "arenaID": 8,
            "name": "Frozen Peak",
            "trophyLimit": 2300
        },
        {
            "arena": "Arena 9",
            "arenaID": 9,
            "name": "Jungle Arena",
            "trophyLimit": 2600
        },
        {
            "arena": "Arena 10",
            "arenaID": 10,
            "name": "Hog Mountain",
            "trophyLimit": 3000
        },
        {
            "arena": "Arena 11",
            "arenaID": 11,
            "name": "Legendary Arena",
            "trophyLimit": 3800
        },
        {
            "arena": "League 1",
            "arenaID": 12,
            "name": "Challenger I",
            "trophyLimit": 4000
        },
        {
            "arena": "League 2",
            "arenaID": 13,
            "name": "Challenger II",
            "trophyLimit": 4300
        },
        {
            "arena": "League 3",
            "arenaID": 14,
            "name": "Challenger III",
            "trophyLimit": 4600
        },
        {
            "arena": "League 4",
            "arenaID": 15,
            "name": "Master I",
            "trophyLimit": 4900
        },
        {
            "arena": "League 5",
            "arenaID": 16,
            "name": "Master II",
            "trophyLimit": 5200
        },
        {
            "arena": "League 6",
            "arenaID": 17,
            "name": "Master III",
            "trophyLimit": 5500
        },
        {
            "arena": "League 7",
            "arenaID": 18,
            "name": "Champion",
            "trophyLimit": 5800
        },
        {
            "arena": "League 8",
            "arenaID": 19,
            "name": "Grand Champion",
            "trophyLimit": 6100
        },
        {
            "arena": "League 9",
            "arenaID": 20,
            "name": "Ultimate Champion",
            "trophyLimit": 6400
        }
    ],
    "badges": {
        "16000000": "Flame_01",
        "16000001": "Flame_02",
        "16000002": "Flame_03",
        "16000003": "Flame_04",
        "16000004": "Sword_01",
        "16000005": "Sword_02",
        "16000006": "Sword_03",
        "16000007": "Sword_04",
        "16000008": "Bolt_01",
        "16000009": "Bolt_02",
        "16000010": "Bolt_03",
        "16000011": "Bolt_04",
        "16000012": "Crown_01",
        "16000013": "Crown_02",
        "16000014": "Crown_03",
        "16000015": "Crown_04",
        "16000016": "Arrow_01",
        "16000017": "Arrow_02",
        "16000018": "Arrow_03",
        "16000019": "Arrow_04",
        "16000020": "Diamond_Star_01",
        "16000021": "Diamond_Star_02",
        "16000022": "Diamond_Star_03",
        "16000023": "Diamond_Star_04",
        "16000024": "Skull_01",
        "16000025": "Skull_02",
        "16000026": "Skull_03",
        "16000027": "Skull_04",
        "16000028": "Skull_05",
        "16000029": "Skull_06",
        "16000030": "Moon_01",
        "16000031": "Moon_02",
        "16000032": "Moon_03",
        "16000033": "Pine_01",
        "16000034": "Pine_02",
        "16000035": "Pine_03",
        "16000036": "Traditional_Star_01",
        "16000037": "Traditional_Star_02",
        "16000038": "Traditional_Star_03",
        "16000039": "Traditional_Star_04",
        "16000040": "Traditional_Star_05",
        "16000041": "Traditional_Star_06",
        "16000042": "Star_Shine_01",
        "16000043": "Star_Shine_02",
        "16000044": "Star_Shine_03",
        "16000045": "Diamond_01",
        "16000046": "Diamond_02",
        "16000047": "Diamond_03",
        "16000048": "flag_a_01",
        "16000049": "flag_a_02",
        "16000050": "flag_a_03",
        "16000051": "flag_b_01",
        "16000052": "flag_b_02",
        "16000053": "flag_b_03",
        "16000054": "flag_c_03",
        "16000055": "flag_c_04",
        "16000056": "flag_c_05",
        "16000057": "flag_c_06",
        "16000058": "flag_c_07",
        "16000059": "flag_c_08",
        "16000060": "flag_d_01",
        "16000061": "flag_d_02",
        "16000062": "flag_d_03",
        "16000063": "flag_d_04",
        "16000064": "flag_d_05",
        "16000065": "flag_d_06",
        "16000066": "flag_f_01",
        "16000067": "flag_f_02",
        "16000068": "flag_g_01",
        "16000069": "flag_g_02",
        "16000070": "flag_i_01",
        "16000071": "flag_i_02",
        "16000072": "flag_h_01",
        "16000073": "flag_h_02",
        "16000074": "flag_h_03",
        "16000075": "flag_j_01",
        "16000076": "flag_j_02",
        "16000077": "flag_j_03",
        "16000078": "flag_k_01",
        "16000079": "flag_k_02",
        "16000080": "flag_k_03",
        "16000081": "flag_k_04",
        "16000082": "flag_k_05",
        "16000083": "flag_k_06",
        "16000084": "flag_l_01",
        "16000085": "flag_l_02",
        "16000086": "flag_l_03",
        "16000087": "flag_m_01",
        "16000088": "flag_m_02",
        "16000089": "flag_m_03",
        "16000090": "flag_n_01",
        "16000091": "flag_n_02",
        "16000092": "flag_n_03",
        "16000093": "flag_n_04",
        "16000094": "flag_n_05",
        "16000095": "flag_n_06",
        "16000096": "Twin_Peaks_01",
        "16000097": "Twin_Peaks_02",
        "16000098": "Gem_01",
        "16000099": "Gem_02",
        "16000100": "Gem_03",
        "16000101": "Gem_04",
        "16000102": "Coin_01",
        "16000103": "Coin_02",
        "16000104": "Coin_03",
        "16000105": "Coin_04",
        "16000106": "Elixir_01",
        "16000107": "Elixir_02",
        "16000108": "Heart_01",
        "16000109": "Heart_02",
        "16000110": "Heart_03",
        "16000111": "Heart_04",
        "16000112": "Tower_01",
        "16000113": "Tower_02",
        "16000114": "Tower_03",
        "16000115": "Tower_04",
        "16000116": "Fan_01",
        "16000117": "Fan_02",
        "16000118": "Fan_03",
        "16000119": "Fan_04",
        "16000120": "Fugi_01",
        "16000121": "Fugi_02",
        "16000122": "Fugi_03",
        "16000123": "Fugi_04",
        "16000124": "YingYang_01",
        "16000125": "YingYang_02",
        "16000126": "flag_c_01",
        "16000127": "flag_c_02",
        "16000128": "Cherry_Blossom_01",
        "16000129": "Cherry_Blossom_02",
        "16000130": "Cherry_Blossom_03",
        "16000131": "Cherry_Blossom_04",
        "16000132": "Cherry_Blossom_05",
        "16000133": "Cherry_Blossom_06",
        "16000134": "Cherry_Blossom_07",
        "16000135": "Cherry_Blossom_08",
        "16000136": "Bamboo_01",
        "16000137": "Bamboo_02",
        "16000138": "Bamboo_03",
        "16000139": "Bamboo_04",
        "16000140": "Orange_01",
        "16000141": "Orange_02",
        "16000142": "Lotus_01",
        "16000143": "Lotus_02",
        "16000144": "A_Char_King_01",
        "16000145": "A_Char_King_02",
        "16000146": "A_Char_King_03",
        "16000147": "A_Char_King_04",
        "16000148": "A_Char_Barbarian_01",
        "16000149": "A_Char_Barbarian_02",
        "16000150": "A_Char_Prince_01",
        "16000151": "A_Char_Prince_02",
        "16000152": "A_Char_Prince_03",
        "16000153": "A_Char_Knight_02",
        "16000154": "A_Char_Goblin_01",
        "16000155": "A_Char_Goblin_02",
        "16000156": "A_Char_DarkPrince_01",
        "16000157": "A_Char_DarkPrince_02",
        "16000158": "A_Char_DarkPrince_03",
        "16000159": "A_Char_DarkPrince_04",
        "16000160": "A_Char_MiniPekka_01",
        "16000161": "A_Char_MiniPekka_02",
        "16000162": "A_Char_Pekka_01",
        "16000163": "A_Char_Pekka_02",
        "16000164": "A_Char_Hammer_01",
        "16000165": "A_Char_Hammer_02",
        "16000166": "A_Char_Rocket_01",
        "16000167": "A_Char_Rocket_02",
        "16000168": "Freeze_01",
        "16000169": "Freeze_02",
        "16000170": "Clover_01",
        "16000171": "Clover_02",
        "16000172": "flag_h_04",
        "16000173": "flag_e_02",
        "16000174": "flag_i_03",
        "16000175": "flag_e_01",
        "16000176": "flag_e_02",
        "16000177": "A_Char_Prince_03",
        "16000178": "A_Char_Bomb_01",
        "16000179": "A_Char_Bomb_02"
    },
    "chestCycle": {
        "order": [
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Magic",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Giant",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Magic",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Magic",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Giant",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Giant",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Magic",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Giant",
            "Silver",
            "Silver",
            "Silver",
            "Silver",
            "Gold",
            "Silver",
            "Silver",
            "Gold",
            "Silver"
        ]
    },
    "countryCodes": [
        {
            "isCountry": "false",
            "name": "Europe"
        },
        {
            "isCountry": "false",
            "name": "North America"
        },
        {
            "isCountry": "false",
            "name": "South America"
        },
        {
            "isCountry": "false",
            "name": "Asia"
        },
        {
            "isCountry": "false",
            "name": "Australia"
        },
        {
            "isCountry": "false",
            "name": "Africa"
        },
        {
            "isCountry": "false",
            "name": "International"
        },
        {
            "isCountry": "true",
            "name": "Afghanistan"
        },
        {
            "isCountry": "true",
            "name": "Åland Islands"
        },
        {
            "isCountry": "true",
            "name": "Albania"
        },
        {
            "isCountry": "true",
            "name": "Algeria"
        },
        {
            "isCountry": "true",
            "name": "American Samoa"
        },
        {
            "isCountry": "true",
            "name": "Andorra"
        },
        {
            "isCountry": "true",
            "name": "Angola"
        },
        {
            "isCountry": "true",
            "name": "Anguilla"
        },
        {
            "isCountry": "true",
            "name": "Antarctica"
        },
        {
            "isCountry": "true",
            "name": "Antigua and Barbuda"
        },
        {
            "isCountry": "true",
            "name": "Argentina"
        },
        {
            "isCountry": "true",
            "name": "Armenia"
        },
        {
            "isCountry": "true",
            "name": "Aruba"
        },
        {
            "isCountry": "true",
            "name": "Ascension Island"
        },
        {
            "isCountry": "true",
            "name": "Australia"
        },
        {
            "isCountry": "true",
            "name": "Austria"
        },
        {
            "isCountry": "true",
            "name": "Azerbaijan"
        },
        {
            "isCountry": "true",
            "name": "Bahamas"
        },
        {
            "isCountry": "true",
            "name": "Bahrain"
        },
        {
            "isCountry": "true",
            "name": "Bangladesh"
        },
        {
            "isCountry": "true",
            "name": "Barbados"
        },
        {
            "isCountry": "true",
            "name": "Belarus"
        },
        {
            "isCountry": "true",
            "name": "Belgium"
        },
        {
            "isCountry": "true",
            "name": "Belize"
        },
        {
            "isCountry": "true",
            "name": "Benin"
        },
        {
            "isCountry": "true",
            "name": "Bermuda"
        },
        {
            "isCountry": "true",
            "name": "Bhutan"
        },
        {
            "isCountry": "true",
            "name": "Bolivia"
        },
        {
            "isCountry": "true",
            "name": "Bosnia and Herzegovina"
        },
        {
            "isCountry": "true",
            "name": "Botswana"
        },
        {
            "isCountry": "true",
            "name": "Bouvet Island"
        },
        {
            "isCountry": "true",
            "name": "Brazil"
        },
        {
            "isCountry": "true",
            "name": "British Indian Ocean Territory"
        },
        {
            "isCountry": "true",
            "name": "British Virgin Islands"
        },
        {
            "isCountry": "true",
            "name": "Brunei"
        },
        {
            "isCountry": "true",
            "name": "Bulgaria"
        },
        {
            "isCountry": "true",
            "name": "Burkina Faso"
        },
        {
            "isCountry": "true",
            "name": "Burundi"
        },
        {
            "isCountry": "true",
            "name": "Cambodia"
        },
        {
            "isCountry": "true",
            "name": "Cameroon"
        },
        {
            "isCountry": "true",
            "name": "Canada"
        },
        {
            "isCountry": "true",
            "name": "Canary Islands"
        },
        {
            "isCountry": "true",
            "name": "Cape Verde"
        },
        {
            "isCountry": "true",
            "name": "Caribbean Netherlands"
        },
        {
            "isCountry": "true",
            "name": "Cayman Islands"
        },
        {
            "isCountry": "true",
            "name": "Central African Republic"
        },
        {
            "isCountry": "true",
            "name": "Ceuta and Melilla"
        },
        {
            "isCountry": "true",
            "name": "Chad"
        },
        {
            "isCountry": "true",
            "name": "Chile"
        },
        {
            "isCountry": "true",
            "name": "China"
        },
        {
            "isCountry": "true",
            "name": "Christmas Island"
        },
        {
            "isCountry": "true",
            "name": "Cocos (Keeling) Islands"
        },
        {
            "isCountry": "true",
            "name": "Colombia"
        },
        {
            "isCountry": "true",
            "name": "Comoros"
        },
        {
            "isCountry": "true",
            "name": "Congo (DRC)"
        },
        {
            "isCountry": "true",
            "name": "Congo (Republic)"
        },
        {
            "isCountry": "true",
            "name": "Cook Islands"
        },
        {
            "isCountry": "true",
            "name": "Costa Rica"
        },
        {
            "isCountry": "true",
            "name": "Côte d’Ivoire"
        },
        {
            "isCountry": "true",
            "name": "Croatia"
        },
        {
            "isCountry": "true",
            "name": "Cuba"
        },
        {
            "isCountry": "true",
            "name": "Curaçao"
        },
        {
            "isCountry": "true",
            "name": "Cyprus"
        },
        {
            "isCountry": "true",
            "name": "Czech Republic"
        },
        {
            "isCountry": "true",
            "name": "Denmark"
        },
        {
            "isCountry": "true",
            "name": "Diego Garcia"
        },
        {
            "isCountry": "true",
            "name": "Djibouti"
        },
        {
            "isCountry": "true",
            "name": "Dominica"
        },
        {
            "isCountry": "true",
            "name": "Dominican Republic"
        },
        {
            "isCountry": "true",
            "name": "Ecuador"
        },
        {
            "isCountry": "true",
            "name": "Egypt"
        },
        {
            "isCountry": "true",
            "name": "El Salvador"
        },
        {
            "isCountry": "true",
            "name": "Equatorial Guinea"
        },
        {
            "isCountry": "true",
            "name": "Eritrea"
        },
        {
            "isCountry": "true",
            "name": "Estonia"
        },
        {
            "isCountry": "true",
            "name": "Ethiopia"
        },
        {
            "isCountry": "true",
            "name": "Falkland Islands"
        },
        {
            "isCountry": "true",
            "name": "Faroe Islands"
        },
        {
            "isCountry": "true",
            "name": "Fiji"
        },
        {
            "isCountry": "true",
            "name": "Finland"
        },
        {
            "isCountry": "true",
            "name": "France"
        },
        {
            "isCountry": "true",
            "name": "French Guiana"
        },
        {
            "isCountry": "true",
            "name": "French Polynesia"
        },
        {
            "isCountry": "true",
            "name": "French Southern Territories"
        },
        {
            "isCountry": "true",
            "name": "Gabon"
        },
        {
            "isCountry": "true",
            "name": "Gambia"
        },
        {
            "isCountry": "true",
            "name": "Georgia"
        },
        {
            "isCountry": "true",
            "name": "Germany"
        },
        {
            "isCountry": "true",
            "name": "Ghana"
        },
        {
            "isCountry": "true",
            "name": "Gibraltar"
        },
        {
            "isCountry": "true",
            "name": "Greece"
        },
        {
            "isCountry": "true",
            "name": "Greenland"
        },
        {
            "isCountry": "true",
            "name": "Grenada"
        },
        {
            "isCountry": "true",
            "name": "Guadeloupe"
        },
        {
            "isCountry": "true",
            "name": "Guam"
        },
        {
            "isCountry": "true",
            "name": "Guatemala"
        },
        {
            "isCountry": "true",
            "name": "Guernsey"
        },
        {
            "isCountry": "true",
            "name": "Guinea"
        },
        {
            "isCountry": "true",
            "name": "Guinea-Bissau"
        },
        {
            "isCountry": "true",
            "name": "Guyana"
        },
        {
            "isCountry": "true",
            "name": "Haiti"
        },
        {
            "isCountry": "true",
            "name": "Heard & McDonald Islands"
        },
        {
            "isCountry": "true",
            "name": "Honduras"
        },
        {
            "isCountry": "true",
            "name": "Hong Kong"
        },
        {
            "isCountry": "true",
            "name": "Hungary"
        },
        {
            "isCountry": "true",
            "name": "Iceland"
        },
        {
            "isCountry": "true",
            "name": "India"
        },
        {
            "isCountry": "true",
            "name": "Indonesia"
        },
        {
            "isCountry": "true",
            "name": "Iran"
        },
        {
            "isCountry": "true",
            "name": "Iraq"
        },
        {
            "isCountry": "true",
            "name": "Ireland"
        },
        {
            "isCountry": "true",
            "name": "Isle of Man"
        },
        {
            "isCountry": "true",
            "name": "Israel"
        },
        {
            "isCountry": "true",
            "name": "Italy"
        },
        {
            "isCountry": "true",
            "name": "Jamaica"
        },
        {
            "isCountry": "true",
            "name": "Japan"
        },
        {
            "isCountry": "true",
            "name": "Jersey"
        },
        {
            "isCountry": "true",
            "name": "Jordan"
        },
        {
            "isCountry": "true",
            "name": "Kazakhstan"
        },
        {
            "isCountry": "true",
            "name": "Kenya"
        },
        {
            "isCountry": "true",
            "name": "Kiribati"
        },
        {
            "isCountry": "true",
            "name": "Kosovo"
        },
        {
            "isCountry": "true",
            "name": "Kuwait"
        },
        {
            "isCountry": "true",
            "name": "Kyrgyzstan"
        },
        {
            "isCountry": "true",
            "name": "Laos"
        },
        {
            "isCountry": "true",
            "name": "Latvia"
        },
        {
            "isCountry": "true",
            "name": "Lebanon"
        },
        {
            "isCountry": "true",
            "name": "Lesotho"
        },
        {
            "isCountry": "true",
            "name": "Liberia"
        },
        {
            "isCountry": "true",
            "name": "Libya"
        },
        {
            "isCountry": "true",
            "name": "Liechtenstein"
        },
        {
            "isCountry": "true",
            "name": "Lithuania"
        },
        {
            "isCountry": "true",
            "name": "Luxembourg"
        },
        {
            "isCountry": "true",
            "name": "Macau"
        },
        {
            "isCountry": "true",
            "name": "Macedonia (FYROM)"
        },
        {
            "isCountry": "true",
            "name": "Madagascar"
        },
        {
            "isCountry": "true",
            "name": "Malawi"
        },
        {
            "isCountry": "true",
            "name": "Malaysia"
        },
        {
            "isCountry": "true",
            "name": "Maldives"
        },
        {
            "isCountry": "true",
            "name": "Mali"
        },
        {
            "isCountry": "true",
            "name": "Malta"
        },
        {
            "isCountry": "true",
            "name": "Marshall Islands"
        },
        {
            "isCountry": "true",
            "name": "Martinique"
        },
        {
            "isCountry": "true",
            "name": "Mauritania"
        },
        {
            "isCountry": "true",
            "name": "Mauritius"
        },
        {
            "isCountry": "true",
            "name": "Mayotte"
        },
        {
            "isCountry": "true",
            "name": "Mexico"
        },
        {
            "isCountry": "true",
            "name": "Micronesia"
        },
        {
            "isCountry": "true",
            "name": "Moldova"
        },
        {
            "isCountry": "true",
            "name": "Monaco"
        },
        {
            "isCountry": "true",
            "name": "Mongolia"
        },
        {
            "isCountry": "true",
            "name": "Montenegro"
        },
        {
            "isCountry": "true",
            "name": "Montserrat"
        },
        {
            "isCountry": "true",
            "name": "Morocco"
        },
        {
            "isCountry": "true",
            "name": "Mozambique"
        },
        {
            "isCountry": "true",
            "name": "Myanmar (Burma)"
        },
        {
            "isCountry": "true",
            "name": "Namibia"
        },
        {
            "isCountry": "true",
            "name": "Nauru"
        },
        {
            "isCountry": "true",
            "name": "Nepal"
        },
        {
            "isCountry": "true",
            "name": "Netherlands"
        },
        {
            "isCountry": "true",
            "name": "New Caledonia"
        },
        {
            "isCountry": "true",
            "name": "New Zealand"
        },
        {
            "isCountry": "true",
            "name": "Nicaragua"
        },
        {
            "isCountry": "true",
            "name": "Niger"
        },
        {
            "isCountry": "true",
            "name": "Nigeria"
        },
        {
            "isCountry": "true",
            "name": "Niue"
        },
        {
            "isCountry": "true",
            "name": "Norfolk Island"
        },
        {
            "isCountry": "true",
            "name": "North Korea"
        },
        {
            "isCountry": "true",
            "name": "Northern Mariana Islands"
        },
        {
            "isCountry": "true",
            "name": "Norway"
        },
        {
            "isCountry": "true",
            "name": "Oman"
        },
        {
            "isCountry": "true",
            "name": "Pakistan"
        },
        {
            "isCountry": "true",
            "name": "Palau"
        },
        {
            "isCountry": "true",
            "name": "Palestine"
        },
        {
            "isCountry": "true",
            "name": "Panama"
        },
        {
            "isCountry": "true",
            "name": "Papua New Guinea"
        },
        {
            "isCountry": "true",
            "name": "Paraguay"
        },
        {
            "isCountry": "true",
            "name": "Peru"
        },
        {
            "isCountry": "true",
            "name": "Philippines"
        },
        {
            "isCountry": "true",
            "name": "Pitcairn Islands"
        },
        {
            "isCountry": "true",
            "name": "Poland"
        },
        {
            "isCountry": "true",
            "name": "Portugal"
        },
        {
            "isCountry": "true",
            "name": "Puerto Rico"
        },
        {
            "isCountry": "true",
            "name": "Qatar"
        },
        {
            "isCountry": "true",
            "name": "Réunion"
        },
        {
            "isCountry": "true",
            "name": "Romania"
        },
        {
            "isCountry": "true",
            "name": "Russia"
        },
        {
            "isCountry": "true",
            "name": "Rwanda"
        },
        {
            "isCountry": "true",
            "name": "Saint Barthélemy"
        },
        {
            "isCountry": "true",
            "name": "Saint Helena"
        },
        {
            "isCountry": "true",
            "name": "Saint Kitts and Nevis"
        },
        {
            "isCountry": "true",
            "name": "Saint Lucia"
        },
        {
            "isCountry": "true",
            "name": "Saint Martin"
        },
        {
            "isCountry": "true",
            "name": "Saint Pierre and Miquelon"
        },
        {
            "isCountry": "true",
            "name": "Samoa"
        },
        {
            "isCountry": "true",
            "name": "San Marino"
        },
        {
            "isCountry": "true",
            "name": "São Tomé and Príncipe"
        },
        {
            "isCountry": "true",
            "name": "Saudi Arabia"
        },
        {
            "isCountry": "true",
            "name": "Senegal"
        },
        {
            "isCountry": "true",
            "name": "Serbia"
        },
        {
            "isCountry": "true",
            "name": "Seychelles"
        },
        {
            "isCountry": "true",
            "name": "Sierra Leone"
        },
        {
            "isCountry": "true",
            "name": "Singapore"
        },
        {
            "isCountry": "true",
            "name": "Sint Maarten"
        },
        {
            "isCountry": "true",
            "name": "Slovakia"
        },
        {
            "isCountry": "true",
            "name": "Slovenia"
        },
        {
            "isCountry": "true",
            "name": "Solomon Islands"
        },
        {
            "isCountry": "true",
            "name": "Somalia"
        },
        {
            "isCountry": "true",
            "name": "South Africa"
        },
        {
            "isCountry": "true",
            "name": "South Korea"
        },
        {
            "isCountry": "true",
            "name": "South Sudan"
        },
        {
            "isCountry": "true",
            "name": "Spain"
        },
        {
            "isCountry": "true",
            "name": "Sri Lanka"
        },
        {
            "isCountry": "true",
            "name": "St. Vincent & Grenadines"
        },
        {
            "isCountry": "true",
            "name": "Sudan"
        },
        {
            "isCountry": "true",
            "name": "Suriname"
        },
        {
            "isCountry": "true",
            "name": "Svalbard and Jan Mayen"
        },
        {
            "isCountry": "true",
            "name": "Swaziland"
        },
        {
            "isCountry": "true",
            "name": "Sweden"
        },
        {
            "isCountry": "true",
            "name": "Switzerland"
        },
        {
            "isCountry": "true",
            "name": "Syria"
        },
        {
            "isCountry": "true",
            "name": "Taiwan"
        },
        {
            "isCountry": "true",
            "name": "Tajikistan"
        },
        {
            "isCountry": "true",
            "name": "Tanzania"
        },
        {
            "isCountry": "true",
            "name": "Thailand"
        },
        {
            "isCountry": "true",
            "name": "Timor-Leste"
        },
        {
            "isCountry": "true",
            "name": "Togo"
        },
        {
            "isCountry": "true",
            "name": "Tokelau"
        },
        {
            "isCountry": "true",
            "name": "Tonga"
        },
        {
            "isCountry": "true",
            "name": "Trinidad and Tobago"
        },
        {
            "isCountry": "true",
            "name": "Tristan da Cunha"
        },
        {
            "isCountry": "true",
            "name": "Tunisia"
        },
        {
            "isCountry": "true",
            "name": "Turkey"
        },
        {
            "isCountry": "true",
            "name": "Turkmenistan"
        },
        {
            "isCountry": "true",
            "name": "Turks and Caicos Islands"
        },
        {
            "isCountry": "true",
            "name": "Tuvalu"
        },
        {
            "isCountry": "true",
            "name": "U.S. Outlying Islands"
        },
        {
            "isCountry": "true",
            "name": "U.S. Virgin Islands"
        },
        {
            "isCountry": "true",
            "name": "Uganda"
        },
        {
            "isCountry": "true",
            "name": "Ukraine"
        },
        {
            "isCountry": "true",
            "name": "United Arab Emirates"
        },
        {
            "isCountry": "true",
            "name": "United Kingdom"
        },
        {
            "isCountry": "true",
            "name": "United States"
        },
        {
            "isCountry": "true",
            "name": "Uruguay"
        },
        {
            "isCountry": "true",
            "name": "Uzbekistan"
        },
        {
            "isCountry": "true",
            "name": "Vanuatu"
        },
        {
            "isCountry": "true",
            "name": "Vatican City"
        },
        {
            "isCountry": "true",
            "name": "Venezuela"
        },
        {
            "isCountry": "true",
            "name": "Vietnam"
        },
        {
            "isCountry": "true",
            "name": "Wallis and Futuna"
        },
        {
            "isCountry": "true",
            "name": "Western Sahara"
        },
        {
            "isCountry": "true",
            "name": "Yemen"
        },
        {
            "isCountry": "true",
            "name": "Zambia"
        },
        {
            "isCountry": "true",
            "name": "Zimbabwe"
        }
    ],
    "rarities": [
        {
            "balance_multiplier": 100,
            "chance_weight": 194,
            "clone_relative_level": 0,
            "donate_capacity": 1,
            "donate_reward": 5,
            "donate_xp": 1,
            "gold_conversion_value": 5,
            "level_count": 13,
            "mirror_relative_level": 0,
            "name": "Common",
            "power_level_multiplier": [
                110,
                121,
                133,
                146,
                160,
                176,
                193,
                212,
                233,
                256,
                281,
                309,
                339
            ],
            "refund_gems": 2,
            "relative_level": 0,
            "sort_capacity": 1,
            "upgrade_cost": [
                5,
                20,
                50,
                150,
                400,
                1000,
                2000,
                4000,
                8000,
                20000,
                50000,
                100000,
                0
            ],
            "upgrade_exp": [
                4,
                5,
                6,
                10,
                25,
                50,
                100,
                200,
                400,
                600,
                800,
                1600,
                0
            ],
            "upgrade_material_count": [
                2,
                4,
                10,
                20,
                50,
                100,
                200,
                400,
                800,
                1000,
                2000,
                5000,
                100
            ]
        },
        {
            "balance_multiplier": 130,
            "chance_weight": 10,
            "clone_relative_level": 2,
            "donate_capacity": 10,
            "donate_reward": 50,
            "donate_xp": 10,
            "gold_conversion_value": 50,
            "level_count": 11,
            "mirror_relative_level": 2,
            "name": "Rare",
            "power_level_multiplier": [
                110,
                121,
                133,
                146,
                160,
                176,
                193,
                212,
                233,
                256,
                281
            ],
            "refund_gems": 15,
            "relative_level": 2,
            "sort_capacity": 7,
            "upgrade_cost": [
                50,
                150,
                400,
                1000,
                2000,
                4000,
                8000,
                20000,
                50000,
                100000,
                0
            ],
            "upgrade_exp": [
                6,
                10,
                25,
                50,
                100,
                200,
                400,
                600,
                800,
                1600,
                0
            ],
            "upgrade_material_count": [
                2,
                4,
                10,
                20,
                50,
                100,
                200,
                400,
                800,
                1000,
                10
            ]
        },
        {
            "balance_multiplier": 180,
            "chance_weight": 1,
            "clone_relative_level": 5,
            "donate_capacity": 10,
            "donate_reward": 500,
            "donate_xp": 10,
            "gold_conversion_value": 1000,
            "level_count": 8,
            "mirror_relative_level": 5,
            "name": "Epic",
            "power_level_multiplier": [
                110,
                121,
                133,
                146,
                160,
                176,
                193,
                212
            ],
            "refund_gems": 300,
            "relative_level": 5,
            "sort_capacity": 80,
            "upgrade_cost": [
                400,
                2000,
                4000,
                8000,
                20000,
                50000,
                100000,
                0
            ],
            "upgrade_exp": [
                25,
                100,
                200,
                400,
                600,
                800,
                1600,
                0
            ],
            "upgrade_material_count": [
                2,
                4,
                10,
                20,
                50,
                100,
                200,
                5
            ]
        },
        {
            "balance_multiplier": 250,
            "chance_weight": 1,
            "clone_relative_level": 8,
            "donate_capacity": 4000,
            "donate_reward": 50,
            "donate_xp": 25,
            "gold_conversion_value": 20000,
            "level_count": 5,
            "mirror_relative_level": 8,
            "name": "Legendary",
            "power_level_multiplier": [
                110,
                121,
                133,
                146,
                157
            ],
            "refund_gems": 8000,
            "relative_level": 8,
            "sort_capacity": 2000,
            "upgrade_cost": [
                5000,
                20000,
                50000,
                100000,
                0
            ],
            "upgrade_exp": [
                250,
                600,
                800,
                1600,
                0
            ],
            "upgrade_material_count": [
                2,
                4,
                10,
                20,
                1
            ]
        }
    ],
    "cards": [
        {
            "card_id": 1,
            "key": "knight",
            "card_key": "knight",
            "name": "Knight",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Common",
            "arena": 0,
            "description": "A tough melee fighter. The Barbarian's handsome, cultured cousin. Rumor has it that he was knighted based on the sheer awesomeness of his mustache alone.",
            "decklink": "26000000"
        },
        {
            "card_id": 2,
            "key": "archers",
            "card_key": "archers",
            "name": "Archers",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Common",
            "arena": 0,
            "description": "A pair of lightly armored ranged attackers. They'll help you take down ground and air units, but you're on your own with hair coloring advice.",
            "decklink": "26000001"
        },
        {
            "card_id": 3,
            "key": "goblins",
            "card_key": "goblins",
            "name": "Goblins",
            "elixir": 2,
            "type": "Troop",
            "rarity": "Common",
            "arena": 1,
            "description": "Three fast, unarmored melee attackers. Small, fast, green and mean!",
            "decklink": "26000002"
        },
        {
            "card_id": 4,
            "key": "giant",
            "card_key": "giant",
            "name": "Giant",
            "elixir": 5,
            "type": "Troop",
            "rarity": "Rare",
            "arena": 0,
            "description": "Slow but durable, only attacks buildings. A real one-man wrecking crew!",
            "decklink": "26000003"
        },
        {
            "card_id": 5,
            "key": "pekka",
            "card_key": "pekka",
            "name": "P.E.K.K.A",
            "elixir": 7,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 4,
            "description": "A heavily armored, slow melee fighter. Swings from the hip but packs a huge punch.",
            "decklink": "26000004"
        },
        {
            "card_id": 6,
            "key": "minions",
            "card_key": "minions",
            "name": "Minions",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Common",
            "arena": 2,
            "description": "Three fast, unarmored flying attackers. Roses are red, minions are blue, they can fly, and will crush you!",
            "decklink": "26000005"
        },
        {
            "card_id": 7,
            "key": "balloon",
            "card_key": "balloon",
            "name": "Balloon",
            "elixir": 5,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 2,
            "description": "As pretty as they are, you won't want a parade of THESE balloons showing up on the horizon. Drops powerful bombs and when shot down, crashes dealing area damage.",
            "decklink": "26000006"
        },
        {
            "card_id": 8,
            "key": "witch",
            "card_key": "witch",
            "name": "Witch",
            "elixir": 5,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 0,
            "description": "Summons Skeletons, shoots destructo beams, has glowing pink eyes that unfortunately don't shoot lasers.",
            "decklink": "26000007"
        },
        {
            "card_id": 9,
            "key": "barbarians",
            "card_key": "barbarians",
            "name": "Barbarians",
            "elixir": 5,
            "type": "Troop",
            "rarity": "Common",
            "arena": 3,
            "description": "A horde of melee attackers with mean mustaches and even meaner tempers.",
            "decklink": "26000008"
        },
        {
            "card_id": 10,
            "key": "golem",
            "card_key": "golem",
            "name": "Golem",
            "elixir": 8,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 6,
            "description": "Slow but durable, only attacks buildings. When destroyed, explosively splits into two Golemites and deals area damage!",
            "decklink": "26000009"
        },
        {
            "card_id": 11,
            "key": "skeletons",
            "card_key": "skeletons",
            "name": "Skeletons",
            "elixir": 1,
            "type": "Troop",
            "rarity": "Common",
            "arena": 2,
            "description": "Three fast, very weak melee fighters. Surround your enemies with this pile of bones!",
            "decklink": "26000010"
        },
        {
            "card_id": 12,
            "key": "valkyrie",
            "card_key": "valkyrie",
            "name": "Valkyrie",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Rare",
            "arena": 1,
            "description": "Tough melee fighter, deals area damage around her. Swarm or horde, no problem! She can take them all out with a few spins.",
            "decklink": "26000011"
        },
        {
            "card_id": 13,
            "key": "skeleton-army",
            "card_key": "skeleton_army",
            "name": "Skeleton Army",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 0,
            "description": "Spawns an army of Skeletons. Meet Larry and his friends Harry, Gerry, Terry, Mary, etc.",
            "decklink": "26000012"
        },
        {
            "card_id": 14,
            "key": "bomber",
            "card_key": "bomber",
            "name": "Bomber",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Common",
            "arena": 0,
            "description": "Small, lightly protected skeleton that throws bombs. Deals area damage that can wipe out a swarm of enemies.",
            "decklink": "26000013"
        },
        {
            "card_id": 15,
            "key": "musketeer",
            "card_key": "musketeer",
            "name": "Musketeer",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Rare",
            "arena": 0,
            "description": "Don't be fooled by her delicately coiffed hair, the Musketeer is a mean shot with her trusty boomstick.",
            "decklink": "26000014"
        },
        {
            "card_id": 16,
            "key": "baby-dragon",
            "card_key": "baby_dragon",
            "name": "Baby Dragon",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 0,
            "description": "Flying troop that deals area damage. Baby dragons hatch cute, hungry and ready for a barbeque.",
            "decklink": "26000015"
        },
        {
            "card_id": 17,
            "key": "prince",
            "card_key": "prince",
            "name": "Prince",
            "elixir": 5,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 0,
            "description": "Don't let the little pony fool you. Once the Prince gets a running start, you WILL be trampled. Deals double damage once he gets charging.",
            "decklink": "26000016"
        },
        {
            "card_id": 18,
            "key": "wizard",
            "card_key": "wizard",
            "name": "Wizard",
            "elixir": 5,
            "type": "Troop",
            "rarity": "Rare",
            "arena": 5,
            "description": "The most awesome man to ever set foot in the arena, the Wizard will blow you away with his handsomeness... and/or fireballs.",
            "decklink": "26000017"
        },
        {
            "card_id": 19,
            "key": "mini-pekka",
            "card_key": "mini_pekka",
            "name": "Mini P.E.K.K.A",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Rare",
            "arena": 0,
            "description": "The Arena is a certified butterfly-free zone. No distractions for P.E.K.K.A, only destruction.",
            "decklink": "26000018"
        },
        {
            "card_id": 20,
            "key": "spear-goblins",
            "card_key": "spear_goblins",
            "name": "Spear Goblins",
            "elixir": 2,
            "type": "Troop",
            "rarity": "Common",
            "arena": 1,
            "description": "Three unarmored ranged attackers. Who the heck taught these guys to throw spears!?! Who thought that was a good idea?!",
            "decklink": "26000019"
        },
        {
            "card_id": 21,
            "key": "giant-skeleton",
            "card_key": "giant_skeleton",
            "name": "Giant Skeleton",
            "elixir": 6,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 2,
            "description": "The bigger the skeleton, the bigger the bomb. Carries a bomb that blows up when the Giant Skeleton dies.",
            "decklink": "26000020"
        },
        {
            "card_id": 22,
            "key": "hog-rider",
            "card_key": "hog_rider",
            "name": "Hog Rider",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Rare",
            "arena": 4,
            "description": "Fast melee troop that targets buildings and can jump over the river. He followed the echoing call of \"Hog Riderrrrr\" all the way through the Arena doors.",
            "decklink": "26000021"
        },
        {
            "card_id": 23,
            "key": "minion-horde",
            "card_key": "minion_horde",
            "name": "Minion Horde",
            "elixir": 5,
            "type": "Troop",
            "rarity": "Common",
            "arena": 4,
            "description": "Six fast, unarmored flying attackers. Three's a crowd, six is a horde!",
            "decklink": "26000022"
        },
        {
            "card_id": 24,
            "key": "ice-wizard",
            "card_key": "ice_wizard",
            "name": "Ice Wizard",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 5,
            "description": "This chill caster throws ice shards that slow down enemies' movement and attack speed. Despite being freezing cold, he has a handlebar mustache that's too hot for TV.",
            "decklink": "26000023"
        },
        {
            "card_id": 25,
            "key": "royal-giant",
            "card_key": "royal_giant",
            "name": "Royal Giant",
            "elixir": 6,
            "type": "Troop",
            "rarity": "Common",
            "arena": 7,
            "description": "Destroying enemy buildings with his massive cannon is his job; making a raggedy blond beard look good is his passion.",
            "decklink": "26000024"
        },
        {
            "card_id": 26,
            "key": "guards",
            "card_key": "guards",
            "name": "Guards",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 7,
            "description": "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers.",
            "decklink": "26000025"
        },
        {
            "card_id": 27,
            "key": "princess",
            "card_key": "princess",
            "name": "Princess",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 7,
            "description": "This stunning Princess shoots flaming arrows from long range. If you're feeling warm feelings towards her, it's probably because you're on fire.",
            "decklink": "26000026"
        },
        {
            "card_id": 28,
            "key": "dark-prince",
            "card_key": "dark_prince",
            "name": "Dark Prince",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 7,
            "description": "The Dark Prince deals area damage and lets his spiked club do the talking for him - because when he does talk, it sounds like he has a bucket on his head.",
            "decklink": "26000027"
        },
        {
            "card_id": 29,
            "key": "three-musketeers",
            "card_key": "three_musketeers",
            "name": "Three Musketeers",
            "elixir": 9,
            "type": "Troop",
            "rarity": "Rare",
            "arena": 7,
            "description": "Trio of powerful, independent markswomen, fighting for justice and honor. Disrespecting them would not be just a mistake, it would be a cardinal sin!",
            "decklink": "26000028"
        },
        {
            "card_id": 30,
            "key": "lava-hound",
            "card_key": "lava_hound",
            "name": "Lava Hound",
            "elixir": 7,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 4,
            "description": "The Lava Hound is a majestic flying beast that attacks buildings. The Lava Pups are less majestic angry babies that attack anything.",
            "decklink": "26000029"
        },
        {
            "card_id": 31,
            "key": "ice-spirit",
            "card_key": "ice_spirit",
            "name": "Ice Spirit",
            "elixir": 1,
            "type": "Troop",
            "rarity": "Common",
            "arena": 8,
            "description": "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty.",
            "decklink": "26000030"
        },
        {
            "card_id": 32,
            "key": "fire-spirits",
            "card_key": "fire_spirits",
            "name": "Fire Spirits",
            "elixir": 2,
            "type": "Troop",
            "rarity": "Common",
            "arena": 5,
            "description": "These three Fire Spirits are on a kamikaze mission to give you a warm hug. It'd be adorable if they weren't on fire.",
            "decklink": "26000031"
        },
        {
            "card_id": 33,
            "key": "miner",
            "card_key": "miner",
            "name": "Miner",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 6,
            "description": "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel.",
            "decklink": "26000032"
        },
        {
            "card_id": 34,
            "key": "sparky",
            "card_key": "sparky",
            "name": "Sparky",
            "elixir": 6,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 6,
            "description": "Sparky slowly charges up, then unloads MASSIVE area damage. Overkill isn't in her vocabulary.",
            "decklink": "26000033"
        },
        {
            "card_id": 35,
            "key": "bowler",
            "card_key": "bowler",
            "name": "Bowler",
            "elixir": 5,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 8,
            "description": "This big blue dude digs the simple things in life - Dark Elixir drinks and throwing rocks. His massive boulders roll through their target, hitting everything behind for a strike!",
            "decklink": "26000034"
        },
        {
            "card_id": 36,
            "key": "lumberjack",
            "card_key": "lumberjack",
            "name": "Lumberjack",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 8,
            "description": "He chops trees by day and hunts The Log by night. His bottle of Rage spills everywhere when he dies.",
            "decklink": "26000035"
        },
        {
            "card_id": 37,
            "key": "battle-ram",
            "card_key": "battle_ram",
            "name": "Battle Ram",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Rare",
            "arena": 6,
            "description": "Two Barbarians holding a big log charge at the nearest building, dealing significant damage if they connect; then they go to town with their swords!",
            "decklink": "26000036"
        },
        {
            "card_id": 38,
            "key": "inferno-dragon",
            "card_key": "inferno_dragon",
            "name": "Inferno Dragon",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 4,
            "description": "Shoots a focused beam of fire that increases in damage over time. Wears a helmet because flying can be dangerous.",
            "decklink": "26000037"
        },
        {
            "card_id": 39,
            "key": "ice-golem",
            "card_key": "ice_golem",
            "name": "Ice Golem",
            "elixir": 2,
            "type": "Troop",
            "rarity": "Rare",
            "arena": 8,
            "description": "He's tough, targets buildings and explodes when destroyed, slowing nearby enemies. Made entirely out of ice... or is he?! Yes.",
            "decklink": "26000038"
        },
        {
            "card_id": 40,
            "key": "mega-minion",
            "card_key": "mega_minion",
            "name": "Mega Minion",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Rare",
            "arena": 7,
            "description": "Flying, armored and powerful. What could be its weakness?! Cupcakes.",
            "decklink": "26000039"
        },
        {
            "card_id": 41,
            "key": "dart-goblin",
            "card_key": "dart_goblin",
            "name": "Dart Goblin",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Rare",
            "arena": 9,
            "description": "Runs fast, shoots far and chews gum. How does he blow darts with a mouth full of gum? Years of didgeridoo lessons.",
            "decklink": "26000040"
        },
        {
            "card_id": 42,
            "key": "goblin-gang",
            "card_key": "goblin_gang",
            "name": "Goblin Gang",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Common",
            "arena": 9,
            "description": "Spawns five Goblins - three with knives, two with spears - at a discounted Elixir cost. It's like a Goblin Value Pack!",
            "decklink": "26000041"
        },
        {
            "card_id": 43,
            "key": "electro-wizard",
            "card_key": "electro_wizard",
            "name": "Electro Wizard",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 7,
            "description": "He lands with a \"POW!\", stuns nearby enemies and shoots lightning with both hands! What a show off.",
            "decklink": "26000042"
        },
        {
            "card_id": 44,
            "key": "elite-barbarians",
            "card_key": "elite_barbarians",
            "name": "Elite Barbarians",
            "elixir": 6,
            "type": "Troop",
            "rarity": "Common",
            "arena": 7,
            "description": "Spawns a pair of leveled up Barbarians. They're like regular Barbarians, only harder, better, faster and stronger.",
            "decklink": "26000043"
        },
        {
            "card_id": 46,
            "key": "executioner",
            "card_key": "executioner",
            "name": "Executioner",
            "elixir": 5,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 9,
            "description": "He throws his axe like a boomerang, striking all enemies on the way out AND back. It's a miracle he doesn't lose an arm.",
            "decklink": "26000045"
        },
        {
            "card_id": 47,
            "key": "bandit",
            "card_key": "bandit",
            "name": "Bandit",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 9,
            "description": "The Bandit dashes to her target and delivers an extra big hit! While dashing, she can't be touched. The mask keeps her identity safe... and gives her bonus cool points!",
            "decklink": "26000046"
        },
        {
            "card_id": 49,
            "key": "night-witch",
            "card_key": "night_witch",
            "name": "Night Witch",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 8,
            "description": "Summons Bats to do her bidding, even after death! If you get too close, she isn't afraid of pitching in with her mean-looking battle staff.",
            "decklink": "26000048"
        },
        {
            "card_id": 50,
            "key": "bats",
            "card_key": "bats",
            "name": "Bats",
            "elixir": 2,
            "type": "Troop",
            "rarity": "Common",
            "arena": 8,
            "description": "Spawns a handful of tiny flying creatures with big ears. Having big ears doesn't mean they're good listeners.",
            "decklink": "26000049"
        },
        {
            "card_id": 55,
            "key": "cannon-cart",
            "card_key": "cannon_cart",
            "name": "Cannon Cart",
            "elixir": 5,
            "type": "Troop",
            "rarity": "Epic",
            "arena": 10,
            "description": "A Cannon on wheels?! Bet they won't see that coming! Once you break its shield, it becomes a Cannon not on wheels.",
            "decklink": "26000054"
        },
        {
            "card_id": 56,
            "key": "mega-knight",
            "card_key": "mega_knight",
            "name": "Mega Knight",
            "elixir": 7,
            "type": "Troop",
            "rarity": "Legendary",
            "arena": 10,
            "description": "He lands with the force of 1,000 mustaches, then jumps from one foe to the next dealing huge area damage. Stand aside!",
            "decklink": "26000055"
        },
        {
            "card_id": 57,
            "key": "skeleton-barrel",
            "card_key": "skeleton_barrel",
            "name": "Skeleton Barrel",
            "elixir": 3,
            "type": "Troop",
            "rarity": "Common",
            "arena": 6,
            "description": "It's a Skeleton party in the sky, until all the balloons pop... then it's a Skeleton party on the ground!",
            "decklink": "26000056"
        },
        {
            "card_id": 58,
            "key": "flying-machine",
            "card_key": "flying_machine",
            "name": "Flying Machine",
            "elixir": 4,
            "type": "Troop",
            "rarity": "Rare",
            "arena": 9,
            "description": "The Master Builder has sent his first contraption to the Arena! It's a fast and fun flying machine, but fragile!",
            "decklink": "26000057"
        },
        {
            "card_id": 64,
            "key": "cannon",
            "card_key": "cannon",
            "name": "Cannon",
            "elixir": 3,
            "type": "Building",
            "rarity": "Common",
            "arena": 3,
            "description": "Defensive building. Shoots cannonballs with deadly effect, but cannot target flying troops.",
            "decklink": "27000000"
        },
        {
            "card_id": 65,
            "key": "goblin-hut",
            "card_key": "goblin_hut",
            "name": "Goblin Hut",
            "elixir": 5,
            "type": "Building",
            "rarity": "Rare",
            "arena": 1,
            "description": "Building that spawns Spear Goblins. But don't look inside. You don't want to see how they are made.",
            "decklink": "27000001"
        },
        {
            "card_id": 66,
            "key": "mortar",
            "card_key": "mortar",
            "name": "Mortar",
            "elixir": 4,
            "type": "Building",
            "rarity": "Common",
            "arena": 6,
            "description": "Defensive building with a long range. Shoots exploding boulders that deal area damage. Cannot shoot at targets that get very close!",
            "decklink": "27000002"
        },
        {
            "card_id": 67,
            "key": "inferno-tower",
            "card_key": "inferno_tower",
            "name": "Inferno Tower",
            "elixir": 5,
            "type": "Building",
            "rarity": "Rare",
            "arena": 4,
            "description": "Defensive building, roasts targets for damage that increases over time. Burns through even the biggest and toughest enemies!",
            "decklink": "27000003"
        },
        {
            "card_id": 68,
            "key": "bomb-tower",
            "card_key": "bomb_tower",
            "name": "Bomb Tower",
            "elixir": 5,
            "type": "Building",
            "rarity": "Rare",
            "arena": 2,
            "description": "Defensive building that houses a Bomber. Deals area damage to anything dumb enough to stand near it.",
            "decklink": "27000004"
        },
        {
            "card_id": 69,
            "key": "barbarian-hut",
            "card_key": "barbarian_hut",
            "name": "Barbarian Hut",
            "elixir": 7,
            "type": "Building",
            "rarity": "Rare",
            "arena": 3,
            "description": "Troop building that periodically deploys Barbarians to fight the enemy. Time to make the Barbarians.",
            "decklink": "27000005"
        },
        {
            "card_id": 70,
            "key": "tesla",
            "card_key": "tesla",
            "name": "Tesla",
            "elixir": 4,
            "type": "Building",
            "rarity": "Common",
            "arena": 4,
            "description": "Defensive building. Whenever it's not zapping the enemy, the power of Electrickery is best kept grounded.",
            "decklink": "27000006"
        },
        {
            "card_id": 71,
            "key": "elixir-collector",
            "card_key": "elixir_collector",
            "name": "Elixir Collector",
            "elixir": 6,
            "type": "Building",
            "rarity": "Rare",
            "arena": 6,
            "description": "You gotta spend Elixir to make Elixir.",
            "decklink": "27000007"
        },
        {
            "card_id": 72,
            "key": "x-bow",
            "card_key": "x_bow",
            "name": "X-Bow",
            "elixir": 6,
            "type": "Building",
            "rarity": "Epic",
            "arena": 3,
            "description": "Nice tower you got there. Would be a shame if this X-Bow whittled it down from this side of the Arena...",
            "decklink": "27000008"
        },
        {
            "card_id": 73,
            "key": "tombstone",
            "card_key": "tombstone",
            "name": "Tombstone",
            "elixir": 3,
            "type": "Building",
            "rarity": "Rare",
            "arena": 2,
            "description": "Troop building that periodically deploys Skeletons to fight the enemy. When destroyed, spawns 4 Skeletons. Creepy!",
            "decklink": "27000009"
        },
        {
            "card_id": 74,
            "key": "furnace",
            "card_key": "furnace",
            "name": "Furnace",
            "elixir": 4,
            "type": "Building",
            "rarity": "Rare",
            "arena": 5,
            "description": "The Furnace spawns two Fire Spirits at a time. It also makes great brick-oven pancakes.",
            "decklink": "27000010"
        },
        {
            "card_id": 78,
            "key": "fireball",
            "card_key": "fireball",
            "name": "Fireball",
            "elixir": 4,
            "type": "Spell",
            "rarity": "Rare",
            "arena": 0,
            "description": "Annnnnd... Fireball. Incinerates a small area, dealing high damage. Reduced damage to Crown Towers.",
            "decklink": "28000000"
        },
        {
            "card_id": 79,
            "key": "arrows",
            "card_key": "arrows",
            "name": "Arrows",
            "elixir": 3,
            "type": "Spell",
            "rarity": "Common",
            "arena": 0,
            "description": "Arrows pepper a large area, damaging all enemies hit. Reduced damage to Crown Towers.",
            "decklink": "28000001"
        },
        {
            "card_id": 80,
            "key": "rage",
            "card_key": "rage",
            "name": "Rage",
            "elixir": 2,
            "type": "Spell",
            "rarity": "Epic",
            "arena": 3,
            "description": "Increases troop movement and attack speed. Buildings attack faster and summon troops quicker, too. Chaaaarge!",
            "decklink": "28000002"
        },
        {
            "card_id": 81,
            "key": "rocket",
            "card_key": "rocket",
            "name": "Rocket",
            "elixir": 6,
            "type": "Spell",
            "rarity": "Rare",
            "arena": 3,
            "description": "Deals high damage to a small area. Looks really awesome doing it. Reduced damage to Crown Towers.",
            "decklink": "28000003"
        },
        {
            "card_id": 82,
            "key": "goblin-barrel",
            "card_key": "goblin_barrel",
            "name": "Goblin Barrel",
            "elixir": 3,
            "type": "Spell",
            "rarity": "Epic",
            "arena": 1,
            "description": "Spawns three Goblins anywhere in the Arena. It's going to be a thrilling ride, boys!",
            "decklink": "28000004"
        },
        {
            "card_id": 83,
            "key": "freeze",
            "card_key": "freeze",
            "name": "Freeze",
            "elixir": 4,
            "type": "Spell",
            "rarity": "Epic",
            "arena": 4,
            "description": "Freezes troops and buildings, making them unable to move or attack. Everybody chill.",
            "decklink": "28000005"
        },
        {
            "card_id": 84,
            "key": "mirror",
            "card_key": "mirror",
            "name": "Mirror",
            "elixir": 1,
            "type": "Spell",
            "rarity": "Epic",
            "arena": 5,
            "description": "Mirrors your last card played for +1 Elixir.",
            "decklink": "28000006"
        },
        {
            "card_id": 85,
            "key": "lightning",
            "card_key": "lightning",
            "name": "Lightning",
            "elixir": 6,
            "type": "Spell",
            "rarity": "Epic",
            "arena": 1,
            "description": "Bolts of lightning damage and stun up to three enemy troops or buildings with the most hitpoints in the target area. Reduced damage to Crown Towers.",
            "decklink": "28000007"
        },
        {
            "card_id": 86,
            "key": "zap",
            "card_key": "zap",
            "name": "Zap",
            "elixir": 2,
            "type": "Spell",
            "rarity": "Common",
            "arena": 5,
            "description": "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers.",
            "decklink": "28000008"
        },
        {
            "card_id": 87,
            "key": "poison",
            "card_key": "poison",
            "name": "Poison",
            "elixir": 4,
            "type": "Spell",
            "rarity": "Epic",
            "arena": 5,
            "description": "Covers the area in a deadly toxin, damaging enemy troops and buildings over time. Yet somehow leaves the grass green and healthy. Go figure!",
            "decklink": "28000009"
        },
        {
            "card_id": 88,
            "key": "graveyard",
            "card_key": "graveyard",
            "name": "Graveyard",
            "elixir": 5,
            "type": "Spell",
            "rarity": "Legendary",
            "arena": 5,
            "description": "Surprise! It's a party. A Skeleton party, anywhere in the Arena. Yay!",
            "decklink": "28000010"
        },
        {
            "card_id": 89,
            "key": "the-log",
            "card_key": "the_log",
            "name": "The Log",
            "elixir": 2,
            "type": "Spell",
            "rarity": "Legendary",
            "arena": 6,
            "description": "A spilt bottle of Rage turned an innocent tree trunk into \"The Log\". Now, it seeks revenge by crushing anything in its path!",
            "decklink": "28000011"
        },
        {
            "card_id": 90,
            "key": "tornado",
            "card_key": "tornado",
            "name": "Tornado",
            "elixir": 3,
            "type": "Spell",
            "rarity": "Epic",
            "arena": 6,
            "description": "Drags enemy troops to its center while dealing damage over time, just like a magnet. A big, swirling, Tornado-y magnet. Doesn't affect buildings.",
            "decklink": "28000012"
        },
        {
            "card_id": 91,
            "key": "clone",
            "card_key": "clone",
            "name": "Clone",
            "elixir": 3,
            "type": "Spell",
            "rarity": "Epic",
            "arena": 8,
            "description": "Duplicates all friendly troops in the target area. Cloned troops are fragile, but pack the same punch as the original! Doesn't affect buildings.",
            "decklink": "28000013"
        },
        {
            "card_id": 94,
            "key": "heal",
            "card_key": "heal",
            "name": "Heal",
            "elixir": 3,
            "type": "Spell",
            "rarity": "Rare",
            "arena": 10,
            "description": "Heal your troops to keep them in the fight! Friendly troops are healed over time while in the target area. Doesn't affect buildings.",
            "decklink": "28000016"
        }
    ]
}
```
