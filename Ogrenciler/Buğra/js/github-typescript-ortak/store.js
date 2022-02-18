var Storage = /** @class */ (function () {
    function Storage() {
    }
    Storage.getSearchedUsersFromStorage = function () {
        var users;
        if (localStorage.getItem("searched") === null) {
            users = [];
        }
        else {
            users = JSON.parse(localStorage.getItem("searched"));
        }
        return users;
    };
    Storage.addSearchedUserToStorage = function (username) {
        var users = this.getSearchedUsersFromStorage();
        if (users.indexOf(username) === -1) {
            users.push(username);
        }
        localStorage.setItem("searched", JSON.stringify(users));
    };
    Storage.clearAllSearchedUsersFromStorage = function () {
        localStorage.removeItem("searched");
    };
    return Storage;
}());
