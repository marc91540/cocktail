
var express = require ('express'),
    path = require('path'),
	bodyParser = require('body-parser');




module.exports = function(app){
	var server = app.drivers.express.server;
    
     server.use('/css', express.static(__dirname + '/../views/css'));
    server.use('/js', express.static(__dirname + '/../views/js'));
    
    server.use( bodyParser.json() );       // to support JSON-encoded bodies
	server.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	  extended: true
	})); 

    
	server.get('/', function(req,res){
		res.sendFile(path.resolve('views/home.html'));
	});
    

// API Routes
///////////////////////////////////////////////////////////////////////////////
// affichage les cocktails
    
    
  /*  
    server.get('/api/cocktail', function (req, res) {
        var cocktail = new app.models.cocktail(app, {
            id: req.query.id
        });
        cocktail.get(function (rows) {
            res.send(rows);
        });
    });
    */
    
      server.get('/api/cocktail', function(req, res){        
        if(req.query.id === undefined){
            var cocktail = new app.models.cocktail(app, {});
            cocktail.getAll(function(err, rows, fields){
                if(err) res.status(500).send(err);
                res.status(200).send({data: rows, status:'success'});
            });
        }
        else {
            var cocktail = new app.models.cocktail(app, {id:req.query.id});
            cocktail.get(function(err, rows, fields){
                if(err) res.status(500).send(err);
                res.status(200).send({data: rows, status:'success'});
            });
        }
    });
    
    
    
    
   /* server.get('/api/cocktails', function(req, res){        
        if(req.query.id === undefined){
            var nomCocktail = new app.models.nomCocktail(app, {});
            nomCocktail.getAll(function(err, rows, fields){
                if(err) res.status(500).send(err);
                res.status(200).send({data: rows, status:'success'});
            });
        }
        else {
            var nomCocktail = new app.models.nomCocktail(app, {id:req.query.id});
            nomCocktail.get(function(err, rows, fields){
                if(err) res.status(500).send(err);
                res.status(200).send({data: rows, status:'success'});
            });
        }
    });*/

}
//////////////////////////////////////////////////////////////////////////////
// Enregistrement des cocktails
    
    
   /* server.post('/api/ingredients', function (req, res) {
        
        if(req.query.id === undefined){
            var ingredient = new app.models.ingredient(app, {});
            votant.postAll(function(err, rows, fields){
                if(err) res.status(500).send(err);
                res.status(200).send({data: rows, status:'success'});
            });
        }
        else {
            var ingredient = new app.models.ingredient(app, {id:req.query.id});
            votant.get(function(err, rows, fields){
                if(err) res.status(500).send(err);
                res.status(200).send({data: rows, status:'success'});
            });
        }


    });*/