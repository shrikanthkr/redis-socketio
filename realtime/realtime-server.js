var io = require('socket.io').listen(5001),
    redis = require('redis').createClient(),
    redis_pub = require('redis').createClient();

redis.subscribe('rt-change');

io.on('connection', function(socket){
  redis.on('message', function(channel, message){
    socket.emit('rt-change', JSON.parse(message));
    redis_pub.publish('my_callback', JSON.parse(message));
    console.log('Publshed');
  });
});