class UI {
    constructor()
    {
      this.profile = document.getElementById("profile");
      this.reposs = document.getElementById("repos");
    }
    addRepos(repos)
    {
      this.reposs.innerHTML = "";
      repos.forEach((reposElement) => {
        this.reposs.innerHTML += `
          <div class="mb-2 card-body">
                        <div class="row">
                            <div class="col-md-2">
                            <span></span> 
                            <a href="#" target = "_blank" id = "repoName">${reposElement.full_name}</a>
                            </div>
                            <div class="col-md-6">
                                <button class="btn btn-secondary">
                                    Starlar  <span class="badge badge-light" id="repoStar">(${reposElement.stargazers_count})</span>
                                </button>

                                <button class="btn btn-info">
                                    Forklar  <span class="badge badge-light" id ="repoFork">(${reposElement.forks})</span>
                                </button>
                        
                            </div>
                    </div>

                    </div> 
        `

     


      });

    }

    addUser(user)
    {
      this.profile.innerHTML = "";
      this.profile.innerHTML = `
            <div class="card card-body mb-3">
            <div class="row">
              <div class="col-md-4">
                <a href="" target = "_blank">
                <img class="img-fluid mb-2" src="${user.avatar_url}"> </a>
                <hr>
                <div id="fullName"><strong>${user.name}</strong></div>
                <hr>
                <div id="bio">${user.bio}</div>
                </div>
              <div class="col-md-8">
                    <button class="btn btn-secondary">
                          Takipçi  <span class="badge badge-light">(${user.followers})</span>
                    </button>
                    <button class="btn btn-info">
                        Takip Edilen  <span class="badge badge-light">(${user.following})</span>
                      </button>
                    <button class="btn btn-danger">
                        Repolar  <span class="badge badge-light">(${user.public_repos})</span>
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
                            <img src="images/mail.png" width="30px"> <span id="company">${user.email}</span>
                            
                        </li>
                        
                    </div>
                      
                    
              </div>
        </div>
      
      `
    }
    falseUI()
    {
      this.profile.innerHTML = "";
      this.reposs.innerHTML = "";
      
      const searchPart = document.getElementById("searchingPart");
      const alert = document.createElement("div");
      alert.className = `mt-3 alert alert-danger`;
      alert.textContent = "Wrong Input!";
      searchPart.appendChild(alert);
      
      setTimeout(function(){
        alert.remove();
      }, 2000);
  
    }

   
  
    

}
