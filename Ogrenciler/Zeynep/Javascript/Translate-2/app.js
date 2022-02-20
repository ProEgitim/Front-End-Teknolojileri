// Value
let copyFirstButton = document.getElementById("copyTextIconFirst");
let copySecondButton = document.getElementById("copyTextIconSecond");
let changeButton = document.getElementById("changeButton");
let firstLanguageButton = document.getElementById("firstLanguageSelection");
let secondLanguageButton = document.getElementById("secondLanguageSelection");
let allLanguagesArea = document.getElementById("allLanguagesArea");
const firstLanguageSelection = document.getElementById("firstLanguageSelection");
const secondLanguageSelection = document.getElementById("secondLanguageSelection");
let languageModal = document.getElementById("languagesModal");
let firstLanguageList = document.getElementById("firstLanguageList");
let secondLanguageList = document.getElementById("secondLanguageList");

// Event Listeners
copyFirstButton.addEventListener("click", copyText);
copySecondButton.addEventListener("click", copyText);
changeButton.addEventListener("click", changeSelections);
firstLanguageButton.addEventListener("click", firstToggleModal);
secondLanguageButton.addEventListener("click", secondToggleModal);
document.addEventListener("DOMContentLoaded", loadPage);
allLanguagesArea.addEventListener("click", pickLanguages);


// Functions
function copyText(e) {
    let textArea = document.getElementById(e.target.getAttribute("data-textAreaId"));
    textArea.select();
    textArea.setSelectionRange(0, 99999); //For mobile devices //
    navigator.clipboard.writeText(textArea.value);
}

function changeSelections() {
    localStorage.setItem("firstLang", firstLanguageSelection.textContent);
    localStorage.setItem("secondLang", secondLanguageSelection.textContent);

    secondLanguageSelection.textContent = localStorage.getItem("firstLang");
    firstLanguageSelection.textContent = localStorage.getItem("secondLang");
}

function loadPage() {
    let langsFromApi = apiGetLanguages();
    // let langsFromApi = ["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem"];

    for (let i = 0; i < langsFromApi.length; i++) {
        firstLanguageList.innerHTML += `
            <div class="languages col-3">
                <button id="firstId" name="` + langsFromApi[i].code + `" style="border: none; background-color: inherit;" class="languagesAllButtons btn-default firstLangsContent">` + langsFromApi[i].name+`</button>
            </div>
        `
        secondLanguageList.innerHTML += `
            <div class="languages col-3">
                <button id="secondId" name="` + langsFromApi[i].code+ `" style="border: none; background-color: inherit;" class="languagesAllButtons btn-default secondLangsContent">` + langsFromApi[i].name+  `</button>
            </div>
        `
    }
    lastUsedLang();
}

function apiGetLanguages() {
    let response = [];
    const xhr = new XMLHttpRequest();
    // xhr.open("GET", "https://libretranslate.com/languages", false);
    xhr.open("GET", "http://localhost:5000/languages", false);
    xhr.onload = function () {
        if (this.status) {
            response = JSON.parse(this.responseText);
        }
    }
    xhr.send();
    return response;
}


function firstToggleModal() {
    if (!secondLanguageList.classList.contains("d-none")) {
        secondLanguageList.classList.add("d-none")
    }

    if (firstLanguageList.classList.contains("d-none")) {
        firstLanguageList.classList.remove("d-none");
        languageModal.classList.remove("d-none");
    } else {
        firstLanguageList.classList.add("d-none");
        languageModal.classList.add("d-none");
    }
}

function secondToggleModal() {
    if (!firstLanguageList.classList.contains("d-none")) {
        firstLanguageList.classList.add("d-none")
    }

    if (secondLanguageList.classList.contains("d-none")) {
        secondLanguageList.classList.remove("d-none");
        languageModal.classList.remove("d-none");
    } else {
        secondLanguageList.classList.add("d-none");
        languageModal.classList.add("d-none");
    }
}

function pickLanguages(e) {

    let pickedLanguageButton;

    if (e.target.tagName === "DIV") {
        pickedLanguageButton = e.target.children[0];
    } else {
        pickedLanguageButton = e.target;
    }

    if (pickedLanguageButton.classList.contains("firstLangsContent")) {
        firstLanguageButton.textContent = pickedLanguageButton.textContent;
        firstToggleModal();
    } else if (pickedLanguageButton.classList.contains("secondLangsContent")) {
        secondLanguageButton.textContent = pickedLanguageButton.textContent;
        secondToggleModal();
    }
    let firstSelectionText = firstLanguageSelection.textContent;
    let secondSelectionText = secondLanguageSelection.textContent;
    localStorage.setItem("firstLang", firstSelectionText);
    localStorage.setItem("secondLang", secondSelectionText);

    let readLastLangs = localStorage.getItem("lastLang");
    if (readLastLangs === null) {
        readLastLangs = [];
    } else {
        readLastLangs = JSON.parse(readLastLangs);
    }

    if (readLastLangs.includes(firstSelectionText)) {

    } else {
        readLastLangs.push(firstSelectionText);
    }

    if (readLastLangs.includes(secondSelectionText)) {

    } else {
        readLastLangs.push(secondSelectionText);
    }

    localStorage.setItem("lastLang", JSON.stringify(readLastLangs));
    lastUsedLang();
}

function lastUsedLang() {
    let lastUsedLanguages = document.getElementById("lastUsedLanguages");
    let readLastLangs = localStorage.getItem("lastLang");
    if (readLastLangs === null) {
        readLastLangs = [];
    } else {
        readLastLangs = JSON.parse(readLastLangs);
    }

    lastUsedLanguages.innerHTML = "";

    for (let i = 0; i < readLastLangs.length; i++) {
        lastUsedLanguages.innerHTML += `
        <div>` + readLastLangs[i] + `</div>
    `
    }
}

let translateArea= document.getElementById("translateArea");
let translateArea2= document.getElementById("translateArea2");

translateArea.addEventListener("keyup", apiPostTranslate)


function apiPostTranslate() {
    translateArea2.value= translateArea.value;
    console.log(translateArea.value);

        let response = [];
        const xhr = new XMLHttpRequest();
        let params= "q=hello&source=en&target=tr"
        xhr.open("POST", "http://localhost:5000/translate", false);
        xhr.onload = function () {
            if (this.status) {
                response = JSON.parse(this.responseText);
            }
        }
        xhr.send(params);
        return response;

}

