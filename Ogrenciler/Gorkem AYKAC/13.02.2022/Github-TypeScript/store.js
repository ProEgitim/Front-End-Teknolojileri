var myStorage = /** @class */ (function () {
    function myStorage() {
    }
    myStorage.prototype.getStorage = function (userName) {
        var localUser;
        var users = JSON.parse(localStorage.getItem('Users'));
        console.log(users);
        if (users != null) {
            users.forEach(function (reposElement) {
                if (reposElement.user.login == userName) {
                    localUser = reposElement;
                }
            });
        }
        return localUser;
    };
    myStorage.prototype.addStorage = function (data) {
        localStorage.setItem("Users", data);
    };
    myStorage.prototype.clearUser = function () {
        localStorage.removeItem("Users");
    };
    return myStorage;
}());
