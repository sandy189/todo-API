var express=require('express');
var app=express();
var port=process.env.PORT || 3000;

var todoList=[{
		id: 1,
		desciption: 'Get a full time opportunity',
		completed: false
},
{
		id: 2,
		desciption: 'Go and meet parents',
		completed: false
},
{
		id: 3,
		desciption: 'Live in India',
		completed: false
}];


app.get('/',function(req, res) {
	res.send('TODO API started');
});

app.get('/todos',function(req, res) {
	res.json(todoList);
});

app.get('/todos/:id',function(req, res) {
	var id = parseInt(req.params.id,10);

	var flag;
	todoList.forEach(function(item) {
		if(item.id === id) {
			flag=item;
		}
	});
	if(flag) {
		res.json(flag);
		
	}
	else {
		res.status(404).send();
	}

});

app.listen(port,function() {
	console.log('This app is listening to :' + port);
});