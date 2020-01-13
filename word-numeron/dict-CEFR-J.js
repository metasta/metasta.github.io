const dict = [
"able",
"ache",
"acid",
"aged",
"also",
"anti",
"arch",
"army",
"atom",
"aunt",
"axis",
"back",
"bake",
"bald",
"band",
"bang",
"bank",
"bare",
"bark",
"barn",
"base",
"bath",
"beak",
"beam",
"bean",
"bear",
"beat",
"belt",
"bend",
"bent",
"best",
"bike",
"bind",
"bird",
"bite",
"blog",
"blow",
"blue",
"blur",
"boat",
"body",
"boil",
"bold",
"bolt",
"bond",
"bone",
"bony",
"bore",
"both",
"bowl",
"brag",
"bump",
"burn",
"bury",
"bush",
"bust",
"busy",
"cafe",
"cage",
"cake",
"calf",
"calm",
"camp",
"cane",
"card",
"care",
"case",
"cash",
"cast",
"cave",
"cent",
"chat",
"chef",
"chew",
"chin",
"chip",
"chop",
"city",
"clam",
"clap",
"clip",
"clog",
"club",
"clue",
"coal",
"coat",
"code",
"coin",
"coke",
"cola",
"cold",
"coma",
"comb",
"come",
"cone",
"cope",
"copy",
"core",
"corn",
"cost",
"cosy",
"cozy",
"crab",
"crew",
"crop",
"crow",
"cube",
"cure",
"curl",
"cute",
"daft",
"damn",
"damp",
"dare",
"dark",
"dash",
"date",
"dawn",
"daze",
"deaf",
"deal",
"dear",
"debt",
"deck",
"defy",
"deny",
"desk",
"dial",
"diet",
"dime",
"dirt",
"disc",
"dish",
"disk",
"dive",
"dock",
"does",
"done",
"dorm",
"dose",
"dove",
"down",
"doze",
"drag",
"draw",
"drop",
"drug",
"drum",
"duck",
"duel",
"dumb",
"dump",
"dust",
"duty",
"each",
"earn",
"east",
"easy",
"edit",
"envy",
"euro",
"evil",
"exam",
"exit",
"face",
"fact",
"fade",
"fail",
"fair",
"fake",
"fame",
"fare",
"farm",
"fast",
"fate",
"fear",
"feat",
"file",
"film",
"find",
"fine",
"fire",
"firm",
"fish",
"five",
"flag",
"flap",
"flat",
"flaw",
"flax",
"flea",
"flip",
"flow",
"fold",
"folk",
"fond",
"fork",
"form",
"foul",
"four",
"frog",
"from",
"fuel",
"fume",
"fund",
"funk",
"gain",
"game",
"gaol",
"gasp",
"gate",
"gaze",
"gear",
"germ",
"gift",
"girl",
"give",
"glad",
"glow",
"goal",
"goat",
"gold",
"golf",
"gown",
"grab",
"gram",
"gray",
"grey",
"grim",
"grin",
"grip",
"grow",
"gulp",
"guts",
"hail",
"hair",
"half",
"hand",
"hang",
"hard",
"harm",
"hate",
"have",
"head",
"heal",
"heap",
"hear",
"heat",
"help",
"hemp",
"herb",
"herd",
"hero",
"hers",
"hide",
"hike",
"hint",
"hire",
"hold",
"hole",
"holy",
"home",
"hone",
"hope",
"horn",
"host",
"hour",
"huge",
"hunt",
"hurt",
"icon",
"idea",
"idle",
"idol",
"inch",
"into",
"iron",
"isle",
"itch",
"item",
"jade",
"jail",
"join",
"joke",
"judo",
"july",
"jump",
"june",
"junk",
"jury",
"just",
"kilo",
"kind",
"king",
"kite",
"knit",
"knot",
"know",
"lack",
"lady",
"lake",
"lamb",
"lame",
"lamp",
"land",
"lane",
"lark",
"last",
"late",
"lawn",
"lazy",
"lead",
"leaf",
"leak",
"lean",
"leap",
"left",
"lend",
"lest",
"liar",
"lick",
"life",
"lift",
"like",
"limb",
"limp",
"line",
"ling",
"link",
"lion",
"list",
"live",
"load",
"loaf",
"loan",
"lock",
"long",
"lose",
"lost",
"loud",
"love",
"luck",
"lung",
"lush",
"mail",
"main",
"make",
"male",
"many",
"mark",
"mash",
"mask",
"mate",
"math",
"meal",
"mean",
"meat",
"melt",
"mend",
"menu",
"mild",
"mile",
"milk",
"mind",
"mine",
"mint",
"mist",
"mock",
"mold",
"monk",
"more",
"most",
"move",
"much",
"mule",
"muse",
"must",
"myth",
"nail",
"name",
"navy",
"near",
"neat",
"neck",
"news",
"next",
"nice",
"nose",
"note",
"oath",
"obey",
"oily",
"okay",
"once",
"only",
"open",
"oral",
"ours",
"oval",
"oven",
"over",
"pace",
"pack",
"page",
"paid",
"pain",
"pair",
"pale",
"palm",
"park",
"part",
"past",
"path",
"pave",
"peak",
"pear",
"pick",
"pile",
"pine",
"pink",
"pint",
"pity",
"plan",
"play",
"plot",
"plug",
"plum",
"plus",
"poem",
"poet",
"pole",
"pond",
"pork",
"port",
"pose",
"posh",
"post",
"pour",
"pray",
"prom",
"pure",
"push",
"quit",
"quiz",
"race",
"rack",
"rage",
"rail",
"rain",
"ramp",
"rank",
"rape",
"rash",
"rate",
"read",
"real",
"redo",
"rely",
"rent",
"rest",
"rice",
"rich",
"ride",
"ring",
"ripe",
"rise",
"risk",
"rite",
"road",
"roam",
"rock",
"role",
"rope",
"rose",
"rosy",
"rude",
"ruin",
"rule",
"rush",
"sack",
"safe",
"sage",
"sail",
"sake",
"sale",
"salt",
"same",
"sand",
"save",
"scan",
"scar",
"seal",
"seat",
"self",
"send",
"sexy",
"shed",
"ship",
"shoe",
"shop",
"shot",
"show",
"shut",
"sick",
"side",
"sigh",
"sign",
"silk",
"sing",
"sink",
"site",
"size",
"skim",
"skin",
"skip",
"slam",
"slap",
"slim",
"slip",
"slot",
"slow",
"snap",
"snow",
"soak",
"soap",
"soar",
"sock",
"soda",
"sofa",
"soft",
"soil",
"some",
"song",
"sore",
"sort",
"soul",
"soup",
"sour",
"span",
"spin",
"spot",
"spur",
"stab",
"star",
"stay",
"stem",
"step",
"stew",
"stir",
"stop",
"stun",
"such",
"suck",
"suit",
"sure",
"surf",
"swan",
"swim",
"tack",
"tail",
"take",
"tale",
"talk",
"tame",
"tank",
"tape",
"task",
"taxi",
"team",
"tear",
"tend",
"term",
"than",
"them",
"then",
"they",
"thin",
"this",
"thus",
"tick",
"tide",
"tidy",
"tile",
"time",
"tiny",
"tire",
"toil",
"tomb",
"tone",
"tour",
"town",
"tram",
"trap",
"tray",
"trek",
"trim",
"trio",
"trip",
"true",
"tube",
"tuna",
"tune",
"turn",
"twin",
"type",
"ugly",
"undo",
"unit",
"unto",
"upon",
"urge",
"used",
"user",
"vain",
"vary",
"vase",
"vast",
"vein",
"verb",
"very",
"vice",
"view",
"visa",
"vote",
"wage",
"wait",
"wake",
"walk",
"want",
"ward",
"warm",
"warn",
"wash",
"wasp",
"wave",
"weak",
"wear",
"west",
"what",
"when",
"whip",
"whom",
"wide",
"wife",
"wild",
"wind",
"wine",
"wing",
"wink",
"wipe",
"wire",
"wise",
"wish",
"with",
"wolf",
"word",
"work",
"worm",
"worn",
"wrap",
"yard",
"yawn",
"yeah",
"year",
"yoga",
"your",
"zone"
];