const words = [
  "BAAED",
  "BAALS",
  "BABAS",
  "BABEL",
  "BABES",
  "BABKA",
  "BABOO",
  "BABUL",
  "BABUS",
  "BACCA",
  "BACCO",
  "BACCY",
  "BACHA",
  "BACHS",
  "BACKS",
  "BACON",
  "BADDY",
  "BADGE",
  "BADLY",
  "BAELS",
  "BAFFS",
  "BAFFY",
  "BAFTS",
  "BAGEL",
  "BAGGY",
  "BAGHS",
  "BAGIE",
  "BAHTS",
  "BAHUT",
  "BAILS",
  "BAIRN",
  "BAITH",
  "BAITS",
  "BAIZA",
  "BAIZE",
  "BAJAN",
  "BAJRA",
  "BAJRI",
  "BAJUS",
  "BAKED",
  "BAKEN",
  "BAKER",
  "BAKES",
  "BAKRA",
  "BALAS",
  "BALDS",
  "BALDY",
  "BALED",
  "BALER",
  "BALES",
  "BALKS",
  "BALKY",
  "BALLS",
  "BALLY",
  "BALMS",
  "BALMY",
  "BALOO",
  "BALSA",
  "BALTI",
  "BALUN",
  "BALUS",
  "BAMBI",
  "BANAK",
  "BANAL",
  "BANCO",
  "BANCS",
  "BANDA",
  "BANDH",
  "BANDS",
  "BANDY",
  "BANED",
  "BANES",
  "BANGS",
  "BANIA",
  "BANJO",
  "BANKS",
  "BANNS",
  "BANTS",
  "BANTU",
  "BANTY",
  "BAPUS",
  "BARBE",
  "BARBS",
  "BARBY",
  "BARCA",
  "BARDE",
  "BARDO",
  "BARDS",
  "BARDY",
  "BARED",
  "BARER",
  "BARES",
  "BARFS",
  "BARGE",
  "BARIC",
  "BARKS",
  "BARKY",
  "BARMS",
  "BARMY",
  "BARNS",
  "BARNY",
  "BARON",
  "BARPS",
  "BARRA",
  "BARRE",
  "BARRO",
  "BARRY",
  "BARYE",
  "BASAL",
  "BASAN",
  "BASED",
  "BASER",
  "BASES",
  "BASHO",
  "BASIC",
  "BASIL",
  "BASIN",
  "BASIS",
  "BASKS",
  "BASON",
  "BASSE",
  "BASSI",
  "BASSO",
  "BASSY",
  "BASTA",
  "BASTE",
  "BASTI",
  "BASTO",
  "BASTS",
  "BATCH",
  "BATED",
  "BATES",
  "BATHE",
  "BATHS",
  "BATIK",
  "BATON",
  "BATTA",
  "BATTS",
  "BATTU",
  "BATTY",
  "BAUDS",
  "BAUKS",
  "BAULK",
  "BAURS",
  "BAVIN",
  "BAWDS",
  "BAWDY",
  "BAWLS",
  "BAWNS",
  "BAWRS",
  "BAWTY",
  "BAYED",
  "BAYES",
  "BAYLE",
  "BAYOU",
  "BAYTS",
  "BAZAR",
  "BAZOO",
  "BEACH",
  "BEADS",
  "BEADY",
  "BEAKS",
  "BEAKY",
  "BEAMS",
  "BEAMY",
  "BEANO",
  "BEANS",
  "BEANY",
  "BEARD",
  "BEARE",
  "BEARS",
  "BEAST",
  "BEATH",
  "BEATS",
  "BEATY",
  "BEAUS",
  "BEAUT",
  "BEAUX",
  "BEBOP",
  "BECAP",
  "BECKE",
  "BECKS",
  "BEDAD",
  "BEDEL",
  "BEDES",
  "BEDEW",
  "BEDIM",
  "BEDYE",
  "BEECH",
  "BEEDI",
  "BEEFS",
  "BEEFY",
  "BEEPS",
  "BEERS",
  "BEERY",
  "BEETS",
  "BEFIT",
  "BEFOG",
  "BEGAD",
  "BEGAN",
  "BEGAR",
  "BEGAT",
  "BEGEM",
  "BEGET",
  "BEGIN",
  "BEGOT",
  "BEGUM",
  "BEGUN",
  "BEIGE",
  "BEIGY",
  "BEING",
  "BEKAH",
  "BELAH",
  "BELAR",
  "BELAY",
  "BELCH",
  "BELEE",
  "BELGA",
  "BELIE",
  "BELLE",
  "BELLS",
  "BELLY",
  "BELON",
  "BELOW",
  "BELTS",
  "BEMAD",
  "BEMAS",
  "BEMIX",
  "BEMUD",
  "BENCH",
  "BENDS",
  "BENDY",
  "BENES",
  "BENET",
  "BENIS",
  "BENNE",
  "BENNI",
  "BENNY",
  "BENTO",
  "BENTS",
  "BENTY",
  "BEPAT",
  "BERAY",
  "BERES",
  "BERET",
  "BERGS",
  "BERKO",
  "BERKS",
  "BERME",
  "BERMS",
  "BEROB",
  "BERRY",
  "BERTH",
  "BERYL",
  "BESAT",
  "BESAW",
  "BESEE",
  "BESES",
  "BESET",
  "BESIT",
  "BESOM",
  "BESOT",
  "BESTI",
  "BESTS",
  "BETAS",
  "BETED",
  "BETEL",
  "BETES",
  "BETHS",
  "BETID",
  "BETON",
  "BETTA",
  "BETTY",
  "BEVEL",
  "BEVER",
  "BEVOR",
  "BEVUE",
  "BEVVY",
  "BEWET",
  "BEWIG",
  "BEZEL",
  "BEZES",
  "BEZIL",
  "BHAJI",
  "BHANG",
  "BHELS",
  "BHOOT",
  "BHUNA",
  "BHUTS",
  "BIALI",
  "BIALY",
  "BIBBS",
  "BIBLE",
  "BICCY",
  "BICEP",
  "BICES",
  "BIDDY",
  "BIDED",
  "BIDER",
  "BIDES",
  "BIDET",
  "BIDIS",
  "BIDON",
  "BIELD",
  "BIERS",
  "BIFFO",
  "BIFFS",
  "BIFFY",
  "BIFID",
  "BIGAE",
  "BIGGS",
  "BIGGY",
  "BIGHA",
  "BIGHT",
  "BIGLY",
  "BIGOS",
  "BIGOT",
  "BIJOU",
  "BIKED",
  "BIKER",
  "BIKES",
  "BIKIE",
  "BILBO",
  "BILBY",
  "BILED",
  "BILES",
  "BILGE",
  "BILGY",
  "BILKS",
  "BILLS",
  "BILLY",
  "BIMAH",
  "BIMAS",
  "BIMBO",
  "BINAL",
  "BINDI",
  "BINDS",
  "BINER",
  "BINES",
  "BINGE",
  "BINGO",
  "BINGS",
  "BINGY",
  "BINIT",
  "BINKS",
  "BINTS",
  "BIOGS",
  "BIOME",
  "BIONT",
  "BIOTA",
  "BIPED",
  "BIPOD",
  "BIRCH",
  "BIRDS",
  "BIRKS",
  "BIRLE",
  "BIRLS",
  "BIROS",
  "BIRRS",
  "BIRSE",
  "BIRSY",
  "BIRTH",
  "BISES",
  "BISKS",
  "BISON",
  "BITCH",
  "BITER",
  "BITES",
  "BITOS",
  "BITOU",
  "BITSY",
  "BITTE",
  "BITTS",
  "BITTY",
  "BIVIA",
  "BIVVY",
  "BIZES",
  "BIZZO",
  "BIZZY",
  "BLABS",
  "BLACK",
  "BLADE",
  "BLADS",
  "BLADY",
  "BLAER",
  "BLAES",
  "BLAFF",
  "BLAGS",
  "BLAHS",
  "BLAIN",
  "BLAME",
  "BLAMS",
  "BLAND",
  "BLANK",
  "BLARE",
  "BLART",
  "BLASE",
  "BLASH",
  "BLAST",
  "BLATE",
  "BLATS",
  "BLATT",
  "BLAUD",
  "BLAWN",
  "BLAWS",
  "BLAYS",
  "BLAZE",
  "BLEAK",
  "BLEAR",
  "BLEAT",
  "BLEBS",
  "BLEED",
  "BLEEP",
  "BLEES",
  "BLEND",
  "BLENT",
  "BLERT",
  "BLESS",
  "BLEST",
  "BLETS",
  "BLEYS",
  "BLIMP",
  "BLIMY",
  "BLIND",
  "BLING",
  "BLINI",
  "BLINK",
  "BLINS",
  "BLINY",
  "BLIPS",
  "BLISS",
  "BLIST",
  "BLITE",
  "BLITZ",
  "BLIVE",
  "BLOAT",
  "BLOBS",
  "BLOCK",
  "BLOCS",
  "BLOGS",
  "BLOKE",
  "BLOND",
  "BLOOD",
  "BLOOM",
  "BLOOP",
  "BLORE",
  "BLOTS",
  "BLOWN",
  "BLOWS",
  "BLOWY",
  "BLUBS",
  "BLUDE",
  "BLUDY",
  "BLUED",
  "BLUER",
  "BLUES",
  "BLUET",
  "BLUEY",
  "BLUFF",
  "BLUID",
  "BLUME",
  "BLUNK",
  "BLUNT",
  "BLURB",
  "BLURS",
  "BLURT",
  "BLUSH",
  "BLYPE",
  "BOABS",
  "BOAKS",
  "BOARD",
  "BOARS",
  "BOART",
  "BOAST",
  "BOATS",
  "BOBAC",
  "BOBAK",
  "BOBAS",
  "BOBBY",
  "BOBOL",
  "BOCCA",
  "BOCCE",
  "BOCCI",
  "BOCHE",
  "BOCKS",
  "BODED",
  "BODES",
  "BODGE",
  "BODLE",
  "BOEPS",
  "BOETS",
  "BOEUF",
  "BOFFO",
  "BOFFS",
  "BOGAN",
  "BOGEY",
  "BOGGY",
  "BOGIE",
  "BOGLE",
  "BOGUS",
  "BOHEA",
  "BOHOS",
  "BOILS",
  "BOING",
  "BOINK",
  "BOITE",
  "BOKED",
  "BOKES",
  "BOKOS",
  "BOLAR",
  "BOLAS",
  "BOLDS",
  "BOLES",
  "BOLIX",
  "BOLLS",
  "BOLOS",
  "BOLTS",
  "BOLUS",
  "BOMAS",
  "BOMBE",
  "BOMBO",
  "BOMBS",
  "BONCE",
  "BONDS",
  "BONED",
  "BONER",
  "BONES",
  "BONEY",
  "BONGO",
  "BONGS",
  "BONIE",
  "BONKS",
  "BONNE",
  "BONNY",
  "BONUS",
  "BONZA",
  "BONZE",
  "BOOBS",
  "BOOBY",
  "BOODY",
  "BOOED",
  "BOOFY",
  "BOOGY",
  "BOOHS",
  "BOOKS",
  "BOOKY",
  "BOOLS",
  "BOOMS",
  "BOOMY",
  "BOONG",
  "BOONS",
  "BOORD",
  "BOORS",
  "BOOSE",
  "BOOST",
  "BOOTH",
  "BOOTS",
  "BOOTY",
  "BOOZE",
  "BOOZY",
  "BORAK",
  "BORAL",
  "BORAS",
  "BORAX",
  "BORDE",
  "BORDS",
  "BORED",
  "BOREE",
  "BOREL",
  "BORER",
  "BORES",
  "BORGO",
  "BORIC",
  "BORKS",
  "BORMS",
  "BORNA",
  "BORNE",
  "BORON",
  "BORTS",
  "BORTY",
  "BORTZ",
  "BOSKS",
  "BOSKY",
  "BOSOM",
  "BOSON",
  "BOSSY",
  "BOSUN",
  "BOTAS",
  "BOTCH",
  "BOTEL",
  "BOTHY",
  "BOTTE",
  "BOTTS",
  "BOTTY",
  "BOUGE",
  "BOUGH",
  "BOUKS",
  "BOULE",
  "BOULT",
  "BOUND",
  "BOUNS",
  "BOURD",
  "BOURG",
  "BOURN",
  "BOUSE",
  "BOUSY",
  "BOUTS",
  "BOVID",
  "BOWAT",
  "BOWED",
  "BOWEL",
  "BOWER",
  "BOWES",
  "BOWET",
  "BOWIE",
  "BOWLS",
  "BOWNE",
  "BOWRS",
  "BOWSE",
  "BOXED",
  "BOXEN",
  "BOXER",
  "BOXES",
  "BOYAR",
  "BOYAU",
  "BOYED",
  "BOYFS",
  "BOYGS",
  "BOYLA",
  "BOYOS",
  "BOYSY",
  "BOZOS",
  "BRAAI",
  "BRACE",
  "BRACH",
  "BRACK",
  "BRACT",
  "BRADS",
  "BRAES",
  "BRAGS",
  "BRAID",
  "BRAIL",
  "BRAIN",
  "BRAKE",
  "BRAKS",
  "BRAKY",
  "BRAME",
  "BRAND",
  "BRANK",
  "BRANS",
  "BRANT",
  "BRASH",
  "BRASS",
  "BRAST",
  "BRATS",
  "BRAVA",
  "BRAVE",
  "BRAVI",
  "BRAVO",
  "BRAWL",
  "BRAWN",
  "BRAWS",
  "BRAXY",
  "BRAYS",
  "BRAZA",
  "BRAZE",
  "BREAD",
  "BREAK",
  "BREAM",
  "BREDE",
  "BREDS",
  "BREED",
  "BREEM",
  "BREER",
  "BREES",
  "BREID",
  "BREIS",
  "BREME",
  "BRENS",
  "BRENT",
  "BRERE",
  "BRERS",
  "BREVE",
  "BREWS",
  "BREYS",
  "BRIAR",
  "BRIBE",
  "BRICK",
  "BRIDE",
  "BRIEF",
  "BRIER",
  "BRIES",
  "BRIGS",
  "BRIKS",
  "BRILL",
  "BRIMS",
  "BRINE",
  "BRING",
  "BRINK",
  "BRINS",
  "BRINY",
  "BRIOS",
  "BRISE",
  "BRISK",
  "BRISS",
  "BRITH",
  "BRITS",
  "BRITT",
  "BRIZE",
  "BROAD",
  "BROCH",
  "BROCK",
  "BRODS",
  "BROGH",
  "BROGS",
  "BROIL",
  "BROKE",
  "BROME",
  "BROMO",
  "BRONC",
  "BROND",
  "BROOD",
  "BROOK",
  "BROOL",
  "BROOM",
  "BROOS",
  "BROSE",
  "BROSY",
  "BROTH",
  "BROWN",
  "BROWS",
  "BRUGH",
  "BRUIN",
  "BRUIT",
  "BRULE",
  "BRUME",
  "BRUNG",
  "BRUNT",
  "BRUSH",
  "BRUSK",
  "BRUST",
  "BRUTE",
  "BRUTS",
  "BUATS",
  "BUAZE",
  "BUBAL",
  "BUBAS",
  "BUBBA",
  "BUBBY",
  "BUBUS",
  "BUCHU",
  "BUCKO",
  "BUCKS",
  "BUCKU",
  "BUDAS",
  "BUDDY",
  "BUDGE",
  "BUDIS",
  "BUDOS",
  "BUFFA",
  "BUFFE",
  "BUFFI",
  "BUFFO",
  "BUFFS",
  "BUFFY",
  "BUFOS",
  "BUGGY",
  "BUGLE",
  "BUHLS",
  "BUHRS",
  "BUIKS",
  "BUILD",
  "BUILT",
  "BUIST",
  "BUKES",
  "BULBS",
  "BULGE",
  "BULGY",
  "BULKS",
  "BULKY",
  "BULLA",
  "BULLS",
  "BULLY",
  "BULSE",
  "BUMBO",
  "BUMFS",
  "BUMPH",
  "BUMPS",
  "BUMPY",
  "BUNAS",
  "BUNCE",
  "BUNCH",
  "BUNCO",
  "BUNDE",
  "BUNDH",
  "BUNDS",
  "BUNDT",
  "BUNDU",
  "BUNDY",
  "BUNGS",
  "BUNGY",
  "BUNIA",
  "BUNJE",
  "BUNJY",
  "BUNKO",
  "BUNKS",
  "BUNNS",
  "BUNNY",
  "BUNTS",
  "BUNTY",
  "BUNYA",
  "BUOYS",
  "BUPPY",
  "BURAN",
  "BURAS",
  "BURBS",
  "BURDS",
  "BURET",
  "BURGH",
  "BURGS",
  "BURIN",
  "BURKA",
  "BURKE",
  "BURKS",
  "BURLS",
  "BURLY",
  "BURNS",
  "BURNT",
  "BUROO",
  "BURPS",
  "BURQA",
  "BURRO",
  "BURRS",
  "BURRY",
  "BURSA",
  "BURSE",
  "BURST",
  "BUSBY",
  "BUSED",
  "BUSES",
  "BUSHY",
  "BUSKS",
  "BUSKY",
  "BUSSU",
  "BUSTI",
  "BUSTS",
  "BUSTY",
  "BUTCH",
  "BUTEO",
  "BUTES",
  "BUTLE",
  "BUTTE",
  "BUTTS",
  "BUTTY",
  "BUTUT",
  "BUTYL",
  "BUXOM",
  "BUYER",
  "BUZZY",
  "BWANA",
  "BWAZI",
  "BYDED",
  "BYDES",
  "BYKED",
  "BYKES",
  "BYLAW",
  "BYRES",
  "BYRLS",
  "BYSSI",
  "BYTES",
  "BYWAY"
];

export default words;