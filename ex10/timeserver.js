/*   Write a TCP time server!  
   
  Your server should listen to TCP connections on the port provided  
  by the first argument to your program. For each connection you  
  must write the current date & 24 hour time in the format:  
   
     "YYYY-MM-DD hh:mm"  
   
  followed by a newline character. Month, day, hour and minute must  
  be zero-filled to 2 integers. For example:  
   
     "2013-07-06 17:42"  
   
  After sending the string, close the connection. */

// Issue with my solution: no zeroFill function
var net = require('net');
var server = net.createServer(function inputSocket(socket) {
	var date = new Date();
	var year = date.getFullYear().toString();
	var month = '0' + (date.getMonth() + 1).toString().slice(-2);
	var day = '0' + date.getDate().toString().slice(-2);
	var hour = date.getHours().toString();
	var minute = date.getMinutes().toString();

	socket.write(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + '\n');
	socket.end();
})
server.listen(process.argv[2]);

/* Solution: 
     var net = require('net')  
       
     function zeroFill(i) {  
       return (i < 10 ? '0' : '') + i  
     }  
       
     function now () {  
       var d = new Date()  
       return d.getFullYear() + '-'  
         + zeroFill(d.getMonth() + 1) + '-'  
         + zeroFill(d.getDate()) + ' '  
         + zeroFill(d.getHours()) + ':'  
         + zeroFill(d.getMinutes())  
     }  
       
     var server = net.createServer(function (socket) {  
       socket.end(now() + '\n')  
     })  
       
     server.listen(Number(process.argv[2]))  
*/