



let createInput = document.createElement("input");
createInput.type = "text";
createInput.className = "form-control-plain-text";
createInput.id = "staticEmail";
createInput.value = "email@example.com";

let createDivInner = document.createElement("div");
createDivInner.className = "col-sm-10";

let createLabel = document.createElement("label");
createLabel.className = "col-sm-2 col-form-label";


let createDivOuter = document.createElement("div");
createDivOuter.className = "mb-3 row";

let addLabelText = document.createTextNode("E-mail");
createLabel.appendChild(addLabelText);



createDivOuter.appendChild(createLabel);
createDivInner.appendChild(createInput);
createDivOuter.appendChild(createDivInner);

let  sayfadaGoster = document.querySelector(".card-body");
sayfadaGoster.appendChild(createDivOuter);



let addInputTwo = document.createElement("input");
addInputTwo.type ="password";
addInputTwo.className = "form-control";
addInputTwo.id = "inputPassword";

let addDivInnerTwo = document.createElement("div");
addDivInnerTwo.className = "col-sm-10";

let addLabelTwo = document.createElement("label");
addLabelTwo.className = "col-sm-2 col-form-label";
let passwordForLabel = document.createTextNode("Password");
addLabelTwo.appendChild(passwordForLabel);

let addDivOuterTwo = document.createElement("div");
addDivOuterTwo.className ="mb-3 row";

addDivInnerTwo.appendChild(addInputTwo);
addDivOuterTwo.appendChild(addLabelTwo);
addDivOuterTwo.appendChild(addDivInnerTwo);

let sayfadaGoster2 = document.querySelector(".card-body");

sayfadaGoster2.appendChild(addDivOuterTwo);

