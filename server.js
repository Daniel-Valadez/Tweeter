/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Daniel Valadez
 * Email: valadezd@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars'); 
var twitData = require('./twitData.json'); 
//console.log('Twit Data: ', twitData); 
var n = twitData.length; 
//console.log("The array of twitData is : ", n); 

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defualtLayout: 'main'}));
app.set('view engine', 'handlebars'); 

app.use(express.static('public'));

/*Part of Step #2*/
app.get('/', function (req, res, next){
	res.status(200).render('indexpage', {twitContext: twitData}) ; 
});

/*Part of Step #4*/
app.get('/twit/:number', function(req, res, next){
	//console.log("The number: ", req.params);
	var number = req.params.number; 
	if(number < n)
	{
		res.status(200).render('indexpage', {twitContext: [twitData[number]]}); 
	}
	else{
		next(); 
	}
}); 

/*Part of Step #3*/
app.get('*', function(req, res) {
	res.status(404).render('404'); 
}); 

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
