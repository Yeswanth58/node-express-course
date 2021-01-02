const express = require('express');
const app = express();

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

app.listen(8000, function(){
    console.log('server is running');
});

