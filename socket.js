const io = require('./server.js');

// Holds all active player's characters
let userCharacters= []

// Connecting Socket
io.on('connection', socket => {
  console.log('session connected');
  io.emit('update-user-characters', userCharacters);

  // Handles user character selection
  socket.on('add-user-character', data => {
    const character = data;
    socket.character = character.name;
    userCharacters.push(character);
    // Pushes updated array to client
    io.emit('update-user-characters', userCharacters);
  });

  // Handles updating players current hp
  socket.on('update-hp', data => {
    console.log(data.hpState);
    userCharacters.filter(char => {
      // console.log(char);
      if (char.name === data.name) char.currentHP = data.hpState;
    })
    socket.broadcast.emit('update-user-characters', userCharacters)
  });

  // handles character update
  socket.on('update-character', data=> {
    userCharacters.filter((char, i) => {
      if (char.name === data.name) {
        userCharacters.splice(i, 1);
        socket.emit('add-user-character', data);
        socket.emit('update-current-character', data)
      }
    })
  })

  // Handle user disconnect
  // If user intentionally disconnects, their character is 
  //    removed from array and userCharacters updates on the client
  socket.on('disconnect', reason => {
    if (reason === 'io server disconnect') socket.connect();
    else {
      userCharacters.map((char, i) => {
        if (char.name === socket.character) {
          userCharacters.splice(i, 1);
          io.emit('update-user-characters', userCharacters);
        }
      })
    }
  })

})