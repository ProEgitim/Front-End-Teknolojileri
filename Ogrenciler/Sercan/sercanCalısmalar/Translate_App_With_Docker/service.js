callData();
async function callData(){
const res = await fetch("http://localhost:5000/translate", {
	method: "POST",
	body: JSON.stringify({
		q: "english",
		source: "en",
		target: "tr",
		format: "text"
	}),
	headers: { "Content-Type": "application/json" }
});

console.log(await res.json());
}
