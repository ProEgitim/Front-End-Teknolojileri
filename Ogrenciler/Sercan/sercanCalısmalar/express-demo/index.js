const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("helo");
});
const obj = [
  {
    id: 1,
    name: "sercan",
    age: "30",
    city: "samsun",
  },
  {
    id: 2,
    name: "ali",
    age: "31",
    city: "ankara",
  },
];
app.get("/api/courses/:id", (req, res) => {
  let objc = obj.find(c=> c.id === parseInt(req.params.id));
  if(!objc) res.status(404).send('That the given id was not found');
  res.send(objc);
});

// app.get("/api/posts/:year/:month", (req, res) => {
//   res.send(req.params);
// });

app.listen(5000, () => console.log("Listening on port 5000 now "));
