callData();
async function callData(){
const res = await fetch("http://localhost:5000/api/courses/", {
	
});

const resData = await res.json();

console.log(resData);

}
