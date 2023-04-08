const axios = require('axios')
const express = require('express');
const app = express();
const ejs = require('ejs');
app.set('view engine', 'ejs');

const path = require("path")

var names = []
var email = []
var images = []
var description = []
var links = []



axios.get('https://api.ecelliitr.org/edc/community?format=json')
.then(res => {
  for(var i = 0;i < 18; i++){names.push(res.data[i].name)}
  for(var i = 0;i < 18; i++){email.push(res.data[i].email)}
  for(var i = 0;i < 18; i++){images.push(res.data[i].image)}
  for(var i = 0;i < 18; i++){
    var a= res.data[i].description
    var l =0
    
    for(var j = 1;j < a.length;j++){
      if(a[j] == "<"){
        l = j
        break
      }
    }
    
    var b = a.substring(3,l)
    if(i == 7){
      b = "We build generative AI tools to ease video creation.We are building a tool that can take any text and create of any person speaking that text."
      
    }
    description.push(b)
  }
  for(var i = 0;i < 18; i++){links.push(res.data[i].linkedin)}
app.get('/', function(req, res) {
  res.render('index', {
    f1:images[0],f2:images[1],f3:images[2],f4:images[3],f5:images[4],f6:images[5],f7:images[6],f8:images[7],
    f9:images[8],f10:images[9],f11:images[10],f12:images[11],f13:images[12],f14:images[13],f15: images[14],
    f16: images[15],f17:images[16],f18:images[17],
    p1:names[0],p2:names[1],p3:names[2], p4:names[3],p5:names[4],p6:names[5],p7:names[6],p8:names[7],
    p9:names[8],p10:names[9],p11:names[10],p12:names[11],p13:names[12],p14:names[13],p15: names[14],p16: names[15],
    p17:names[16],p18:names[17],
    a1:links[0],a2:links[1],a3:links[2], a4:links[3],a5:links[4],a6:links[5],a7:links[6],a8:links[7],
    a9:links[8],a10:links[9],a11:links[10],a12:links[11],a13:links[12],a14:links[13],a15: links[14],a16: links[15],
    a17:links[16],a18:links[17],
    d1:description[0],d2:description[1],d3:description[2], d4:description[3],d5:description[4],d6:description[5],d7:description[6],d8:description[7],
    d9:description[8],d10:description[9],d11:description[10],d12:description[11],d13:description[12],d14:description[13],d15: description[14],d16: description[15],
    d17:description[16],d18:description[17]
  });
});
  
  // console.log(names[0])
})


app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000,function(){
  console.log("Started");
})
