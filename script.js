// ===============================
// RÉCUPÉRATION DE LA CATÉGORIE
// ===============================

const params = new URLSearchParams(window.location.search);
const category = params.get("cat");


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
// CRÉATION DES 8 RÉFÉRENCES
// ===============================

// Pour l'instant, chaque catégorie possède
// 8 emplacements temporaires.
// On remplacera ensuite ces textes par
// les vrais films et les vraies réponses.

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

    // ===========================
    // RÉFÉRENCES 1 À 8
    // ===========================

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

        // Cache la réponse
        document.getElementById("answer").style.display =
            "none";

        // Réaffiche le bouton
        document.getElementById("answer-button").style.display =
            "inline-block";
    }

    // ===========================
    // FIN DU JEU
    // ===========================

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
