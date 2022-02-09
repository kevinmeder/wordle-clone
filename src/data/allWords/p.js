const words = [
  "PAALS",
  "PACAS",
  "PACED",
  "PACER",
  "PACES",
  "PACEY",
  "PACHA",
  "PACKS",
  "PACOS",
  "PACTA",
  "PACTS",
  "PADDY",
  "PADIS",
  "PADLE",
  "PADMA",
  "PADRE",
  "PADRI",
  "PAEAN",
  "PAEON",
  "PAGAN",
  "PAGED",
  "PAGER",
  "PAGES",
  "PAGLE",
  "PAGOD",
  "PAGRI",
  "PAIKS",
  "PAILS",
  "PAINS",
  "PAINT",
  "PAIRE",
  "PAIRS",
  "PAISA",
  "PAISE",
  "PAKKA",
  "PALAS",
  "PALAY",
  "PALEA",
  "PALED",
  "PALER",
  "PALES",
  "PALET",
  "PALKI",
  "PALLA",
  "PALLS",
  "PALLY",
  "PALMS",
  "PALMY",
  "PALPI",
  "PALPS",
  "PALSY",
  "PAMPA",
  "PANAX",
  "PANCE",
  "PANDA",
  "PANDS",
  "PANDY",
  "PANED",
  "PANEL",
  "PANES",
  "PANGA",
  "PANGS",
  "PANIC",
  "PANIM",
  "PANNE",
  "PANSY",
  "PANTO",
  "PANTS",
  "PANTY",
  "PAOLI",
  "PAOLO",
  "PAPAL",
  "PAPAS",
  "PAPAW",
  "PAPER",
  "PAPES",
  "PAPPI",
  "PAPPY",
  "PARAE",
  "PARAS",
  "PARCH",
  "PARDI",
  "PARDS",
  "PARDY",
  "PARED",
  "PAREO",
  "PARER",
  "PARES",
  "PAREU",
  "PAREV",
  "PARGE",
  "PARGO",
  "PARIS",
  "PARKA",
  "PARKI",
  "PARKS",
  "PARKY",
  "PARLE",
  "PARLY",
  "PAROL",
  "PARPS",
  "PARRA",
  "PARRS",
  "PARRY",
  "PARSE",
  "PARTI",
  "PARTS",
  "PARTY",
  "PARVE",
  "PARVO",
  "PASEO",
  "PASES",
  "PASHA",
  "PASHM",
  "PASPY",
  "PASSE",
  "PASTA",
  "PASTE",
  "PASTS",
  "PASTY",
  "PATCH",
  "PATED",
  "PATEN",
  "PATER",
  "PATES",
  "PATHS",
  "PATIN",
  "PATIO",
  "PATLY",
  "PATSY",
  "PATTE",
  "PATTY",
  "PATUS",
  "PAUAS",
  "PAULS",
  "PAUSE",
  "PAVAN",
  "PAVED",
  "PAVEN",
  "PAVER",
  "PAVES",
  "PAVID",
  "PAVIN",
  "PAVIS",
  "PAWAS",
  "PAWAW",
  "PAWED",
  "PAWER",
  "PAWKS",
  "PAWKY",
  "PAWLS",
  "PAWNS",
  "PAXES",
  "PAYED",
  "PAYEE",
  "PAYER",
  "PAYOR",
  "PAYSD",
  "PEACE",
  "PEACH",
  "PEAGE",
  "PEAGS",
  "PEAKS",
  "PEAKY",
  "PEALS",
  "PEANS",
  "PEARE",
  "PEARL",
  "PEARS",
  "PEART",
  "PEASE",
  "PEATS",
  "PEATY",
  "PEAVY",
  "PEAZE",
  "PEBAS",
  "PECAN",
  "PECHS",
  "PECKE",
  "PECKS",
  "PECKY",
  "PEDAL",
  "PEDES",
  "PEDRO",
  "PEECE",
  "PEEKS",
  "PEELS",
  "PEENS",
  "PEEOY",
  "PEEPE",
  "PEEPS",
  "PEERS",
  "PEERY",
  "PEEVE",
  "PEGGY",
  "PEGHS",
  "PEINS",
  "PEISE",
  "PEIZE",
  "PEKAN",
  "PEKES",
  "PEKIN",
  "PEKOE",
  "PELAS",
  "PELES",
  "PELFS",
  "PELLS",
  "PELMA",
  "PELON",
  "PELTA",
  "PELTS",
  "PENAL",
  "PENCE",
  "PENDS",
  "PENDU",
  "PENED",
  "PENES",
  "PENGO",
  "PENIE",
  "PENIS",
  "PENKS",
  "PENNA",
  "PENNE",
  "PENNI",
  "PENNY",
  "PENTS",
  "PEONS",
  "PEONY",
  "PEPLA",
  "PEPOS",
  "PEPPY",
  "PERAI",
  "PERCE",
  "PERCH",
  "PERDU",
  "PERDY",
  "PEREA",
  "PERES",
  "PERIL",
  "PERIS",
  "PERKS",
  "PERKY",
  "PERMS",
  "PERNS",
  "PERPS",
  "PERRY",
  "PERSE",
  "PERST",
  "PERTS",
  "PERVE",
  "PERVS",
  "PESKY",
  "PESOS",
  "PESTO",
  "PESTS",
  "PESTY",
  "PETAL",
  "PETAR",
  "PETER",
  "PETIT",
  "PETRE",
  "PETTI",
  "PETTO",
  "PETTY",
  "PEWEE",
  "PEWIT",
  "PEYSE",
  "PHAGE",
  "PHANG",
  "PHARE",
  "PHASE",
  "PHEER",
  "PHENE",
  "PHEON",
  "PHESE",
  "PHIAL",
  "PHLOX",
  "PHOCA",
  "PHOHS",
  "PHONE",
  "PHONO",
  "PHONS",
  "PHONY",
  "PHOTO",
  "PHOTS",
  "PHPHT",
  "PHUTS",
  "PHYLA",
  "PHYLE",
  "PIANO",
  "PIANS",
  "PIBAL",
  "PICAL",
  "PICAS",
  "PICCY",
  "PICKS",
  "PICKY",
  "PICOT",
  "PICRA",
  "PICUL",
  "PIECE",
  "PIEND",
  "PIERS",
  "PIERT",
  "PIETA",
  "PIETS",
  "PIETY",
  "PIEZO",
  "PIGGY",
  "PIGHT",
  "PIGMY",
  "PIING",
  "PIKAS",
  "PIKAU",
  "PIKED",
  "PIKER",
  "PIKES",
  "PIKEY",
  "PIKIS",
  "PIKUL",
  "PILAF",
  "PILAO",
  "PILAR",
  "PILAU",
  "PILAW",
  "PILCH",
  "PILEA",
  "PILED",
  "PILEI",
  "PILER",
  "PILES",
  "PILIS",
  "PILLS",
  "PILOT",
  "PILOW",
  "PILUM",
  "PILUS",
  "PIMAS",
  "PIMPS",
  "PINAS",
  "PINCH",
  "PINED",
  "PINES",
  "PINEY",
  "PINGO",
  "PINGS",
  "PINKO",
  "PINKS",
  "PINKY",
  "PINNA",
  "PINNY",
  "PINON",
  "PINOT",
  "PINTA",
  "PINTO",
  "PINTS",
  "PINUP",
  "PIONS",
  "PIONY",
  "PIOUS",
  "PIOYE",
  "PIOYS",
  "PIPAL",
  "PIPAS",
  "PIPED",
  "PIPER",
  "PIPES",
  "PIPET",
  "PIPIS",
  "PIPIT",
  "PIPPY",
  "PIPUL",
  "PIQUE",
  "PIRAI",
  "PIRLS",
  "PIRNS",
  "PIROG",
  "PISCO",
  "PISES",
  "PISKY",
  "PISOS",
  "PISTE",
  "PITAS",
  "PITCH",
  "PITHS",
  "PITHY",
  "PITON",
  "PITTA",
  "PIUMS",
  "PIVOT",
  "PIXEL",
  "PIXES",
  "PIXIE",
  "PIZED",
  "PIZES",
  "PIZZA",
  "PLAAS",
  "PLACE",
  "PLACK",
  "PLAGE",
  "PLAID",
  "PLAIN",
  "PLAIT",
  "PLANE",
  "PLANK",
  "PLANS",
  "PLANT",
  "PLAPS",
  "PLASH",
  "PLASM",
  "PLAST",
  "PLATE",
  "PLATS",
  "PLATY",
  "PLAYA",
  "PLAYS",
  "PLAZA",
  "PLEAD",
  "PLEAS",
  "PLEAT",
  "PLEBE",
  "PLEBS",
  "PLENA",
  "PLEON",
  "PLESH",
  "PLEWS",
  "PLICA",
  "PLIED",
  "PLIER",
  "PLIES",
  "PLIMS",
  "PLING",
  "PLINK",
  "PLOAT",
  "PLODS",
  "PLONG",
  "PLONK",
  "PLOOK",
  "PLOPS",
  "PLOTS",
  "PLOTZ",
  "PLOUK",
  "PLOWS",
  "PLOYS",
  "PLUCK",
  "PLUES",
  "PLUFF",
  "PLUGS",
  "PLUMB",
  "PLUME",
  "PLUMP",
  "PLUMS",
  "PLUMY",
  "PLUNK",
  "PLUSH",
  "PLYER",
  "POACH",
  "POAKA",
  "POAKE",
  "POBOY",
  "POCKS",
  "POCKY",
  "PODAL",
  "PODDY",
  "PODEX",
  "PODGE",
  "PODGY",
  "PODIA",
  "POEMS",
  "POEPS",
  "POESY",
  "POETS",
  "POGEY",
  "POGGE",
  "POGOS",
  "POILU",
  "POIND",
  "POINT",
  "POISE",
  "POKAL",
  "POKED",
  "POKER",
  "POKES",
  "POKEY",
  "POKIE",
  "POLAR",
  "POLED",
  "POLER",
  "POLES",
  "POLEY",
  "POLIO",
  "POLIS",
  "POLJE",
  "POLKA",
  "POLKS",
  "POLLS",
  "POLLY",
  "POLOS",
  "POLTS",
  "POLYP",
  "POLYS",
  "POMBE",
  "POMES",
  "POMMY",
  "POMOS",
  "POMPS",
  "PONCE",
  "PONCY",
  "PONDS",
  "PONES",
  "PONEY",
  "PONGA",
  "PONGO",
  "PONGS",
  "PONGY",
  "PONKS",
  "PONTS",
  "PONTY",
  "PONZU",
  "POOCH",
  "POODS",
  "POOED",
  "POOFS",
  "POOFY",
  "POOHS",
  "POOJA",
  "POOKA",
  "POOKS",
  "POOLS",
  "POONS",
  "POOPS",
  "POORI",
  "POORT",
  "POOTS",
  "POOVE",
  "POOVY",
  "POPES",
  "POPPA",
  "POPPY",
  "POPSY",
  "PORAE",
  "PORAL",
  "PORCH",
  "PORED",
  "PORER",
  "PORES",
  "PORGE",
  "PORGY",
  "PORKS",
  "PORKY",
  "PORNO",
  "PORNS",
  "PORNY",
  "PORTA",
  "PORTS",
  "PORTY",
  "POSED",
  "POSER",
  "POSES",
  "POSEY",
  "POSHO",
  "POSIT",
  "POSSE",
  "POSTS",
  "POTAE",
  "POTCH",
  "POTED",
  "POTES",
  "POTIN",
  "POTOO",
  "POTSY",
  "POTTO",
  "POTTS",
  "POTTY",
  "POUCH",
  "POUFF",
  "POUFS",
  "POUKE",
  "POUKS",
  "POULE",
  "POULP",
  "POULT",
  "POUND",
  "POUPE",
  "POUPT",
  "POURS",
  "POUTS",
  "POUTY",
  "POWAN",
  "POWER",
  "POWIN",
  "POWND",
  "POWNS",
  "POWNY",
  "POWRE",
  "POXED",
  "POXES",
  "POYNT",
  "POYOU",
  "POYSE",
  "POZZY",
  "PRAAM",
  "PRADS",
  "PRAHU",
  "PRAMS",
  "PRANA",
  "PRANG",
  "PRANK",
  "PRAOS",
  "PRASE",
  "PRATE",
  "PRATS",
  "PRATT",
  "PRATY",
  "PRAUS",
  "PRAWN",
  "PRAYS",
  "PREDY",
  "PREED",
  "PREEN",
  "PREES",
  "PREIF",
  "PREMS",
  "PREMY",
  "PRENT",
  "PREOP",
  "PREPS",
  "PRESA",
  "PRESE",
  "PRESS",
  "PREST",
  "PREVE",
  "PREXY",
  "PREYS",
  "PRIAL",
  "PRICE",
  "PRICK",
  "PRICY",
  "PRIDE",
  "PRIED",
  "PRIEF",
  "PRIER",
  "PRIES",
  "PRIGS",
  "PRILL",
  "PRIMA",
  "PRIME",
  "PRIMI",
  "PRIMO",
  "PRIMP",
  "PRIMS",
  "PRIMY",
  "PRINK",
  "PRINT",
  "PRION",
  "PRIOR",
  "PRISE",
  "PRISM",
  "PRISS",
  "PRIVY",
  "PRIZE",
  "PROAS",
  "PROBE",
  "PROBS",
  "PRODS",
  "PROEM",
  "PROFS",
  "PROGS",
  "PROIN",
  "PROKE",
  "PROLE",
  "PROLL",
  "PROMO",
  "PROMS",
  "PRONE",
  "PRONG",
  "PRONK",
  "PROOF",
  "PROPS",
  "PRORE",
  "PROSE",
  "PROSO",
  "PROSS",
  "PROST",
  "PROSY",
  "PROUD",
  "PROUL",
  "PROVE",
  "PROWL",
  "PROWS",
  "PROXY",
  "PROYN",
  "PRUDE",
  "PRUNE",
  "PRUNT",
  "PRUTA",
  "PRYER",
  "PRYSE",
  "PSALM",
  "PSEUD",
  "PSHAW",
  "PSION",
  "PSOAE",
  "PSOAI",
  "PSOAS",
  "PSORA",
  "PSYCH",
  "PSYOP",
  "PUBES",
  "PUBIC",
  "PUBIS",
  "PUCAN",
  "PUCER",
  "PUCES",
  "PUCKA",
  "PUCKS",
  "PUDDY",
  "PUDGE",
  "PUDGY",
  "PUDIC",
  "PUDOR",
  "PUDSY",
  "PUDUS",
  "PUERS",
  "PUFFS",
  "PUFFY",
  "PUGGY",
  "PUGIL",
  "PUHAS",
  "PUJAH",
  "PUJAS",
  "PUKED",
  "PUKER",
  "PUKES",
  "PUKKA",
  "PUKUS",
  "PULAO",
  "PULAS",
  "PULED",
  "PULER",
  "PULES",
  "PULIK",
  "PULIS",
  "PULKA",
  "PULKS",
  "PULLI",
  "PULLS",
  "PULMO",
  "PULPS",
  "PULPY",
  "PULSE",
  "PULUS",
  "PUMAS",
  "PUMIE",
  "PUMPS",
  "PUNAS",
  "PUNCE",
  "PUNCH",
  "PUNGA",
  "PUNGS",
  "PUNJI",
  "PUNKA",
  "PUNKS",
  "PUNKY",
  "PUNNY",
  "PUNTO",
  "PUNTS",
  "PUNTY",
  "PUPAE",
  "PUPAL",
  "PUPAS",
  "PUPIL",
  "PUPPY",
  "PUPUS",
  "PURDA",
  "PURED",
  "PUREE",
  "PURER",
  "PURES",
  "PURGE",
  "PURIM",
  "PURIN",
  "PURIS",
  "PURLS",
  "PURPY",
  "PURRS",
  "PURSE",
  "PURSY",
  "PURTY",
  "PUSES",
  "PUSHY",
  "PUSLE",
  "PUSSY",
  "PUTID",
  "PUTON",
  "PUTTI",
  "PUTTO",
  "PUTTS",
  "PUTTY",
  "PUZEL",
  "PYATS",
  "PYETS",
  "PYGAL",
  "PYGMY",
  "PYINS",
  "PYLON",
  "PYNED",
  "PYNES",
  "PYOID",
  "PYOTS",
  "PYRAL",
  "PYRAN",
  "PYRES",
  "PYREX",
  "PYRIC",
  "PYROS",
  "PYXED",
  "PYXES",
  "PYXIE",
  "PYXIS",
  "PZAZZ"
];

export default words;
