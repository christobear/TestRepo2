document.getElementById("bnb").addEventListener("submit", SendBNB);
function SendBNB(e){
  e.preventDefault();
  // send entire blockchain out to everyone
  console.log(username+": blockchain broadcast");
}

document.getElementById("nbb").addEventListener("submit", SendNBB);
function SendNBB(e){
  e.preventDefault();
  // send entire blockchain out to everyone
  console.log(username+": new block broadcast");
}
document.getElementById("nbt").addEventListener("submit", SendNBT);
function SendNBT(e){
  e.preventDefault();
  // send entire blockchain out to everyone
  console.log(username+": transaction broadcast");
}