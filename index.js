const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Application is working on ${port}`);
});

app.use("/apple",(req,res)=>{
    res.send({
        Name:"apple",
        color:"red",
    });
});

app.use("/Fruits", (req, res) => {
  let htmlstr = ` <ul>
        <li>Apple</li>
        <li>Orange</li>
    </ul>`;
  res.send(htmlstr);
});

app.get("/:username",(req,res)=>{
    let username=req.params.username;
    let htmlstr=`<h1> Welcome ${username}`;
    res.send(htmlstr);
});
