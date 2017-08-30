# Constants

This endpoint returns constants returned by the API. Top level objects include:
- alliance (aka clan)
    - roles
    - types
- arenas
    - arena
    - arenaID
    - name
    - trophyLimit
- badges
- countryCodes
    - isCountry
    - name

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
        "16000174": "flag_i_03",
        "16000175": "flag_e_01",
        "16000176": "flag_e_02",
        "16000178": "A_Char_Bomb_01",
        "16000179": "A_Char_Bomb_02"
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
    ]
}
```
