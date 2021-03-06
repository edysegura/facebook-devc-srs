const pokeDB = [
  {
    "id": "001",
    "name": "Bulbasaur",
    "type": "Grass/Poison"
  },
  {
    "id": "002",
    "name": "Ivysaur",
    "type": "Grass/Poison"
  },
  {
    "id": "003",
    "name": "Venusaur",
    "type": "Grass/Poison"
  },
  {
    "id": "004",
    "name": "Charmander",
    "type": "Fire"
  },
  {
    "id": "005",
    "name": "Charmeleon",
    "type": "Fire"
  },
  {
    "id": "006",
    "name": "Charizard",
    "type": "Fire/Flying"
  },
  {
    "id": "007",
    "name": "Squirtle",
    "type": "Water"
  },
  {
    "id": "008",
    "name": "Wartortle",
    "type": "Water"
  },
  {
    "id": "009",
    "name": "Blastoise",
    "type": "Water"
  },
  {
    "id": "010",
    "name": "Caterpie",
    "type": "Bug"
  },
  {
    "id": "011",
    "name": "Metapod",
    "type": "Bug"
  },
  {
    "id": "012",
    "name": "Butterfree",
    "type": "Bug/Flying"
  },
  {
    "id": "013",
    "name": "Weedle",
    "type": "Bug/Poison"
  },
  {
    "id": "014",
    "name": "Kakuna",
    "type": "Bug/Poison"
  },
  {
    "id": "015",
    "name": "Beedrill",
    "type": "Bug/Poison"
  },
  {
    "id": "016",
    "name": "Pidgey",
    "type": "Normal/Flying"
  },
  {
    "id": "017",
    "name": "Pidgeotto",
    "type": "Normal/Flying"
  },
  {
    "id": "018",
    "name": "Pidgeot",
    "type": "Normal/Flying"
  },
  {
    "id": "019",
    "name": "Rattata",
    "type": "Normal"
  },
  {
    "id": "020",
    "name": "Raticate",
    "type": "Normal"
  },
  {
    "id": "021",
    "name": "Spearow",
    "type": "Normal/Flying"
  },
  {
    "id": "022",
    "name": "Fearow",
    "type": "Normal/Flying"
  },
  {
    "id": "023",
    "name": "Ekans",
    "type": "Poison"
  },
  {
    "id": "024",
    "name": "Arbok",
    "type": "Poison"
  },
  {
    "id": "025",
    "name": "Pikachu",
    "type": "Electric"
  },
  {
    "id": "026",
    "name": "Raichu",
    "type": "Electric"
  },
  {
    "id": "027",
    "name": "Sandshrew",
    "type": "Ground"
  },
  {
    "id": "028",
    "name": "Sandslash",
    "type": "Ground"
  },
  {
    "id": "029",
    "name": "Nidoran♀",
    "type": "Poison"
  },
  {
    "id": "030",
    "name": "Nidorina",
    "type": "Poison"
  },
  {
    "id": "031",
    "name": "Nidoqueen",
    "type": "Poison/Ground"
  },
  {
    "id": "032",
    "name": "Nidoran♂",
    "type": "Poison"
  },
  {
    "id": "033",
    "name": "Nidorino",
    "type": "Poison"
  },
  {
    "id": "034",
    "name": "Nidoking",
    "type": "Poison/Ground"
  },
  {
    "id": "035",
    "name": "Clefairy",
    "type": "Fairy"
  },
  {
    "id": "036",
    "name": "Clefable",
    "type": "Fairy"
  },
  {
    "id": "037",
    "name": "Vulpix",
    "type": "Fire"
  },
  {
    "id": "038",
    "name": "Ninetales",
    "type": "Fire"
  },
  {
    "id": "039",
    "name": "Jigglypuff",
    "type": "Normal/Fairy"
  },
  {
    "id": "040",
    "name": "Wigglytuff",
    "type": "Normal/Fairy"
  },
  {
    "id": "041",
    "name": "Zubat",
    "type": "Poison/Flying"
  },
  {
    "id": "042",
    "name": "Golbat",
    "type": "Poison/Flying"
  },
  {
    "id": "043",
    "name": "Oddish",
    "type": "Grass/Poison"
  },
  {
    "id": "044",
    "name": "Gloom",
    "type": "Grass/Poison"
  },
  {
    "id": "045",
    "name": "Vileplume",
    "type": "Grass/Poison"
  },
  {
    "id": "046",
    "name": "Paras",
    "type": "Bug/Grass"
  },
  {
    "id": "047",
    "name": "Parasect",
    "type": "Bug/Grass"
  },
  {
    "id": "048",
    "name": "Venonat",
    "type": "Bug/Poison"
  },
  {
    "id": "049",
    "name": "Venomoth",
    "type": "Bug/Poison"
  },
  {
    "id": "050",
    "name": "Diglett",
    "type": "Ground"
  },
  {
    "id": "051",
    "name": "Dugtrio",
    "type": "Ground"
  },
  {
    "id": "052",
    "name": "Meowth",
    "type": "Normal"
  },
  {
    "id": "053",
    "name": "Persian",
    "type": "Normal"
  },
  {
    "id": "054",
    "name": "Psyduck",
    "type": "Water"
  },
  {
    "id": "055",
    "name": "Golduck",
    "type": "Water"
  },
  {
    "id": "056",
    "name": "Mankey",
    "type": "Fighting"
  },
  {
    "id": "057",
    "name": "Primeape",
    "type": "Fighting"
  },
  {
    "id": "058",
    "name": "Growlithe",
    "type": "Fire"
  },
  {
    "id": "059",
    "name": "Arcanine",
    "type": "Fire"
  },
  {
    "id": "060",
    "name": "Poliwag",
    "type": "Water"
  },
  {
    "id": "061",
    "name": "Poliwhirl",
    "type": "Water"
  },
  {
    "id": "062",
    "name": "Poliwrath",
    "type": "Water/Fighting"
  },
  {
    "id": "063",
    "name": "Abra",
    "type": "Psychic"
  },
  {
    "id": "064",
    "name": "Kadabra",
    "type": "Psychic"
  },
  {
    "id": "065",
    "name": "Alakazam",
    "type": "Psychic"
  },
  {
    "id": "066",
    "name": "Machop",
    "type": "Fighting"
  },
  {
    "id": "067",
    "name": "Machoke",
    "type": "Fighting"
  },
  {
    "id": "068",
    "name": "Machamp",
    "type": "Fighting"
  },
  {
    "id": "069",
    "name": "Bellsprout",
    "type": "Grass/Poison"
  },
  {
    "id": "070",
    "name": "Weepinbell",
    "type": "Grass/Poison"
  },
  {
    "id": "071",
    "name": "Victreebel",
    "type": "Grass/Poison"
  },
  {
    "id": "072",
    "name": "Tentacool",
    "type": "Water/Poison"
  },
  {
    "id": "073",
    "name": "Tentacruel",
    "type": "Water/Poison"
  },
  {
    "id": "074",
    "name": "Geodude",
    "type": "Rock/Ground"
  },
  {
    "id": "075",
    "name": "Graveler",
    "type": "Rock/Ground"
  },
  {
    "id": "076",
    "name": "Golem",
    "type": "Rock/Ground"
  },
  {
    "id": "077",
    "name": "Ponyta",
    "type": "Fire"
  },
  {
    "id": "078",
    "name": "Rapidash",
    "type": "Fire"
  },
  {
    "id": "079",
    "name": "Slowpoke",
    "type": "Water/Psychic"
  },
  {
    "id": "080",
    "name": "Slowbro",
    "type": "Water/Psychic"
  },
  {
    "id": "081",
    "name": "Magnemite",
    "type": "Electric/Steel"
  },
  {
    "id": "082",
    "name": "Magneton",
    "type": "Electric/Steel"
  },
  {
    "id": "083",
    "name": "Farfetch'd",
    "type": "Normal/Flying"
  },
  {
    "id": "084",
    "name": "Doduo",
    "type": "Normal/Flying"
  },
  {
    "id": "085",
    "name": "Dodrio",
    "type": "Normal/Flying"
  },
  {
    "id": "086",
    "name": "Seel",
    "type": "Water"
  },
  {
    "id": "087",
    "name": "Dewgong",
    "type": "Water/Ice"
  },
  {
    "id": "088",
    "name": "Grimer",
    "type": "Poison"
  },
  {
    "id": "089",
    "name": "Muk",
    "type": "Poison"
  },
  {
    "id": "090",
    "name": "Shellder",
    "type": "Water"
  },
  {
    "id": "091",
    "name": "Cloyster",
    "type": "Water/Ice"
  },
  {
    "id": "092",
    "name": "Gastly",
    "type": "Ghost/Poison"
  },
  {
    "id": "093",
    "name": "Haunter",
    "type": "Ghost/Poison"
  },
  {
    "id": "094",
    "name": "Gengar",
    "type": "Ghost/Poison"
  },
  {
    "id": "095",
    "name": "Onix",
    "type": "Rock/Ground"
  },
  {
    "id": "096",
    "name": "Drowzee",
    "type": "Psychic"
  },
  {
    "id": "097",
    "name": "Hypno",
    "type": "Psychic"
  },
  {
    "id": "098",
    "name": "Krabby",
    "type": "Water"
  },
  {
    "id": "099",
    "name": "Kingler",
    "type": "Water"
  },
  {
    "id": "100",
    "name": "Voltorb",
    "type": "Electric"
  },
  {
    "id": "101",
    "name": "Electrode",
    "type": "Electric"
  },
  {
    "id": "102",
    "name": "Exeggcute",
    "type": "Grass/Psychic"
  },
  {
    "id": "103",
    "name": "Exeggutor",
    "type": "Grass/Psychic"
  },
  {
    "id": "104",
    "name": "Cubone",
    "type": "Ground"
  },
  {
    "id": "105",
    "name": "Marowak",
    "type": "Ground"
  },
  {
    "id": "106",
    "name": "Hitmonlee",
    "type": "Fighting"
  },
  {
    "id": "107",
    "name": "Hitmonchan",
    "type": "Fighting"
  },
  {
    "id": "108",
    "name": "Lickitung",
    "type": "Normal"
  },
  {
    "id": "109",
    "name": "Koffing",
    "type": "Poison"
  },
  {
    "id": "110",
    "name": "Weezing",
    "type": "Poison"
  },
  {
    "id": "111",
    "name": "Rhyhorn",
    "type": "Ground/Rock"
  },
  {
    "id": "112",
    "name": "Rhydon",
    "type": "Ground/Rock"
  },
  {
    "id": "113",
    "name": "Chansey",
    "type": "Normal"
  },
  {
    "id": "114",
    "name": "Tangela",
    "type": "Grass"
  },
  {
    "id": "115",
    "name": "Kangaskhan",
    "type": "Normal"
  },
  {
    "id": "116",
    "name": "Horsea",
    "type": "Water"
  },
  {
    "id": "117",
    "name": "Seadra",
    "type": "Water"
  },
  {
    "id": "118",
    "name": "Goldeen",
    "type": "Water"
  },
  {
    "id": "119",
    "name": "Seaking",
    "type": "Water"
  },
  {
    "id": "120",
    "name": "Staryu",
    "type": "Water"
  },
  {
    "id": "121",
    "name": "Starmie",
    "type": "Water/Psychic"
  },
  {
    "id": "122",
    "name": "Mr. Mime",
    "type": "Psychic/Fairy"
  },
  {
    "id": "123",
    "name": "Scyther",
    "type": "Bug/Flying"
  },
  {
    "id": "124",
    "name": "Jynx",
    "type": "Ice/Psychic"
  },
  {
    "id": "125",
    "name": "Electabuzz",
    "type": "Electric"
  },
  {
    "id": "126",
    "name": "Magmar",
    "type": "Fire"
  },
  {
    "id": "127",
    "name": "Pinsir",
    "type": "Bug"
  },
  {
    "id": "128",
    "name": "Tauros",
    "type": "Normal"
  },
  {
    "id": "129",
    "name": "Magikarp",
    "type": "Water"
  },
  {
    "id": "130",
    "name": "Gyarados",
    "type": "Water/Flying"
  },
  {
    "id": "131",
    "name": "Lapras",
    "type": "Water/Ice"
  },
  {
    "id": "132",
    "name": "Ditto",
    "type": "Normal"
  },
  {
    "id": "133",
    "name": "Eevee",
    "type": "Normal"
  },
  {
    "id": "134",
    "name": "Vaporeon",
    "type": "Water"
  },
  {
    "id": "135",
    "name": "Jolteon",
    "type": "Electric"
  },
  {
    "id": "136",
    "name": "Flareon",
    "type": "Fire"
  },
  {
    "id": "137",
    "name": "Porygon",
    "type": "Normal"
  },
  {
    "id": "138",
    "name": "Omanyte",
    "type": "Rock/Water"
  },
  {
    "id": "139",
    "name": "Omastar",
    "type": "Rock/Water"
  },
  {
    "id": "140",
    "name": "Kabuto",
    "type": "Rock/Water"
  },
  {
    "id": "141",
    "name": "Kabutops",
    "type": "Rock/Water"
  },
  {
    "id": "142",
    "name": "Aerodactyl",
    "type": "Rock/Flying"
  },
  {
    "id": "143",
    "name": "Snorlax",
    "type": "Normal"
  },
  {
    "id": "144",
    "name": "Articuno",
    "type": "Ice/Flying"
  },
  {
    "id": "145",
    "name": "Zapdos",
    "type": "Electric/Flying"
  },
  {
    "id": "146",
    "name": "Moltres",
    "type": "Fire/Flying"
  },
  {
    "id": "147",
    "name": "Dratini",
    "type": "Dragon"
  },
  {
    "id": "148",
    "name": "Dragonair",
    "type": "Dragon"
  },
  {
    "id": "149",
    "name": "Dragonite",
    "type": "Dragon/Flying"
  },
  {
    "id": "150",
    "name": "Mewtwo",
    "type": "Psychic"
  },
  {
    "id": "151",
    "name": "Mew",
    "type": "Psychic"
  },
  {
    "id": "152",
    "name": "Chikorita",
    "type": "Grass"
  },
  {
    "id": "153",
    "name": "Bayleef",
    "type": "Grass"
  },
  {
    "id": "154",
    "name": "Meganium",
    "type": "Grass"
  },
  {
    "id": "155",
    "name": "Cyndaquil",
    "type": "Fire"
  },
  {
    "id": "156",
    "name": "Quilava",
    "type": "Fire"
  },
  {
    "id": "157",
    "name": "Typhlosion",
    "type": "Fire"
  },
  {
    "id": "158",
    "name": "Totodile",
    "type": "Water"
  },
  {
    "id": "159",
    "name": "Croconaw",
    "type": "Water"
  },
  {
    "id": "160",
    "name": "Feraligatr",
    "type": "Water"
  },
  {
    "id": "161",
    "name": "Sentret",
    "type": "Normal"
  },
  {
    "id": "162",
    "name": "Furret",
    "type": "Normal"
  },
  {
    "id": "163",
    "name": "Hoothoot",
    "type": "Normal/Flying"
  },
  {
    "id": "164",
    "name": "Noctowl",
    "type": "Normal/Flying"
  },
  {
    "id": "165",
    "name": "Ledyba",
    "type": "Bug/Flying"
  },
  {
    "id": "166",
    "name": "Ledian",
    "type": "Bug/Flying"
  },
  {
    "id": "167",
    "name": "Spinarak",
    "type": "Bug/Poison"
  },
  {
    "id": "168",
    "name": "Ariados",
    "type": "Bug/Poison"
  },
  {
    "id": "169",
    "name": "Crobat",
    "type": "Poison/Flying"
  },
  {
    "id": "170",
    "name": "Chinchou",
    "type": "Water/Electric"
  },
  {
    "id": "171",
    "name": "Lanturn",
    "type": "Water/Electric"
  },
  {
    "id": "172",
    "name": "Pichu",
    "type": "Electric"
  },
  {
    "id": "173",
    "name": "Cleffa",
    "type": "Fairy"
  },
  {
    "id": "174",
    "name": "Igglybuff",
    "type": "Normal/Fairy"
  },
  {
    "id": "175",
    "name": "Togepi",
    "type": "Fairy"
  },
  {
    "id": "176",
    "name": "Togetic",
    "type": "Fairy/Flying"
  },
  {
    "id": "177",
    "name": "Natu",
    "type": "Psychic/Flying"
  },
  {
    "id": "178",
    "name": "Xatu",
    "type": "Psychic/Flying"
  },
  {
    "id": "179",
    "name": "Mareep",
    "type": "Electric"
  },
  {
    "id": "180",
    "name": "Flaaffy",
    "type": "Electric"
  },
  {
    "id": "181",
    "name": "Ampharos",
    "type": "Electric"
  },
  {
    "id": "182",
    "name": "Bellossom",
    "type": "Grass"
  },
  {
    "id": "183",
    "name": "Marill",
    "type": "Water/Fairy"
  },
  {
    "id": "184",
    "name": "Azumarill",
    "type": "Water/Fairy"
  },
  {
    "id": "185",
    "name": "Sudowoodo",
    "type": "Rock"
  },
  {
    "id": "186",
    "name": "Politoed",
    "type": "Water"
  },
  {
    "id": "187",
    "name": "Hoppip",
    "type": "Grass/Flying"
  },
  {
    "id": "188",
    "name": "Skiploom",
    "type": "Grass/Flying"
  },
  {
    "id": "189",
    "name": "Jumpluff",
    "type": "Grass/Flying"
  },
  {
    "id": "190",
    "name": "Aipom",
    "type": "Normal"
  },
  {
    "id": "191",
    "name": "Sunkern",
    "type": "Grass"
  },
  {
    "id": "192",
    "name": "Sunflora",
    "type": "Grass"
  },
  {
    "id": "193",
    "name": "Yanma",
    "type": "Bug/Flying"
  },
  {
    "id": "194",
    "name": "Wooper",
    "type": "Water/Ground"
  },
  {
    "id": "195",
    "name": "Quagsire",
    "type": "Water/Ground"
  },
  {
    "id": "196",
    "name": "Espeon",
    "type": "Psychic"
  },
  {
    "id": "197",
    "name": "Umbreon",
    "type": "Dark"
  },
  {
    "id": "198",
    "name": "Murkrow",
    "type": "Dark/Flying"
  },
  {
    "id": "199",
    "name": "Slowking",
    "type": "Water/Psychic"
  },
  {
    "id": "200",
    "name": "Misdreavus",
    "type": "Ghost"
  },
  {
    "id": "201",
    "name": "Unown",
    "type": "Psychic"
  },
  {
    "id": "202",
    "name": "Wobbuffet",
    "type": "Psychic"
  },
  {
    "id": "203",
    "name": "Girafarig",
    "type": "Normal/Psychic"
  },
  {
    "id": "204",
    "name": "Pineco",
    "type": "Bug"
  },
  {
    "id": "205",
    "name": "Forretress",
    "type": "Bug/Steel"
  },
  {
    "id": "206",
    "name": "Dunsparce",
    "type": "Normal"
  },
  {
    "id": "207",
    "name": "Gligar",
    "type": "Ground/Flying"
  },
  {
    "id": "208",
    "name": "Steelix",
    "type": "Steel/Ground"
  },
  {
    "id": "209",
    "name": "Snubbull",
    "type": "Fairy"
  },
  {
    "id": "210",
    "name": "Granbull",
    "type": "Fairy"
  },
  {
    "id": "211",
    "name": "Qwilfish",
    "type": "Water/Poison"
  },
  {
    "id": "212",
    "name": "Scizor",
    "type": "Bug/Steel"
  },
  {
    "id": "213",
    "name": "Shuckle",
    "type": "Bug/Rock"
  },
  {
    "id": "214",
    "name": "Heracross",
    "type": "Bug/Fighting"
  },
  {
    "id": "215",
    "name": "Sneasel",
    "type": "Dark/Ice"
  },
  {
    "id": "216",
    "name": "Teddiursa",
    "type": "Normal"
  },
  {
    "id": "217",
    "name": "Ursaring",
    "type": "Normal"
  },
  {
    "id": "218",
    "name": "Slugma",
    "type": "Fire"
  },
  {
    "id": "219",
    "name": "Magcargo",
    "type": "Fire/Rock"
  },
  {
    "id": "220",
    "name": "Swinub",
    "type": "Ice/Ground"
  },
  {
    "id": "221",
    "name": "Piloswine",
    "type": "Ice/Ground"
  },
  {
    "id": "222",
    "name": "Corsola",
    "type": "Water/Rock"
  },
  {
    "id": "223",
    "name": "Remoraid",
    "type": "Water"
  },
  {
    "id": "224",
    "name": "Octillery",
    "type": "Water"
  },
  {
    "id": "225",
    "name": "Delibird",
    "type": "Ice/Flying"
  },
  {
    "id": "226",
    "name": "Mantine",
    "type": "Water/Flying"
  },
  {
    "id": "227",
    "name": "Skarmory",
    "type": "Steel/Flying"
  },
  {
    "id": "228",
    "name": "Houndour",
    "type": "Dark/Fire"
  },
  {
    "id": "229",
    "name": "Houndoom",
    "type": "Dark/Fire"
  },
  {
    "id": "230",
    "name": "Kingdra",
    "type": "Water/Dragon"
  },
  {
    "id": "231",
    "name": "Phanpy",
    "type": "Ground"
  },
  {
    "id": "232",
    "name": "Donphan",
    "type": "Ground"
  },
  {
    "id": "233",
    "name": "Porygon2",
    "type": "Normal"
  },
  {
    "id": "234",
    "name": "Stantler",
    "type": "Normal"
  },
  {
    "id": "235",
    "name": "Smeargle",
    "type": "Normal"
  },
  {
    "id": "236",
    "name": "Tyrogue",
    "type": "Fighting"
  },
  {
    "id": "237",
    "name": "Hitmontop",
    "type": "Fighting"
  },
  {
    "id": "238",
    "name": "Smoochum",
    "type": "Ice/Psychic"
  },
  {
    "id": "239",
    "name": "Elekid",
    "type": "Electric"
  },
  {
    "id": "240",
    "name": "Magby",
    "type": "Fire"
  },
  {
    "id": "241",
    "name": "Miltank",
    "type": "Normal"
  },
  {
    "id": "242",
    "name": "Blissey",
    "type": "Normal"
  },
  {
    "id": "243",
    "name": "Raikou",
    "type": "Electric"
  },
  {
    "id": "244",
    "name": "Entei",
    "type": "Fire"
  },
  {
    "id": "245",
    "name": "Suicune",
    "type": "Water"
  },
  {
    "id": "246",
    "name": "Larvitar",
    "type": "Rock/Ground"
  },
  {
    "id": "247",
    "name": "Pupitar",
    "type": "Rock/Ground"
  },
  {
    "id": "248",
    "name": "Tyranitar",
    "type": "Rock/Dark"
  },
  {
    "id": "249",
    "name": "Lugia",
    "type": "Psychic/Flying"
  },
  {
    "id": "250",
    "name": "Ho-Oh",
    "type": "Fire/Flying"
  },
  {
    "id": "251",
    "name": "Celebi",
    "type": "Psychic/Grass"
  }
]