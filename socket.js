const io = require('./server.js');

let characterArr = []

let userCharacters= []

// Connecting Socket
io.on('connection', socket => {
  console.log('session connected');

  socket.on('add-user-character', character => {
    console.log(character)
    userCharacters.push(character);
    console.log(userCharacters)
  })
  
})