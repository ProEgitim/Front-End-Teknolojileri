
const githubForm:any = document.getElementById("github-form");
const nameInput:any = document.getElementById("githubname");
const clearLastUsers:any = document.getElementById("clear-last-users");
const lastUsers:any = document.getElementById("last-users");
const github = new Github();
const ui = new UI();
eventListeners();
function eventListeners() {
  githubForm.addEventListener("submit", getData);
  clearLastUsers.addEventListener("click", clearAllSearched);
  document.addEventListener("DOMContentLoaded", getAllSearched);
}
function getData(e:any) {
  let username = nameInput.value.trim();
  if (username === "") {
    alert("Lütfen geçerli bir kullanıcı adı girin.");
  } else {
    github
      .getGithubData(username)
      .then((response) => {
        if (response.user.message === "Not Found") {
          ui.showError("Kullanıcı Bulunamadı");
        } else {
          ui.addSearchedUserToUI(username);
          Storage.addSearchedUserToStorage(username);
          ui.showUserInfo(response.user);
          ui.showRepoInfo(response.repo);
        }
      })
      .catch((err) => ui.showError(err));
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
  let users = Storage.getSearchedUsersFromStorage();
  let result = "";
  users.forEach((user:string) => {
    result += `<li class="list-group-item">${user}</li>`;
  });
  lastUsers.innerHTML = result;
}
