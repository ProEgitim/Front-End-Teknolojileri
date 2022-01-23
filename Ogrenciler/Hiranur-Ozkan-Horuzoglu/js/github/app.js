const getFromGitHub = new Github();

getFromGitHub.getGithubData("11sercanmasar")
.then(github => { 
    console.log(github.user);
    console.log(github.repo);
})
