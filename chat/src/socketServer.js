import readline from 'readline'

import net from 'net';
var serverinSoketti = null;

var filter = ["router","kakka"]
var users = []

// var allSockets = {
// 	addSocket: function (socket,id) {
// 		this.sockets[id] = socket
// 	},
// 	getSocketByName: function (id) {
// 		if (this.sockets[id] !== undefined) {
// 			return this.sockets[id];
// 		  } else {
// 			throw new Error("A socket with the name '"+id+"' does not exist");
// 		  }
// 	}
// }

var server = net.createServer(function (socket) {

	//karvalakki nimet välillisesti
	var name
	var nameGiven = false

	socket.write('Anna nimi\r\n');
	users.push(socket)

	// while (name == '') {
	// 	name = prompt("Anna nimi","")
	//  }                
	// socket.emit('register',name)
	// socket.on('register', function (name) {
	// 	allSockets.addSocket(socket,name)
	// })

	socket.on('data', function (data) {

		//nimeäminen
		if (nameGiven == false) {
			name = data
			nameGiven = true
			users.forEach((item)=>{
				//sanafiltteri
				var kick = filter.some(word => data.includes(word));
				if (kick == true) {
					socket.destroy()
				} else {
					item.write(data + " on vihdoin täällä")
				}
			})
		//viesti
		} else {
				users.forEach((item)=>{
					//sanafiltteri
					var kick = filter.some(word => data.includes(word));
					if (kick == true) {
						item.write(name + ": *****\n" + name + " lensi ulos")
						socket.destroy()
					} else {
						item.write(name + ": " + data)
					}
				})
			//}
		}

	});

	socket.on('close', function () {
		console.log('Connection closed');
	});


	//socket.pipe(socket);
});


server.listen(1337, '127.0.0.1');