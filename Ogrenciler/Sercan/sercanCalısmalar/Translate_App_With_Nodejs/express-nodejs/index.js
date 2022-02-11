const express = require("express");
const app = express();
app.use(express.json());
const fs = require('fs');

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
    console.log(datas['u_1'].site);
  })
})



app.listen(5000, () => console.log("Listening on port 5000 now "));
