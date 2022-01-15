// VALUE
const profileSaveButton = document.getElementById("saveButton");
const profileAbout = document.getElementById("aboutProfile");
const profileInfo = document.getElementById("profileInfo");
const profileMail = document.getElementById("profileMail");
const saveChangesButton = document.getElementById("saveChanges");
const closeButtonClick = document.getElementById("closeButton");


// EVENTS
profileSaveButton.addEventListener("click", changeAbout);
document.addEventListener("DOMContentLoaded", loadScreen);
saveChangesButton.addEventListener("click", pickProfilePicture);

// FUNCTIONS
function changeAbout(e) {
    const profileInputName = document.getElementById("nameProfile");
    const profileInputLastName = document.getElementById("lastNameProfile");

    profileInfo.textContent = (profileInputName.value) + " " + (profileInputLastName.value);

    const profileInputMail = document.getElementById("mailProfile");

    profileMail.textContent = profileInputMail.value;

    const editAbout = document.getElementById("aboutMeEdit");
    profileAbout.textContent = (editAbout.value);

    e.preventDefault();
    setLocalStorage();
}


function setLocalStorage() {
    const profileInputName = document.getElementById("nameProfile");
    const profileInputLastName = document.getElementById("lastNameProfile");
    const profileInputMail = document.getElementById("mailProfile");
    const editAbout = document.getElementById("aboutMeEdit");

    localStorage.setItem('name', profileInputName.value);
    localStorage.setItem('last-name', profileInputLastName.value);
    localStorage.setItem('mail', profileInputMail.value);
    localStorage.setItem('about', editAbout.value);
}

function pickProfilePicture() {
    let profilePictureNow = document.getElementById("profilePictureEdit");
    let picksValue = document.querySelector('input[name="profilePicturePick"]:checked').value;
    profilePictureNow.src = "./media/" + (picksValue);

    let profilePictureSmall = document.getElementById("profilePicture");
    profilePictureSmall.src = "./media/" + (picksValue);

    localStorage.setItem('profilePicture', picksValue);
    closeButtonClick.click();
}


function loadScreen() {

    // TEXT
    const profileAbout = document.getElementById("aboutProfile");
    const profileInfo = document.getElementById("profileInfo");
    const profileMail = document.getElementById("profileMail");

    let name = localStorage.getItem("name");
    if (name === null) {
        name = "Name"
    }
    let lastName = localStorage.getItem("last-name");
    if (lastName === null) {
        lastName = "Lastname"
    }
    let mail = localStorage.getItem("mail");
    if (mail === null) {
        mail = "ex@domain.com"
    }

    let about = localStorage.getItem("about");
    if (about === null) {
        about = "Hi there!"
    }

    profileMail.textContent = mail;
    profileInfo.textContent = name + " " + lastName;
    profileAbout.textContent = about;

    // TEXT END

    // PICTURE
    let profilePictureNow = document.getElementById("profilePictureEdit");
    let profilePictureSmall = document.getElementById("profilePicture");

    let profilePicLoad = localStorage.getItem("profilePicture");
    if (profilePicLoad !== null) {
        profilePictureNow.src = "./media/" + profilePicLoad;
        profilePictureSmall.src = "./media/" + profilePicLoad;

        let pickPicture = document.querySelector('input[value="' + profilePicLoad + '"]');
        pickPicture.checked = true
    }

    // PICTURE END
}

