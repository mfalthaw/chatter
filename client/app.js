
$(document).ready(function() { 
    
    var socket = io();
    
    $('#message-form').submit(function() {
      var text = $('#message').val();
	  socket.emit('message', text);
	  $('#message').val("");
	  return false;    
    });
    
    // Listen to new message from other people
	socket.on('message', function(msg) {
	  var new_msg = "<li>" + msg + "</li>"
	  $('#messages').append(new_msg);
	});
	
});