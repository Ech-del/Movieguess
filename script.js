// ===============================
// RÉCUPÉRATION DE LA CATÉGORIE
// ===============================

const params = new URLSearchParams(window.location.search);
const category = (params.get("cat") || "").trim().toLowerCase();


// ===============================
// LES 20 CATÉGORIES
// ===============================

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


// ===============================
// CRÉATION DES RÉFÉRENCES
// ===============================

for (const key in categories) {

    categories[key].references = [];

    for (let i = 1; i <= 8; i++) {

        categories[key].references.push({
            titre: "Référence " + i,
            reponse: "Réponse à définir"
        });

    }
}


// ===============================
// PIRATES DES CARAÏBES
// ===============================

categories.pirates.references = [

    {
        titre: "Référence 1 — 1 POINT",
        reponse: "Jack Sparrow s'échappe de Port Royal avec le Black Pearl."
    },

    {
        titre: "Référence 2 — 2 POINTS",
        reponse: "Jack Sparrow et Elizabeth Swann sont capturés sur l'île des Pelegostos."
    },

    {
        titre: "Référence 3 — 3 POINTS",
        reponse: "Jack Sparrow cherche la clé du coffre de Davy Jones."
    },

    {
        titre: "Référence 4 — 4 POINTS",
        reponse: "Jack Sparrow se retrouve dans l'antre de Davy Jones avec plusieurs versions de lui-même."
    },

    {
        titre: "Référence 5 — 5 POINTS",
        reponse: "Barbossa boit du rhum alors qu'il est sous la malédiction."
    },

    {
        titre: "Référence 6 — 6 POINTS",
        reponse: "Davy Jones demande à Jack Sparrow s'il a peur de la mort."
    },

    {
        titre: "Référence 7 — 7 POINTS",
        reponse: "Jack Sparrow doit choisir son mode d'exécution."
    },

    {
        titre: "Référence 8 — 8 POINTS",
        reponse: "Will Turner et James Norrington se battent sur la roue géante pendant que Jack poursuit le coffre."
    }

];


// ===============================
// VÉRIFICATION DE LA CATÉGORIE
// ===============================

if (!categories[category]) {

    document.querySelector(".game").innerHTML = `
        <h1>🎬 MOVIE GUESS</h1>
        <p>Catégorie inconnue.</p>
        <p>Utilise un QR code valide.</p>
    `;

}


// ===============================
// VARIABLES
// ===============================

let currentReference = 1;


// ===============================
// AFFICHAGE INITIAL
// ===============================

if (categories[category]) {

    const currentCategory = categories[category];
    const reference = currentCategory.references[0];

    document.getElementById("category-title").textContent =
        currentCategory.name;

    document.getElementById("reference-title").textContent =
        reference.titre;

    document.getElementById("counter").textContent =
        "Référence 1 / 8";

    document.getElementById("points").textContent =
        "1 POINT";

}


// ===============================
// AFFICHER LA RÉPONSE
// ===============================

function showAnswer() {

    const currentCategory = categories[category];

    const reference =
        currentCategory.references[currentReference - 1];

    document.getElementById("answer").textContent =
        reference.reponse;

    document.getElementById("answer").style.display =
        "block";

    document.getElementById("answer-button").style.display =
        "none";
}


// ===============================
// RÉFÉRENCE SUIVANTE
// ===============================

function nextReference() {

    const currentCategory = categories[category];

    currentReference++;

    if (currentReference <= 8) {

        const reference =
            currentCategory.references[currentReference - 1];

        document.getElementById("counter").textContent =
            "Référence " + currentReference + " / 8";

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

    }

    else {

        document.querySelector(".game").innerHTML = `

            <h1>🏆 FIN !</h1>

            <h2>${currentCategory.name}</h2>

            <p>Les 8 références sont terminées.</p>

            <button onclick="location.reload()">
                RECOMMENCER
            </button>

        `;
    }
}
