let githubForm = document.getElementById("github-form");
let userName = document.getElementById("github_name");
let clearButton = document.getElementById("clear-last-users");
let lastSearch = document.getElementById("last-users");


const github = new Github();
const ui = new UI();
const storage = new Storage();

eventListeners();

function eventListeners() {
    githubForm.addEventListener("submit", addUsername);
    clearButton.addEventListener("click", clearAllSearch);
    document.addEventListener("DOMContentLoaded", loadAllUsers);
}


function addUsername(e) {
    const user = userName.value.trim();
    if (user === "") {
        ui.showError ("Lütfen geçerli bir kullanıcı adı giriniz.", "warning");
    } else {
        github.getGithubData(user)
            .then(response => {
                if (response.user.message === "Not Found") {
                    ui.showError("Kullanici Bulunamadi");
                } else {
                    ui.createProfile(response.user);
                    ui.getRepos(response.repo);
                    ui.addNewSearch(response.user.login);
                    storage.addLocalStorage(response.user.login);
                    ui.showError ("Kullanıcı başarıyla getirildi." , "success" );
                }
            })
    }
    e.preventDefault();
}

function clearAllSearch(e) {
    lastSearch.innerHTML = "";
    localStorage.setItem("users", JSON.stringify([]));
}

function loadAllUsers(e) {
    let users = storage.getLocalStorage();
    for (let index = 0; index < users.length; index++) {

        ui.addNewSearch(users[index]);
    }

}

