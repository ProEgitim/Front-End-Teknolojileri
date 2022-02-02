// Value
let copyFirstButton = document.getElementById("copyFirst");
let copySecondButton = document.getElementById("copySecond");
let changeButton = document.getElementById("changeButton");
let firstLanguageButton = document.getElementById("firstLanguageSelection");
let secondLanguageButton = document.getElementById("secondLanguageSelection");


// Event Listeners
copyFirstButton.addEventListener("click", copyText);
copySecondButton.addEventListener("click", copyText);
changeButton.addEventListener("click", changeSelections);
firstLanguageButton.addEventListener("click", toggleModal);
secondLanguageButton.addEventListener("click", toggleModal);
document.addEventListener("DOMContentLoaded", loadPage);
document.addEventListener("click", closeToggleModal);

// Functions
function copyText(e) {
    let textArea = document.getElementById(e.target.getAttribute("data-textareaid"));
    textArea.select();
    textArea.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(textArea.value);
}

function changeSelections() {
    const firstLanguageSelection = document.getElementById("firstLanguageSelection");
    const secondLanguageSelection = document.getElementById("secondLanguageSelection");

    localStorage.setItem("firstLang", firstLanguageSelection.textContent);
    localStorage.setItem("secondLang", secondLanguageSelection.textContent);

    secondLanguageSelection.textContent = localStorage.getItem("firstLang");
    firstLanguageSelection.textContent = localStorage.getItem("secondLang");
}

function toggleModal() {

    let firstLanguageSelection = document.getElementById("firstLanguageSelection");
    const secondLanguageSelection = document.getElementById("secondLanguageSelection");

    localStorage.setItem("firstLang", firstLanguageSelection.textContent);
    localStorage.setItem("secondLang", secondLanguageSelection.textContent);

    firstLanguageSelection.textContent = localStorage.getItem("firstLang");
    secondLanguageSelection.textContent = localStorage.getItem("secondLang");

    let languageModal = document.getElementById("languagesModal");
    if (languageModal.classList.contains("d-none")) {
        languageModal.classList.remove("d-none");
    } else {
        languageModal.classList.add("d-none");
    }
    lastUsedLang();
}

function closeToggleModal(e) {
    let languagesExceptModal = [...document.querySelectorAll(".languagesExceptModal")];
    if (e.target != firstLanguageButton && e.target != secondLanguageButton && !languagesExceptModal.includes(e.target)) {
        let languageModal = document.getElementById("languagesModal");
        if (!languageModal.classList.contains("d-none")) {
            languageModal.classList.add("d-none");
        }
    }
}

function loadPage() {
    var xxxx = ['Lorem' * 40]
    for (let i = 0; i < 60; i++) {
        let langList = document.getElementById("languageList");
        langList.innerHTML += `
  <div class="languages col-3">
  <label for="pickedLanguages` + i + `" style="cursor: pointer;" class="languagesLabel">` + xxxx[i] + `
     <input type="radio" name="pickedLanguages` + i + `" id="pickedLanguages` + i + `" value="abc">
  </label>
  </div>
            `
    }
    pickLanguages();
}


function lastUsedLang() {
    let firstLanguageSelection = document.getElementById("firstLanguageSelection");
    const secondLanguageSelection = document.getElementById("secondLanguageSelection");

    firstLanguageSelection.textContent = localStorage.getItem("firstLang");
    secondLanguageSelection.textContent = localStorage.getItem("secondLang");

    let usedFirstLang = document.getElementById("usedFirstLang");
    let usedSecondLang = document.getElementById("usedSecondLang");

    usedFirstLang.textContent = firstLanguageSelection.textContent;
    usedSecondLang.textContent = secondLanguageSelection.textContent;
}

function pickLanguages() {
    // FOR LABEL
    let languagesLabel = document.querySelectorAll(".languagesLabel");

    let keys = Object.keys(languagesLabel);

    for (let i = 0; i < keys.length; i++) {
        let selectedLang = languagesLabel[keys[i]];
        // console.log(selectedLang.textContent);
    }

    // FOR INPUT
    let pickLang = document.querySelectorAll('input[name="pickedLanguages"]:checked');

    let keys2 = Object.keys(pickLang);

    for (let i = 0; i < keys2.length; i++) {
        let selectedLang = pickLang[keys[i]];
        console.log(selectedLang);
    }

    // firstLanguageButton.textContent = "";
    // secondLanguageButton ="";
}