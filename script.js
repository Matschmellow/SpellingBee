// Raw Word Lists (gekürtzt dargestellt, behalte deine riesige Liste hier drinnen)
const rawWordLists = {
    beginner: [ "aim", "air/heir", "baby", "bad", "bag", "ball/bawl", "bar", "bat", "bed", "bee/be", "best", "big", "bird", "blue/blew", "book", "bug", "bus", "cake", "car", "cat", "cool", "cow", "cry", "cup", "dad", "dog", "duck", "door", "eat", "egg", "elf", "end", "eye/aye", "face", "fire", "fish/phish", "five", "food", "foot", "four/for", "go", "gold", "hand", "hat", "ink", "job", "jog", "kiss", "lip", "milk", "mix", "mom", "moon", "mug", "newb/noob", "one/won", "pan", "pie/pi", "pink", "rain/reign/rein", "rat", "red/read", "ruby", "run", "sit", "size/sighs", "snow", "soda", "star", "suck", "sun/son", "stop", "tag", "tank", "tap", "three", "town", "tree", "two/too/to", "water", "wind", "word/whirred", "zoo" ],
    novice: [ "absorb", "angel", "ash", "bark", "basket", "bean/been", "bingo", "black", "bomb", "boss", "brain", "bread/bred", "brown", "bunny", "burger", "burial", "cabin", "circle", "clever", "cliff", "clock", "clutch", "comply", "convey", "crowd", "dairy", "defy", "demon/daemon", "echo", "emoji", "erupt", "exert", "exile", "film", "filter", "flower/flour", "foggy", "forbid", "fry", "gender", "ghost", "giant", "greedy", "green", "grub", "hello", "hair/hare", "hotel", "house", "human", "hunt", "hungry", "intent", "iron", "irony", "lake", "land", "length", "margin", "melt", "meow", "monk", "nest", "noble/nobel", "orange", "park", "pasta", "pear/pair", "power", "prank", "pray/prey", "proof", "quack", "queen", "quill", "rally", "random", "reply", "robust", "rot/wrought", "seed", "shake", "shark", "sigh/psi", "sock", "spring", "state", "stem", "stew", "still", "stumble", "trauma", "twin", "twist", "update", "vein/vain", "walk", "way/weigh", "white", "workout", "wrist" ],
    moderate: [ "abolish", "absence", "abstract", "agaric", "agnostic", "akin", "albeit", "alliance", "alphabet", "anatomical", "answer", "appetite", "armor/armour", "atone", "automatic", "await", "bamboo", "bayonet", "beach", "betray", "biography", "bizarre", "breakthrough", "broccoli", "catalog/catalogue", "center/centre", "chicken", "chronic", "church", "congratulate", "cooking", "creeper", "curious", "daffodil", "damage", "debris", "diesel", "dilate", "dolphin", "enact", "excellent", "familiar", "firefighter", "flavor/flavour", "formidable", "frolic", "furious", "gallant", "garage", "gradual", "growl", "guideline", "harbor/harbour", "heresy", "immobilize/immobilise", "integrity", "ionize/ionise", "jaded", "lactose", "larix", "lather", "leafy", "liable", "lightning", "magnificent", "meditate", "normal", "oasis", "obesity", "offender", "overdue/overdo", "paradox", "password", "pigeon/pidgin", "plethora", "powder", "present", "probably", "pulsar", "pumpkin", "pursuit", "purple", "recipient", "refrain", "refugee", "remarkable", "rye/wry", "rooster", "scrutiny", "secret", "seldom", "semicircle", "sigma", "sleigh/slay", "sniffle", "special", "spooky", "strategic", "subsidy", "sunflower", "swamp", "syntax", "tangerine", "telepathy", "thesis", "tremendous", "trinity", "twenty", "uncomfortable", "understand", "vague", "villain", "voluntary", "walnut", "warrior", "window", "zombie" ],
    advanced: [ "abditive", "abdomen", "abhorrent", "abscond", "accomplishment", "accommodate", "accumulation", "adolescent", "adversity", "aegis", "aerodynamic", "agriculture", "ampersand", "apostrophe", "arcane", "articulate", "aspiration", "assumption", "asunder", "asthma", "atmospheric", "authenticity", "beneficiary", "benevolence", "blizzard", "blossom", "bronchitis", "brusque", "calibration", "callow", "candlelight", "caustic", "celebration", "champagne", "charisma", "chlorophyll", "christmas", "clowder", "cognitive", "colonel/kernel", "combustible", "commemorate", "commodity", "compulsory", "concentration", "consumption", "contour", "controversial", "cuisine", "dauntless", "deployment", "derogatory", "detrimental", "differentiation", "diplomatic", "disappointment", "disconsolate", "division", "doctrine", "elaborate", "embarrassment", "embassy", "enchantment", "encore", "endeavor/endeavour", "environmental", "epiphany", "epsilon", "erratic", "ethereal", "euphoria", "exaggerate", "excalibur", "exorcism", "expenditure", "exponential", "extravagant", "fantasy", "favorable/favourable", "featherweight", "fictitious", "fjord", "flamboyant", "fluorescent", "forthcoming", "frostbite", "fruition", "fugacious", "gastronomic", "gazebo", "germination", "gibberish", "gingerbread", "glacier", "gratitude", "gravestone", "hailstone", "heritage", "hexagonal", "hibernation", "hornswoggle", "hospital", "hourglass", "humanitarian", "hydrangea", "hypothesis", "ideological", "idiom", "imminent", "imprisonment", "independence", "indifference", "inhabitant", "insinuate", "insipid", "integration", "intermediate", "intermission", "introspect", "juxtaposition", "kangaroo", "languid", "legendary", "limousine", "livery", "limina", "mathematician", "melancholy", "metabolism", "methodology", "microorganism", "misconception", "mistletoe", "multiplication", "myopic", "nebulous", "necromancer", "negotiation", "neighboring/neighbouring", "noctilucent", "nonplussed", "notorious", "obituary", "oblivious", "opaque", "optimism", "palatine", "pantograph", "paradise", "paragon", "parallel", "parenthesis", "participation", "passionate", "peppermint", "periodically", "personnel", "pestilence", "photographer", "pomegranate", "portfolio", "practitioner", "predominantly", "problematic", "proclamation", "procrastinate", "pronunciation", "propaganda", "protocol", "pygmy", "ravenous", "recession", "reincarnation", "reliability", "residential", "resilience", "resurrection", "revelation", "rhythm", "ricochet", "sabotage", "sachet/sashay", "sapphire", "scholarship", "scythe", "sentimental", "separation", "shareholder", "significance", "skeleton", "snowflake", "solidarity", "spokesperson", "steadfast", "stereotype", "supposedly", "surrogate", "surveillance", "susceptible", "syllable", "symmetrical", "systematic", "technological", "thesaurus", "transaction", "translucent", "transparency", "transportation", "unprecedented", "validity", "venerate", "violation", "vulnerability", "wednesday", "wholeheartedly", "worthwhile" ],
    expert: [ "abacaxi", "abasia", "acculturate", "aforementioned", "aggrandize/aggrandise", "agoraphobia", "agoraphobic", "altruistic", "ambidextrous", "ambiguous", "anaphylactic", "anemone", "anisosquaric", "apocryphal", "apothecary", "asphyxiation", "asthenosphere", "astigmatism", "ataraxy", "attorney", "bandeau", "belvedere", "betwixt", "blatherskite", "bodacious", "bogolanfini", "brucellosis", "bucolic", "cacophony", "calamitous", "calumny", "capoeira", "capricious", "captious", "cerulean", "charcuterie", "chauffeur", "chronological", "cinematographer", "clairvoyant", "clandestine", "coalescence", "codicil", "colloquialism", "comeuppance", "commodore", "compunction", "congregation", "consanguine", "consummate", "contradistinguish", "convivial", "correspondence", "counterintuitive", "culvert", "cyrillic", "defenestration", "deleterious", "depilatory", "diminution", "discombobulate", "dodecahedron", "ebullition", "eloquent", "elysian/elision", "ennui", "epitome", "erroneous", "erudition", "esurient", "ethnomethodology", "evanesce", "extraterrestrial", "facsimile", "fastidious", "fissiparous", "flummox", "foible", "folliculitis", "foraminotomy", "fuchsia", "garrulous", "gentrification", "glaucomatous", "glockenspiel", "gobbledygook/gobbledegook", "grandiloquent", "grimoire", "handkerchief", "harpsichord", "hemoglobin/haemoglobin", "heterozygous", "hierarchy", "homeopathy/homoeopathy", "homogeneous", "horticulturist", "hypermetropia", "iconoclast", "idiosyncratic", "incandescent", "inchoate", "incoagulable", "indefatigable", "ingenious", "irascible", "isometropia", "isthmus", "kaleidoscope", "lachrymose", "latitudinarian", "latitudinarianism", "legislation", "lexicography", "liaison", "loquacious", "lugubrious", "lymphangiography", "macabre", "magniloquent", "malapropism", "martyrdom", "mellifluous", "menagerie", "mendacious", "meretricious", "metempsychosis", "microminiaturisation/microminiaturization", "milieu", "minuscule/miniscule", "miscellaneous", "monochromatic", "monosyllabic", "multidimensionality", "municipal", "myriad", "narcissistic", "nauseous", "neophyte", "neuroplasticity", "nincompoop", "nocturne/nocturn", "nomenclature", "noumenon", "nutritious", "obfuscation", "occhiolism", "onomatopoeia", "paradigm", "parliamentary", "paroxysm", "pecuniary", "percipient", "perfidious", "pernicious", "pessimistic", "phantasmagoria", "pharaoh/farrow", "phenomenon", "phlegm", "photogeochemistry", "photosynthesis", "pirouette", "pneumatic", "polemic", "polychromatic", "polydactyly", "polymerization/polymerisation", "predecessor", "prestigious", "psychological", "puerile", "pugnacious", "pycnidium", "querimony", "quixotry", "radiometeorograph", "rambunctious", "rehabilitation", "reminiscence", "rendezvous", "sagacious", "sanguine", "sarcophagus", "schizophrenic", "scintillate", "semaphore", "sententiously", "sequacious", "sequoia", "silhouette", "simultaneous", "soliloquy", "sovereignty", "subpoena", "subterranean", "supercentenarian", "supersede/supercede", "syllepsis", "symbiosis", "syzygy", "tempestuous", "tetraphobia", "therapeutic", "thermionic", "thermoluminescence", "triphosphate", "tumultuous", "ubiquitous", "uncharacteristic", "unintelligible", "verbatim", "vexatious", "vignette", "xenogeneic", "zephyr", "zygote" ],
    genius: [ "abdominothoracic", "absquatulate", "acetaminophen", "achromatophil", "achromatophilia", "acquiesce", "allotransplantation", "anachronistic", "aneurysmorrhaphy", "antediluvian", "arthroereisis", "ascosporogenous", "aspartylglucosaminuria", "autothaumaturgist", "baccalaureate", "batrachophobia", "borborygmus", "bougainvillea/bougainvillia", "bourgeoisie", "buckminsterfullerene", "bureaucracy", "chronopsychophysiology", "clinicoechocardiographic", "coalworkerspneumoconiosis", "compartmentalization/compartmentalisation", "countermajoritarianism", "craniosynostosis", "cryptoendolithic", "dendrochronology", "deoxyribonucleic", "dichotomization/dichotomisation", "eclaircissement", "effervescent", "electrotelethermometer", "entrepreneur", "ethnopsychopharmacology", "flibbertigibbet", "fossiliferous", "frontoethmoidectomy", "gastroenterologist", "geitonogamy", "geochronostratigraphical", "glyceraldehyde", "goniosynechialysis", "gubernatorial", "hemispherectomy", "hieroglyphics", "hydrochlorofluorocarbon", "hypercholesterolemia", "hypergammaglobulinemia/hypergammaglobulinaemia", "hypergonadotropic", "hyperpolysyllabic", "hypoparathyroidism", "imperturbability", "incomprehensibility", "infinitesimal", "infundibulum", "institutionalization/institutionalisation", "iodochlorohydroxyquinoline", "jurisprudence", "labyrinthine", "lepidopterology", "machiavellian", "mechanotransduction", "methemoglobinemia", "metonymic", "monocotyledonous", "morphodifferentiation", "necrobiosislipoidica", "neuroimmunomodulation", "neuropsychological", "oligonucleotide", "orthogeosyncline", "panproctocolectomy", "parallelogrammatic", "paraphernalia", "perspicacious", "photoreconnaissance", "plasmodiumfalciparum", "plenipotentiary", "portmanteau", "prestidigitation", "proceleusmatic", "prognostication", "pseudohyperaldosteronism", "pseudoparallelodromous", "pseudoriemannian", "psychoneuroimmunology", "psychopharmacotherapy", "psychotomimetic", "pulchritudinous", "pusillanimous", "quasiautobiographical", "quasquicentennial", "quetzalcoatlus", "quindecasyllabic", "quinquagintillion", "quoddamodotative", "radioallergosorbent", "rhinorrhagia", "schistochilaappendiculata", "septicemiccolibacillosis", "serendipity", "sesquipedalian", "spectrophotometer", "subcompartmentalization/subcompartmentalisation", "subdermatoglyphic", "supererogatory", "superferromagnetism", "susurration", "temporomandibular", "thalassophobia", "thermochromatography", "tintinnabulation", "transinstitutionalization/transinstitutionalisation", "trinitrotoluene", "utilitarianism", "verisimilitude", "worcestershire", "xanthogranulomatous", "xiphiplastron", "xylotypographic" ],
    master: [ "acetylglucocoroglaucigenin", "acrocephalopolydactylousdysplasia", "adrenocorticotropin/adrenocorticotrophin", "anthropomorphization/anthropomorphisation", "antidisestablishmentarianism", "antixerophthalmic", "bourgeoisification", "bromochlorodifluoromethane", "canaliculodacryocystorhinostomy", "chargoggagoggmanchauggagoggchaubunagungamaugg", "cholangiocholecystocholedochectomy", "cholangiopancreatography", "chondromyxohemangioendotheliosarcoma", "convolvulaceous", "corticopontocerebellar", "corynebacteriumpseudotuberculosis", "counterimmunoelectrophoresis", "dehydrothiotoluidine", "dermatofibrosarcomaprotuberans", "dextrodeorsumversion", "dichlorodiphenyltrichloroethane", "diisopropylfluorophosphate", "dermatofibrosislenticularisdisseminata", "dimethyldioctadecylammoniumchloride", "eellogofusciouhipoppokunurious", "encephalocraniocutaneouslipomatosis", "erythrocytapheresis", "esophagogastroduodenoscopy/oesophagogastroduodenoscopy", "ferriprotoporphyrin", "floccinaucinihilipilification", "fluorotetraferriphlogopite", "fructosebisphosphatetriosephosphatelyase", "funkenzwangsvorstellung", "gastrocnemiosemimembranous", "gegenstandstheorie", "hematospectrophotometrically/haematospectrophotometrically", "hexakosioihexekontahexaphobia", "hippopotomonstrosesquipedaliophobia/hippopotomonstrosesquippedaliophobia", "honorificabilitudinity/honourificabilitudinity", "hypothalamicpituitaryadrenocortical", "immunoelectrochemiluminescence", "inositolphosphorylceramide", "laparohysterosalpingooophorectomy", "laryngotracheobronchitis", "loncastuximabtesirine", "lymphangioleiomyomatosis", "micropachycephalosaurus", "neohesperidindihydrochalcone", "nonanonacontanonactanonaliagon", "nucleotidylexotransferase", "orotatephosphoribosyltransferase", "otorhinolaryngological", "paroxysmalnocturnalhemoglobinuria/paroxysmalnocturnalhaemoglobinuria", "percutaneousendoscopicgastrostomy", "photoplethysmography", "phosphorodiamidatemorpholinooligomer", "pneumoencephalography", "pneumonoultramicroscopicsilicovolcanoconiosis", "polyphiloprogenitive", "pseudopseudohypoparathyroidism", "pseudorhombicuboctahedron", "psychoneuroendocrinological", "psychophysicotherapeutics", "pyrrolizidinealkaloidosis", "ribulosebisphosphatecarboxylaseoxygenase", "scaphotrapeziotrapezoidosteoarthritis", "sclerectoiridectomy", "spectrophotofluorometry", "sphenopalatineganglioneuralgia", "sphygmomanometer", "stereoelectroencephalography", "supercalifragilisticexpialidocious", "thymicstromallymphopoietin", "thyroparathyroidectomy", "tonsillopharyngitis", "uridinediphosphateglycosyltransferase", "uvulopalatopharyngoplasty", "ventriculocisternostomy", "xanthogranulomatouspyelonephritis", "zoanthroprosopometamorphopsia" ]
};

// Listen flach machen (Homophone trennen)
const flatWordLists = {};
for (let diff in rawWordLists) {
    flatWordLists[diff] = [];
    rawWordLists[diff].forEach(w => {
        if (w.includes('/')) {
            flatWordLists[diff].push(...w.split('/').map(x => x.trim()));
        } else {
            flatWordLists[diff].push(w);
        }
    });
}

// DOM Elements
const difficultySelect = document.getElementById('difficulty');
const timerModeSelect = document.getElementById('timer-mode');
const voiceSelect = document.getElementById('voice-select');
const showWordToggle = document.getElementById('show-word-toggle');

const startBtn = document.getElementById('start-btn');
const replayBtn = document.getElementById('replay-btn');
const gameArea = document.getElementById('game-area');
const hiddenInput = document.getElementById('hidden-input');
const wordDisplay = document.getElementById('word-display');
const typingContainer = document.getElementById('typing-container');
const definitionBox = document.getElementById('definition-box');

const timeLeftSpan = document.getElementById('time-left');
const timeUnit = document.getElementById('time-unit');
const progressBarContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');
const wpmDisplay = document.getElementById('wpm-display');

const summaryScreen = document.getElementById('summary-screen');
const finalWordsSpan = document.getElementById('final-words');

const scoreSpan = document.getElementById('score');
const bestStreakSpan = document.getElementById('best-streak');
const totalCorrectSpan = document.getElementById('total-correct');

// State Variables
let currentWord = "";
let timerInterval;
let timeLeft = 0;
let maxTime = 0;
let streak = 0;
let isPlaying = false;
let firstKeystroke = false;
let wordStartTime = 0; // Für WPM pro Wort

// Globale Variablen für Time Attack
let sessionWordsSpelled = 0;

// Local Storage Setup
let bestStreak = localStorage.getItem('sb_bestStreak') ? parseInt(localStorage.getItem('sb_bestStreak')) : 0;
let totalCorrect = localStorage.getItem('sb_totalCorrect') ? parseInt(localStorage.getItem('sb_totalCorrect')) : 0;
bestStreakSpan.textContent = bestStreak;
totalCorrectSpan.textContent = totalCorrect;

// Check Toggle Status onload
if (!showWordToggle.checked) { wordDisplay.classList.add('hide-word'); }

showWordToggle.addEventListener('change', () => {
    if(showWordToggle.checked) { wordDisplay.classList.remove('hide-word'); } 
    else { wordDisplay.classList.add('hide-word'); }
});

// --- VOICE ENGINE ---
let availableVoices = [];

function populateVoices() {
    availableVoices = window.speechSynthesis.getVoices().filter(v => v.lang.startsWith('en'));
    if (availableVoices.length === 0) return;
    
    voiceSelect.innerHTML = availableVoices.map((v, i) => `<option value="${i}">${v.name}</option>`).join('');
    const bestVoiceIndex = availableVoices.findIndex(v => v.name.includes('Google') || v.name.includes('Premium') || v.name.includes('Samantha'));
    if (bestVoiceIndex !== -1) voiceSelect.selectedIndex = bestVoiceIndex;
}

populateVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
}

function speakWord(word) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    
    if (availableVoices.length > 0 && voiceSelect.value !== "") {
        utterance.voice = availableVoices[voiceSelect.value];
    } else {
        utterance.lang = 'en-US';
    }
    
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
}

// --- DICTIONARY API ---
async function fetchDefinition(word) {
    definitionBox.innerHTML = '<span class="loading">📖 Fetching definition...</span>';
    try {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!res.ok) throw new Error("Not found");
        const data = await res.json();
        const def = data[0].meanings[0].definitions[0].definition;
        definitionBox.innerHTML = `📖 <b>Definition:</b> ${def}`;
    } catch (e) {
        definitionBox.innerHTML = `📖 <b>Definition:</b> <i>Not available for this specific word.</i>`;
    }
}

// --- GAME LOGIC ---
function startGame() {
    startBtn.style.display = "none";
    gameArea.classList.remove('hidden');
    summaryScreen.classList.add('hidden');
    
    streak = 0;
    sessionWordsSpelled = 0;
    scoreSpan.textContent = streak;
    wpmDisplay.textContent = "0";
    
    const mode = timerModeSelect.value;
    
    if (mode === 'timeattack') {
        timeLeft = 60; maxTime = 60;
        timeLeftSpan.textContent = timeLeft; timeUnit.textContent = "s";
        progressBarContainer.style.opacity = "1";
        progressBar.style.width = "100%"; progressBar.style.backgroundColor = "#38bdf8";
        
        clearInterval(timerInterval);
        timerInterval = setInterval(updateTimeAttackTimer, 1000);
    } 
    else if (mode === 'zen') {
        timeLeftSpan.textContent = "∞"; timeUnit.textContent = "";
        progressBarContainer.style.opacity = "0";
        clearInterval(timerInterval);
    }

    nextWord();
}

function nextWord() {
    isPlaying = true;
    let selectedDiff = difficultySelect.value;
    
    if (selectedDiff === 'random') {
        const categories = Object.keys(flatWordLists);
        selectedDiff = categories[Math.floor(Math.random() * categories.length)];
    }
    
    const words = flatWordLists[selectedDiff];
    currentWord = words[Math.floor(Math.random() * words.length)].toLowerCase();

    // Reset Word UI
    hiddenInput.value = "";
    hiddenInput.disabled = false;
    firstKeystroke = false;
    
    // Always remove "incorrect" state from word-display on new word
    wordDisplay.classList.remove('force-show-error');
    
    wordDisplay.innerHTML = currentWord.split('').map(char => `<span class="char">${char}</span>`).join('');
    const spans = wordDisplay.querySelectorAll('.char');
    if(spans.length > 0) spans[0].classList.add('active');

    speakWord(currentWord);
    fetchDefinition(currentWord);

    // Adaptive Timer Logic
    const mode = timerModeSelect.value;
    if (mode === 'adaptive') {
        maxTime = Math.max(5, Math.ceil(currentWord.length * 1.2));
        timeLeft = maxTime;
        
        timeLeftSpan.textContent = timeLeft; timeUnit.textContent = "s";
        progressBarContainer.style.opacity = "1";
        progressBar.style.width = "100%"; progressBar.style.backgroundColor = "#38bdf8";
        
        clearInterval(timerInterval);
        timerInterval = setInterval(updateAdaptiveTimer, 1000);
    }
    
    hiddenInput.focus();
}

function updateAdaptiveTimer() {
    timeLeft--;
    timeLeftSpan.textContent = timeLeft;
    
    const percentage = (timeLeft / maxTime) * 100;
    progressBar.style.width = `${percentage}%`;
    
    if (timeLeft <= 3) {
        timeLeftSpan.style.color = "#f87171"; progressBar.style.backgroundColor = "#f87171";
    } else {
        timeLeftSpan.style.color = "#cbd5e1"; 
    }
    
    if (timeLeft <= 0) handleWordEnd(false);
}

function updateTimeAttackTimer() {
    // Timer doesn't decrement until first letter is typed in the whole session
    if (!firstKeystroke && sessionWordsSpelled === 0) return; 

    timeLeft--;
    timeLeftSpan.textContent = timeLeft;
    
    const percentage = (timeLeft / 60) * 100;
    progressBar.style.width = `${percentage}%`;
    
    if (timeLeft <= 10) {
        timeLeftSpan.style.color = "#f87171"; progressBar.style.backgroundColor = "#f87171";
    } else {
        timeLeftSpan.style.color = "#cbd5e1"; 
    }
    
    if (timeLeft <= 0) {
        isPlaying = false;
        clearInterval(timerInterval);
        hiddenInput.disabled = true;
        summaryScreen.classList.remove('hidden');
        finalWordsSpan.textContent = sessionWordsSpelled;
    }
}

// Live WPM *pro Wort*
function updateLiveWPM() {
    if (!firstKeystroke) return;
    const timeSpentMinutes = (Date.now() - wordStartTime) / 60000;
    if (timeSpentMinutes <= 0) return;
    
    const currentTyped = hiddenInput.value.length;
    let wpm = Math.round((currentTyped / 5) / timeSpentMinutes);
    if (wpm > 300) wpm = "300+"; 
    wpmDisplay.textContent = wpm;
}

// Core Typing Engine
hiddenInput.addEventListener('input', () => {
    if (!isPlaying) return;
    
    const typed = hiddenInput.value.toLowerCase();
    const spans = wordDisplay.querySelectorAll('.char');
    let errors = 0;

    if (!firstKeystroke && typed.length > 0) {
        firstKeystroke = true;
        wordStartTime = Date.now(); // Startet WPM-Messung für dieses Wort
    }

    updateLiveWPM();

    spans.forEach((span, i) => {
        span.classList.remove('active', 'correct', 'incorrect');
        if (i < typed.length) {
            if (typed[i] === currentWord[i]) {
                span.classList.add('correct');
            } else {
                span.classList.add('incorrect');
                errors++;
            }
        }
    });

    if (typed.length < currentWord.length) {
        spans[typed.length].classList.add('active');
    }

    // Auto-Submit on Completion
    if (typed.length === currentWord.length && errors === 0) {
        handleWordEnd(true);
    }
});

function handleWordEnd(isCorrect) {
    hiddenInput.disabled = true;
    
    if (isCorrect) {
        sessionWordsSpelled++;
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

        const mode = timerModeSelect.value;
        setTimeout(nextWord, mode === 'timeattack' ? 100 : 500); 
    } else {
        streak = 0; 
        scoreSpan.textContent = streak;
        
        // Show errors visually even if Ghost mode is hidden
        wordDisplay.classList.remove('hide-word');
        const spans = wordDisplay.querySelectorAll('.char');
        spans.forEach(s => {
            s.classList.remove('active', 'correct');
            s.classList.add('incorrect');
        });
        
        if(timerModeSelect.value === 'timeattack') {
            setTimeout(() => {
                if(!showWordToggle.checked) wordDisplay.classList.add('hide-word');
                nextWord();
            }, 1000);
        } else {
            setTimeout(() => {
                if(!showWordToggle.checked) wordDisplay.classList.add('hide-word');
                nextWord();
            }, 2500);
        }
    }
}

// Event Listeners
typingContainer.addEventListener('click', () => {
    if (isPlaying) hiddenInput.focus();
});

replayBtn.addEventListener('click', () => {
    if (isPlaying && currentWord) speakWord(currentWord);
    hiddenInput.focus();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isPlaying) {
        handleWordEnd(false);
    }
    
    if (e.key === 'Tab' && isPlaying) {
        e.preventDefault(); // Verhindert, dass man aus dem Feld tabt
        speakWord(currentWord);
        hiddenInput.focus();
    }
    
    if (e.key === 'Enter' && !summaryScreen.classList.contains('hidden')) {
        startGame();
    }
});

startBtn.addEventListener('click', startGame);
difficultySelect.addEventListener('change', () => { if(isPlaying) startGame(); });
timerModeSelect.addEventListener('change', () => { if(isPlaying) startGame(); });
