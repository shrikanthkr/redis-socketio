var io = require('socket.io').listen(5001),
redis = require('redis').createClient(),
redis_pub = require('redis').createClient();
var socket;
redis.subscribe('rt-change');
io.on('connection', function(soc){
	console.log('Got connection!!!!!!!');
	socket=soc;
});
redis.on('message', function(channel, message){
	console.log('Published!!!!!!!');
	socket.emit('client-channel', JSON.parse(message));
	redis_pub.publish('my_callback', JSON.parse(message));
});