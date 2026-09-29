let currentReference = 1;

function nextReference() {

    currentReference++;

    if (currentReference <= 8) {

        document.getElementById("counter").textContent =
            "Référence " + currentReference + " / 8";

        document.getElementById("reference-title").textContent =
            "Référence " + currentReference;

        document.getElementById("points").textContent =
            currentReference + " POINT" + (currentReference > 1 ? "S" : "");

    } else {

        document.querySelector(".game").innerHTML = `
            <h1>🏆 FIN !</h1>
            <p>Les 8 références sont terminées.</p>
            <button onclick="location.reload()">RECOMMENCER</button>
        `;
    }
}
