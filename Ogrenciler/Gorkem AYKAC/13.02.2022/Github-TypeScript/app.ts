
const xGithub = new Github();
const xUI = new UI();
const xStorage = new myStorage();

const userName:HTMLElement = document.getElementById("githubname");
const searchButton:HTMLElement = document.getElementById("githubSearch");
const clearButton:HTMLElement = document.getElementById("clear-last-users");

var users:any[]; 

searchButton.addEventListener("click",getGithubUser);
clearButton.addEventListener("click",xStorage.clearUser);

function getGithubUser(e)
{
  console.log("click")
  const UserNameValue:string = userName.nodeValue;
  if(UserNameValue !== null && UserNameValue !=="")
  {
      let localStogeData:any = xStorage.getStorage(UserNameValue);
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






