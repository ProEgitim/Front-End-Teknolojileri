var githubForm = document.getElementById("github-form");
var userName = document.getElementById("github_name");
var clearButton = document.getElementById("clear-last-users");
var lastSearch = document.getElementById("last-users");
var github = new Github();
var ui = new UI();
var storage = new Storage();
eventListeners();
function eventListeners() {
    githubForm.addEventListener("submit", addUsername);
    clearButton.addEventListener("click", clearAllSearch);
    document.addEventListener("DOMContentLoaded", loadAllUsers);
}
function addUsername(e) {
    var user = userName.value.trim();
    if (user === "") {
        ui.showError("Lütfen geçerli bir kullanıcı adı giriniz.", "warning");
    }
    else {
        github.getGithubData(user)
            .then(function (response) {
            if (response.user.message === "Not Found") {
                ui.showError("Kullanici Bulunamadi");
            }
            else {
                ui.createProfile(response.user);
                ui.getRepos(response.repo);
                ui.addNewSearch(response.user.login);
                storage.addLocalStorage(response.user.login);
                ui.showError("Kullanıcı başarıyla getirildi.", "success");
            }
        });
    }
    e.preventDefault();
}
function clearAllSearch(e) {
    lastSearch.innerHTML = "";
    localStorage.setItem("users", JSON.stringify([]));
}
function loadAllUsers(e) {
    var users = storage.getLocalStorage();
    for (var i = 0; i < users.length; i++) {
        ui.addNewSearch(users[i]);
    }
}
