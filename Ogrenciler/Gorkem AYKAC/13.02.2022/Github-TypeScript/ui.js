var UI = /** @class */ (function () {
    function UI() {
        this.profile = document.getElementById("profile");
        this.reposs = document.getElementById("repos");
    }
    UI.prototype.addRepos = function (repos) {
        var _this = this;
        this.reposs.innerHTML = "";
        repos.forEach(function (reposElement) {
            _this.reposs.innerHTML += "\n          <div class=\"mb-2 card-body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-2\">\n                            <span></span> \n                            <a href=\"#\" target = \"_blank\" id = \"repoName\">".concat(reposElement.full_name, "</a>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <button class=\"btn btn-secondary\">\n                                    Starlar  <span class=\"badge badge-light\" id=\"repoStar\">(").concat(reposElement.stargazers_count, ")</span>\n                                </button>\n\n                                <button class=\"btn btn-info\">\n                                    Forklar  <span class=\"badge badge-light\" id =\"repoFork\">(").concat(reposElement.forks, ")</span>\n                                </button>\n                        \n                            </div>\n                    </div>\n\n                    </div> \n        ");
        });
    };
    UI.prototype.addUser = function (user) {
        this.profile.innerHTML = "";
        this.profile.innerHTML = "\n            <div class=\"card card-body mb-3\">\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <a href=\"\" target = \"_blank\">\n                <img class=\"img-fluid mb-2\" src=\"".concat(user.avatar_url, "\"> </a>\n                <hr>\n                <div id=\"fullName\"><strong>").concat(user.name, "</strong></div>\n                <hr>\n                <div id=\"bio\">").concat(user.bio, "</div>\n                </div>\n              <div class=\"col-md-8\">\n                    <button class=\"btn btn-secondary\">\n                          Takip\u00E7i  <span class=\"badge badge-light\">(").concat(user.followers, ")</span>\n                    </button>\n                    <button class=\"btn btn-info\">\n                        Takip Edilen  <span class=\"badge badge-light\">(").concat(user.following, ")</span>\n                      </button>\n                    <button class=\"btn btn-danger\">\n                        Repolar  <span class=\"badge badge-light\">(").concat(user.public_repos, ")</span>\n                    </button>\n                    <hr>\n                    <li class=\"list-group\">\n                        <li class=\"list-group-item borderzero\">\n                            <img src=\"images/company.png\" width=\"30px\"> <span id=\"company\">").concat(user.company, "</span>\n                            \n                        </li>\n                        <li class=\"list-group-item borderzero\">\n                            <img src=\"images/location.png\" width=\"30px\"> <span id = \"location\">").concat(user.location, "</a>\n                            \n                        </li>\n                        <li class=\"list-group-item borderzero\">\n                            <img src=\"images/mail.png\" width=\"30px\"> <span id=\"company\">").concat(user.email, "</span>\n                            \n                        </li>\n                        \n                    </div>\n                      \n                    \n              </div>\n        </div>\n      \n      ");
    };
    UI.prototype.falseUI = function () {
        this.profile.innerHTML = "";
        this.reposs.innerHTML = "";
        var searchPart = document.getElementById("searchingPart");
        var alert = document.createElement("div");
        alert.className = "mt-3 alert alert-danger";
        alert.textContent = "Wrong Input!";
        searchPart.appendChild(alert);
        setTimeout(function () {
            alert.remove();
        }, 2000);
    };
    return UI;
}());
