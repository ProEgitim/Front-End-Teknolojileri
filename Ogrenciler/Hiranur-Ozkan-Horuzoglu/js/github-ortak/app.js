const github = new Github();
const ui = new UI;
const storage = new Storage();


const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearButton = document.getElementById("clear-last-users");

eventListeners();

function eventListeners() {
    githubForm.addEventListener("submit", getData);
    clearButton.addEventListener("click",storage.clearUser);
}

function getData(e) {
    let userName = nameInput.value.trim();
    if (userName === "") {
        alert("Lütfen geçerli bir kullanıcı adı girin");
    } else {
        github.getGithubData(userName)
            .then(response => {
                if (response.user.message === "Not Found") {
                    //// uı tarafından hata messajı gönder//
                    ui.showAlert("danger", "Kullanıcı Bulunamadı")
                } else {
                    ///// uı tarafında username göder ve uı oluştur.
                   
                    ui.addUsers(response.user);
                    ui.addRepos(response.repo);
                    
                   
                }
            })
            .catch(err => ui.showError(err)); ///buradaki showerror methodu yaz
    }
    ///// uı da clear input yap
    e.preventDefault();
    
}

// function getGithubUser(e)
// {
//   const UserNameValue=userName.value;
//   if(UserNameValue !== null && UserNameValue !=="")
//   {
//       let localStogeData = xStorage.getStorage(UserNameValue);
//       if(localStogeData) 
//       {
//           xUI.addRepos(localStogeData.repo);
//           xUI.addUser(localStogeData.user);  
//       }
//       else
//       {
//           xGithub.getGithubData(UserNameValue).then(response=>
//           {
//               if(response.user.message =="Not Found")
//               {
//                 xUI.falseUI();
//               }
//               else
//               {
//                 console.log(response);
//                 xUI.addRepos(response.repo);
//                 xUI.addUser(response.user);
//                 users.push(response)
//                 xStorage.addStorage(JSON.stringify(users));  
//               }           
//           }); 
//       }
      
      
    
//   }
//   e.preventDefault();

// }