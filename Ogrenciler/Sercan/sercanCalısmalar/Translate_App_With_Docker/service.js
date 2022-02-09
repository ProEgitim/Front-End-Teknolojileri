
const obj ={
  
    q: "helo!",
    source:"es",
    target: "en"
}
callData();
async function callData(){
const res = await fetch("http://localhost:5000/api/courses/lang", {
    method:'POST',
    body:JSON.stringify(obj),
    headers:{"Content-type":"application/json"}
}
   	
);

const resData = await res.json();

console.log(resData);

}
