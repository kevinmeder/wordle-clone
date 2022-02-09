const words = [
  "CAAED",
  "CABAL",
  "CABAS",
  "CABBY",
  "CABER",
  "CABIN",
  "CABLE",
  "CABOB",
  "CABOC",
  "CABRE",
  "CACAO",
  "CACAS",
  "CACHE",
  "CACKY",
  "CACTI",
  "CADDY",
  "CADEE",
  "CADES",
  "CADET",
  "CADGE",
  "CADGY",
  "CADIE",
  "CADIS",
  "CADRE",
  "CAECA",
  "CAESE",
  "CAFES",
  "CAFFS",
  "CAGED",
  "CAGER",
  "CAGES",
  "CAGEY",
  "CAGOT",
  "CAHOW",
  "CAIDS",
  "CAINS",
  "CAIRD",
  "CAIRN",
  "CAJON",
  "CAJUN",
  "CAKED",
  "CAKES",
  "CAKEY",
  "CALFS",
  "CALID",
  "CALIF",
  "CALIX",
  "CALKS",
  "CALLA",
  "CALLS",
  "CALMS",
  "CALMY",
  "CALOS",
  "CALPA",
  "CALPS",
  "CALVE",
  "CALYX",
  "CAMAN",
  "CAMAS",
  "CAMEL",
  "CAMEO",
  "CAMES",
  "CAMIS",
  "CAMOS",
  "CAMPI",
  "CAMPO",
  "CAMPS",
  "CAMPY",
  "CAMUS",
  "CANAL",
  "CANDY",
  "CANED",
  "CANEH",
  "CANER",
  "CANES",
  "CANGS",
  "CANID",
  "CANNA",
  "CANNS",
  "CANNY",
  "CANOE",
  "CANON",
  "CANSO",
  "CANST",
  "CANTO",
  "CANTS",
  "CANTY",
  "CAPAS",
  "CAPED",
  "CAPER",
  "CAPES",
  "CAPHS",
  "CAPIZ",
  "CAPLE",
  "CAPON",
  "CAPOS",
  "CAPOT",
  "CAPUL",
  "CAPUT",
  "CARAP",
  "CARAT",
  "CARBO",
  "CARBS",
  "CARBY",
  "CARDI",
  "CARDS",
  "CARDY",
  "CARED",
  "CARER",
  "CARES",
  "CARET",
  "CAREX",
  "CARGO",
  "CARKS",
  "CARLE",
  "CARLS",
  "CARNS",
  "CARNY",
  "CAROB",
  "CAROL",
  "CAROM",
  "CARPI",
  "CARPS",
  "CARRS",
  "CARRY",
  "CARSE",
  "CARTA",
  "CARTE",
  "CARTS",
  "CARVE",
  "CARVY",
  "CASAS",
  "CASCO",
  "CASED",
  "CASES",
  "CASKS",
  "CASKY",
  "CASTE",
  "CASTS",
  "CASUS",
  "CATCH",
  "CATER",
  "CATES",
  "CATTY",
  "CAUDA",
  "CAUKS",
  "CAULD",
  "CAULK",
  "CAULS",
  "CAUMS",
  "CAUPS",
  "CAUSA",
  "CAUSE",
  "CAVAS",
  "CAVED",
  "CAVEL",
  "CAVER",
  "CAVES",
  "CAVIE",
  "CAVIL",
  "CAWED",
  "CAWKS",
  "CAXON",
  "CEASE",
  "CEAZE",
  "CEBID",
  "CECAL",
  "CECUM",
  "CEDAR",
  "CEDED",
  "CEDER",
  "CEDES",
  "CEDIS",
  "CEIBA",
  "CEILI",
  "CEILS",
  "CELEB",
  "CELLA",
  "CELLI",
  "CELLO",
  "CELLS",
  "CELOM",
  "CELTS",
  "CENSE",
  "CENTO",
  "CENTS",
  "CENTU",
  "CEORL",
  "CEPES",
  "CERCI",
  "CERED",
  "CERES",
  "CERGE",
  "CERIA",
  "CERIC",
  "CERNE",
  "CEROS",
  "CERTS",
  "CESSE",
  "CESTA",
  "CESTI",
  "CETES",
  "CETYL",
  "CHACE",
  "CHACK",
  "CHACO",
  "CHADO",
  "CHADS",
  "CHAFE",
  "CHAFF",
  "CHAFT",
  "CHAIN",
  "CHAIR",
  "CHAIS",
  "CHALK",
  "CHALS",
  "CHAMP",
  "CHAMS",
  "CHANG",
  "CHANK",
  "CHANT",
  "CHAOS",
  "CHAPE",
  "CHAPS",
  "CHAPT",
  "CHARA",
  "CHARD",
  "CHARE",
  "CHARK",
  "CHARM",
  "CHARR",
  "CHARS",
  "CHART",
  "CHARY",
  "CHASE",
  "CHASM",
  "CHATS",
  "CHAVE",
  "CHAVS",
  "CHAWK",
  "CHAWS",
  "CHAYA",
  "CHAYS",
  "CHEAP",
  "CHEAT",
  "CHECK",
  "CHEEK",
  "CHEEP",
  "CHEER",
  "CHEFS",
  "CHEKA",
  "CHELA",
  "CHELP",
  "CHEMO",
  "CHERE",
  "CHERT",
  "CHESS",
  "CHEST",
  "CHETH",
  "CHEVY",
  "CHEWS",
  "CHEWY",
  "CHIAO",
  "CHIAS",
  "CHIBS",
  "CHICA",
  "CHICH",
  "CHICK",
  "CHICO",
  "CHICS",
  "CHIDE",
  "CHIEF",
  "CHIEL",
  "CHIKS",
  "CHILD",
  "CHILE",
  "CHILI",
  "CHILL",
  "CHIMB",
  "CHIME",
  "CHIMO",
  "CHIMP",
  "CHINA",
  "CHINE",
  "CHINK",
  "CHINO",
  "CHINS",
  "CHIPS",
  "CHIRK",
  "CHIRL",
  "CHIRM",
  "CHIRO",
  "CHIRP",
  "CHIRR",
  "CHIRT",
  "CHIRU",
  "CHITS",
  "CHIVE",
  "CHIVS",
  "CHIVY",
  "CHIZZ",
  "CHOCK",
  "CHOCO",
  "CHOCS",
  "CHODE",
  "CHOGS",
  "CHOIR",
  "CHOKE",
  "CHOKO",
  "CHOKY",
  "CHOLA",
  "CHOLI",
  "CHOLO",
  "CHOMP",
  "CHONS",
  "CHOOF",
  "CHOOK",
  "CHOOM",
  "CHOPS",
  "CHORD",
  "CHORE",
  "CHOSE",
  "CHOTA",
  "CHOTT",
  "CHOUT",
  "CHOUX",
  "CHOWK",
  "CHOWS",
  "CHUBS",
  "CHUCK",
  "CHUFA",
  "CHUFF",
  "CHUGS",
  "CHUMP",
  "CHUMS",
  "CHUNK",
  "CHURL",
  "CHURN",
  "CHURR",
  "CHUSE",
  "CHUTE",
  "CHYLE",
  "CHYME",
  "CHYND",
  "CIAOS",
  "CIBOL",
  "CIDED",
  "CIDER",
  "CIDES",
  "CIELS",
  "CIGAR",
  "CIGGY",
  "CILIA",
  "CILLS",
  "CIMAR",
  "CIMEX",
  "CINCH",
  "CINCT",
  "CINES",
  "CIONS",
  "CIPPI",
  "CIRCA",
  "CIRCS",
  "CIRES",
  "CIRLS",
  "CIRRI",
  "CISCO",
  "CISSY",
  "CISTS",
  "CITAL",
  "CITED",
  "CITER",
  "CITES",
  "CIVES",
  "CIVET",
  "CIVIC",
  "CIVIE",
  "CIVIL",
  "CIVVY",
  "CLACH",
  "CLACK",
  "CLADE",
  "CLADS",
  "CLAES",
  "CLAGS",
  "CLAIM",
  "CLAME",
  "CLAMP",
  "CLAMS",
  "CLANG",
  "CLANK",
  "CLANS",
  "CLAPS",
  "CLAPT",
  "CLARO",
  "CLART",
  "CLARY",
  "CLASH",
  "CLASP",
  "CLASS",
  "CLAST",
  "CLATS",
  "CLAUT",
  "CLAVE",
  "CLAVI",
  "CLAWS",
  "CLAYS",
  "CLEAN",
  "CLEAR",
  "CLEAT",
  "CLECK",
  "CLEEK",
  "CLEEP",
  "CLEFS",
  "CLEFT",
  "CLEGS",
  "CLEIK",
  "CLEMS",
  "CLEPE",
  "CLEPT",
  "CLERK",
  "CLEVE",
  "CLEWS",
  "CLICK",
  "CLIED",
  "CLIES",
  "CLIFF",
  "CLIFT",
  "CLIMB",
  "CLIME",
  "CLINE",
  "CLING",
  "CLINK",
  "CLINT",
  "CLIPE",
  "CLIPS",
  "CLIPT",
  "CLOAK",
  "CLOAM",
  "CLOCK",
  "CLODS",
  "CLOFF",
  "CLOGS",
  "CLOKE",
  "CLOMB",
  "CLOMP",
  "CLONE",
  "CLONK",
  "CLONS",
  "CLOOP",
  "CLOOT",
  "CLOPS",
  "CLOSE",
  "CLOTE",
  "CLOTH",
  "CLOTS",
  "CLOUD",
  "CLOUR",
  "CLOUS",
  "CLOUT",
  "CLOVE",
  "CLOWN",
  "CLOWS",
  "CLOYE",
  "CLOYS",
  "CLOZE",
  "CLUBS",
  "CLUCK",
  "CLUED",
  "CLUES",
  "CLUMP",
  "CLUNG",
  "CLUNK",
  "CLYPE",
  "CNIDA",
  "COACH",
  "COACT",
  "COALA",
  "COALS",
  "COALY",
  "COAPT",
  "COARB",
  "COAST",
  "COATE",
  "COATI",
  "COATS",
  "COBBS",
  "COBBY",
  "COBIA",
  "COBLE",
  "COBRA",
  "COBZA",
  "COCAS",
  "COCCI",
  "COCCO",
  "COCKS",
  "COCKY",
  "COCOA",
  "COCOS",
  "CODAS",
  "CODEC",
  "CODED",
  "CODEN",
  "CODER",
  "CODES",
  "CODEX",
  "CODON",
  "COEDS",
  "COFFS",
  "COGIE",
  "COGON",
  "COGUE",
  "COHAB",
  "COHOE",
  "COHOG",
  "COHOS",
  "COIFS",
  "COIGN",
  "COILS",
  "COINS",
  "COIRS",
  "COITS",
  "COKED",
  "COKES",
  "COLAS",
  "COLBY",
  "COLDS",
  "COLED",
  "COLES",
  "COLEY",
  "COLIC",
  "COLIN",
  "COLLS",
  "COLLY",
  "COLOG",
  "COLON",
  "COLOR",
  "COLTS",
  "COLZA",
  "COMAE",
  "COMAL",
  "COMAS",
  "COMBE",
  "COMBI",
  "COMBO",
  "COMBS",
  "COMBY",
  "COMER",
  "COMES",
  "COMET",
  "COMFY",
  "COMIC",
  "COMIX",
  "COMMA",
  "COMMO",
  "COMMS",
  "COMMY",
  "COMPO",
  "COMPS",
  "COMPT",
  "COMTE",
  "COMUS",
  "CONCH",
  "CONDO",
  "CONED",
  "CONES",
  "CONEY",
  "CONFS",
  "CONGA",
  "CONGE",
  "CONGO",
  "CONIA",
  "CONIC",
  "CONIN",
  "CONKS",
  "CONKY",
  "CONNE",
  "CONNS",
  "CONTE",
  "CONTO",
  "CONUS",
  "CONVO",
  "COOCH",
  "COOED",
  "COOEE",
  "COOER",
  "COOEY",
  "COOFS",
  "COOKS",
  "COOKY",
  "COOLS",
  "COOLY",
  "COOMB",
  "COOMS",
  "COOMY",
  "COONS",
  "COOPS",
  "COOPT",
  "COOST",
  "COOTS",
  "COOZE",
  "COPAL",
  "COPAY",
  "COPED",
  "COPEN",
  "COPER",
  "COPES",
  "COPPY",
  "COPRA",
  "COPSE",
  "COPSY",
  "CORAL",
  "CORAM",
  "CORBE",
  "CORBY",
  "CORDS",
  "CORED",
  "CORER",
  "CORES",
  "COREY",
  "CORGI",
  "CORIA",
  "CORKS",
  "CORKY",
  "CORMS",
  "CORNI",
  "CORNO",
  "CORNS",
  "CORNU",
  "CORNY",
  "CORPS",
  "CORSE",
  "CORSO",
  "COSEC",
  "COSED",
  "COSES",
  "COSET",
  "COSEY",
  "COSIE",
  "COSTA",
  "COSTE",
  "COSTS",
  "COTAN",
  "COTED",
  "COTES",
  "COTHS",
  "COTTA",
  "COTTS",
  "COUCH",
  "COUDE",
  "COUGH",
  "COULD",
  "COUNT",
  "COUPE",
  "COUPS",
  "COURB",
  "COURD",
  "COURE",
  "COURS",
  "COURT",
  "COUTH",
  "COVED",
  "COVEN",
  "COVER",
  "COVES",
  "COVET",
  "COVEY",
  "COVIN",
  "COWAL",
  "COWAN",
  "COWED",
  "COWER",
  "COWKS",
  "COWLS",
  "COWPS",
  "COWRY",
  "COXAE",
  "COXAL",
  "COXED",
  "COXES",
  "COYED",
  "COYER",
  "COYLY",
  "COYPU",
  "COZED",
  "COZEN",
  "COZES",
  "COZEY",
  "COZIE",
  "CRAAL",
  "CRABS",
  "CRACK",
  "CRAFT",
  "CRAGS",
  "CRAIC",
  "CRAIG",
  "CRAKE",
  "CRAME",
  "CRAMP",
  "CRAMS",
  "CRANE",
  "CRANK",
  "CRANS",
  "CRAPE",
  "CRAPS",
  "CRAPY",
  "CRARE",
  "CRASH",
  "CRASS",
  "CRATE",
  "CRAVE",
  "CRAWL",
  "CRAWS",
  "CRAYS",
  "CRAZE",
  "CRAZY",
  "CREAK",
  "CREAM",
  "CREDO",
  "CREDS",
  "CREED",
  "CREEK",
  "CREEL",
  "CREEP",
  "CREES",
  "CREME",
  "CREMS",
  "CRENA",
  "CREPE",
  "CREPT",
  "CREPY",
  "CRESS",
  "CREST",
  "CREWE",
  "CREWS",
  "CRIBS",
  "CRICK",
  "CRIED",
  "CRIER",
  "CRIES",
  "CRIME",
  "CRIMP",
  "CRIMS",
  "CRINE",
  "CRIOS",
  "CRIPE",
  "CRISE",
  "CRISP",
  "CRITH",
  "CRITS",
  "CROAK",
  "CROCI",
  "CROCK",
  "CROCS",
  "CROFT",
  "CROGS",
  "CROMB",
  "CROME",
  "CRONE",
  "CRONK",
  "CRONY",
  "CROOK",
  "CROOL",
  "CROON",
  "CROPS",
  "CRORE",
  "CROSS",
  "CROST",
  "CROUP",
  "CROUT",
  "CROWD",
  "CROWN",
  "CROWS",
  "CROZE",
  "CRUCK",
  "CRUDE",
  "CRUDS",
  "CRUDY",
  "CRUEL",
  "CRUES",
  "CRUET",
  "CRUMB",
  "CRUMP",
  "CRUOR",
  "CRURA",
  "CRUSE",
  "CRUSH",
  "CRUST",
  "CRUSY",
  "CRUVE",
  "CRWTH",
  "CRYPT",
  "CTENE",
  "CUBBY",
  "CUBEB",
  "CUBED",
  "CUBER",
  "CUBES",
  "CUBIC",
  "CUBIT",
  "CUDDY",
  "CUFFO",
  "CUFFS",
  "CUIFS",
  "CUING",
  "CUISH",
  "CUITS",
  "CUKES",
  "CULCH",
  "CULET",
  "CULEX",
  "CULLS",
  "CULLY",
  "CULMS",
  "CULPA",
  "CULTI",
  "CULTS",
  "CULTY",
  "CUMEC",
  "CUMIN",
  "CUNDY",
  "CUNEI",
  "CUNTS",
  "CUPEL",
  "CUPID",
  "CUPPA",
  "CUPPY",
  "CURAT",
  "CURBS",
  "CURCH",
  "CURDS",
  "CURDY",
  "CURED",
  "CURER",
  "CURES",
  "CURET",
  "CURFS",
  "CURIA",
  "CURIE",
  "CURIO",
  "CURLI",
  "CURLS",
  "CURLY",
  "CURNS",
  "CURNY",
  "CURRS",
  "CURRY",
  "CURSE",
  "CURSI",
  "CURST",
  "CURVE",
  "CURVY",
  "CUSEC",
  "CUSHY",
  "CUSKS",
  "CUSPS",
  "CUSSO",
  "CUTCH",
  "CUTER",
  "CUTES",
  "CUTEY",
  "CUTIE",
  "CUTIN",
  "CUTIS",
  "CUTTO",
  "CUTTY",
  "CUTUP",
  "CUVEE",
  "CWTCH",
  "CYANO",
  "CYANS",
  "CYBER",
  "CYCAD",
  "CYCAS",
  "CYCLE",
  "CYCLO",
  "CYDER",
  "CYLIX",
  "CYMAE",
  "CYMAR",
  "CYMAS",
  "CYMES",
  "CYMOL",
  "CYNIC",
  "CYSTS",
  "CYTES",
  "CYTON",
  "CZARS"
];

export default words;