const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const mockUserData = [
    {name: 'Yesh'},
    {name: 'Yellow'}
];

app.get('/users', function(req, res) {
    res.json({
        success: true,
        message: 'users are returned',
        users: mockUserData
    })
})

app.get('/users/:id', function(req, res) {
    console.log(req.params.id);
    res.json({
        success: true,
        message: 'user found',
        user: req.params.id
    })
})

app.post('/login', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    console.log(username, password);

    const mockUserName = 'Yellow';
    const mockUserPassword = 'Welcome';

    if (username === mockUserName && password === mockUserPassword) {
        res.json({
            success: true,
            message: 'Authentication sucessful',
            token: 'encrypted token appear here'
        })
    } else {
        res.json({
            success: false,
            message: 'Authentication failed'
        })
    }
})

app.listen(8000, function(){
    console.log('server is running');
});

