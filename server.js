var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

var messages = [
	{
		name: 'Guest 1',
		message: 'Wow carine its great that your here'
	},
	{
		name: 'Guest 2',
		message: 'Its super nice to be in this chat'
	}
]
io.on('connection', function(server) {
	//on connection i want my app to have an initial emit that 
	server.emit('init', {
		name: 'Guest 1',
		messages: messages
	})
	console.log('hey you')
	server.on('newMessage', function(msg) {
		messages.push({name: 'Guest1', message: msg.message})
		io.emit('newMessage', {name: 'Guest1', message: msg.message})
	})
	server.on('disconnect', function() {
		console.log('outta here')
	})
})

http.listen(port, function() {
	console.log('Its going down in' + port);
});