const button = document.getElementById("button");
const text = document.getElementById("text");
const x = ["architect", "industry engineer", "software engineer", "teacher"]
const y = ["paris", "izmir", "Amsterdam", "istanbul"]
const z = ["Onur", "Nedim", "Kemal", "Behlül"]
const n = ["1", "2", "3", "4"]


button.addEventListener("click", teller);

function teller() {

    var job = x[Math.floor(Math.random() * x.length)];
    console.log(job);

    var tellLocation = y[Math.floor(Math.random() * y.length)];
    console.log(tellLocation);

    var name = z[Math.floor(Math.random() * z.length)];
    console.log(name);

    var number = n[Math.floor(Math.random() * n.length)];
    console.log(number);

    const xText = document.getElementById("job");
    const yText = document.getElementById("location");
    const zText = document.getElementById("name");
    const nText = document.getElementById("number");

    xText.innerText = job;
    yText.innerText = tellLocation;
    zText.innerText = name;
    nText.innerText = number;
}


