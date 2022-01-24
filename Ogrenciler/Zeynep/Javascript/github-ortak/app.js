let githubForm = document.getElementById("github-form");
let userName = document.getElementById("githubname");
let searchButton = document.getElementById("search");


eventListeners();

function eventListeners() {
    githubForm.addEventListener("submit", addUsername);
}

const github = new Github();
const ui = new UI();


function addUsername(e) {
    const user = userName.value.trim();
    if (user === "") {
        alert("Lutfen gecerli bir kullanici adi girin");
    } else {
        github.getGithubData(user)
            .then(response => {
                if (response.user.message === "Not Found") {
                    ui.showError("Kullanici Bulunamadi");
                } else {
                    console.log(response.user);
                    ui.createProfile(response.user);
                    ui.getRepos(response.repo);


                }
            })
    }
    e.preventDefault();
}
