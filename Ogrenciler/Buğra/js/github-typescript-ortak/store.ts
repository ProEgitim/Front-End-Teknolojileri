 class Storage {
    static getSearchedUsersFromStorage(){
        let users:any
        if (localStorage.getItem("searched") === null) {
            users = []
        }
        else {
            users = JSON.parse(localStorage.getItem("searched"))
        }
        return users
    }
    static addSearchedUserToStorage(username:string){
        let users = this.getSearchedUsersFromStorage()
        if (users.indexOf(username) === -1) {
            users.push(username)
        }
        localStorage.setItem("searched",JSON.stringify(users))
    }
    static clearAllSearchedUsersFromStorage(){
        localStorage.removeItem("searched")
    }
  }
  