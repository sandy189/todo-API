var express=require('express');
var app=express();
var port=process.env.PORT || 3000;
app.get('/',function(req, res) {
	res.send('TODO API started');
});
app.listen(port,function() {
	console.log('This app is listening to :' + port);
});