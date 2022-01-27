document.getElementById("search").addEventListener("keyup", search);

function search(e) {
  let elements = document.querySelectorAll(".findCoin");
  let val = e.target.value.toLowerCase().trim();

  elements.forEach(element => {
      let elementArr = [];
      elementArr.push(element);
      elementArr.find(el => {
          if (el.textContent.toLowerCase().includes(val)) {
            el.parentElement.style.display = "table-row";
          }
          else{
            el.parentElement.style.display = "none";
          }

      })
  })
}