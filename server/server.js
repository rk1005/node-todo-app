var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
    console.log(req.body);
    var todo = new Todo ({
        text : req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc)
    }, (e)=>{
        res.send(e)
    });

});


app.get('/todos', (req, res)=>{
    Todo.find({}).then((todos)=>{
        res.send({todos});
    }, (e)=>{ res.status(400).send()});
});



module.exports = {app}

app.listen(3000, ()=>{
    console.log('started on port 3000')
});