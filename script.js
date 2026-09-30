// ===============================
// RÉCUPÉRATION DE LA CATÉGORIE
// ===============================

const params = new URLSearchParams(window.location.search);
const category = params.get("cat");


// ===============================
// LES CATÉGORIES ET LEURS 8 RÉFÉRENCES
// ===============================

const categories = {

    pirates: {
        name: "🏴‍☠️ Pirates des Caraïbes",

        references: [
            {
                titre: "Référence 1",
                reponse: "Réponse Pirates 1"
            },
            {
                titre: "Référence 2",
                reponse: "Réponse Pirates 2"
            },
            {
                titre: "Référence 3",
                reponse: "Réponse Pirates 3"
            },
            {
                titre: "Référence 4",
                reponse: "Réponse Pirates 4"
            },
            {
                titre: "Référence 5",
                reponse: "Réponse Pirates 5"
            },
            {
                titre: "Référence 6",
                reponse: "Réponse Pirates 6"
            },
            {
                titre: "Référence 7",
                reponse: "Réponse Pirates 7"
            },
            {
                titre: "Référence 8",
                reponse: "Réponse Pirates 8"
            }
        ]
    },


    marvel: {
        name: "🦸 Marvel",

        references: [
            {
                titre: "Référence 1",
                reponse: "Réponse Marvel 1"
            },
            {
                titre: "Référence 2",
                reponse: "Réponse Marvel 2"
            },
            {
                titre: "Référence 3",
                reponse: "Réponse Marvel 3"
            },
            {
                titre: "Référence 4",
                reponse: "Réponse Marvel 4"
            },
            {
                titre: "Référence 5",
                reponse: "Réponse Marvel 5"
            },
            {
                titre: "Référence 6",
                reponse: "Réponse Marvel 6"
            },
            {
                titre: "Référence 7",
                reponse: "Réponse Marvel 7"
            },
            {
                titre: "Référence 8",
                reponse: "Réponse Marvel 8"
            }
        ]
    },


    starwars: {
        name: "⭐ Star Wars",

        references: [
            {
                titre: "Référence 1",
                reponse: "Réponse Star Wars 1"
            },
            {
                titre: "Référence 2",
                reponse: "Réponse Star Wars 2"
            },
            {
                titre: "Référence 3",
                reponse: "Réponse Star Wars 3"
            },
            {
                titre: "Référence 4",
                reponse: "Réponse Star Wars 4"
            },
            {
                titre: "Référence 5",
                reponse: "Réponse Star Wars 5"
            },
            {
                titre: "Référence 6",
                reponse: "Réponse Star Wars 6"
            },
            {
                titre: "Référence 7",
                reponse: "Réponse Star Wars 7"
            },
            {
                titre: "Référence 8",
                reponse: "Réponse Star Wars 8"
            }
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
// VARIABLES
// ===============================

let currentReference = 1;
let answerShown = false;


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
    const reference = currentCategory.references[currentReference - 1];

    document.getElementById("answer").textContent =
        reference.reponse;

    document.getElementById("answer").style.display =
        "block";

    answerShown = true;

    document.getElementById("answer-button").style.display =
        "none";
}


// ===============================
// RÉFÉRENCE SUIVANTE
// ===============================

function nextReference() {

    const currentCategory = categories[category];

    currentReference++;

    answerShown = false;

    // Si on est encore dans les 8 références
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

        // Cache la réponse précédente
        document.getElementById("answer").style.display =
            "none";

        // Réaffiche le bouton
        document.getElementById("answer-button").style.display =
            "inline-block";

    }

    // Fin du jeu
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
