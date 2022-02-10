const express = require("express");
const app = express();
app.use(express.json());
const fs = require('fs');


// app.get("/", (req, res) => {
//   res.send("helo");
// });
// const obj = [
//   {
//     id: 1,
//     name: "sercan",
//     age: "30",
//     city: "samsun",
//   },
//   {
//     id: 2,
//     name: "ali",
//     age: "31",
//     city: "ankara",
//   },
// ];
// app.get("/api/courses/:id", (req, res) => {
//   let objc = obj.find(c=> c.id === parseInt(req.params.id));
//   if(!objc) res.status(404).send('That the given id was not found');
//   res.send(objc);
// });

// app.get("/api/posts/:year/:month", (req, res) => {
//   res.send(req.params);
// });

// app.post('/api/courses', (req,res)=>{
//   const ob = {
//     id: obj.lenght+1,
//     name: req.body.name,
//     age:req.body.age,
//     city:req.body.city
//   }
//   obj.push(ob);
//   res.send(ob);
// });



app.get('/api/lang' ,(req,res)=>{
  const sendObj =[{ 
    translatedText : 'Hola'
  }]
  res.send(JSON.stringify(sendObj));
});
  
  





app.get('/langs/all', (req,res)=>{
  fs.readFile('langs.json' , 'utf8' , function(err,data){
   let datas = JSON.parse(data);
    res.send(JSON.stringify(datas));
    //console.log(dat['u_1'].site);
  })
})

// app.post('api/courses/lang', (req,res)=>{
//   const langReq ={
//     q: req.body.q,
//     source:req.body.source,
//     target:req.body.target
//   }
 
// if(langReq.q==="helo" && langReq.source==="es" && langReq.source=== "en")
//   res.send(sendObj)
// })

app.listen(5000, () => console.log("Listening on port 5000 now "));
