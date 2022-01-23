const xGithub=new Github();
const xUI = new UI();
const userName=document.getElementById("githubname");
const searchButton = document.getElementById("githubSearch");


searchButton.addEventListener("click",getGithubUser);

function getGithubUser(e)
{
 const UserNameValue=userName.value;
 if(UserNameValue !== null && UserNameValue !=="")
 {
    xGithub.getGithubData(UserNameValue).then(response=>{

      console.log(response);   
      xUI.addRepos(response.repo);
      xUI.addUser(response.user);

    });
  
 }

 
 
 e.preventDefault();

}






