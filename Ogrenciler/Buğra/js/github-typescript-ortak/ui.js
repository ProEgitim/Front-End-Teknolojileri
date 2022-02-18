var UI = /** @class */ (function () {
    function UI() {
        this.profileDiv = document.getElementById("profile");
        this.repoDiv = document.getElementById("repos");
        this.lastUsers = document.getElementById("last-users");
        this.inputField = document.getElementById("githubname");
        this.cardBody = document.querySelector(".card-body");
    }
    UI.prototype.clearInput = function () {
        this.inputField.value = "";
    };
    UI.prototype.showUserInfo = function (user) {
        this.profileDiv.innerHTML = "\n        <div class=\"card card-body mb-3\">\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <a href=\"".concat(user.html_url, "\" target = \"_blank\">\n             <img class=\"img-fluid mb-2\" src=\"").concat(user.avatar_url, "\"></a>\n             <hr>\n             <div id=\"fullName\"><strong>").concat(user.name, "</strong></div>\n             <hr>\n             <div id=\"bio\">").concat(user.bio, "</div>\n            </div>\n          <div class=\"col-md-8\">\n                <button class=\"btn btn-secondary\">\n                      Takip\u00E7i  <span class=\"badge badge-light\">").concat(user.followers, "</span>\n                </button>\n                <button class=\"btn btn-info\">\n                     Takip Edilen  <span class=\"badge badge-light\">").concat(user.following, "</span>\n                  </button>\n                <button class=\"btn btn-danger\">\n                    Repolar  <span class=\"badge badge-light\">").concat(user.public_repos, "</span>\n                </button>\n                <hr>\n                <li class=\"list-group\">\n                    <li class=\"list-group-item borderzero\">\n                        <img src=\"images/company.png\" width=\"30px\"> <span id=\"company\">").concat(user.company, "</span>\n                    </li>\n                    <li class=\"list-group-item borderzero\">\n                        <img src=\"images/location.png\" width=\"30px\"> <span id = \"location\">").concat(user.location, "</a>\n                    </li>\n                    <li class=\"list-group-item borderzero\">\n                        <img src=\"images/mail.png\" width=\"30px\"> <span id=\"mail\">").concat(user.email, "</span> \n                    </li>\n                </div> \n          </div>\n    </div> \n        ");
    };
    UI.prototype.showError = function (message) {
        var div = document.createElement("div");
        div.className = "alert alert-danger";
        div.textContent = message;
        this.cardBody.appendChild(div);
        setTimeout(function () {
            div.remove();
        }, 2000);
    };
    UI.prototype.showRepoInfo = function (repos) {
        var _this = this;
        this.repoDiv.innerHTML = "";
        repos.forEach(function (repo) {
            _this.repoDiv.innerHTML += "\n            <div class=\"mb-2 card-body\">\n            <div class=\"row\">\n                <div class=\"col-md-2\">\n                <a class=\"text-decoration-none fw-bold text-success\" href=\"".concat(repo.html_url, "\" target = \"_blank\" id = \"repoName\">").concat(repo.name, "</a>\n                </div>\n                <div class=\"col-md-6\">\n                    <button class=\"btn btn-secondary\">\n                        Starlar  <span class=\"badge badge-light\" id=\"repoStar\">").concat(repo.stargazers_count, "</span>\n                    </button>\n                    <button class=\"btn btn-info\">\n                        Forklar  <span class=\"badge badge-light\" id =\"repoFork\">").concat(repo.forks_count, "</span>\n                    </button>\n                </div>\n            </div>\n            </div>\n            ");
        });
    };
    UI.prototype.addSearchedUserToUI = function (username) {
        var users = Storage.getSearchedUsersFromStorage();
        if (users.indexOf(username) === -1) {
            var li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = username;
            this.lastUsers.appendChild(li);
        }
    };
    UI.prototype.clearAllSearchedFromUI = function () {
        while (this.lastUsers.firstElementChild !== null) {
            this.lastUsers.removeChild(this.lastUsers.firstElementChild);
        }
    };
    return UI;
}());
