// Value
let copyFirstButton = document.getElementById("copyFirst");
let copySecondButton = document.getElementById("copySecond");
let changeButton = document.getElementById("changeButton");
let firstLanguageButton = document.getElementById("firstLanguageSelection");
let secondLanguageButton = document.getElementById("secondLanguageSelection");
let allLanguagesArea = document.getElementById("allLanguagesArea");

// Event Listeners
copyFirstButton.addEventListener("click", copyText);
copySecondButton.addEventListener("click", copyText);
changeButton.addEventListener("click", changeSelections);
firstLanguageButton.addEventListener("click", toggleModal);
secondLanguageButton.addEventListener("click", toggleModal);
document.addEventListener("DOMContentLoaded", loadPage);
document.addEventListener("click", closeToggleModal);
allLanguagesArea.addEventListener("click", pickLanguages);

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
    let langsFromApi = ["lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem", "lorem"];
    for (let i = 0; i < langsFromApi.length; i++) {
        let langList = document.getElementById("languageList");

        langList.innerHTML += `
  <div class="languages col-3">
  <button name="` + langsFromApi[i] + `" style="border: none; background-color: inherit;" data-text-value= " " class="languagesAllButtons btn-default">` + langsFromApi[i] + `</button>
    </div>
            `
    }
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

function pickLanguages(e) {

    //FOR BUTTON
    let languagesAllButtons = document.querySelectorAll(".languagesAllButtons");
    for (let i = 0; i < languagesAllButtons.length; i++) {
     }
    let xx;

    if (e.target.tagName === "DIV") {
        console.log(e.target.children[0]);
        xx = e.target.children[0];
    } else {
        console.log(e.target);
        xx = e.target;
    }
    console.log(xx.name);
    firstLanguageButton.textContent = xx.name;

}
