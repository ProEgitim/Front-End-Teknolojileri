class UI {
    showError(message) {
        const profile = document.querySelector("#profile");
        const div = document.createElement("div");
        div.className = `alert alert-danger`;
        div.textContent = message;
        profile.appendChild(div);
        setTimeout(function () {
            div.remove();
        }, 2000);
    }
}