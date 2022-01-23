const github = new Github();
const ui = new UI;
const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
eventListeners();

function eventListeners() {
    githubForm.addEventListener("submit", getData);
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
                    ui.showAlert("danger", "Kullanıcı Bulunamadı")
                } else {
                    ///// uı tarafında username göder ve uı oluştur.
                   
                    ui.addUsers(response.user);
                    ui.addRepos(response.repo);
                    
                   
                }
            })
            .catch(err => ui.showError(err)); ///buradaki showerror methodu yaz
    }
    ///// uı da clear input yap
    e.preventDefault();
    
}