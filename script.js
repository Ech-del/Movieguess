// ===============================
// RÉCUPÉRATION DE LA CATÉGORIE
// ===============================

const params = new URLSearchParams(window.location.search);
const category = params.get("cat");


// ===============================
// LES 3 CATÉGORIES
// ===============================

const categories = {

    pirates: {
        name: "🏴‍☠️ Pirates des Caraïbes",

        references: [
            "Pirates — Référence 1",
            "Pirates — Référence 2",
            "Pirates — Référence 3",
            "Pirates — Référence 4",
            "Pirates — Référence 5",
            "Pirates — Référence 6",
            "Pirates — Référence 7",
            "Pirates — Référence 8"
        ]
    },


    marvel: {
        name: "🦸 Marvel",

        references: [
            "Marvel — Référence 1",
            "Marvel — Référence 2",
            "Marvel — Référence 3",
            "Marvel — Référence 4",
            "Marvel — Référence 5",
            "Marvel — Référence 6",
            "Marvel — Référence 7",
            "Marvel — Référence 8"
        ]
    },


    starwars: {
        name: "⭐ Star Wars",

        references: [
            "Star Wars — Référence 1",
            "Star Wars — Référence 2",
            "Star Wars — Référence 3",
            "Star Wars — Référence 4",
            "Star Wars — Référence 5",
            "Star Wars — Référence 6",
            "Star Wars — Référence 7",
            "Star Wars — Référence 8"
        ]
    }

};


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
// AFFICHAGE DE LA CATÉGORIE
// ===============================

if (categories[category]) {

    const currentCategory = categories[category];

    document.getElementById("category-title").textContent =
        currentCategory.name;

    document.getElementById("reference-title").textContent =
        currentCategory.references[0];

}


// ===============================
// RÉFÉRENCE ACTUELLE
// ===============================

let currentReference = 1;


// ===============================
// BOUTON RÉFÉRENCE SUIVANTE
// ===============================

function nextReference() {

    currentReference++;

    const currentCategory = categories[category];

    // Si on est encore dans les 8 références
    if (currentReference <= 8) {

        document.getElementById("counter").textContent =
            "Référence " + currentReference + " / 8";

        document.getElementById("reference-title").textContent =
            currentCategory.references[currentReference - 1];

        document.getElementById("points").textContent =
            currentReference +
            " POINT" +
            (currentReference > 1 ? "S" : "");

    }

    // Si les 8 références sont terminées
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
