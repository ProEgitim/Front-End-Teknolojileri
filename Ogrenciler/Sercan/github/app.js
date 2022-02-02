const github = new Github();
const ui = new UI;
const storage = new Store();
const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearButon = document.getElementById("clear-last-users");
eventListeners();

function eventListeners() {
    githubForm.addEventListener("submit", getData);
    clearButon.addEventListener("click", clearStore);
}

function getData(e) {
    let userName = nameInput.value.trim();
    if (userName === "") {
        alert("Lütfen geçerli bir kullanıcı adı girin");
    } else {
        github.getGithubData(userName)
            .then(response => {
                if (response.user.message === "Not Found") {
                    //// uı tarafından hata messajı gönder//
                    ui.showAlert("danger", "Kullanıcı Bulunamadı");
                } else {
                    ///// uı tarafında username gönder ve uı oluştur.
                    let gitdata = storage.get("Github");
                    if (gitdata !== null) {
                        gitdata.push(response.user.login);
                        storage.add(gitdata);
                        ui.addUsers(response.user);
                        ui.addRepos(response.repo);
                        for (const el of gitdata) {
                           
                                document.getElementById("last-users").innerHTML += `
                            <li class="list-group-item">https://api.github.com/users/${el}</li>
                            ` 
                        }
                    }
                    if (gitdata === null) {
                        ui.addUsers(response.user);
                        ui.addRepos(response.repo);
                        storage.add([response.user.login]);

                    }
                }
            })
            .catch(err => console.log(err)); ///buradaki showerror methodu yaz
    }
    ///// uı da clear input yap
    e.preventDefault();

}

function clearStore(e) {
    storage.delete();
    window.location.reload();
}