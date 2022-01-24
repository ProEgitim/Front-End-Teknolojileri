class UI {
    constructor() {
        this.profileDiv = document.getElementById("profile");
        this.reposDiv = document.getElementById("repos");
    }

    showError(message) {
        const div = document.createElement("div");
        div.className = `alert alert-danger`;
        div.textContent = message;
        this.profileDiv.appendChild(div);
        setTimeout(function () {
            div.remove();
        }, 2000);
    }

    createProfile(user) {
        this.profileDiv.innerHTML = `
         <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-4">
                    <a href="" target="_blank">
                        <img id="profilePicture" class="img-fluid mb-2"
                             src="${user.avatar_url}"> </a>
                    <hr>
                    <div id="fullName"><strong>${user.name}</strong></div>
                    <hr>
                    <div id="bio">${user.bio}</div>
                </div>
                <div class="col-md-8">
                    <button class="btn btn-secondary">
                        Takipçi <span class="badge badge-light"></span>
                    </button>
                    <button class="btn btn-info">
                        Takip Edilen <span class="badge badge-light"></span>
                    </button>
                    <button id="reposButton" class="btn btn-danger">
                        Repolar <span class="badge badge-light"></span>
                    </button>
                    <hr>
                    <li class="list-group">
                    <li class="list-group-item borderzero">
                        <img src="images/company.png" width="30px"> <span id="company">${user.login}</span>

                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/location.png" width="30px"> <span id="location">${user.location}</a>

                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/mail.png" width="30px"> <span id="company">${user.company}</span>

                    </li>

                </div>


            </div>
        </div>`
    }

    getRepos (repo) {
        this.reposDiv.innerHTML = `
        <div className="mb-2 card-body">
            <div className="row">
                <div className="col-md-2">
                    <span></span>
                    <a href="#" target="_blank" id="repoName">${repo.name}</a>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-secondary">
                        Starlar <span className="badge badge-light" id="repoStar">${repo.star}</span>
                    </button>

                    <button className="btn btn-info">
                        Forklar <span className="badge badge-light" id="repoFork">${repo.fork}</span>
                    </button>

                </div>
            </div>

        </div>
`
    }





}

