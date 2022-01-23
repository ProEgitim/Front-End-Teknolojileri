const xGithub = new Github();
const xUI = new UI();
const xStorage = new Storage();

const userName = document.getElementById("githubname");
const searchButton = document.getElementById("githubSearch");

var users = []; 

searchButton.addEventListener("click",getGithubUser);


function getGithubUser(e)
{
  const UserNameValue=userName.value;
  if(UserNameValue !== null && UserNameValue !=="")
  {
      let localStogeData = xStorage.getStorage(UserNameValue);
      if(localStogeData) 
      {
          xUI.addRepos(localStogeData.repo);
          xUI.addUser(localStogeData.user);  
      }
      else
      {
          xGithub.getGithubData(UserNameValue).then(response=>
          {
              if(response.user.message =="Not Found")
              {
                xUI.falseUI();
              }
              else
              {
                console.log(response);
                xUI.addRepos(response.repo);
                xUI.addUser(response.user);
                users.push(response)
                xStorage.addStorage(JSON.stringify(users));  
              }           
          }); 
      }
      
      
    
  }
  e.preventDefault();

}






