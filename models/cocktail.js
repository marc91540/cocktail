/*module.exports = function(app, data){
    var mysql = app.drivers.mysql;
    
	this.id = data.id || null;
	this.nomCocktail = data.nomCocktail || null;
    this.table = 'nomCocktail';

	this.create = function(cb){
			var q = "INSERT INTO ocktail(nomCocktail) VALUES ('"this.nomCocktail"')";

		mysql.query(q, function(err, rows, fields){
			cb(err, rows, fields);
		});
	}

    this.get = function(cb){
			var q = "SELECT * FROM "+this.table+" WHERE id = "+this.id;

		mysql.query(q, function(err, rows, fields){
			cb(err, rows, fields);
		});
	}
    
    this.getAll = function(cb){
			var q = "SELECT * FROM "+this.table;

		mysql.query(q, function(err, rows, fields){
			cb(err, rows, fields);
		});
	}

    
    
	return this;
}

*/


module.exports = function (app, data) {
    var mysql = app.drivers.mysql;
    this.table = 'nomCocktail';

    this.id = data.id || null;
	this.nomCocktail = data.nomCocktail || null;

    this.get = function (cb) {
        var q = "SELECT * FROM " + this.table;

        mysql.query(q, function (rows) {
            cb(rows);
        });
    }
    
     
  return this;  
}





























