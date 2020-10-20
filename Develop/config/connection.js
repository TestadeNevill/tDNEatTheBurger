var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "vrk7xcrab1wsx4r1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "o2ugi4pa2qkmz0x8",
        password: "aerql139sukxwdvn",
        database: "sdndi4ldmgt8qcp9"
    });
};

connection.connect();
module.exports = connection;

// var connection = mysql.createConnection({
//     host: "us-cdbr-east-02.cleardb.com",
//     // port: 3306,
//     user: "b4984841d878ea",
//     password: "9a9d0b26",
//     database: "heroku_9ca241f01be0d7d"
// });



// Make connection.
// connection.connect(function (err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId);
// });

// // Export connection for our ORM to use.
// module.exports = connection;