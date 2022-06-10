var express = require("express");
var app = express();
var connection = require('./database');
var fs = require('fs');

app.get('/', function(req, res){
    
    connection.query('SELECT * FROM EMPLOYEE',function(err, results){
        if(err) throw err;        
        res.end(fs.readFileSync('index1.html').toString());
    });

});

app.get('/all', function(req, res){
    
    connection.query('SELECT * FROM EMPLOYEE',function(err, results){
        if(err) throw err;
        res.send(results);
    });

});

app.get('/empid', function(req, res){
    
    connection.query('SELECT EmpCode, EmpName FROM EMPLOYEE',function(err, results){
        if(err) throw err;
        res.send(results);
    });

});

app.get('/salary', function(req, res){
    
    connection.query('SELECT Salary, EmpName FROM EMPLOYEE',function(err, results){
        if(err) throw err;
        res.send(results);
    });

});

app.listen(3000, function(){
    console.log('App is listening on Port: 3000');
    connection.connect(function(err){
        if(err) throw err;
        console.log('Database Connected!!')
    });
});