class Storage{
    constructor() {
    }

    addLocalStorage(userInfo):any {
        let users:any = this.getLocalStorage()
        users.push(userInfo)
        localStorage.setItem("users", JSON.stringify(users))
    }

    getLocalStorage():any {
        let users
        if (localStorage.getItem("users") === null) {
            users = []
        } else {
            users = JSON.parse(localStorage.getItem("users"))
        }
        return users
    }
}
