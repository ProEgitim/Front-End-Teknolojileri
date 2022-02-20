 class Github{
    constructor(){
        let _this:any=this

        _this.url= "https://api.github.com/users/"
    }
    async getGithubData(userName) {
        let _this:any=this

        const responseUser:any = await fetch(_this.url + userName)
        const responseRepo:any = await fetch(_this.url + userName + "/repos")
        const userData:any = await responseUser.json()
        const repoData:any = await responseRepo.json()
        return {
            user:userData,
            repo:repoData,
        }
    }
}




