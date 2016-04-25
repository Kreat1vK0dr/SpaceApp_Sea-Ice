var socket = io();

listenForSpeech(function(err, text){
    if (err){
        console.log(err);
    }
    else{
        console.log(text);
        var command = text.trim();
        if (command === "going to. Hope") {
          socket.emit("location_received");
          window.location = "/location/1";
          socket.removeAllListeners("loc:point_hope");
        } else if (command === 'going to Noah Tak') {
          socket.emit("location_received");
          window.location = "/location/2";
        } else if (command === 'going to cut a boo') {
          socket.emit("location_received");
          window.location = "/location/3";
        } else if (command === 'going to council') {
          socket.emit("location_received");
          window.location = "/location/4";
        } else if (command === 'going to Wainwright') {
          socket.emit("location_received");
          window.location = "/location/5";
        }
    }
});
