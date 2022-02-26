var Storage = /** @class */ (function () {
    function Storage() {
    }
    Storage.prototype.addLocalStorage = function (userInfo) {
        var users = this.getLocalStorage();
        users.push(userInfo);
        localStorage.setItem("users", JSON.stringify(users));
    };
    Storage.prototype.getLocalStorage = function () {
        var users;
        if (localStorage.getItem("users") === null) {
            users = [];
        }
        else {
            users = JSON.parse(localStorage.getItem("users"));
        }
        return users;
    };
    return Storage;
}());
