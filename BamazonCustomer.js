var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "root", //Your password
    database: "bamazon"
})
var id;
var quantity;
var query;
var update;
var price;

connection.connect(function(err) {
    if (err) throw err;
    
})

var Bamazon = function() {
    inquirer.prompt({
        name: "itemid",
        type: "input",
        message: "Enter the Id of the product you want",
    }).then(function(answer) {
    	id = answer;
        inquirer.prompt({
        name: "quantity",
        type: "input",
        message: "Enter the number of items you want",
    	}).then(function(res) {
    		quantity = parseInt(res.quantity);
    		query ="Select quantity, price from products where itemid="+id.itemid;
    		})
              .then(function(){
    			connection.query(query,function(err,res){
				price = res[0].price;
		    	if (res[0].quantity > quantity  )
		    	{
		    		update = "UPDATE products SET quantity="+(res[0].quantity - quantity )+ " WHERE itemid=" + id.itemid;
		    		connection.query(update,function(err,res){
				  		if (err) throw err;

				  		console.log("Your total purchase $",quantity*price)
				  		connection.end(function(err) {
							  // The connection is terminated now
							});
						 })	
		    	}
		    	else
		    	{
		    		console.log("Insufficient quantity!")
		    		cmd=""
		    		connection.end(function(err) {
						  // The connection is terminated now
						});
		    		}
    		
    			})

  			}) 
         })
   }		
    

connection.query("Select itemid,product,price from products",function(err,res){
	for (var i = 0; i < res.length; i++) {
        console.log(res[i].itemid + " | " + res[i].product + " \t| " + res[i].price );
    }
    Bamazon();

  
});

