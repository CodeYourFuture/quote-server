const express = require("express");
const cors = require('cors')
const app = express();
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(cors())
let welcomeMessage = {
  id: 0,
  from: "Bart",
  text: "Welcome to CYF chat system!"
}
let anotherMessage = {
  id: 1,
  from: "Ade",
  text: "hi world!"
}
let one = {
  id: 2,
  from: "Bart",
  text: "Welcome to CYF chat system!"
}
let two = {
  id: 3,
  from: "Ade",
  text: "hi world!"
}
let three = {
  id: 4,
  from: "Bart",
  text: "Welcome to CYF chat system!"
}
let four = {
  id: 5,
  from: "Ade",
  text: "hi world!"
}
let five = {
  id: 6,
  from: "Bart",
  text: "Welcome to CYF chat system!"
}
let six = {
  id: 7,
  from: "Ade",
  text: "hi world!"
}
let seven = {
  id: 8,
  from: "Bart",
  text: "Welcome to CYF chat system!"
}
let eight = {
  id: 9,
  from: "Ade",
  text: "hi world!"
}
let nine = {
  id: 10,
  from: "Bart",
  text: "Welcome to CYF chat system!"
}
let ten = {
  id: 11,
  from: "Ade",
  text: "hi world!"
}
//This array is our "data store".
//We will start with one message in the array.
//Note: messages will be lost when Glitch restarts our server.
let messages = [welcomeMessage, anotherMessage, one, two, three, four, five, six, seven, eight, nine, ten]
// let serialNumber = 0;
// function updateMessage() {
//   let form = document.getElementbyId("myForm")
//   let element = form.elements;
//   console.log(encodeURIComponent(element[0].value))
//   serialNumber = serialNumber+1;
//   let name = document.getElementById("name");
//    let message = document.getElementById("message");
//   console.log("yes i am working" + name.value)
//   let msgObj = {
//     "id":serialNumber, 
//   "from":name.value, 
//   "text":message.value
//   };
// }
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});
app.get("/messages/search", (req, res)=>{
  let mySearch = req.query.term;
  console.log(mySearch)
  let filteredList=messages.filter((msg)=> msg.text.toLocaleLowerCase().includes(mySearch.toLocaleLowerCase()))
  // messages.filter(obj => {obj.text.toLowerCase().includes(mySearch) ? res.json(obj.text): res.json({success:false})}) 
  if(filteredList)
  res.json(filteredList)
  else
  res.json({success:false})
})
app.get("/messages/display" , (req,res)=> {
  let counter = 0;
  let carryOn=true;
  let i=messages.length-1;
  let tenMessages=[];
 while(carryOn)
 {
   tenMessages.push(messages[i]);
   i=i-1;
   counter=counter+1;
   if(counter >= 10 || i < 0){
    carryOn = false;
   }
 }
 res.send(tenMessages);
 res.send("it works");
//  console.log(tenMessages);
 console.log("it is working");
} )
app.get('/messages', function(request, response) {
  let name = request.query.from;
  console.log(name)
  response.json(messages);
});
app.get("/messages/:id", function (req, res) {
 const {id} = req.params
 const myMessages = messages.find(e=> e.id == id);
  myMessages? res.json(myMessages): res.send("data not found");
});
//Create
app.post("/messages", function (req, res) {
  const msg = req.body;
  // let name = req.query.from;
  // console.log(name)
console.log("-------")
  if (Object.keys(msg).length === 0){ 
    res.send({status:400})
  }else{ 
    messages.push(msg)
    res.json(messages)
  }
});
//delete
app.delete("/deleteMessages/:id", function (req, res) {
  const {id}= req.params;
 messages= messages.filter(e=> e.id !=id);
  res.send(messages);
 res.send("single album deleted")
});
//update
app.patch("/updateMessages/:id", function (req, res) {
  const {id}= req.params;
  const {from, text} = req.body
 const updateMyMessages= messages.find(e=> e.id ==id);
  if(from) 
    updateMyMessages.from = from; 
  else
    updateMyMessages.from = "";
  if(text)
    updateMyMessages.text = text;
  else
    updateMyMessages.text = "";
  res.send(updateMyMessages);
 res.send("messages Updated")
});
app.get('/messages', function(request, response) {
  let name = request.query.from;
  console.log(name)
  response.json(messages);
});
app.listen(8000, ()=> {
  console.log("server started on port 8000")
});