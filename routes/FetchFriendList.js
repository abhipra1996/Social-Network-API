var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var SqlString = require('sqlstring');


router.post("/", function(req, res, next) {
    
	if(req.body.User_Id) {
        
		connection = mysql.createConnection({
			host     : 'sql12.freemysqlhosting.net',
			user     : 'sql12269946',
			database : 'sql12269946',
			password : 'tMD4nAURTS'
		});
		
		connection.connect();
		
		var sqlproc= SqlString.format('CALL SP_FETCH_FRIENDLIST(?)',[req.body.User_Id]);
		connection.query(sqlproc, function (error, results, fields) {
		if(error){
					res.send(JSON.stringify({"SUCCESS": "false", "USER_ID": req.body.User_Id, "ERROR_DESC": error})); 
		} 
		else {
					res.send(JSON.stringify({'data':results[0]}));
					
		}
		});
		
		connection.end();
	
	}
	else
	{
		return res.send(JSON.stringify({"SUCCESS": "false", "USER_ID": 0, "ERROR_DESC": "Invalid Input Parameters"}));
	}
});

module.exports = router;
