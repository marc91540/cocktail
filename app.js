var app = {};

app.drivers = {};
app.drivers.express = require('./drivers/express');
app.drivers.mysql = require('./drivers/mysql');
app.drivers.express.init();

app.controllers = {};
app.controllers.routes = require('./controllers/routes')(app);

app.models = {};
app.models.candidat = require('./models/cocktail');
app.models.candidat = require('./models/ingrdient');
app.models.candidat = require('./models/user');





