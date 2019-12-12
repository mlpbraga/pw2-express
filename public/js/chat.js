const socket = io('http://localhost:4567');
$('#chat-form').submit((event)=>{
  event.preventDefault();
  let message = $('input[name=message]').val();
  console.log('-------------------------------------------------------------------------');
  if (message.length) {
    console.log('----------------------------------');
    const messageObj = {
      userId: sessionUid,
      message,
      partida,
    };
    socket.emit('sendMessage', messageObj);

  }
})