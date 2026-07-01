// Vollständige Wörterlisten (Homophone sind mit '/' getrennt)
const wordLists = {
    beginner: [
        "aim", "air/heir", "baby", "bad", "bag", "ball/bawl", "bar", "bat", "bed", "bee/be", 
        "best", "big", "bird", "blue/blew", "book", "bug", "bus", "cake", "car", "cat", 
        "cool", "cow", "cry", "cup", "dad", "dog", "duck", "door", "eat", "egg", "elf", 
        "end", "eye/aye", "face", "fire", "fish/phish", "five", "food", "foot", "four/for", 
        "go", "gold", "hand", "hat", "ink", "job", "jog", "kiss", "lip", "milk", "mix", 
        "mom", "moon", "mug", "newb/noob", "one/won", "pan", "pie/pi", "pink", "rain/reign/rein", 
        "rat", "red/read", "ruby", "run", "sit", "size/sighs", "snow", "soda", "star", "suck", 
        "sun/son", "stop", "tag", "tank", "tap", "three", "town", "tree", "two/too/to", 
        "water", "wind", "word/whirred", "zoo"
    ],
    novice: [
        "absorb", "angel", "ash", "bark", "basket", "bean/been", "bingo", "black", "bomb", 
        "boss", "brain", "bread/bred", "brown", "bunny", "burger", "burial", "cabin", 
        "circle", "clever", "cliff", "clock", "clutch", "comply", "convey", "crowd", 
        "dairy", "defy", "demon/daemon", "echo", "emoji", "erupt", "exert", "exile", 
        "film", "filter", "flower/flour", "foggy", "forbid", "fry", "gender", "ghost", 
        "giant", "greedy", "green", "grub", "hello", "hair/hare", "hotel", "house", 
        "human", "hunt", "hungry", "intent", "iron", "irony", "lake", "land", "length", 
        "margin", "melt", "meow", "monk", "nest", "noble/nobel", "orange", "park", "pasta", 
        "pear/pair", "power", "prank", "pray/prey", "proof", "quack", "queen", "quill", 
        "rally", "random", "reply", "robust", "rot/wrought", "seed", "shake", "shark", 
        "sigh/psi", "sock", "spring", "state", "stem", "stew", "still", "stumble", 
        "trauma", "twin", "twist", "update", "vein/vain", "walk", "way/weigh", "white", 
        "workout", "wrist"
    ],
    moderate: [
        "abolish", "absence", "abstract", "agaric", "agnostic", "akin", "albeit", "alliance", 
        "alphabet", "anatomical", "answer", "appetite", "armor/armour", "atone", "automatic", 
        "await", "bamboo", "bayonet", "beach", "betray", "biography", "bizarre", "breakthrough", 
        "broccoli", "catalog/catalogue", "center/centre", "chicken", "chronic", "church", 
        "congratulate", "cooking", "creeper", "curious", "daffodil", "damage", "debris", 
        "diesel", "dilate", "dolphin", "enact", "excellent", "familiar", "firefighter", 
        "flavor/flavour", "formidable", "frolic", "furious", "gallant", "garage", "gradual", 
        "growl", "guideline", "harbor/harbour", "heresy", "immobilize/immobilise", "integrity", 
        "ionize/ionise", "jaded", "lactose", "larix", "lather", "leafy", "liable", "lightning", 
        "magnificent", "meditate", "normal", "oasis", "obesity", "offender", "overdue/overdo", 
        "paradox", "password", "pigeon/pidgin", "plethora", "powder", "present", "probably", 
        "pulsar", "pumpkin", "pursuit", "purple", "recipient", "refrain", "refugee", "remarkable", 
        "rye/wry", "rooster", "scrutiny", "secret", "seldom", "semicircle", "sigma", "sleigh/slay", 
        "sniffle", "special", "spooky", "strategic", "subsidy", "sunflower", "swamp", "syntax", 
        "tangerine", "telepathy", "thesis", "tremendous", "trinity", "twenty", "uncomfortable", 
        "understand", "vague", "villain", "voluntary", "walnut", "warrior", "window", "zombie"
    ],
    advanced: [
        "abditive", "abdomen", "abhorrent", "abscond", "accomplishment", "accommodate", "accumulation", 
        "adolescent", "adversity", "aegis", "aerodynamic", "agriculture", "ampersand", "apostrophe", 
        "arcane", "articulate", "aspiration", "assumption", "asunder", "asthma", "atmospheric", 
        "authenticity", "beneficiary", "benevolence", "blizzard", "blossom", "bronchitis", "brusque", 
        "calibration", "callow", "candlelight", "caustic", "celebration", "champagne", "charisma", 
        "chlorophyll", "christmas", "clowder", "cognitive", "colonel/kernel", "combustible", 
        "commemorate", "commodity", "compulsory", "concentration", "consumption", "contour", 
        "controversial", "cuisine", "dauntless", "deployment", "derogatory", "detrimental", 
        "differentiation", "diplomatic", "disappointment", "disconsolate", "division", "doctrine", 
        "elaborate", "embarrassment", "embassy", "enchantment", "encore", "endeavor/endeavour", 
        "environmental", "epiphany", "epsilon", "erratic", "ethereal", "euphoria", "exaggerate", 
        "excalibur", "exorcism", "expenditure", "exponential", "extravagant", "fantasy", 
        "favorable/favourable", "featherweight", "fictitious", "fjord", "flamboyant", "fluorescent", 
        "forthcoming", "frostbite", "fruition", "fugacious", "gastronomic", "gazebo", "germination", 
        "gibberish", "gingerbread", "glacier", "gratitude", "gravestone", "hailstone", "heritage", 
        "hexagonal", "hibernation", "hornswoggle", "hospital", "hourglass", "humanitarian", 
        "hydrangea", "hypothesis", "ideological", "idiom", "imminent", "imprisonment", "independence", 
        "indifference", "inhabitant", "insinuate", "insipid", "integration", "intermediate", 
        "intermission", "introspect", "juxtaposition", "kangaroo", "languid", "legendary", 
        "limousine", "livery", "limina", "mathematician", "melancholy", "metabolism", "methodology", 
        "microorganism", "misconception", "mistletoe", "multiplication", "myopic", "nebulous", 
        "necromancer", "negotiation", "neighboring/neighbouring", "noctilucent", "nonplussed", 
        "notorious", "obituary", "oblivious", "opaque", "optimism", "palatine", "pantograph", 
        "paradise", "paragon", "parallel", "parenthesis", "participation", "passionate", "peppermint", 
        "periodically", "personnel", "pestilence", "photographer", "pomegranate", "portfolio", 
        "practitioner", "predominantly", "problematic", "proclamation", "procrastinate", "pronunciation", 
        "propaganda", "protocol", "pygmy", "ravenous", "recession", "reincarnation", "reliability", 
        "residential", "resilience", "resurrection", "revelation", "rhythm", "ricochet", "sabotage", 
        "sachet/sashay", "sapphire", "scholarship", "scythe", "sentimental", "separation", 
        "shareholder", "significance", "skeleton", "snowflake", "solidarity", "spokesperson", 
        "steadfast", "stereotype", "supposedly", "surrogate", "surveillance", "susceptible", 
        "syllable", "symmetrical", "systematic", "technological", "thesaurus", "transaction", 
        "translucent", "transparency", "transportation", "unprecedented", "validity", "venerate", 
        "violation", "vulnerability", "wednesday", "wholeheartedly", "worthwhile"
    ],
    expert: [
        "abacaxi", "abasia", "acculturate", "aforementioned", "aggrandize/aggrandise", "agoraphobia", 
        "agoraphobic", "altruistic", "ambidextrous", "ambiguous", "anaphylactic", "anemone", 
        "anisosquaric", "apocryphal", "apothecary", "asphyxiation", "asthenosphere", "astigmatism", 
        "ataraxy", "attorney", "bandeau", "belvedere", "betwixt", "blatherskite", "bodacious", 
        "bogolanfini", "brucellosis", "bucolic", "cacophony", "calamitous", "calumny", "capoeira", 
        "capricious", "captious", "cerulean", "charcuterie", "chauffeur", "chronological", 
        "cinematographer", "clairvoyant", "clandestine", "coalescence", "codicil", "colloquialism", 
        "comeuppance", "commodore", "compunction", "congregation", "consanguine", "consummate", 
        "contradistinguish", "convivial", "correspondence", "counterintuitive", "culvert", "cyrillic", 
        "defenestration", "deleterious", "depilatory", "diminution", "discombobulate", "dodecahedron", 
        "ebullition", "eloquent", "elysian/elision", "ennui", "epitome", "erroneous", "erudition", 
        "esurient", "ethnomethodology", "evanesce", "extraterrestrial", "facsimile", "fastidious", 
        "fissiparous", "flummox", "foible", "folliculitis", "foraminotomy", "fuchsia", "garrulous", 
        "gentrification", "glaucomatous", "glockenspiel", "gobbledygook/gobbledegook", "grandiloquent", 
        "grimoire", "handkerchief", "harpsichord", "hemoglobin/haemoglobin", "heterozygous", "hierarchy", 
        "homeopathy/homoeopathy", "homogeneous", "horticulturist", "hypermetropia", "iconoclast", 
        "idiosyncratic", "incandescent", "inchoate", "incoagulable", "indefatigable", "ingenious", 
        "irascible", "isometropia", "isthmus", "kaleidoscope", "lachrymose", "latitudinarian", 
        "latitudinarianism", "legislation", "lexicography", "liaison", "loquacious", "lugubrious", 
        "lymphangiography", "macabre", "magniloquent", "malapropism", "martyrdom", "mellifluous", 
        "menagerie", "mendacious", "meretricious", "metempsychosis", "microminiaturisation/microminiaturization", 
        "milieu", "minuscule/miniscule", "miscellaneous", "monochromatic", "monosyllabic", 
        "multidimensionality", "municipal", "myriad", "narcissistic", "nauseous", "neophyte", 
        "neuroplasticity", "nincompoop", "nocturne/nocturn", "nomenclature", "noumenon", "nutritious", 
        "obfuscation", "occhiolism", "onomatopoeia", "paradigm", "parliamentary", "paroxysm", 
        "pecuniary", "percipient", "perfidious", "pernicious", "pessimistic", "phantasmagoria", 
        "pharaoh/farrow", "phenomenon", "phlegm", "photogeochemistry", "photosynthesis", "pirouette", 
        "pneumatic", "polemic", "polychromatic", "polydactyly", "polymerization/polymerisation", 
        "predecessor", "prestigious", "psychological", "puerile", "pugnacious", "pycnidium", 
        "querimony", "quixotry", "radiometeorograph", "rambunctious", "rehabilitation", "reminiscence", 
        "rendezvous", "sagacious", "sanguine", "sarcophagus", "schizophrenic", "scintillate", "semaphore", 
        "sententiously", "sequacious", "sequoia", "silhouette", "simultaneous", "soliloquy", 
        "sovereignty", "subpoena", "subterranean", "supercentenarian", "supersede/supercede", 
        "syllepsis", "symbiosis", "syzygy", "tempestuous", "tetraphobia", "therapeutic", "thermionic", 
        "thermoluminescence", "triphosphate", "tumultuous", "ubiquitous", "uncharacteristic", 
        "unintelligible", "verbatim", "vexatious", "vignette", "xenogeneic", "zephyr", "zygote"
    ],
    genius: [
        "abdominothoracic", "absquatulate", "acetaminophen", "achromatophil", "achromatophilia", 
        "acquiesce", "allotransplantation", "anachronistic", "aneurysmorrhaphy", "antediluvian", 
        "arthroereisis", "ascosporogenous", "aspartylglucosaminuria", "autothaumaturgist", 
        "baccalaureate", "batrachophobia", "borborygmus", "bougainvillea/bougainvillia", 
        "bourgeoisie", "buckminsterfullerene", "bureaucracy", "chronopsychophysiology", 
        "clinicoechocardiographic", "coalworkerspneumoconiosis", "compartmentalization/compartmentalisation", 
        "countermajoritarianism", "craniosynostosis", "cryptoendolithic", "dendrochronology", 
        "deoxyribonucleic", "dichotomization/dichotomisation", "eclaircissement", "effervescent", 
        "electrotelethermometer", "entrepreneur", "ethnopsychopharmacology", "flibbertigibbet", 
        "fossiliferous", "frontoethmoidectomy", "gastroenterologist", "geitonogamy", 
        "geochronostratigraphical", "glyceraldehyde", "goniosynechialysis", "gubernatorial", 
        "hemispherectomy", "hieroglyphics", "hydrochlorofluorocarbon", "hypercholesterolemia", 
        "hypergammaglobulinemia/hypergammaglobulinaemia", "hypergonadotropic", "hyperpolysyllabic", 
        "hypoparathyroidism", "imperturbability", "incomprehensibility", "infinitesimal", 
        "infundibulum", "institutionalization/institutionalisation", "iodochlorohydroxyquinoline", 
        "jurisprudence", "labyrinthine", "lepidopterology", "machiavellian", "mechanotransduction", 
        "methemoglobinemia", "metonymic", "monocotyledonous", "morphodifferentiation", 
        "necrobiosislipoidica", "neuroimmunomodulation", "neuropsychological", "oligonucleotide", 
        "orthogeosyncline", "panproctocolectomy", "parallelogrammatic", "paraphernalia", 
        "perspicacious", "photoreconnaissance", "plasmodiumfalciparum", "plenipotentiary", 
        "portmanteau", "prestidigitation", "proceleusmatic", "prognostication", "pseudohyperaldosteronism", 
        "pseudoparallelodromous", "pseudoriemannian", "psychoneuroimmunology", "psychopharmacotherapy", 
        "psychotomimetic", "pulchritudinous", "pusillanimous", "quasiautobiographical", "quasquicentennial", 
        "quetzalcoatlus", "quindecasyllabic", "quinquagintillion", "quoddamodotative", 
        "radioallergosorbent", "rhinorrhagia", "schistochilaappendiculata", "septicemiccolibacillosis", 
        "serendipity", "sesquipedalian", "spectrophotometer", "subcompartmentalization/subcompartmentalisation", 
        "subdermatoglyphic", "supererogatory", "superferromagnetism", "susurration", "temporomandibular", 
        "thalassophobia", "thermochromatography", "tintinnabulation", "transinstitutionalization/transinstitutionalisation", 
        "trinitrotoluene", "utilitarianism", "verisimilitude", "worcestershire", "xanthogranulomatous", 
        "xiphiplastron", "xylotypographic"
    ],
    master: [
        "acetylglucocoroglaucigenin", "acrocephalopolydactylousdysplasia", "adrenocorticotropin/adrenocorticotrophin", 
        "anthropomorphization/anthropomorphisation", "antidisestablishmentarianism", "antixerophthalmic", 
        "bourgeoisification", "bromochlorodifluoromethane", "canaliculodacryocystorhinostomy", 
        "chargoggagoggmanchauggagoggchaubunagungamaugg", "cholangiocholecystocholedochectomy", 
        "cholangiopancreatography", "chondromyxohemangioendotheliosarcoma", "convolvulaceous", 
        "corticopontocerebellar", "corynebacteriumpseudotuberculosis", "counterimmunoelectrophoresis", 
        "dehydrothiotoluidine", "dermatofibrosarcomaprotuberans", "dextrodeorsumversion", 
        "dichlorodiphenyltrichloroethane", "diisopropylfluorophosphate", "dermatofibrosislenticularisdisseminata", 
        "dimethyldioctadecylammoniumchloride", "eellogofusciouhipoppokunurious", 
        "encephalocraniocutaneouslipomatosis", "erythrocytapheresis", "esophagogastroduodenoscopy/oesophagogastroduodenoscopy", 
        "ferriprotoporphyrin", "floccinaucinihilipilification", "fluorotetraferriphlogopite", 
        "fructosebisphosphatetriosephosphatelyase", "funkenzwangsvorstellung", "gastrocnemiosemimembranous", 
        "gegenstandstheorie", "hematospectrophotometrically/haematospectrophotometrically", 
        "hexakosioihexekontahexaphobia", "hippopotomonstrosesquipedaliophobia/hippopotomonstrosesquippedaliophobia", 
        "honorificabilitudinity/honourificabilitudinity", "hypothalamicpituitaryadrenocortical", 
        "immunoelectrochemiluminescence", "inositolphosphorylceramide", "laparohysterosalpingooophorectomy", 
        "laryngotracheobronchitis", "loncastuximabtesirine", "lymphangioleiomyomatosis", 
        "micropachycephalosaurus", "neohesperidindihydrochalcone", "nonanonacontanonactanonaliagon", 
        "nucleotidylexotransferase", "orotatephosphoribosyltransferase", "otorhinolaryngological", 
        "paroxysmalnocturnalhemoglobinuria/paroxysmalnocturnalhaemoglobinuria", "percutaneousendoscopicgastrostomy", 
        "photoplethysmography", "phosphorodiamidatemorpholinooligomer", "pneumoencephalography", 
        "pneumonoultramicroscopicsilicovolcanoconiosis", "polyphiloprogenitive", "pseudopseudohypoparathyroidism", 
        "pseudorhombicuboctahedron", "psychoneuroendocrinological", "psychophysicotherapeutics", 
        "pyrrolizidinealkaloidosis", "ribulosebisphosphatecarboxylaseoxygenase", 
        "scaphotrapeziotrapezoidosteoarthritis", "sclerectoiridectomy", "spectrophotofluorometry", 
        "sphenopalatineganglioneuralgia", "sphygmomanometer", "stereoelectroencephalography", 
        "supercalifragilisticexpialidocious", "thymicstromallymphopoietin", "thyroparathyroidectomy", 
        "tonsillopharyngitis", "uridinediphosphateglycosyltransferase", "uvulopalatopharyngoplasty", 
        "ventriculocisternostomy", "xanthogranulomatouspyelonephritis", "zoanthroprosopometamorphopsia"
    ]
};

// Zeitlimits
const timeLimits = {
    beginner: 15, 
    novice: 15, 
    moderate: 12, 
    advanced: 12, 
    expert: 10, 
    genius: 10, 
    master: 7 
};

// DOM Elemente
const difficultySelect = document.getElementById('difficulty');
const startBtn = document.getElementById('start-btn');
const submitBtn = document.getElementById('submit-btn');
const repeatBtn = document.getElementById('repeat-btn');
const wordInput = document.getElementById('word-input');
const timeLeftSpan = document.getElementById('time-left');
const feedbackMessage = document.getElementById('feedback-message');
const scoreSpan = document.getElementById('score');
const bestStreakSpan = document.getElementById('best-streak');
const totalCorrectSpan = document.getElementById('total-correct');
const wpmDisplay = document.getElementById('wpm-display');

// Spielvariablen
let currentValidSpellings = []; 
let timer;
let timeLeft;
let streak = 0;

// Statistik aus dem Local Storage laden (Daten-Persistenz)
let bestStreak = localStorage.getItem('sb_bestStreak') ? parseInt(localStorage.getItem('sb_bestStreak')) : 0;
let totalCorrect = localStorage.getItem('sb_totalCorrect') ? parseInt(localStorage.getItem('sb_totalCorrect')) : 0;

// Initiale Stats im UI setzen
bestStreakSpan.textContent = bestStreak;
totalCorrectSpan.textContent = totalCorrect;

// Variablen für WPM Berechnung
let typingStartTime = 0;

function speakWord(word) {
    window.speechSynthesis.cancel(); 
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US'; 
    utterance.rate = 0.85; 
    window.speechSynthesis.speak(utterance);
}

function startGame() {
    let selectedDiff = difficultySelect.value;
    
    // Random Modus Logik
    if (selectedDiff === 'random') {
        const categories = Object.keys(wordLists);
        selectedDiff = categories[Math.floor(Math.random() * categories.length)];
        feedbackMessage.textContent = `Random picked: ${selectedDiff.toUpperCase()}`;
    } else {
        feedbackMessage.textContent = "Listen and type...";
    }
    
    const words = wordLists[selectedDiff];
    const rawWordData = words[Math.floor(Math.random() * words.length)];
    
    currentValidSpellings = rawWordData.split('/').map(w => w.trim().toLowerCase());
    const wordToSpeak = currentValidSpellings[0];

    // UI Reset
    wordInput.value = "";
    wordInput.classList.remove('error-shake', 'success-pop');
    wordInput.disabled = false;
    submitBtn.disabled = false;
    repeatBtn.disabled = false;
    startBtn.disabled = true; 
    wpmDisplay.textContent = "WPM: --";
    wpmDisplay.style.color = "#00e676";
    
    feedbackMessage.style.color = "#fff";
    
    // WPM Timer startet jetzt
    typingStartTime = Date.now();

    speakWord(wordToSpeak);

    // Timer Start
    timeLeft = timeLimits[selectedDiff];
    timeLeftSpan.textContent = timeLeft;
    clearInterval(timer);
    
    timer = setInterval(() => {
        timeLeft--;
        timeLeftSpan.textContent = timeLeft;
        
        if (timeLeft <= 3) {
            timeLeftSpan.style.color = "#ff0000"; // Roter Text bei wenig Zeit
        } else {
            timeLeftSpan.style.color = "#ff4d4d";
        }
        
        if (timeLeft <= 0) {
            endRound(false, "Time's up! The word was: " + currentValidSpellings[0]);
        }
    }, 1000);
    
    wordInput.focus();
}

function calculateWPM(wordLength) {
    const timeSpentMilliseconds = Date.now() - typingStartTime;
    const timeSpentMinutes = timeSpentMilliseconds / 60000;
    
    // Standard WPM Formel: (Zeichen / 5) / Zeit in Minuten
    let wpm = Math.round((wordLength / 5) / timeSpentMinutes);
    
    // Begrenzung für unrealistische Werte
    if (wpm > 300) wpm = "300+"; 
    
    return wpm;
}

function checkSpelling() {
    const userInput = wordInput.value.trim().toLowerCase();
    
    if (currentValidSpellings.includes(userInput)) {
        // WPM berechnen
        const wpm = calculateWPM(userInput.length);
        wpmDisplay.textContent = `WPM: ${wpm}`;
        
        // Stats updaten
        streak++;
        totalCorrect++;
        
        if (streak > bestStreak) {
            bestStreak = streak;
            localStorage.setItem('sb_bestStreak', bestStreak);
            bestStreakSpan.textContent = bestStreak;
        }
        
        localStorage.setItem('sb_totalCorrect', totalCorrect);
        
        scoreSpan.textContent = streak;
        totalCorrectSpan.textContent = totalCorrect;
        
        wordInput.classList.add('success-pop');
        endRound(true, "Correct! 🎉");
    } else {
        streak = 0; 
        scoreSpan.textContent = streak;
        wpmDisplay.textContent = "WPM: 0";
        wpmDisplay.style.color = "#ff4d4d";
        
        wordInput.classList.add('error-shake');
        endRound(false, `Incorrect. The spelling is: ${currentValidSpellings[0]}`);
    }
}

function endRound(isCorrect, message) {
    clearInterval(timer);
    wordInput.disabled = true;
    submitBtn.disabled = true;
    repeatBtn.disabled = true;
    startBtn.disabled = false; 
    
    feedbackMessage.textContent = message;
    feedbackMessage.style.color = isCorrect ? "#00e676" : "#ff4d4d"; 
    
    if(isCorrect) {
        setTimeout(() => {
            if(startBtn.disabled === false) startGame();
        }, 1200); 
    } else {
        startBtn.focus();
    }
}

// Event Listeners
startBtn.addEventListener('click', startGame);
submitBtn.addEventListener('click', checkSpelling);

repeatBtn.addEventListener('click', () => {
    if (currentValidSpellings.length > 0) speakWord(currentValidSpellings[0]);
    wordInput.focus();
});

wordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !submitBtn.disabled) checkSpelling();
});

difficultySelect.addEventListener('change', () => {
    streak = 0;
    scoreSpan.textContent = streak;
    clearInterval(timer);
    wordInput.disabled = true;
    submitBtn.disabled = true;
    repeatBtn.disabled = true;
    startBtn.disabled = false;
    timeLeftSpan.textContent = "0";
    wpmDisplay.textContent = "WPM: --";
    feedbackMessage.textContent = "Difficulty changed. Click Hear New Word.";
    feedbackMessage.style.color = "#fff";
});
