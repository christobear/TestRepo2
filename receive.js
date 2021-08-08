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
      //console.log('BNB received');
      //data = JSON.parse(parsedMsg);
      //console.log(JSON.stringify(data.array.length));
    }else{
      // Ignore
      
    }
}