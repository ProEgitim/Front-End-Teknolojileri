var githubForm = document.getElementById("github-form");
var nameInput = document.getElementById("githubname");
var clearLastUsers = document.getElementById("clear-last-users");
var lastUsers = document.getElementById("last-users");
var github = new Github();
var ui = new UI();
eventListeners();
function eventListeners() {
    githubForm.addEventListener("submit", getData);
    clearLastUsers.addEventListener("click", clearAllSearched);
    document.addEventListener("DOMContentLoaded", getAllSearched);
}
function getData(e) {
    var username = nameInput.value.trim();
    if (username === "") {
        alert("Lütfen geçerli bir kullanıcı adı girin.");
    }
    else {
        github
            .getGithubData(username)
            .then(function (response) {
            if (response.user.message === "Not Found") {
                ui.showError("Kullanıcı Bulunamadı");
            }
            else {
                ui.addSearchedUserToUI(username);
                Storage.addSearchedUserToStorage(username);
                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo);
            }
        })["catch"](function (err) { return ui.showError(err); });
    }
    ui.clearInput();
    e.preventDefault();
}
function clearAllSearched() {
    if (confirm("Emin misiniz ?")) {
        Storage.clearAllSearchedUsersFromStorage();
        ui.clearAllSearchedFromUI();
    }
}
function getAllSearched() {
    var users = Storage.getSearchedUsersFromStorage();
    var result = "";
    users.forEach(function (user) {
        result += "<li class=\"list-group-item\">".concat(user, "</li>");
    });
    lastUsers.innerHTML = result;
}
