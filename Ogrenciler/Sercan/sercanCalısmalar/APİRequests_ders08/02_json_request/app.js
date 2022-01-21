document.getElementById("ajax").addEventListener("click", getAllEmployees);

function getAllEmployees(){
  const xhr = new XMLHttpRequest();
  xhr.open("GET","employees.json",true);
  xhr.onload = function(){
    let list = document.getElementById("employees");
    if(this.status==200){
      const parsedData= JSON.parse(this.responseText); 
     parsedData.forEach(function(e){
       list.innerHtml+=` <tr>
       <th>${e.name}</th>
       <th>${e.department}</th>
       <th>${e.salary}</th>
     </tr> `;
     });
    }
    else{
      console.log("Hata Oluştu");
    }
  }
  xhr.send();
}
