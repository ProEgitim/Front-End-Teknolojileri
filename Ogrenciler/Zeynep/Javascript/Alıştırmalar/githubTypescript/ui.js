var UI = /** @class */ (function () {
    function UI() {
        var _this = this;
        _this.profileDiv = document.getElementById("profile");
        _this.reposDiv = document.getElementById("repos");
        _this.githubForm = document.getElementById("github-form");
        // _this.lastSearch = document.getElementById("lastSearch")
        _this.lastSearch = document.getElementById("last-users");
        // _this.inputData = document.getElementById("github_name")
    }
    UI.prototype.showError = function (message, alertType) {
        if (alertType === void 0) { alertType = "danger"; }
        var _this = this;
        var div = document.createElement("div");
        div.className = "alert alert-" + alertType + " mt-3";
        div.textContent = message;
        _this.githubForm.appendChild(div);
        setTimeout(function () {
            div.remove();
        }, 3000);
    };
    UI.prototype.createProfile = function (user) {
        var _this = this;
        _this.profileDiv.innerHTML = "\n         <div class=\"card card-body mb-3\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <a href=\"\" target=\"_blank\">\n                        <img id=\"profilePicture\" class=\"img-fluid mb-2\"\n                             src=\"".concat(user.avatar_url, "\"> </a>\n                    <hr>\n                    <div id=\"fullName\"><strong>").concat(user.name, "</strong></div>\n                    <hr>\n                    <div id=\"bio\">").concat(user.bio, "</div>\n                    </div>\n                    <div class=\"col-md-8\">\n                    <button class=\"btn btn-secondary\">\n                        Takip\u00E7i <span class=\"badge badge-light\">").concat(user.followers, "</span>\n                    </button>\n                    <button class=\"btn btn-info\">\n                        Takip Edilen <span class=\"badge badge-light\">").concat(user.following, "</span>\n                    </button>\n                    <button id=\"reposButton\" class=\"btn btn-danger\">\n                        Repolar <span class=\"badge badge-light\">").concat(user.public_repos, "</span>\n                    </button>\n                    <hr>\n                    <li class=\"list-group\">\n                    <li class=\"list-group-item borderzero\">\n                        <img src=\"images/company.png\" width=\"30px\"> <span id=\"company\">").concat(user.login, "</span>\n\n                    </li>\n                    <li class=\"list-group-item borderzero\">\n                        <img src=\"images/location.png\" width=\"30px\"> <span id=\"location\">").concat(user.location, "</a>\n\n                    </li>\n                    <li class=\"list-group-item borderzero\">\n                        <img src=\"images/mail.png\" width=\"30px\"> <span id=\"company\">").concat(user.company, "</span>\n\n                    </li>\n                </div>\n            </div>\n        </div>");
    };
    UI.prototype.getRepos = function (repo) {
        var _this = this;
        _this.reposDiv.innerHTML = "";
        repo.forEach(function (reposElement) {
            _this.reposDiv.innerHTML += "\n        <div class=\"mb-2 card-body\">\n            <div class=\"row\">\n                <div class=\"col-md-2\">\n                    <span>".concat(reposElement.name, "</span>\n                    <a href=\"#\" target=\"_blank\" id=\"repoName\"></a>\n                </div>\n                <div class=\"col-md-6\">\n                    <button class=\"btn btn-secondary\">\n                        Starlar <span class=\"badge badge-light\" id=\"repoStar\">").concat(reposElement.stargazers_count, "</span>\n                    </button>\n\n                    <button class=\"btn btn-info\">\n                        Forklar <span class=\"badge badge-light\" id=\"repoFork\">").concat(reposElement.forks, "</span>\n                    </button>\n                </div>\n            </div>\n        </div>\n");
        });
    };
    UI.prototype.addNewSearch = function (user) {
        var _this = this;
        _this.lastSearch.innerHTML += "<li class=\"list-group-item\">".concat(user, "</li>");
    };
    return UI;
}());
