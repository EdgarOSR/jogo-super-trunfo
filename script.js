// Variáveis Globais
var cartaCpu;
var cartaJogador;
var pontosJogador = 0;
var pontosCpu = 0;
var deckJogador = [];
var deckCpu = [];
var deckEmpate = [];
var todasCartas = [];
var cartasNoJogo = [];
var qtdeCartasNoJogo = 32;
var imgPadrao = "https://upload.wikimedia.org/wikipedia/commons/1/11/Blue_question_mark_icon.svg";
var baseUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
var numCartaCpu = 0;
var numCartaJogador = 0;
var valorAntigo = 0;

// Cartas do Jogo
var card001 = {nome:"Bulbasaur",img: baseUrl + "001.png",tipoNum: 5,trunfo:false, atributos: {atr1:"Planta",atr2:49,atr3:49,atr4:45,atr5:45}};
var card002 = {nome:"Ivysaur",img: baseUrl + "002.png",tipoNum: 5,trunfo:false, atributos: {atr1:"Planta",atr2:62,atr3:63,atr4:60,atr5:60}};
var card003 = {nome:"Venusaur",img: baseUrl + "003.png",tipoNum: 5,trunfo:false, atributos: {atr1:"Planta",atr2:82,atr3:83,atr4:80,atr5:80}};
var card004 = {nome:"Charmander",img: baseUrl + "004.png",tipoNum: 2,trunfo:false, atributos: {atr1:"Fogo",atr2:52,atr3:43,atr4:65,atr5:39}};
var card005 = {nome:"Charmeleon",img: baseUrl + "005.png",tipoNum: 2,trunfo:false, atributos: {atr1:"Fogo",atr2:64,atr3:58,atr4:80,atr5:58}};
var card006 = {nome:"Charizard",img: baseUrl + "006.png",tipoNum: 2,trunfo:false, atributos: {atr1:"Fogo",atr2:84,atr3:78,atr4:100,atr5:78}};
var card007 = {nome:"Squirtle",img: baseUrl + "007.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:48,atr3:65,atr4:43,atr5:44}};
var card008 = {nome:"Wartortle",img: baseUrl + "008.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:63,atr3:80,atr4:58,atr5:59}};
var card009 = {nome:"Blastoise",img: baseUrl + "009.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:83,atr3:100,atr4:78,atr5:79}};
var card010 = {nome:"Caterpie",img: baseUrl + "010.png",tipoNum: 12,trunfo:false, atributos: {atr1:"Inseto",atr2:30,atr3:35,atr4:45,atr5:45}};
var card011 = {nome:"Metapod",img: baseUrl + "011.png",tipoNum: 12,trunfo:false, atributos: {atr1:"Inseto",atr2:20,atr3:55,atr4:30,atr5:50}};
var card012 = {nome:"Butterfree",img: baseUrl + "012.png",tipoNum: 12,trunfo:false, atributos: {atr1:"Inseto",atr2:45,atr3:50,atr4:70,atr5:60}};
var card013 = {nome:"Weedle",img: baseUrl + "013.png",tipoNum: 12,trunfo:false, atributos: {atr1:"Inseto",atr2:35,atr3:30,atr4:50,atr5:40}};
var card014 = {nome:"Kakuna",img: baseUrl + "014.png",tipoNum: 12,trunfo:false, atributos: {atr1:"Inseto",atr2:25,atr3:50,atr4:35,atr5:45}};
var card015 = {nome:"Beedrill",img: baseUrl + "015.png",tipoNum: 12,trunfo:false, atributos: {atr1:"Inseto",atr2:90,atr3:40,atr4:75,atr5:65}};
var card016 = {nome:"Pidgey",img: baseUrl + "016.png",tipoNum: 10,trunfo:false, atributos: {atr1:"Voador",atr2:45,atr3:40,atr4:56,atr5:40}};
var card017 = {nome:"Pidgeotto",img: baseUrl + "017.png",tipoNum: 10,trunfo:false, atributos: {atr1:"Voador",atr2:60,atr3:55,atr4:71,atr5:63}};
var card018 = {nome:"Pidgeot",img: baseUrl + "018.png",tipoNum: 10,trunfo:false, atributos: {atr1:"Voador",atr2:80,atr3:75,atr4:101,atr5:83}};
var card019 = {nome:"Rattata",img: baseUrl + "019.png",tipoNum: 1,trunfo:false, atributos: {atr1:"Normal",atr2:56,atr3:35,atr4:72,atr5:30}};
var card020 = {nome:"Raticate",img: baseUrl + "020.png",tipoNum: 1,trunfo:false, atributos: {atr1:"Normal",atr2:81,atr3:60,atr4:97,atr5:55}};
var card021 = {nome:"Spearow",img: baseUrl + "021.png",tipoNum: 10,trunfo:false, atributos: {atr1:"Voador",atr2:60,atr3:30,atr4:70,atr5:40}};
var card022 = {nome:"Fearow",img: baseUrl + "022.png",tipoNum: 10,trunfo:false, atributos: {atr1:"Voador",atr2:90,atr3:65,atr4:100,atr5:65}};
var card023 = {nome:"Ekans",img: baseUrl + "023.png",tipoNum: 8,trunfo:false, atributos: {atr1:"Venenoso",atr2:60,atr3:44,atr4:55,atr5:35}};
var card024 = {nome:"Arbok",img: baseUrl + "024.png",tipoNum: 8,trunfo:false, atributos: {atr1:"Venenoso",atr2:95,atr3:69,atr4:80,atr5:60}};
var card025 = {nome:"Pikachu",img: baseUrl + "025.png",tipoNum: 4,trunfo:false, atributos: {atr1:"Elétrico",atr2:55,atr3:40,atr4:90,atr5:35}};
var card026 = {nome:"Raichu",img: baseUrl + "026.png",tipoNum: 4,trunfo:false, atributos: {atr1:"Elétrico",atr2:90,atr3:55,atr4:110,atr5:60}};
var card027 = {nome:"Sandshrew",img: baseUrl + "027.png",tipoNum: 9,trunfo:false, atributos: {atr1:"Terrestre",atr2:75,atr3:85,atr4:40,atr5:50}};
var card028 = {nome:"Sandslash",img: baseUrl + "028.png",tipoNum: 9,trunfo:false, atributos: {atr1:"Terrestre",atr2:100,atr3:110,atr4:65,atr5:75}};
var card029 = {nome:"Nidoran♀",img: baseUrl + "029.png",tipoNum: 8,trunfo:false, atributos: {atr1:"Venenoso",atr2:47,atr3:52,atr4:41,atr5:55}};
var card030 = {nome:"Nidorina",img: baseUrl + "030.png",tipoNum: 8,trunfo:false, atributos: {atr1:"Venenoso",atr2:62,atr3:67,atr4:56,atr5:70}};
var card031 = {nome:"Nidoqueen",img: baseUrl + "031.png",tipoNum: 8,trunfo:false, atributos: {atr1:"Venenoso",atr2:92,atr3:87,atr4:76,atr5:90}};
var card032 = {nome:"Nidoran♂",img: baseUrl + "032.png",tipoNum: 8,trunfo:false, atributos: {atr1:"Venenoso",atr2:57,atr3:40,atr4:50,atr5:46}};
var card033 = {nome:"Nidorino",img: baseUrl + "033.png",tipoNum: 8,trunfo:false, atributos: {atr1:"Venenoso",atr2:72,atr3:57,atr4:65,atr5:61}};
var card034 = {nome:"Nidoking",img: baseUrl + "034.png",tipoNum: 8,trunfo:false, atributos: {atr1:"Venenoso",atr2:102,atr3:77,atr4:85,atr5:81}};
var card035 = {nome:"Clefairy",img: baseUrl + "035.png",tipoNum: 1,trunfo:false, atributos: {atr1:"Normal",atr2:45,atr3:48,atr4:35,atr5:70}};
var card036 = {nome:"Clefable",img: baseUrl + "036.png",tipoNum: 1,trunfo:false, atributos: {atr1:"Normal",atr2:70,atr3:73,atr4:60,atr5:95}};
var card037 = {nome:"Vulpix",img: baseUrl + "037.png",tipoNum: 2,trunfo:false, atributos: {atr1:"Fogo",atr2:41,atr3:40,atr4:65,atr5:38}};
var card038 = {nome:"Ninetales",img: baseUrl + "038.png",tipoNum: 2,trunfo:false, atributos: {atr1:"Fogo",atr2:76,atr3:75,atr4:100,atr5:73}};
var card039 = {nome:"Jigglypuff",img: baseUrl + "039.png",tipoNum: 1,trunfo:false, atributos: {atr1:"Normal",atr2:45,atr3:20,atr4:20,atr5:115}};
var card040 = {nome:"Wigglytuff",img: baseUrl + "040.png",tipoNum: 1,trunfo:false, atributos: {atr1:"Normal",atr2:70,atr3:45,atr4:45,atr5:140}};
var card041 = {nome:"Zubat",img: baseUrl + "041.png",tipoNum: 8,trunfo:false, atributos: {atr1:"Venenoso",atr2:45,atr3:35,atr4:55,atr5:40}};
var card042 = {nome:"Golbat",img: baseUrl + "042.png",tipoNum: 8,trunfo:false, atributos: {atr1:"Venenoso",atr2:80,atr3:70,atr4:90,atr5:75}};
var card043 = {nome:"Oddish",img: baseUrl + "043.png",tipoNum: 5,trunfo:false, atributos: {atr1:"Planta",atr2:50,atr3:55,atr4:30,atr5:45}};
var card044 = {nome:"Gloom",img: baseUrl + "044.png",tipoNum: 5,trunfo:false, atributos: {atr1:"Planta",atr2:65,atr3:70,atr4:40,atr5:60}};
var card045 = {nome:"Vileplume",img: baseUrl + "045.png",tipoNum: 5,trunfo:false, atributos: {atr1:"Planta",atr2:80,atr3:85,atr4:50,atr5:75}};
var card046 = {nome:"Paras",img: baseUrl + "046.png",tipoNum: 12,trunfo:false, atributos: {atr1:"Inseto",atr2:70,atr3:55,atr4:25,atr5:35}};
var card047 = {nome:"Parasect",img: baseUrl + "047.png",tipoNum: 12,trunfo:false, atributos: {atr1:"Inseto",atr2:95,atr3:80,atr4:30,atr5:60}};
var card048 = {nome:"Venonat",img: baseUrl + "048.png",tipoNum: 12,trunfo:false, atributos: {atr1:"Inseto",atr2:55,atr3:50,atr4:45,atr5:60}};
var card049 = {nome:"Venomoth",img: baseUrl + "049.png",tipoNum: 12,trunfo:false, atributos: {atr1:"Inseto",atr2:65,atr3:60,atr4:90,atr5:70}};
var card050 = {nome:"Diglett",img: baseUrl + "050.png",tipoNum: 9,trunfo:false, atributos: {atr1:"Terrestre",atr2:55,atr3:25,atr4:95,atr5:10}};
var card051 = {nome:"Dugtrio",img: baseUrl + "051.png",tipoNum: 9,trunfo:false, atributos: {atr1:"Terrestre",atr2:100,atr3:50,atr4:120,atr5:35}};
var card052 = {nome:"Meowth",img: baseUrl + "052.png",tipoNum: 1,trunfo:false, atributos: {atr1:"Normal",atr2:45,atr3:35,atr4:90,atr5:40}};
var card053 = {nome:"Persian",img: baseUrl + "053.png",tipoNum: 1,trunfo:false, atributos: {atr1:"Normal",atr2:70,atr3:60,atr4:115,atr5:65}};
var card054 = {nome:"Psyduck",img: baseUrl + "054.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:52,atr3:48,atr4:55,atr5:50}};
var card055 = {nome:"Golduck",img: baseUrl + "055.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:82,atr3:78,atr4:85,atr5:80}};
var card056 = {nome:"Mankey",img: baseUrl + "056.png",tipoNum: 7,trunfo:false, atributos: {atr1:"Lutador",atr2:80,atr3:35,atr4:70,atr5:40}};
var card057 = {nome:"Primeape",img: baseUrl + "057.png",tipoNum: 7,trunfo:false, atributos: {atr1:"Lutador",atr2:105,atr3:60,atr4:95,atr5:65}};
var card058 = {nome:"Growlithe",img: baseUrl + "058.png",tipoNum: 2,trunfo:false, atributos: {atr1:"Fogo",atr2:70,atr3:45,atr4:60,atr5:55}};
var card059 = {nome:"Arcanine",img: baseUrl + "059.png",tipoNum: 2,trunfo:false, atributos: {atr1:"Fogo",atr2:110,atr3:80,atr4:95,atr5:90}};
var card060 = {nome:"Poliwag",img: baseUrl + "060.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:50,atr3:40,atr4:90,atr5:40}};
var card061 = {nome:"Poliwhirl",img: baseUrl + "061.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:65,atr3:65,atr4:90,atr5:65}};
var card062 = {nome:"Poliwrath",img: baseUrl + "062.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:95,atr3:95,atr4:70,atr5:90}};
var card063 = {nome:"Abra",img: baseUrl + "063.png",tipoNum: 11,trunfo:false, atributos: {atr1:"Psíquico",atr2:20,atr3:15,atr4:90,atr5:25}};
var card064 = {nome:"Kadabra",img: baseUrl + "064.png",tipoNum: 11,trunfo:false, atributos: {atr1:"Psíquico",atr2:35,atr3:30,atr4:105,atr5:40}};
var card065 = {nome:"Alakazam",img: baseUrl + "065.png",tipoNum: 11,trunfo:false, atributos: {atr1:"Psíquico",atr2:50,atr3:45,atr4:120,atr5:55}};
var card066 = {nome:"Machop",img: baseUrl + "066.png",tipoNum: 7,trunfo:false, atributos: {atr1:"Lutador",atr2:80,atr3:50,atr4:35,atr5:70}};
var card067 = {nome:"Machoke",img: baseUrl + "067.png",tipoNum: 7,trunfo:false, atributos: {atr1:"Lutador",atr2:100,atr3:70,atr4:45,atr5:80}};
var card068 = {nome:"Machamp",img: baseUrl + "068.png",tipoNum: 7,trunfo:false, atributos: {atr1:"Lutador",atr2:130,atr3:80,atr4:55,atr5:90}};
var card069 = {nome:"Bellsprout",img: baseUrl + "069.png",tipoNum: 5,trunfo:false, atributos: {atr1:"Planta",atr2:75,atr3:35,atr4:40,atr5:50}};
var card070 = {nome:"Weepinbell",img: baseUrl + "070.png",tipoNum: 5,trunfo:false, atributos: {atr1:"Planta",atr2:90,atr3:50,atr4:55,atr5:65}};
var card071 = {nome:"Victreebel",img: baseUrl + "071.png",tipoNum: 5,trunfo:false, atributos: {atr1:"Planta",atr2:105,atr3:65,atr4:70,atr5:80}};
var card072 = {nome:"Tentacool",img: baseUrl + "072.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:40,atr3:35,atr4:70,atr5:40}};
var card073 = {nome:"Tentacruel",img: baseUrl + "073.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:70,atr3:65,atr4:100,atr5:80}};
var card074 = {nome:"Geodude",img: baseUrl + "074.png",tipoNum: 13,trunfo:false, atributos: {atr1:"Pedra",atr2:80,atr3:100,atr4:20,atr5:40}};
var card075 = {nome:"Graveler",img: baseUrl + "075.png",tipoNum: 13,trunfo:false, atributos: {atr1:"Pedra",atr2:95,atr3:115,atr4:35,atr5:55}};
var card076 = {nome:"Golem",img: baseUrl + "076.png",tipoNum: 13,trunfo:false, atributos: {atr1:"Pedra",atr2:120,atr3:130,atr4:45,atr5:80}};
var card077 = {nome:"Ponyta",img: baseUrl + "077.png",tipoNum: 2,trunfo:false, atributos: {atr1:"Fogo",atr2:85,atr3:55,atr4:90,atr5:50}};
var card078 = {nome:"Rapidash",img: baseUrl + "078.png",tipoNum: 2,trunfo:false, atributos: {atr1:"Fogo",atr2:100,atr3:70,atr4:105,atr5:65}};
var card079 = {nome:"Slowpoke",img: baseUrl + "079.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:65,atr3:65,atr4:15,atr5:90}};
var card080 = {nome:"Slowbro",img: baseUrl + "080.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:75,atr3:110,atr4:30,atr5:95}};
var card081 = {nome:"Magnemite",img: baseUrl + "081.png",tipoNum: 4,trunfo:false, atributos: {atr1:"Elétrico",atr2:35,atr3:70,atr4:45,atr5:25}};
var card082 = {nome:"Magneton",img: baseUrl + "082.png",tipoNum: 4,trunfo:false, atributos: {atr1:"Elétrico",atr2:60,atr3:95,atr4:70,atr5:50}};
var card083 = {nome:"Farfetch'd",img: baseUrl + "083.png",tipoNum: 10,trunfo:false, atributos: {atr1:"Voador",atr2:90,atr3:55,atr4:60,atr5:52}};
var card084 = {nome:"Doduo",img: baseUrl + "084.png",tipoNum: 10,trunfo:false, atributos: {atr1:"Voador",atr2:85,atr3:45,atr4:75,atr5:35}};
var card085 = {nome:"Dodrio",img: baseUrl + "085.png",tipoNum: 10,trunfo:false, atributos: {atr1:"Voador",atr2:110,atr3:70,atr4:110,atr5:60}};
var card086 = {nome:"Seel",img: baseUrl + "086.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:45,atr3:55,atr4:45,atr5:65}};
var card087 = {nome:"Dewgong",img: baseUrl + "087.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:70,atr3:80,atr4:70,atr5:90}};
var card088 = {nome:"Grimer",img: baseUrl + "088.png",tipoNum: 8,trunfo:false, atributos: {atr1:"Venenoso",atr2:80,atr3:50,atr4:25,atr5:80}};
var card089 = {nome:"Muk",img: baseUrl + "089.png",tipoNum: 8,trunfo:false, atributos: {atr1:"Venenoso",atr2:105,atr3:75,atr4:50,atr5:105}};
var card090 = {nome:"Shellder",img: baseUrl + "090.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:65,atr3:100,atr4:40,atr5:30}};
var card091 = {nome:"Cloyster",img: baseUrl + "091.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:95,atr3:180,atr4:70,atr5:50}};
var card092 = {nome:"Gastly",img: baseUrl + "092.png",tipoNum: 14,trunfo:false, atributos: {atr1:"Fantasma",atr2:35,atr3:30,atr4:80,atr5:30}};
var card093 = {nome:"Haunter",img: baseUrl + "093.png",tipoNum: 14,trunfo:false, atributos: {atr1:"Fantasma",atr2:50,atr3:45,atr4:95,atr5:45}};
var card094 = {nome:"Gengar",img: baseUrl + "094.png",tipoNum: 14,trunfo:false, atributos: {atr1:"Fantasma",atr2:65,atr3:60,atr4:110,atr5:60}};
var card095 = {nome:"Onix",img: baseUrl + "095.png",tipoNum: 13,trunfo:false, atributos: {atr1:"Pedra",atr2:45,atr3:160,atr4:70,atr5:35}};
var card096 = {nome:"Drowzee",img: baseUrl + "096.png",tipoNum: 11,trunfo:false, atributos: {atr1:"Psíquico",atr2:48,atr3:45,atr4:42,atr5:60}};
var card097 = {nome:"Hypno",img: baseUrl + "097.png",tipoNum: 11,trunfo:false, atributos: {atr1:"Psíquico",atr2:73,atr3:70,atr4:67,atr5:85}};
var card098 = {nome:"Krabby",img: baseUrl + "098.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:105,atr3:90,atr4:50,atr5:30}};
var card099 = {nome:"Kingler",img: baseUrl + "099.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:130,atr3:115,atr4:75,atr5:55}};
var card100 = {nome:"Voltorb",img: baseUrl + "100.png",tipoNum: 4,trunfo:false, atributos: {atr1:"Elétrico",atr2:30,atr3:50,atr4:100,atr5:40}};
var card101 = {nome:"Electrode",img: baseUrl + "101.png",tipoNum: 4,trunfo:false, atributos: {atr1:"Elétrico",atr2:50,atr3:70,atr4:150,atr5:60}};
var card102 = {nome:"Exeggcute",img: baseUrl + "102.png",tipoNum: 5,trunfo:false, atributos: {atr1:"Planta",atr2:40,atr3:80,atr4:40,atr5:60}};
var card103 = {nome:"Exeggutor",img: baseUrl + "103.png",tipoNum: 5,trunfo:false, atributos: {atr1:"Planta",atr2:95,atr3:85,atr4:55,atr5:95}};
var card104 = {nome:"Cubone",img: baseUrl + "104.png",tipoNum: 9,trunfo:false, atributos: {atr1:"Terrestre",atr2:50,atr3:95,atr4:35,atr5:50}};
var card105 = {nome:"Marowak",img: baseUrl + "105.png",tipoNum: 9,trunfo:false, atributos: {atr1:"Terrestre",atr2:80,atr3:110,atr4:45,atr5:60}};
var card106 = {nome:"Hitmonlee",img: baseUrl + "106.png",tipoNum: 7,trunfo:false, atributos: {atr1:"Lutador",atr2:120,atr3:53,atr4:87,atr5:50}};
var card107 = {nome:"Hitmonchan",img: baseUrl + "107.png",tipoNum: 7,trunfo:false, atributos: {atr1:"Lutador",atr2:105,atr3:79,atr4:76,atr5:50}};
var card108 = {nome:"Lickitung",img: baseUrl + "108.png",tipoNum: 1,trunfo:false, atributos: {atr1:"Normal",atr2:55,atr3:75,atr4:30,atr5:90}};
var card109 = {nome:"Koffing",img: baseUrl + "109.png",tipoNum: 8,trunfo:false, atributos: {atr1:"Venenoso",atr2:65,atr3:95,atr4:35,atr5:40}};
var card110 = {nome:"Weezing",img: baseUrl + "110.png",tipoNum: 8,trunfo:false, atributos: {atr1:"Venenoso",atr2:90,atr3:120,atr4:60,atr5:65}};
var card111 = {nome:"Rhyhorn",img: baseUrl + "111.png",tipoNum: 9,trunfo:false, atributos: {atr1:"Terrestre",atr2:85,atr3:95,atr4:25,atr5:80}};
var card112 = {nome:"Rhydon",img: baseUrl + "112.png",tipoNum: 9,trunfo:false, atributos: {atr1:"Terrestre",atr2:130,atr3:120,atr4:40,atr5:105}};
var card113 = {nome:"Chansey",img: baseUrl + "113.png",tipoNum: 1,trunfo:false, atributos: {atr1:"Normal",atr2:5,atr3:5,atr4:50,atr5:250}};
var card114 = {nome:"Tangela",img: baseUrl + "114.png",tipoNum: 5,trunfo:false, atributos: {atr1:"Planta",atr2:55,atr3:115,atr4:60,atr5:65}};
var card115 = {nome:"Kangaskhan",img: baseUrl + "115.png",tipoNum: 1,trunfo:false, atributos: {atr1:"Normal",atr2:95,atr3:80,atr4:90,atr5:105}};
var card116 = {nome:"Horsea",img: baseUrl + "116.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:40,atr3:70,atr4:60,atr5:30}};
var card117 = {nome:"Seadra",img: baseUrl + "117.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:65,atr3:95,atr4:85,atr5:55}};
var card118 = {nome:"Goldeen",img: baseUrl + "118.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:67,atr3:60,atr4:63,atr5:45}};
var card119 = {nome:"Seaking",img: baseUrl + "119.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:92,atr3:65,atr4:68,atr5:80}};
var card120 = {nome:"Staryu",img: baseUrl + "120.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:45,atr3:55,atr4:85,atr5:30}};
var card121 = {nome:"Starmie",img: baseUrl + "121.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:75,atr3:85,atr4:115,atr5:60}};
var card122 = {nome:"Mr. Mime",img: baseUrl + "122.png",tipoNum: 11,trunfo:false, atributos: {atr1:"Psíquico",atr2:45,atr3:65,atr4:90,atr5:40}};
var card123 = {nome:"Scyther",img: baseUrl + "123.png",tipoNum: 12,trunfo:false, atributos: {atr1:"Inseto",atr2:110,atr3:80,atr4:105,atr5:70}};
var card124 = {nome:"Jynx",img: baseUrl + "124.png",tipoNum: 6,trunfo:false, atributos: {atr1:"Gelo",atr2:50,atr3:35,atr4:95,atr5:65}};
var card125 = {nome:"Electabuzz",img: baseUrl + "125.png",tipoNum: 4,trunfo:false, atributos: {atr1:"Elétrico",atr2:83,atr3:57,atr4:105,atr5:65}};
var card126 = {nome:"Magmar",img: baseUrl + "126.png",tipoNum: 2,trunfo:false, atributos: {atr1:"Fogo",atr2:95,atr3:57,atr4:93,atr5:65}};
var card127 = {nome:"Pinsir",img: baseUrl + "127.png",tipoNum: 12,trunfo:false, atributos: {atr1:"Inseto",atr2:125,atr3:100,atr4:85,atr5:65}};
var card128 = {nome:"Tauros",img: baseUrl + "128.png",tipoNum: 1,trunfo:false, atributos: {atr1:"Normal",atr2:100,atr3:95,atr4:110,atr5:75}};
var card129 = {nome:"Magikarp",img: baseUrl + "129.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:10,atr3:55,atr4:80,atr5:20}};
var card130 = {nome:"Gyarados",img: baseUrl + "130.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:125,atr3:79,atr4:81,atr5:95}};
var card131 = {nome:"Lapras",img: baseUrl + "131.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:85,atr3:80,atr4:60,atr5:130}};
var card132 = {nome:"Ditto",img: baseUrl + "132.png",tipoNum: 1,trunfo:false, atributos: {atr1:"Normal",atr2:48,atr3:48,atr4:48,atr5:48}};
var card133 = {nome:"Eevee",img: baseUrl + "133.png",tipoNum: 1,trunfo:false, atributos: {atr1:"Normal",atr2:55,atr3:50,atr4:55,atr5:55}};
var card134 = {nome:"Vaporeon",img: baseUrl + "134.png",tipoNum: 3,trunfo:false, atributos: {atr1:"Água",atr2:65,atr3:60,atr4:65,atr5:130}};
var card135 = {nome:"Jolteon",img: baseUrl + "135.png",tipoNum: 4,trunfo:false, atributos: {atr1:"Elétrico",atr2:65,atr3:60,atr4:130,atr5:65}};
var card136 = {nome:"Flareon",img: baseUrl + "136.png",tipoNum: 2,trunfo:false, atributos: {atr1:"Fogo",atr2:130,atr3:60,atr4:65,atr5:65}};
var card137 = {nome:"Porygon",img: baseUrl + "137.png",tipoNum: 1,trunfo:false, atributos: {atr1:"Normal",atr2:60,atr3:70,atr4:40,atr5:65}};
var card138 = {nome:"Omanyte",img: baseUrl + "138.png",tipoNum: 13,trunfo:false, atributos: {atr1:"Pedra",atr2:40,atr3:100,atr4:35,atr5:35}};
var card139 = {nome:"Omastar",img: baseUrl + "139.png",tipoNum: 13,trunfo:false, atributos: {atr1:"Pedra",atr2:60,atr3:125,atr4:55,atr5:70}};
var card140 = {nome:"Kabuto",img: baseUrl + "140.png",tipoNum: 13,trunfo:false, atributos: {atr1:"Pedra",atr2:80,atr3:90,atr4:55,atr5:30}};
var card141 = {nome:"Kabutops",img: baseUrl + "141.png",tipoNum: 13,trunfo:false, atributos: {atr1:"Pedra",atr2:115,atr3:105,atr4:80,atr5:60}};
var card142 = {nome:"Aerodactyl",img: baseUrl + "142.png",tipoNum: 13,trunfo:false, atributos: {atr1:"Pedra",atr2:105,atr3:65,atr4:130,atr5:80}};
var card143 = {nome:"Snorlax",img: baseUrl + "143.png",tipoNum: 1,trunfo:false, atributos: {atr1:"Normal",atr2:110,atr3:65,atr4:30,atr5:160}};
var card144 = {nome:"Articuno",img: baseUrl + "144.png",tipoNum: 6,trunfo:false, atributos: {atr1:"Gelo",atr2:85,atr3:100,atr4:85,atr5:90}};
var card145 = {nome:"Zapdos",img: baseUrl + "145.png",tipoNum: 4,trunfo:false, atributos: {atr1:"Elétrico",atr2:90,atr3:85,atr4:100,atr5:90}};
var card146 = {nome:"Moltres",img: baseUrl + "146.png",tipoNum: 2,trunfo:false, atributos: {atr1:"Fogo",atr2:100,atr3:90,atr4:90,atr5:90}};
var card147 = {nome:"Dratini",img: baseUrl + "147.png",tipoNum: 15,trunfo:false, atributos: {atr1:"Dragão",atr2:64,atr3:45,atr4:50,atr5:41}};
var card148 = {nome:"Dragonair",img: baseUrl + "148.png",tipoNum: 15,trunfo:false, atributos: {atr1:"Dragão",atr2:84,atr3:65,atr4:70,atr5:61}};
var card149 = {nome:"Dragonite",img: baseUrl + "149.png",tipoNum: 15,trunfo:false, atributos: {atr1:"Dragão",atr2:134,atr3:95,atr4:80,atr5:91}};
var card150 = {nome:"Mewtwo",img: baseUrl + "150.png",tipoNum: 11,trunfo:true, atributos: {atr1:"Psíquico",atr2:110,atr3:90,atr4:130,atr5:106}};
var card151 = {nome:"Mew",img: baseUrl + "151.png",tipoNum: 11,trunfo:false, atributos: {atr1:"Psíquico",atr2:100,atr3:100,atr4:100,atr5:100}};

// Inicio das Funcoes
function resetarDeck()
{
	todasCartas = [
		card001,card002,card003,card004,card005,card006,card007,card008,card009,card010,
		card011,card012,card013,card014,card015,card016,card017,card018,card019,card020,
		card021,card022,card023,card024,card025,card026,card027,card028,card029,card030,
		card031,card032,card033,card034,card035,card036,card037,card038,card039,card040,
		card041,card042,card043,card044,card045,card046,card047,card048,card049,card050,
		card051,card052,card053,card054,card055,card056,card057,card058,card059,card060,
		card061,card062,card063,card064,card065,card066,card067,card068,card069,card070,
		card071,card072,card073,card074,card075,card076,card077,card078,card079,card080,
		card081,card082,card083,card084,card085,card086,card087,card088,card089,card090,
		card091,card092,card093,card094,card095,card096,card097,card098,card099,card100,
		card101,card102,card103,card104,card105,card106,card107,card108,card109,card110,
		card111,card112,card113,card114,card115,card116,card117,card118,card119,card120,
		card121,card122,card123,card124,card125,card126,card127,card128,card129,card130,
		card131,card132,card133,card134,card135,card136,card137,card138,card139,card140,
		card141,card142,card143,card144,card145,card146,card147,card148,card149,card151];
	deckJogador =[];
	deckCpu =[];
	deckEmpate=[];
	cartasNoJogo =[card150];
}

function fisherYatesShuffle(arr)
{
    for(var i = arr.length - 1;i > 0; i--)
	{
        // random index
		var j = Math.floor(Math.random() * (i + 1));
        // swap
		[arr[i],arr[j]]=[arr[j],arr[i]];
    }
}

function addCartasAoJogo()
{
	do
	{
		fisherYatesShuffle(todasCartas); // embaralha todas as cartas
		cartasNoJogo.push(todasCartas[0]); // adiciona o primeiro valor a lista de cartas do jogo
		todasCartas.shift(); // remove a carta adicionada da lista de todas as cartas
	} while(cartasNoJogo.length != qtdeCartasNoJogo);
}

function dividirDecks()
{
	do
	{
		fisherYatesShuffle(cartasNoJogo); // embaralha cartas do jogo
		deckJogador.push(cartasNoJogo[0]); // adiciona ao baralho do jogador
		cartasNoJogo.shift(); // remove das cartas do jogo
		fisherYatesShuffle(cartasNoJogo); // embaralha cartas do jogo
		deckCpu.push(cartasNoJogo[0]); // adiciona ao baralho da maquina
		cartasNoJogo.shift(); // remove das cartas do jogo
	} while(cartasNoJogo.length != 0);
	fisherYatesShuffle(deckJogador);
	fisherYatesShuffle(deckCpu);
}

function visualPadrao()
{
	let div = document.getElementById("mensagem-status");
	div.innerText = "";

	div = document.getElementById("mensagem-final");
	div.innerText = "";

	div = document.getElementById("nome-carta-jog");
	div.innerText = "";

	div = document.getElementById("nome-carta-cpu");
	div.innerText = "";

	div = document.getElementById("img-carta-jog");
	div.setAttribute("src",imgPadrao);

	div = document.getElementById("img-carta-cpu");
	div.setAttribute("src",imgPadrao);

	div = document.getElementById("jog-atrib-1");
	div.innerText = "";

	div = document.getElementById("cpu-atrib-1");
	div.innerText = "";

	div = document.getElementById("jog-atrib-2");
	div.innerText = "";

	div = document.getElementById("cpu-atrib-2");
	div.innerText = "";

	div = document.getElementById("jog-atrib-3");
	div.innerText = "";

	div = document.getElementById("cpu-atrib-3");
	div.innerText = "";

	div = document.getElementById("jog-atrib-4");
	div.innerText = "";

	div = document.getElementById("cpu-atrib-4");
	div.innerText = "";

	div = document.getElementById("jog-atrib-5");
	div.innerText = "";

	div = document.getElementById("cpu-atrib-5");
	div.innerText = "";
}

function limparFundoDiv()
{
	let div = document.getElementById("row-atrib-1");
	div.setAttribute("class","");

	div = document.getElementById("row-atrib-2");
	div.setAttribute("class","");

	div = document.getElementById("row-atrib-3");
	div.setAttribute("class","");

	div = document.getElementById("row-atrib-4");
	div.setAttribute("class","");

	div = document.getElementById("row-atrib-5");
	div.setAttribute("class","");

	div = document.getElementById("mensagem-final");
	div.setAttribute("class","");

	div = document.getElementById("mensagem-status");
	div.setAttribute("class","");

	div = document.getElementById("img-carta-cpu");
	div.setAttribute("class","rounded img-thumbnail");
	
	div = document.getElementById("nome-carta-cpu");
	div.setAttribute("class","");

	div = document.getElementById("img-carta-jog");
	div.setAttribute("class","rounded img-thumbnail");
	
	div = document.getElementById("nome-carta-jog");
	div.setAttribute("class","");
}

function atualizaPlacar()
{
	let div = document.getElementById("placar-jog");
	div.innerText = deckJogador.length;

	div = document.getElementById("placar-cpu");
	div.innerText = deckCpu.length;
}

function iniciarJogo()
{
	audioInicio();
	resetarDeck();
	addCartasAoJogo();
	dividirDecks();
	visualPadrao();
	limparFundoDiv();
	atualizaPlacar();

	console.log('funcoes iniciais finalizadas');

	let btnIniciar = document.getElementById("btn-iniciar");
	btnIniciar.setAttribute("disabled","true");

	let btnSortear = document.getElementById("btn-sortear");
	btnSortear.removeAttribute("disabled");	
}

function trunfoJogador()
{
	if (cartaJogador.trunfo == true)
	{
		let div = document.getElementById("img-carta-jog");
		div.setAttribute("class","rounded img-thumbnail bg-info");
		div = document.getElementById("nome-carta-jog");
		div.setAttribute("class","text-info");
	}
}

function trunfoCpu()
{
	if (cartaCpu.trunfo == true)
	{
		let div = document.getElementById("img-carta-cpu");
		div.setAttribute("class","rounded img-thumbnail bg-info");
		div = document.getElementById("nome-carta-cpu");
		div.setAttribute("class","text-info");
	}
}

function mostrarCartaJogador()
{
	trunfoJogador();

	let div = document.getElementById("img-carta-jog");
	div.setAttribute("src",cartaJogador.img);

	div = document.getElementById("nome-carta-jog");
	div.innerText = cartaJogador.nome;

	div = document.getElementById("jog-atrib-1");
	div.innerText = cartaJogador.atributos.atr1;

	div = document.getElementById("jog-atrib-2");
	div.innerText = cartaJogador.atributos.atr2;

	div = document.getElementById("jog-atrib-3");
	div.innerText = cartaJogador.atributos.atr3;

	div = document.getElementById("jog-atrib-4");
	div.innerText = cartaJogador.atributos.atr4;

	div = document.getElementById("jog-atrib-5");
	div.innerText = cartaJogador.atributos.atr5;
}

function mostrarCartaCpu()
{
	trunfoCpu();

	let div = document.getElementById("img-carta-cpu");
	div.setAttribute("src",cartaCpu.img);

	div = document.getElementById("nome-carta-cpu");
	div.innerText = cartaCpu.nome;

	div = document.getElementById("cpu-atrib-1");
	div.innerText = cartaCpu.atributos.atr1;

	div = document.getElementById("cpu-atrib-2");
	div.innerText = cartaCpu.atributos.atr2;

	div = document.getElementById("cpu-atrib-3");
	div.innerText = cartaCpu.atributos.atr3;

	div = document.getElementById("cpu-atrib-4");
	div.innerText = cartaCpu.atributos.atr4;
	
	div = document.getElementById("cpu-atrib-5");
	div.innerText = cartaCpu.atributos.atr5;
}

function jogarHabilitarBotoes()
{
	let btnJogar1 = document.getElementById("btn-atrib-1");
	btnJogar1.removeAttribute("disabled");

	let btnJogar2 = document.getElementById("btn-atrib-2");
	btnJogar2.removeAttribute("disabled");

	let btnJogar3 = document.getElementById("btn-atrib-3");
	btnJogar3.removeAttribute("disabled");

	let btnJogar4 = document.getElementById("btn-atrib-4");
	btnJogar4.removeAttribute("disabled");

	let btnJogar5 = document.getElementById("btn-atrib-5");
	btnJogar5.removeAttribute("disabled");
}

function jogarDesabilitarBotoes()
{
	let btnJogar1 = document.getElementById("btn-atrib-1");
	btnJogar1.setAttribute("disabled","true");

	let btnJogar2 = document.getElementById("btn-atrib-2");
	btnJogar2.setAttribute("disabled","true");

	let btnJogar3 = document.getElementById("btn-atrib-3");
	btnJogar3.setAttribute("disabled","true");

	let btnJogar4 = document.getElementById("btn-atrib-4");
	btnJogar4.setAttribute("disabled","true");

	let btnJogar5 = document.getElementById("btn-atrib-5");
	btnJogar5.setAttribute("disabled","true");
}

function sortearCartasRodada()
{
	// Obtém a primeira carta de cada deck
	cartaCpu = deckCpu[0];
	cartaJogador = deckJogador[0];
}

function sortearClick()
{
	visualPadrao();
	limparFundoDiv();
	sortearCartasRodada();
	mostrarCartaJogador();
	jogarHabilitarBotoes();
	let btnSortear = document.getElementById("btn-sortear"); 
	btnSortear.setAttribute("disabled","true");
}

function vitoriaJogador()
{
	mostrarCartaCpu();
	let divMsg = document.getElementById("mensagem-status");
	divMsg.setAttribute("class","text-success");
	divMsg.innerText = "JOGADOR\nvenceu rodada";
	deckJogador.push(cartaCpu);
	deckJogador.push(cartaJogador);
	deckJogador.shift();
	deckCpu.shift();
	atualizaPlacar();
	fimJogo();
}

function vitoriaCpu()
{
	mostrarCartaCpu();
	let divMsg = document.getElementById("mensagem-status");
	divMsg.setAttribute("class","text-danger");
	divMsg.innerText = "MÁQUINA\nvenceu rodada";
	deckCpu.push(cartaJogador);
	deckCpu.push(cartaCpu);
	deckCpu.shift();
	deckJogador.shift();
	atualizaPlacar();
	fimJogo();
}

function empateAtributos()
{
	let divMsg = document.getElementById("mensagem-status");
	divMsg.setAttribute("class","text-warning");
	divMsg.innerText = "EMPATE\nselecione outro atributo!";
	jogarHabilitarBotoes();
	limparFundoDiv();
}

function validarTrunfo()
{
	if (cartaJogador.trunfo === true && cartaCpu.tipoNum === 14)
	{
		vitoriaCpu();
	} else if (cartaCpu.trunfo === true && cartaJogador.tipoNum !== 14)
	{
		vitoriaCpu();
	} else
	{
		vitoriaJogador();
	}
}

function compararAtr1()
{
	jogarDesabilitarBotoes();

	let div = document.getElementById("row-atrib-1");
	div.setAttribute("class","bg-light text-dark");
	if (cartaJogador.trunfo === true || cartaCpu.trunfo === true)
	{
		validarTrunfo();
	} else
	{
		validarAtributos();
	}
}

function compararAtr2()
{
	jogarDesabilitarBotoes();

	valorJog = parseInt(cartaJogador.atributos.atr2);
	valorCpu = parseInt(cartaCpu.atributos.atr2);

	let div = document.getElementById("row-atrib-2");
	div.setAttribute("class","bg-light text-dark");

	if (cartaJogador.trunfo === true || cartaCpu.trunfo === true)
	{
		validarTrunfo()
	} else if (valorJog > valorCpu)
	{
		vitoriaJogador();
	} else if (valorJog < valorCpu)
	{
		vitoriaCpu();
	} else 
	{
		empateAtributos();
	}
}

function compararAtr3()
{
	jogarDesabilitarBotoes();

	valorJog = parseInt(cartaJogador.atributos.atr3);
	valorCpu = parseInt(cartaCpu.atributos.atr3);

	let div = document.getElementById("row-atrib-3");
	div.setAttribute("class","bg-light text-dark");

	if (cartaJogador.trunfo === true || cartaCpu.trunfo === true)
	{
		validarTrunfo()
	} else if (valorJog > valorCpu)
	{
		vitoriaJogador();
	} else if (valorJog < valorCpu)
	{
		vitoriaCpu();
	} else 
	{
		empateAtributos();
	}
}

function compararAtr4()
{
	jogarDesabilitarBotoes();

	valorJog = parseInt(cartaJogador.atributos.atr4);
	valorCpu = parseInt(cartaCpu.atributos.atr4);

	let div = document.getElementById("row-atrib-4");
	div.setAttribute("class","bg-light text-dark");

	if (cartaJogador.trunfo === true || cartaCpu.trunfo === true)
	{
		validarTrunfo()
	} else if (valorJog > valorCpu)
	{
		vitoriaJogador();
	} else if (valorJog < valorCpu)
	{
		vitoriaCpu();
	} else 
	{
		empateAtributos();
		div.setAttribute("class","");
	}
}

function compararAtr5()
{
	jogarDesabilitarBotoes();

	valorJog = parseInt(cartaJogador.atributos.atr5);
	valorCpu = parseInt(cartaCpu.atributos.atr5);

	let div = document.getElementById("row-atrib-5");
	div.setAttribute("class","bg-light text-dark");

	if (cartaJogador.trunfo === true || cartaCpu.trunfo === true)
	{
		validarTrunfo()
	} else if (valorJog > valorCpu)
	{
		vitoriaJogador();
	} else if (valorJog < valorCpu)
	{
		vitoriaCpu();
	} else 
	{
		empateAtributos();
		div.setAttribute("class","");
	}
}

function validarAtributos() {
	let atrJogador = cartaJogador.atributos.atr1;
	let atrCpu = cartaCpu.atributos.atr1;
	let divMsg = document.getElementById("mensagem-status");
	console.log(atrJogador + "/" + atrCpu);
	switch (atrJogador + "/" + atrCpu)
	{
		case "Água/Dragão":
		case "Água/Planta":
		case "Elétrico/Dragão":
		case "Elétrico/Planta":
		case "Elétrico/Terrestre":
		case "Fogo/Água":
		case "Fogo/Dragão":
		case "Fogo/Pedra":
		case "Gelo/Água":
		case "Gelo/Fogo":
		case "Inseto/Fantasma":
		case "Inseto/Fogo":
		case "Inseto/Lutador":
		case "Inseto/Venenoso":
		case "Inseto/Voador":
		case "Lutador/Fantasma":
		case "Lutador/Inseto":
		case "Lutador/Psíquico":
		case "Lutador/Venenoso":
		case "Lutador/Voador":
		case "Normal/Pedra":
		case "Pedra/Lutador":
		case "Pedra/Terrestre":
		case "Planta/Dragão":
		case "Planta/Fogo":
		case "Planta/Inseto":
		case "Planta/Venenoso":
		case "Planta/Voador":
		case "Terrestre/Inseto":
		case "Terrestre/Planta":
		case "Terrestre/Voador":
		case "Venenoso/Fantasma":
		case "Venenoso/Pedra":
		case "Venenoso/Terrestre":
		case "Voador/Elétrico":
		case "Voador/Pedra":	
			vitoriaCpu();
			break;
		case "Fogo/Planta":
		case "Fogo/Gelo":
		case "Fogo/Inseto":
		case "Água/Fogo":
		case "Água/Terrestre":
		case "Água/Pedra":
		case "Elétrico/Água":
		case "Elétrico/Voador":
		case "Planta/Água":
		case "Planta/Terrestre":
		case "Planta/Pedra":
		case "Gelo/Planta":
		case "Gelo/Terrestre":
		case "Gelo/Voador":
		case "Gelo/Dragão":
		case "Lutador/Normal":
		case "Lutador/Gelo":
		case "Lutador/Pedra":
		case "Venenoso/Planta":
		case "Terrestre/Fogo":
		case "Terrestre/Elétrico":
		case "Terrestre/Venenoso":
		case "Terrestre/Pedra":
		case "Voador/Planta":
		case "Voador/Lutador":
		case "Voador/Inseto":
		case "Psíquico/Lutador":
		case "Psíquico/Venenoso":
		case "Inseto/Planta":
		case "Inseto/Psíquico":
		case "Pedra/Fogo":
		case "Pedra/Gelo":
		case "Pedra/Voador":
		case "Pedra/Inseto":
		case "Fantasma/Psíquico":
			vitoriaJogador();
			break;
		default:
			empateAtributos();
			break;
	}
}

function fimJogo()
{
	let divMsg = document.getElementById("mensagem-final");
	let btnSortear = document.getElementById("btn-sortear");
	let btnIniciar = document.getElementById("btn-iniciar");

	if (deckCpu.length === 0)
	{
		divMsg.setAttribute("class","text-success");
		divMsg.innerText = `FINALIZADO! Vitória Jogador`;
		btnIniciar.removeAttribute("disabled");
		
	} else if (deckJogador.length === 0)
	{
		divMsg.setAttribute("class","text-danger");
		divMsg.innerText = `FINALIZADO! Vitória Máquina`;
		btnIniciar.removeAttribute("disabled");
	} else
	{
		btnSortear.removeAttribute("disabled");
	}
}

function audioInicio()
{
	let audio = new Audio("https:www.myinstants.com/media/sounds/whos-that-pokemon_.mp3");
	audio.play();
}