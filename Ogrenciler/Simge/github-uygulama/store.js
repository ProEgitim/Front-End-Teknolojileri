class Storage
{
    constructor()
    {

    }
    getStorage(userName)
    {
        let localUser;
        const users = JSON.parse(localStorage.getItem('Users'));
        console.log(users)
        if(users != null)
        {
            users.forEach((reposElement)=> 
            {                         
                if(reposElement.user.login == userName)
                {
                    localUser = reposElement;
                }
        
            });
        }
        return localUser;

    }
    addStorage(data)
    {
        localStorage.setItem("Users", data);
    }
    clearUser()
    {
        localStorage.removeItem("Users")
    }
}