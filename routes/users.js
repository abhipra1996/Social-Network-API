var express = require('express');
var router = express.Router();
var mysql = require("mysql");

/* GET users listing. */
router.get('/', function(req, res, next) {
    
	// var connection = mysql.createConnection({
    	// host     : 'sql12.freemysqlhosting.net',
		// user     : 'sql12269946',
		// password : 'tMD4nAURTS',
		// database : 'sql12269946'
    // });

    // connection.connect(function(err) {
    // if (err) {
        // console.error('Error connecting: ' + err.stack);
        // return;
    // }
    // console.log('Connected as id ' + connection.threadId);
    // });

    // connection.query('SELECT * FROM COUNTRY_MASTER', function (error, results, fields) {
       // if (error)
       // res.send(JSON.stringify({"status": 0, "error": null, "response": results})); 
	   // throw error;

        // results.forEach(result => {
        // res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
       // });
    // });

    // connection.end();
	
	connection = mysql.createConnection({
	  	host     : 'sql12.freemysqlhosting.net',
	  	user     : 'sql12269946',
  		database : 'sql12269946',
		password : 'tMD4nAURTS'
	});
	
	connection.connect(function(err) {
    if (err) {
       console.error('Error connecting: ' + err.stack);
       return;
    }
    console.log('Connected as id ' + connection.threadId);
    });
	
	
	connection.query('SELECT * from COUNTRY_MASTER', function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		//If there is error, we send the error in the error section with 500 status
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  			//If there is no error, all is good and response is 200OK.
	  	}
  	});
});

router.post("/", function(req, res, next) {
    
	return res.send(req.body);
	
	// if(!req.body.username || !req.body.password || !req.body.twitter) {
        // return res.send({"status": "error", "message": "missing a parameter"});
    // } else {
        // return res.send(req.body);
    // }
});

module.exports = router;
