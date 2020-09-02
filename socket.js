const io = require('./server.js');

let characterArr = []

let userCharacters= []

// Connecting Socket
io.on('connection', socket => {
  console.log('session connected');

  // Handles user character selection
  socket.on('add-user-character', data => {
    const character = data;
    userCharacters.push(character);
    // Pushes updated array to client
    io.emit('update-user-characters', userCharacters);
  });

  // Handles updating players current hp
  socket.on('update-hp', data => {
    console.log(data.hpState);
    userCharacters.filter(char => {
      console.log(char);
      if (char.name === data.name) char.currentHP = data.hpState;
    })
    socket.broadcast.emit('update-user-characters', userCharacters)
  })
  
})