var mysql = require("mysql");

var connection = mysql.createConnection({
  // Your connection information here
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "stockDB"
});

// Connect to the database and then run the function to display the
// optimal buy and sell dates
connection.connect(function(err) {
  if (err) throw err;
  getStocks();
});


// --------------------------------------------------------
//                Helper Functions (Optional)
//
// -------------------- Your Code Here --------------------






// --------------------- End Code Area --------------------



// getStocks queries the SQL database and displays the days to buy and sell in order
// to maximize profits.
function getStocks() {


  // -------------------- Define Query Here --------------------
  // var query = "SELECT A.id aid, B.id bid, MAX(B.high - A.low) AS profit FROM stock A INNER JOIN stock B WHERE B.id IN (SELECT C.id FROM stock C WHERE C.id > A.id) ORDER BY A.id DESC limit 1";

  var query = "SELECT a.date adate, b.date bdate, a.Low alow, b.High bhigh, (b.High-a.Low) AS profit FROM stock a INNER JOIN stock b WHERE b.id > a.id AND b.High - a.low > 0 ORDER BY profit DESC limit 1"
  // -----------------------------------------------------------


  connection.query(query, function(err, res){
    // -------------------- Your Code Here --------------------
    // console.log(res);
    console.log("Max profit: $" + (res[0].bhigh - res[0].alow));
    console.log("Buy: " + res[0].adate + " | $" + res[0].alow);
    console.log("Sell: " + res[0].bdate + " | $" + res[0].bhigh);
    
    

    // --------------------- End Code Area --------------------
    connection.end();
  })
}