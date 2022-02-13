var xGithub = new Github();
var xUI = new UI();
var xStorage = new myStorage();
var userName = document.getElementById("githubname");
var searchButton = document.getElementById("githubSearch");
var clearButton = document.getElementById("clear-last-users");
var users;
searchButton.addEventListener("click", getGithubUser);
clearButton.addEventListener("click", xStorage.clearUser);
function getGithubUser(e) {
    console.log("click");
    var UserNameValue = userName.nodeValue;
    if (UserNameValue !== null && UserNameValue !== "") {
        var localStogeData = xStorage.getStorage(UserNameValue);
        if (localStogeData) {
            xUI.addRepos(localStogeData.repo);
            xUI.addUser(localStogeData.user);
        }
        else {
            xGithub.getGithubData(UserNameValue).then(function (response) {
                if (response.user.message == "Not Found") {
                    xUI.falseUI();
                }
                else {
                    console.log(response);
                    xUI.addRepos(response.repo);
                    xUI.addUser(response.user);
                    users.push(response);
                    xStorage.addStorage(JSON.stringify(users));
                }
            });
        }
    }
    e.preventDefault();
}
