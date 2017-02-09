const express = require('express'),
    nunjucks = require('nunjucks'),
    path = require('path'),
    app = express();

require('dotenv').config();

nunjucks.configure(path.resolve(__dirname, 'views'), {
    autoescape: true,
    express: app
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index.html');
});

app.listen(process.env.PORT, () => console.log('App started'));