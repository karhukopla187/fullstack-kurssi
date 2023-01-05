import net from 'net'
import readline from 'readline'
 
var client = new net.Socket();
var rl=null
 
client.connect(1337, '127.0.0.1',  () => {
    console.log('Connected');

    //floodaus
    var msgCounter = 0
    var timer = 0
    setInterval(floodTimer, 1000)

    function floodTimer() {
      timer++
      if (timer == 10) {
        timer = 0
        msgCounter = 0
      }
    }

    function checkFlood() {
      if (msgCounter >= 5 && timer < 10) {
        client.end()
        console.log("Kicked for flooding")
      } 
    }

    //idlaus
    client.setTimeout(60000);
    client.on('timeout', () => {
    console.log('Kicked for idling');
    client.end();
    });
 
    rl = readline.createInterface(
      process.stdin, process.stdout);
   
    rl.setPrompt(`>`);
         
    rl.on('line', (teksti) => {
        client.write(teksti)
        //floodaus
        msgCounter++
        checkFlood()
    })
   
});
client.on('error', (data)=> {
  console.log('Nyt tuli muuten tupen rapinat ' + data);
})
client.on('data', async (data)=> {

	console.log(data.toString());

    rl.prompt()
 
    });
 
client.on('close', function () {
    console.log('Connection closed');
});

