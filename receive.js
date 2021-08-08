function ProcessReceivedData(msg){
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
      data = JSON.parse(parsedMsg);
      index = data.array.length - 1;
      balancesLength = data.array[index].balances.length;
      console.log(data.array[index].balances)
      console.log(username);
      for (j=0; j<balancesLength; j++){
        if (data.array[index].balances[j].user == username){
          user.coins = data.array[index].balances[j].amount;
        }
      }
      console.log("chris: " + user.coins);
      document.getElementById("user").innerHTML = "<h4>You are logged in as " + user.name +"</h4> <br/> <h4> Wallet Balance:" + user.coins+ "</h4> <br/>";


    }else{
      // Ignore
      
    }
}