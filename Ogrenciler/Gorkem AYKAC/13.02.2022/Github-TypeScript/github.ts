
class Github{
  url:string
  constructor(){
    this.url = "https://api.github.com/users/";
  }
  async getGithubData(userName:string){
    const responseUser:any = await fetch(this.url + userName);
    const responseRepo:any = await fetch(this.url + userName + "/repos");
    const userData:any = await responseUser.json();
    const repoData:any = await responseRepo.json();
    return {
      user:userData,
      repo:repoData
    }
  }
}