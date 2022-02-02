//local storage
class storage
{
    constructor()
    {
    }
    getStorage(user)
    {
        let localUser;
        const users = JSON.parse(localStorage.getItem('Users'));
        console.log(users)
        if(users != null)
        {
            users.forEach((reposElement)=> 
            {                         
                if(reposElement.user.login == user)
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