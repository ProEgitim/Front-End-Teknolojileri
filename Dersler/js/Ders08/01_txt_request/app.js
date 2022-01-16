// Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready
// Http Status Codes
// 200: Ok
// 403: Forbidden
// 404: Not Found
// 505: Internal Server Error

document.getElementById("btn").addEventListener("click",function(){
  //XmlHttpRequest
  const xhr = new XMLHttpRequest();
  // console.log(xhr);
  // xhr.onreadystatechange = function(){
  //   console.log(this.readyState);
  //   if(this.status == 200 && this.readyState == 4 ) {
  //     // Response Hazır
  //     console.log(this.responseText);
  //   }
  // }
  xhr.onload = function(){
    if(this.status === 200){
      document.getElementById("veri").textContent = this.responseText;
    }
  }
  xhr.open("GET","ornek.txt",true);
  xhr.send();
});