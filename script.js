// =====================================================
// MOVIE GUESS — SCRIPT COMPLET
// =====================================================


// =====================================================
// RÉCUPÉRATION DE LA CATÉGORIE
// =====================================================

const params = new URLSearchParams(window.location.search);
const category = (params.get("cat") || "").trim().toLowerCase();


// =====================================================
// LES 20 CATÉGORIES
// =====================================================

const categories = {

    vo: {
        name: "🎙️ VO"
    },

    pirates: {
        name: "🏴‍☠️ Pirates des Caraïbes"
    },

    louisdefunes: {
        name: "😂 Louis de Funès"
    },

    tonystark: {
        name: "🤖 Tony Stark"
    },

    marvel: {
        name: "🦸 Marvel"
    },

    starwars: {
        name: "⭐ Star Wars"
    },

    tomcruise: {
        name: "🎬 Tom Cruise"
    },

    christianclavier: {
        name: "😂 Christian Clavier"
    },

    sciencefiction: {
        name: "🚀 Science-fiction"
    },

    aventure: {
        name: "🗺️ Aventure"
    },

    action: {
        name: "💥 Action"
    },

    nyc: {
        name: "🗽 NYC"
    },

    hollywood: {
        name: "🎥 Hollywood"
    },

    comediefrancaise: {
        name: "🤣 Comédie française"
    },

    musiquesfilms1: {
        name: "🎵 Musiques de films 1"
    },

    musiquesfilms2: {
        name: "🎵 Musiques de films 2"
    },

    disney: {
        name: "✨ Disney"
    },

    pixar: {
        name: "🧸 Pixar"
    },

    seriesamericaines: {
        name: "📺 Séries américaines"
    },

    mondesmagiques: {
        name: "🧙 Mondes imaginaires et magiques"
    }

};


// =====================================================
// CRÉATION DES 8 RÉFÉRENCES PAR DÉFAUT
// =====================================================

for (const key in categories) {

    categories[key].references = [];

    for (let i = 1; i <= 8; i++) {

        categories[key].references.push({

            titre: "Référence " + i,

            reponse: "Réponse à définir",

            audio: ""

        });

    }

}


// =====================================================
// PIRATES DES CARAÏBES
// =====================================================

categories.pirates.references = [

    {
        titre: "Référence 1",

        reponse:
            "Jack Sparrow s'échappe de Port Royal avec le Black Pearl.",

        audio:
            "pirates1.mp3"
    },

    {
        titre: "Référence 2",

        reponse:
            "Jack Sparrow est capturé par les Pelegostos, qui le considèrent comme un dieu.",

        audio:
            "pirates2.mp3"
    },

    {
        titre: "Référence 3",

        reponse:
            "Jack Sparrow cherche la clé du coffre de Davy Jones.",

        audio:
            "pirates3.mp3"
    },

    {
        titre: "Référence 4",

        reponse:
            "Jack Sparrow se retrouve dans un endroit étrange avec plusieurs versions de lui-même.",

        audio:
            "pirates4.mp3"
    },

    {
        titre: "Référence 5",

        reponse:
            "Barbossa boit du rhum alors qu'il est sous la malédiction.",

        audio:
            "pirates5.mp3"
    },

    {
        titre: "Référence 6",

        reponse:
            "Davy Jones demande à Jack Sparrow s'il a peur de la mort.",

        audio:
            "pirates6.mp3"
    },

    {
        titre: "Référence 7",

        reponse:
            "Jack Sparrow doit choisir son mode d'exécution.",

        audio:
            "pirates7.mp3"
    },

    {
        titre: "Référence 8",

        reponse:
            "Will Turner et James Norrington se battent sur la roue géante pendant que Jack poursuit le coffre.",

        audio:
            "pirates8.mp3"
    }

];


// =====================================================
// MARVEL
// =====================================================

categories.marvel.references = [

    {
        titre: "Référence 1",

        reponse:
            "Iron Man — 2008",

        audio:
            "marvel1.mp3"
    },

    {
        titre: "Référence 2",

        reponse:
            "Avengers — 2012",

        audio:
            "marvel2.mp3"
    },

    {
        titre: "Référence 3",

        reponse:
            "Thor — 2011",

        audio:
            "marvel3.mp3"
    },

    {
        titre: "Référence 4",

        reponse:
            "Les Gardiens de la Galaxie — 2014",

        audio:
            "marvel4.mp3"
    },

    {
        titre: "Référence 5",

        reponse:
            "Captain America: Civil War — 2016",

        audio:
            "marvel5.mp3"
    },

    {
        titre: "Référence 6",

        reponse:
            "Doctor Strange — 2016",

        audio:
            "marvel6.mp3"
    },

    {
        titre: "Référence 7",

        reponse:
            "Avengers: Infinity War — 2018",

        audio:
            "marvel7.mp3"
    },

    {
        titre: "Référence 8",

        reponse:
            "Avengers: Endgame — 2019",

        audio:
            "marvel8.mp3"
    }

];


// =====================================================
// STAR WARS
// =====================================================

categories.starwars.references = [

    {
        titre: "Référence 1",
        reponse:
            "Obi-Wan Kenobi utilise la Force pour persuader les Stormtroopers de les laisser passer à Mos Eisley — Star Wars : Un nouvel espoir",
        audio:
            "starwars1.mp3"
    },

    {
        titre: "Référence 2",
        reponse:
            "Yoda entraîne Luke Skywalker sur Dagobah — Star Wars : L'Empire contre-attaque",
        audio:
            "starwars2.mp3"
    },

    {
        titre: "Référence 3",
        reponse:
            "Han Solo est enfermé dans la carbonite à Bespin — Star Wars : L'Empire contre-attaque",
        audio:
            "starwars3.mp3"
    },

    {
        titre: "Référence 4",
        reponse:
            "Palpatine révèle à Anakin qu'il pourrait utiliser le côté obscur pour empêcher quelqu'un de mourir — Star Wars : La Revanche des Sith",
        audio:
            "starwars4.mp3"
    },

    {
        titre: "Référence 5",
        reponse:
            "Anakin Skywalker et Obi-Wan Kenobi s'affrontent sur Mustafar — Star Wars : La Revanche des Sith",
        audio:
            "starwars5.mp3"
    },

    {
        titre: "Référence 6",
        reponse:
            "Dark Vador révèle à Luke Skywalker qu'il est son père — Star Wars : L'Empire contre-attaque",
        audio:
            "starwars6.mp3"
    },

    {
        titre: "Référence 7",
        reponse:
            "Luke Skywalker utilise la projection de Force pour affronter Kylo Ren sur Crait et permettre à la Résistance de s'échapper — Star Wars : Les Derniers Jedi",
        audio:
            "starwars7.mp3"
    },

    {
        titre: "Référence 8",
        reponse:
            "Luke Skywalker refuse de tuer Dark Vador, jette son sabre laser et choisit de rester du côté lumineux — Star Wars : Le Retour du Jedi",
        audio:
            "starwars8.mp3"
    }

];


// =====================================================
// VARIABLES
// =====================================================

let currentReference = 1;


// =====================================================
// ÉLÉMENTS HTML
// =====================================================

const categoryTitle =
    document.getElementById("category-title");

const counter =
    document.getElementById("counter");

const referenceTitle =
    document.getElementById("reference-title");

const points =
    document.getElementById("points");

const answer =
    document.getElementById("answer");

const answerButton =
    document.getElementById("answer-button");

const playButton =
    document.getElementById("play-button");

const audioPlayer =
    document.getElementById("audio-player");


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
// AFFICHER UNE RÉFÉRENCE
// =====================================================

function displayReference() {

    const currentCategory =
        categories[category];

    const reference =
        currentCategory.references[currentReference - 1];


    categoryTitle.textContent =
        currentCategory.name;


    counter.textContent =
        "Référence " + currentReference + " / 8";


    referenceTitle.textContent =
        reference.titre;


    points.textContent =
        currentReference +
        (currentReference === 1 ? " POINT" : " POINTS");


    answer.textContent =
        reference.reponse;


    answer.style.display =
        "none";


    answerButton.style.display =
        "inline-block";


    loadAudio(reference);

}


// =====================================================
// CHARGER L'AUDIO
// =====================================================

function loadAudio(reference) {

    audioPlayer.pause();

    audioPlayer.currentTime = 0;

    audioPlayer.removeAttribute("src");

    audioPlayer.load();


    playButton.textContent =
        "▶️ LANCER L'EXTRAIT";


    if (reference.audio !== "") {

        audioPlayer.src =
            reference.audio;

        audioPlayer.load();

    }

}


// =====================================================
// LANCER / PAUSER / REPRENDRE
// =====================================================

window.toggleAudio = function () {

    if (!audioPlayer.src) {

        alert(
            "Aucun extrait audio n'est disponible pour cette référence."
        );

        return;

    }


    if (!audioPlayer.paused) {

        audioPlayer.pause();

        playButton.textContent =
            "▶️ REPRENDRE L'EXTRAIT";

        return;

    }


    audioPlayer.play()

        .then(function () {

            playButton.textContent =
                "⏸️ METTRE EN PAUSE";

        })

        .catch(function (error) {

            console.error(
                "Erreur audio :",
                error
            );

            alert(
                "Impossible de lire l'audio. Vérifie que le fichier MP3 existe bien."
            );

        });

};


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
// AUDIO EN PAUSE
// =====================================================

audioPlayer.addEventListener(
    "pause",
    function () {

        if (!audioPlayer.ended) {

            playButton.textContent =
                "▶️ REPRENDRE L'EXTRAIT";

        }

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
            "Erreur de chargement audio :",
            audioPlayer.src
        );

    }
);


// =====================================================
// AFFICHER LA RÉPONSE
// =====================================================

window.showAnswer = function () {

    const currentCategory =
        categories[category];

    const reference =
        currentCategory.references[
            currentReference - 1
        ];


    answer.textContent =
        reference.reponse;


    answer.style.display =
        "block";


    answerButton.style.display =
        "none";

};


// =====================================================
// RÉFÉRENCE SUIVANTE
// =====================================================

window.nextReference = function () {

    const currentCategory =
        categories[category];


    audioPlayer.pause();

    audioPlayer.currentTime = 0;


    currentReference++;


    if (currentReference <= 8) {

        displayReference();

        return;

    }


    // =================================================
    // FIN DU JEU
    // =================================================

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

};


// =====================================================
// DÉMARRAGE
// =====================================================

if (categories[category]) {

    displayReference();

}
