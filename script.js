//import {ProcessReceivedData} from "./receive.js";


const firebaseConfig = {
    apiKey: "AIzaSyBGA_EVxfr-2H57rQaj4lxMrF8L-Qyv0ac",
    authDomain: "chatapp-f3315.firebaseapp.com",
    projectId: "chatapp-f3315",
    storageBucket: "chatapp-f3315.appspot.com",
    messagingSenderId: "453060454602",
    appId: "1:453060454602:web:a4f7ab306f0531fb4aac33"
  };
  
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

username = null;

while (username == null){
  const word1 = prompt("What's word1?");
  const word2 = prompt("What's word2?");
  const word3 = prompt("What's word3?");
  secretJSON = {"word1": word1, "word2": word2, "word3": word3}
  secretString = JSON.stringify(secretJSON);
  secretHash = StringToHash(secretString);
  console.log(secretHash);
  var user = Users.find(obj => {
    return obj.hash === secretHash
  });
  username = user.name;
}

alert('Hello '+ user.name);
document.getElementById("user").innerHTML += "<h4>You are logged in as " + user.name +"{'  '}Wallet Balance:" + user.coins+ "</h4> <br/>";

// this is a function to convert any string to a Hash
function StringToHash (s){
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
}

document.getElementById("send-message").addEventListener("submit", postChat);
function postChat(e) {
  e.preventDefault();
  const timestamp = Date.now();
  const chatTxt = document.getElementById("chat-txt");
  const msgType = document.getElementById("msg-type");
  //{"sender":"Chris","reciever":"Evan","amount":95,"senderBalance":400,"recieverBalance":95,"fee":5,"signed":true}
  //const message = 'NBT:' + '{"sender":"' +user.name+ '","reciever":"'+msgType.value+'","amount":'+ chatTxt.value+',"senderBalance":'+user.coins-chatTxt.value-5+',"recieverBalance":'+msgType.type+chatTxt.value - 5 +',"fee":5, "signed":true}';
  var r = Users.find(obj => {
    return obj.name === msgType.value
  });
  const fee = 5;

  const message = 'NBT:' + '{"sender":"'+user.name+'","reciever":"'+r.name+'","amount":'+chatTxt.value+',"senderBalance":'+(user.coins - parseInt(chatTxt.value,10) - fee)+',"recieverBalance":'+(r.coins+parseInt(chatTxt.value,10) - fee)+',"fee:"'+fee+',"signed": true}' 
  console.log(message);
  chatTxt.value = "";
  msgType.value = "";
  /*
  console.log(message);
  db.ref("messages/" + timestamp).set({
    usr: username,
    msg: message,
  });
  */
}

const fetchChat = db.ref("messages/");
fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const msg = "<li>" + messages.usr + " :" + messages.msg + "</li>";
  ProcessReceivedData(messages.msg);
  document.getElementById("messages").innerHTML += msg;
});

