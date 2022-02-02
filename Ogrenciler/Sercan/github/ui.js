//ui tarafı html dosyasının ıcınde var
const profile = document.getElementById("profile");
const repos = document.getElementById("repos");


class UI {
    constructor() {

    }
    addUsers(user) {
        profile.innerHTML += `
        <div class="card card-body mb-3">
                    <div class="row">
                      <div class="col-md-4">
                        <a href="" target = "_blank">
                         <img class="img-fluid mb-2" src="https://upload.wikimedia.org/wikipedia/tr/a/a0/Cem_Karaca.jpg"> </a>
                         <hr>
                         <div id="fullName"><strong>${user.name}</strong></div>
                         <hr>
                         <div id="bio">${user.bio}</div>
                        </div>
                      <div class="col-md-8">
                            <button class="btn btn-secondary">Follower: 
                            ${user.followers}  <span class="badge badge-light"></span>
                            </button>
                            <button class="btn btn-info"> Following: 
                            ${user.following} <span class="badge badge-light"></span>
                              </button>
                            <button class="btn btn-danger"> Repos Count: 
                            ${user.public_repos} <span class="badge badge-light"></span>
                            </button>
                            <hr>
                            <li class="list-group">
                                <li class="list-group-item borderzero">
                                    <img src="images/company.png" width="30px"> <span id="company">${user.company}</span>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/location.png" width="30px"> <span id = "location">${user.location}</a>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/mail.png" width="30px"> <span id="company">${user.company}</span>
                                    
                                </li>
                                
                            </div>
                      </div>
                </div>`
                
    }
   
    addRepos(repo) {
        repo.forEach(function (rep) {
            let oneRepo = rep;
            
            repos.innerHTML += `
                <div class="mb-2 card-body">
                    <div class="row">
                        <div class="col-md-2">
                        <span></span> 
                        <a href="#" target = "_blank" id = "repoName">${oneRepo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-secondary">
                                Starlar  <span class="badge badge-light" id="">${oneRepo.stargazers_count}</span>
                            </button>

                            <button class="btn btn-info">
                                Forklar  <span class="badge badge-light" id ="">${oneRepo.forks}</span>
                            </button>
                    
                        </div>
                </div>

                </div>
                `
                
        })
    }

    
    showAlert(type,message) {
        const errorMessage = document.querySelector("#github-form");
        const div = document.createElement("div");
        div.className = `alert alert-${type} mt-2`;
        div.textContent = message;
        errorMessage.appendChild(div);
        setTimeout(function () {
            div.remove();
        }, 2000);
    }
}

