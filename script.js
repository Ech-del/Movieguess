
// =====================================================
// RÉCUPÉRATION DE LA CATÉGORIE
// =====================================================

const params = new URLSearchParams(window.location.search);

const category =
    (params.get("cat") || "")
        .trim()
        .toLowerCase();


// =====================================================
// LES 20 CATÉGORIES
// =====================================================

const categories = {

    vo: { name: "🎙️ VO" },

    pirates: { name: "🏴‍☠️ Pirates des Caraïbes" },

    louisdefunes: { name: "😂 Louis de Funès" },

    tonystark: { name: "🤖 Tony Stark" },

    marvel: { name: "🦸 Marvel" },

    starwars: { name: "⭐ Star Wars" },

    tomcruise: { name: "🎬 Tom Cruise" },

    christianclavier: { name: "😂 Christian Clavier" },

    sciencefiction: { name: "🚀 Science-fiction" },

    aventure: { name: "🗺️ Aventure" },

    action: { name: "💥 Action" },

    nyc: { name: "🗽 NYC" },

    hollywood: { name: "🎥 Hollywood" },

    comediefrancaise: { name: "🤣 Comédie française" },

    musiquesfilms1: { name: "🎵 Musiques de films 1" },

    musiquesfilms2: { name: "🎵 Musiques de films 2" },

    disney: { name: "✨ Disney" },

    pixar: { name: "🧸 Pixar" },

    seriesamericaines: { name: "📺 Séries américaines" },

    mondesmagiques: { name: "🧙 Mondes imaginaires et magiques" }

};


// =====================================================
// CRÉATION DES 8 RÉFÉRENCES
// =====================================================

for (const key in categories) {

    categories[key].references = [];

    for (let i = 1; i <= 8; i++) {

        categories[key].references.push({

            titre:
                "Référence " + i +
                " — " +
                i +
                (i === 1 ? " POINT" : " POINTS"),

            reponse:
                "Réponse à définir",

            audio:
                ""

        });

    }

}


// =====================================================
// PIRATES DES CARAÏBES
// =====================================================

categories.pirates.references = [

    {
        titre: "Référence 1 — 1 POINT",

        reponse:
            "Jack Sparrow s'échappe de Port Royal avec le Black Pearl.",

        audio:
            "pirates1.mp3"
    },

    {
        titre: "Référence 2 — 2 POINTS",

        reponse:
            "Jack Sparrow et Elizabeth Swann sont capturés par les Pelegostos.",

        audio:
            "pirates2.mp3"
    },

    {
        titre: "Référence 3 — 3 POINTS",

        reponse:
            "Jack Sparrow cherche la clé du coffre de Davy Jones.",

        audio:
            "pirates3.mp3"
    },

    {
        titre: "Référence 4 — 4 POINTS",

        reponse:
            "Jack Sparrow se retrouve dans un endroit étrange avec plusieurs versions de lui-même.",

        audio:
            "pirates4.mp3"
    },

    {
        titre: "Référence 5 — 5 POINTS",

        reponse:
            "Barbossa boit du rhum alors qu'il est sous la malédiction.",

        audio:
            "pirates5.mp3"
    },

    {
        titre: "Référence 6 — 6 POINTS",

        reponse:
            "Davy Jones demande à Jack Sparrow s'il a peur de la mort.",

        audio:
            "pirates6.mp3"
    },

    {
        titre: "Référence 7 — 7 POINTS",

        reponse:
            "Jack Sparrow doit choisir son mode d'exécution.",

        audio:
            "pirates7.mp3"
    },

    {
        titre: "Référence 8 — 8 POINTS",

        reponse:
            "Will Turner et James Norrington se battent sur la roue géante pendant que Jack poursuit le coffre.",

        audio:
            "pirates8.mp3"
    }

];


// =====================================================
// VÉRIFICATION DE LA CATÉGORIE
// =====================================================

if (!categories[category]) {

    document.querySelector(".game").innerHTML = `

        <h1>🎬 MOVIE GUESS</h1>

        <p>Catégorie inconnue.</p>

        <p>Utilise un QR code valide.</p>

    `;

}


// =====================================================
// VARIABLES
// =====================================================

let currentReference = 1;


// =====================================================
// ÉLÉMENTS
// =====================================================

const audioPlayer =
    document.getElementById("audio-player");

const playButton =
    document.getElementById("play-button");


// =====================================================
// AFFICHAGE INITIAL
// =====================================================

if (categories[category]) {

    const currentCategory =
        categories[category];

    const reference =
        currentCategory.references[0];


    document.getElementById("category-title").textContent =
        currentCategory.name;


    document.getElementById("reference-title").textContent =
        reference.titre;


    document.getElementById("counter").textContent =
        "Référence 1 / 8";


    document.getElementById("points").textContent =
        "1 POINT";


    loadAudio(reference);

}


// =====================================================
// CHARGER L'AUDIO
// =====================================================

function loadAudio(reference) {

    audioPlayer.pause();

    audioPlayer.currentTime = 0;

    audioPlayer.src = "";

    playButton.textContent =
        "▶️ LANCER L'EXTRAIT";


    if (reference.audio) {

        audioPlayer.src =
            reference.audio;

        audioPlayer.load();

    }

}


// =====================================================
// PLAY / PAUSE
// =====================================================

async function toggleAudio() {

    if (!audioPlayer.src) {

        alert(
            "Aucun extrait audio n'est associé à cette référence."
        );

        return;

    }


    if (audioPlayer.paused) {

        try {

            await audioPlayer.play();

            playButton.textContent =
                "⏸️ METTRE EN PAUSE";

        }

        catch (error) {

            console.error(
                "Erreur de lecture audio :",
                error
            );

            alert(
                "Impossible de lire cet audio. Vérifie que le fichier MP3 est bien dans le dépôt GitHub."
            );

        }

    }

    else {

        audioPlayer.pause();

        playButton.textContent =
            "▶️ REPRENDRE L'EXTRAIT";

    }

}


// =====================================================
// AUDIO MIS EN PAUSE
// =====================================================

audioPlayer.addEventListener(
    "pause",
    function () {

        if (
            audioPlayer.currentTime > 0 &&
            !audioPlayer.ended
        ) {

            playButton.textContent =
                "▶️ REPRENDRE L'EXTRAIT";

        }

    }
);


// =====================================================
// AUDIO EN LECTURE
// =====================================================

audioPlayer.addEventListener(
    "play",
    function () {

        playButton.textContent =
            "⏸️ METTRE EN PAUSE";

    }
);


// =====================================================
// AUDIO TERMINÉ
// =====================================================

audioPlayer.addEventListener(
    "ended",
    function () {

        playButton.textContent =
            "▶️ REJOUER L'EXTRAIT";

    }
);


// =====================================================
// ERREUR AUDIO
// =====================================================

audioPlayer.addEventListener(
    "error",
    function () {

        console.error(
            "Impossible de charger :",
            audioPlayer.src
        );

    }
);


// =====================================================
// AFFICHER LA RÉPONSE
// =====================================================

function showAnswer() {

    const currentCategory =
        categories[category];


    const reference =
        currentCategory.references[
            currentReference - 1
        ];


    document.getElementById("answer").textContent =
        reference.reponse;


    document.getElementById("answer").style.display =
        "block";


    document.getElementById("answer-button").style.display =
        "none";

}


// =====================================================
// RÉFÉRENCE SUIVANTE
// =====================================================

function nextReference() {

    const currentCategory =
        categories[category];


    // ARRÊTER L'AUDIO

    audioPlayer.pause();

    audioPlayer.currentTime = 0;


    currentReference++;


    if (currentReference <= 8) {

        const reference =
            currentCategory.references[
                currentReference - 1
            ];


        document.getElementById("counter").textContent =
            "Référence " +
            currentReference +
            " / 8";


        document.getElementById("reference-title").textContent =
            reference.titre;


        document.getElementById("points").textContent =
            currentReference +
            " POINT" +
            (currentReference > 1 ? "S" : "");


        document.getElementById("answer").style.display =
            "none";


        document.getElementById("answer-button").style.display =
            "inline-block";


        loadAudio(reference);

    }

    else {

        document.querySelector(".game").innerHTML = `

            <h1>🏆 FIN !</h1>

            <h2>${currentCategory.name}</h2>

            <p>
                Les 8 références sont terminées.
            </p>

            <button onclick="location.reload()">
                🔄 RECOMMENCER
            </button>

        `;

    }

}
```
