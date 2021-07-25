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
  if(secretHash == "-1600402064"){
    username = "Chris"
  }
  if(secretHash == "1561853380"){
    username = "Evan"
  }
  if(secretHash == "-88367627"){
    username = "Leo"
  }
  if(secretHash == "-952999088"){
    username = "Daniel"
  }
}

alert('Hello '+ username);
document.getElementById("user").innerHTML += "<h4>You are logged in as " +username+"</h4>";

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
  const message = msgType.value + ":" + chatTxt.value;
  chatTxt.value = "";
  msgType.value = "";
  console.log(message);
  db.ref("messages/" + timestamp).set({
    usr: username,
    msg: message,
  });
}

const fetchChat = db.ref("messages/");
fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const msg = "<li>" + messages.usr + " :" + messages.msg + "</li>";
  ProcessReceivedMessage(messages.msg);
  document.getElementById("messages").innerHTML += msg;
});

function ProcessReceivedMessage(msg){
  msgType = msg.substring(0,4);
  parsedMsg = msg.substring(4,msg.length);
  if(msgType == "BCB:"){
    console.log('BCB received');
  }else if(msgType == "NBB:"){
    console.log('NBB received');
  }else if(msgType == "NBT:"){
    console.log('NBT received');
  }else if(msgType == "BNB:"){
    console.log('BNB received');
  }else{
    // Ignore
    
  }
}

document.getElementById("broadcast-buttons").addEventListener("submit", SendBNB);
function SendBNB(e){
  e.preventDefault();
  // send entire blockchain out to everyone
  console.log(username+": blockchain broadcast");
}