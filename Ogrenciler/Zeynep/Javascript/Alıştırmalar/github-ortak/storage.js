class Storage {

    constructor() {

    }

    addLocalStorage(userInfo) {
        let users = this.getLocalStorage();
        users.push(userInfo);
        localStorage.setItem("users", JSON.stringify(users));
    }


    getLocalStorage() {
        let users;
        if (localStorage.getItem("users") === null) {
            users = [];
        } else {
            users = JSON.parse(localStorage.getItem("users"));
        }
        return users;
    }
}
