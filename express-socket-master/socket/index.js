function socket(io) {
  // start listen with socket.io
  var connectCounter = 0;

  io.on('connection', function(socket){

    connectCounter++;
    
    // console.log('Online user: ' + connectCounter + '\n');
    console.log('-------------------\n');
    console.log(' A user connected.\n');

    socket.on('new message', function(msg){

      var data = {
        message: msg.message,
        username:msg.username,
        date: Date.now()
      };

      io.emit('chat message', data);

    });

    socket.on('disconnect', function () {
      console.log('A user disconnected.\n');
      connectCounter--;
    });


  });
}
module.exports = socket;