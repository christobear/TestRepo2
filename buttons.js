document.getElementById("bnb").addEventListener("submit", SendBNB);
function SendBNB(e){
  e.preventDefault();
  // send entire blockchain out to everyone
  console.log(user.name+": blockchain broadcast");
  db.ref("messages/" + Date.now()).set({
    usr: user.name,
    msg: "BNB:" + JSON.stringify(Blocks),
  });
}

document.getElementById("nbb").addEventListener("submit", SendNBB);
function SendNBB(e){
  e.preventDefault();
  // send entire blockchain out to everyone
  console.log(user.name+": new block broadcast");
}
document.getElementById("nbt").addEventListener("submit", SendNBT);
function SendNBT(e){
  e.preventDefault();
  // send entire blockchain out to everyone
  console.log(user.name+": transaction broadcast");

  db.ref("messages/" + Date.now()).set({
    usr: user.name,
    msg: "NBT:" + '{"Chris": -95, "Leo":95, "fee": 5}',
  });


}