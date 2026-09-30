let currentReference = 1;

// Récupère la catégorie dans l'adresse
const params = new URLSearchParams(window.location.search);
const category = params.get("cat");

// Noms affichés des catégories
const categories = {
    pirates: "🏴‍☠️ Pirates des Caraïbes",
    marvel: "🦸 Marvel",
    starwars: "⭐ Star Wars",
    films: "🎬 Films",
    series: "📺 Séries"
};

// Affiche la catégorie
const categoryTitle = document.getElementById("category-title");

if (category && categories[category]) {
    categoryTitle.textContent = categories[category];
} else {
    categoryTitle.textContent = "🎬 Movie Guess";
}


function nextReference() {

    currentReference++;

    if (currentReference <= 8) {

        document.getElementById("counter").textContent =
            "Référence " + currentReference + " / 8";

        document.getElementById("reference-title").textContent =
            "Référence " + currentReference;

        document.getElementById("points").textContent =
            currentReference + " POINT" +
            (currentReference > 1 ? "S" : "");

    } else {

        document.querySelector(".game").innerHTML = `
            <h1>🏆 FIN !</h1>
            <h2>${categories[category] || "Movie Guess"}</h2>
            <p>Les 8 références sont terminées.</p>
            <button onclick="location.reload()">
                RECOMMENCER
            </button>
        `;
    }
}
