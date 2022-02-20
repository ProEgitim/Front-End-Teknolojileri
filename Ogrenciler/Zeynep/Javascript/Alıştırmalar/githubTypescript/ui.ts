 class UI {
    constructor() {
        let _this:any=this
        _this.profileDiv = document.getElementById("profile")
        _this.reposDiv = document.getElementById("repos")
        _this.githubForm = document.getElementById("github-form")
        // _this.lastSearch = document.getElementById("lastSearch")
        _this.lastSearch = document.getElementById("last-users")
        // _this.inputData = document.getElementById("github_name")
    }

    showError(message:string, alertType:string = "danger"):any {
        let _this:any=this

        const div = document.createElement("div")
        div.className = `alert alert-` + alertType + ` mt-3`
        div.textContent = message
        _this.githubForm.appendChild(div)
        setTimeout(function () {
            div.remove()
        }, 3000)
    }

    createProfile(user:any):any {
        let _this:any=this

        _this.profileDiv.innerHTML = `
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
                        Takipçi <span class="badge badge-light">${user.followers}</span>
                    </button>
                    <button class="btn btn-info">
                        Takip Edilen <span class="badge badge-light">${user.following}</span>
                    </button>
                    <button id="reposButton" class="btn btn-danger">
                        Repolar <span class="badge badge-light">${user.public_repos}</span>
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

    getRepos(repo:any):any {
        let _this:any=this

        _this.reposDiv.innerHTML = ""
        repo.forEach((reposElement) => {
            _this.reposDiv.innerHTML += `
        <div class="mb-2 card-body">
            <div class="row">
                <div class="col-md-2">
                    <span>${reposElement.name}</span>
                    <a href="#" target="_blank" id="repoName"></a>
                </div>
                <div class="col-md-6">
                    <button class="btn btn-secondary">
                        Starlar <span class="badge badge-light" id="repoStar">${reposElement.stargazers_count}</span>
                    </button>

                    <button class="btn btn-info">
                        Forklar <span class="badge badge-light" id="repoFork">${reposElement.forks}</span>
                    </button>
                </div>
            </div>
        </div>
`
        })
    }

    addNewSearch(user:any):any {
        let _this:any=this

        _this.lastSearch.innerHTML += `<li class="list-group-item">${user}</li>`
    }


}

