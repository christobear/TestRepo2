var GenesisBlock = {
  Chris: "-1600402064",
  Evan: "1561853380",
  Leo: "-88367627",
  Daniel: "-952999088",
};

const Users = [
  { name: 'Chris', hash: -1600402064, coins: 1000000 },
  { name: 'Evan', hash: 1561853380, coins: 1000000 },
  { name: 'Leo', hash: -88367627, coins: 1000000 },
  { name: 'Daniel', hash: -952999088, coins: 1000000 }
];

var Blocks = {
  array: [
    {
      header: {
        blockID: 0,
        blockHash: 0,
        lastBlockID: 0,
        lastBlockHash: 0
      },
      transactions: [
        { sender: "Chris", reciever: "Evan", amount: 100, senderBalance: 400, recieverBalance: 100 },
        { sender: "Chris", reciever: "Leo", amount: 100, senderBalance: 300, recieverBalance: 100 },
        { sender: "Chris", reciever: "Daniel", amount: 100, senderBalance: 200, recieverBalance: 100 },
      ]
    },
    {
      header: {
        blockID: 1,
        blockHash: 1,
        lastBlockID: 0,
        lastBlockHash: 0
      },
      transactions: [
        { sender: "Chris", reciever: "Evan", amount: 100, senderBalance: 100, recieverBalance: 200 },
        { sender: "Chris", reciever: "Leo", amount: 100, senderBalance: 0, recieverBalance: 100 },
      ]
    },

  ]
};
