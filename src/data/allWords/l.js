const words = [
  "LAARI",
  "LABDA",
  "LABEL",
  "LABIA",
  "LABIS",
  "LABOR",
  "LABRA",
  "LACED",
  "LACER",
  "LACES",
  "LACET",
  "LACEY",
  "LACKS",
  "LADED",
  "LADEN",
  "LADER",
  "LADES",
  "LADLE",
  "LAERS",
  "LAEVO",
  "LAGAN",
  "LAGER",
  "LAHAR",
  "LAICH",
  "LAICS",
  "LAIDS",
  "LAIGH",
  "LAIKA",
  "LAIKS",
  "LAIRD",
  "LAIRS",
  "LAIRY",
  "LAITH",
  "LAITY",
  "LAKED",
  "LAKER",
  "LAKES",
  "LAKHS",
  "LAKIN",
  "LAKSA",
  "LALDY",
  "LALLS",
  "LAMAS",
  "LAMBS",
  "LAMBY",
  "LAMED",
  "LAMER",
  "LAMES",
  "LAMIA",
  "LAMMY",
  "LAMPS",
  "LANAI",
  "LANAS",
  "LANCE",
  "LANCH",
  "LANDE",
  "LANDS",
  "LANES",
  "LANKS",
  "LANKY",
  "LANTS",
  "LAPEL",
  "LAPIN",
  "LAPIS",
  "LAPJE",
  "LAPSE",
  "LARCH",
  "LARDS",
  "LARDY",
  "LAREE",
  "LARES",
  "LARGE",
  "LARGO",
  "LARIS",
  "LARKS",
  "LARKY",
  "LARNS",
  "LARUM",
  "LARVA",
  "LASED",
  "LASER",
  "LASES",
  "LASSI",
  "LASSO",
  "LASSU",
  "LASTS",
  "LATAH",
  "LATCH",
  "LATED",
  "LATEN",
  "LATER",
  "LATEX",
  "LATHE",
  "LATHI",
  "LATHS",
  "LATHY",
  "LATKE",
  "LATTE",
  "LAUAN",
  "LAUCH",
  "LAUDS",
  "LAUFS",
  "LAUGH",
  "LAUND",
  "LAURA",
  "LAVAS",
  "LAVED",
  "LAVER",
  "LAVES",
  "LAVRA",
  "LAWED",
  "LAWER",
  "LAWIN",
  "LAWKS",
  "LAWNS",
  "LAWNY",
  "LAXER",
  "LAXES",
  "LAXLY",
  "LAYED",
  "LAYER",
  "LAYIN",
  "LAYUP",
  "LAZAR",
  "LAZED",
  "LAZES",
  "LAZOS",
  "LAZZI",
  "LAZZO",
  "LEACH",
  "LEADS",
  "LEADY",
  "LEAFS",
  "LEAFY",
  "LEAKS",
  "LEAKY",
  "LEAMS",
  "LEANS",
  "LEANT",
  "LEANY",
  "LEAPS",
  "LEAPT",
  "LEARE",
  "LEARN",
  "LEARS",
  "LEARY",
  "LEASE",
  "LEASH",
  "LEAST",
  "LEATS",
  "LEAVE",
  "LEAVY",
  "LEAZE",
  "LEBEN",
  "LECCY",
  "LEDGE",
  "LEDGY",
  "LEDUM",
  "LEEAR",
  "LEECH",
  "LEEKS",
  "LEEPS",
  "LEERS",
  "LEERY",
  "LEESE",
  "LEETS",
  "LEFTE",
  "LEFTS",
  "LEFTY",
  "LEGAL",
  "LEGER",
  "LEGES",
  "LEGGE",
  "LEGGY",
  "LEGIT",
  "LEHRS",
  "LEHUA",
  "LEIRS",
  "LEISH",
  "LEMAN",
  "LEMED",
  "LEMEL",
  "LEMES",
  "LEMMA",
  "LEMON",
  "LEMUR",
  "LENDS",
  "LENES",
  "LENGS",
  "LENIS",
  "LENOS",
  "LENSE",
  "LENTI",
  "LENTO",
  "LEONE",
  "LEPER",
  "LEPID",
  "LEPRA",
  "LEPTA",
  "LERED",
  "LERES",
  "LERPS",
  "LESBO",
  "LESES",
  "LESTS",
  "LETCH",
  "LETHE",
  "LETUP",
  "LEUCH",
  "LEUCO",
  "LEUDS",
  "LEUGH",
  "LEVEE",
  "LEVEL",
  "LEVER",
  "LEVIN",
  "LEVIS",
  "LEWIS",
  "LEXES",
  "LEXIS",
  "LEZES",
  "LEZZA",
  "LEZZY",
  "LIANA",
  "LIANE",
  "LIANG",
  "LIARD",
  "LIARS",
  "LIART",
  "LIBEL",
  "LIBER",
  "LIBRA",
  "LIBRI",
  "LICHI",
  "LICHT",
  "LICIT",
  "LICKS",
  "LIDAR",
  "LIDOS",
  "LIEFS",
  "LIEGE",
  "LIENS",
  "LIERS",
  "LIEUS",
  "LIEVE",
  "LIFER",
  "LIFES",
  "LIFTS",
  "LIGAN",
  "LIGER",
  "LIGGE",
  "LIGHT",
  "LIGNE",
  "LIKED",
  "LIKEN",
  "LIKER",
  "LIKES",
  "LIKIN",
  "LILAC",
  "LILLS",
  "LILOS",
  "LILTS",
  "LIMAN",
  "LIMAS",
  "LIMAX",
  "LIMBA",
  "LIMBI",
  "LIMBO",
  "LIMBS",
  "LIMBY",
  "LIMED",
  "LIMEN",
  "LIMES",
  "LIMEY",
  "LIMIT",
  "LIMMA",
  "LIMNS",
  "LIMOS",
  "LIMPA",
  "LIMPS",
  "LINAC",
  "LINCH",
  "LINDS",
  "LINDY",
  "LINED",
  "LINEN",
  "LINER",
  "LINES",
  "LINEY",
  "LINGA",
  "LINGO",
  "LINGS",
  "LINGY",
  "LININ",
  "LINKS",
  "LINKY",
  "LINNS",
  "LINNY",
  "LINOS",
  "LINTS",
  "LINTY",
  "LINUM",
  "LINUX",
  "LIONS",
  "LIPID",
  "LIPIN",
  "LIPOS",
  "LIPPY",
  "LIRAS",
  "LIRKS",
  "LIROT",
  "LISKS",
  "LISLE",
  "LISPS",
  "LISTS",
  "LITAI",
  "LITAS",
  "LITED",
  "LITER",
  "LITES",
  "LITHE",
  "LITHO",
  "LITHS",
  "LITRE",
  "LIVED",
  "LIVEN",
  "LIVER",
  "LIVES",
  "LIVID",
  "LIVOR",
  "LIVRE",
  "LLAMA",
  "LLANO",
  "LOACH",
  "LOADS",
  "LOAFS",
  "LOAMS",
  "LOAMY",
  "LOANS",
  "LOAST",
  "LOATH",
  "LOAVE",
  "LOBAR",
  "LOBBY",
  "LOBED",
  "LOBES",
  "LOBOS",
  "LOBUS",
  "LOCAL",
  "LOCHS",
  "LOCKS",
  "LOCOS",
  "LOCUM",
  "LOCUS",
  "LODEN",
  "LODES",
  "LODGE",
  "LOESS",
  "LOFTS",
  "LOFTY",
  "LOGAN",
  "LOGES",
  "LOGGY",
  "LOGIA",
  "LOGIC",
  "LOGIE",
  "LOGIN",
  "LOGOI",
  "LOGON",
  "LOGOS",
  "LOHAN",
  "LOIDS",
  "LOINS",
  "LOIPE",
  "LOIRS",
  "LOKES",
  "LOLLS",
  "LOLLY",
  "LOLOG",
  "LOMAS",
  "LOMED",
  "LOMES",
  "LONER",
  "LONGA",
  "LONGE",
  "LONGS",
  "LOOBY",
  "LOOED",
  "LOOEY",
  "LOOFA",
  "LOOFS",
  "LOOIE",
  "LOOKS",
  "LOOMS",
  "LOONS",
  "LOONY",
  "LOOPS",
  "LOOPY",
  "LOORD",
  "LOOSE",
  "LOOTS",
  "LOPED",
  "LOPER",
  "LOPES",
  "LOPPY",
  "LORAL",
  "LORAN",
  "LORDS",
  "LORDY",
  "LOREL",
  "LORES",
  "LORIC",
  "LORIS",
  "LORRY",
  "LOSED",
  "LOSEL",
  "LOSEN",
  "LOSER",
  "LOSES",
  "LOSSY",
  "LOTAH",
  "LOTAS",
  "LOTES",
  "LOTIC",
  "LOTOS",
  "LOTTE",
  "LOTTO",
  "LOTUS",
  "LOUED",
  "LOUGH",
  "LOUIE",
  "LOUIS",
  "LOUMA",
  "LOUND",
  "LOUNS",
  "LOUPE",
  "LOUPS",
  "LOURE",
  "LOURS",
  "LOURY",
  "LOUSE",
  "LOUSY",
  "LOUTS",
  "LOVAT",
  "LOVED",
  "LOVER",
  "LOVES",
  "LOVEY",
  "LOWAN",
  "LOWED",
  "LOWER",
  "LOWES",
  "LOWLY",
  "LOWND",
  "LOWNE",
  "LOWNS",
  "LOWPS",
  "LOWRY",
  "LOWSE",
  "LOWTS",
  "LOXED",
  "LOXES",
  "LOYAL",
  "LOZEN",
  "LUACH",
  "LUAUS",
  "LUBED",
  "LUBES",
  "LUBRA",
  "LUCES",
  "LUCID",
  "LUCKS",
  "LUCKY",
  "LUCRE",
  "LUDES",
  "LUDIC",
  "LUDOS",
  "LUFFA",
  "LUFFS",
  "LUGED",
  "LUGER",
  "LUGES",
  "LULLS",
  "LULUS",
  "LUMAS",
  "LUMEN",
  "LUMME",
  "LUMMY",
  "LUMPS",
  "LUMPY",
  "LUNAR",
  "LUNAS",
  "LUNCH",
  "LUNES",
  "LUNET",
  "LUNGE",
  "LUNGI",
  "LUNGS",
  "LUNKS",
  "LUNTS",
  "LUPIN",
  "LUPUS",
  "LURCH",
  "LURED",
  "LURER",
  "LURES",
  "LUREX",
  "LURGI",
  "LURGY",
  "LURID",
  "LURKS",
  "LURRY",
  "LURVE",
  "LUSER",
  "LUSHY",
  "LUSKS",
  "LUSTS",
  "LUSTY",
  "LUSUS",
  "LUTEA",
  "LUTED",
  "LUTER",
  "LUTES",
  "LUVVY",
  "LUXES",
  "LWEIS",
  "LYAMS",
  "LYARD",
  "LYART",
  "LYASE",
  "LYCEA",
  "LYCEE",
  "LYCRA",
  "LYING",
  "LYMES",
  "LYMPH",
  "LYNCH",
  "LYNES",
  "LYRES",
  "LYRIC",
  "LYSED",
  "LYSES",
  "LYSIN",
  "LYSIS",
  "LYSOL",
  "LYSSA",
  "LYTED",
  "LYTES",
  "LYTHE",
  "LYTIC",
  "LYTTA"
];

export default words;
