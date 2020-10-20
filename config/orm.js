
// Here is the O.R.M. where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.

var connection = require("./connection");

function createQs(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function Sql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}
var orm = {
    selectAll: function (table, cb) {
        var dbQuery = "SELECT * FROM " + table + ";";

        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    // Create a new burger.
    insertOne: function (table, cols, vals, cb) {
        var dbQuery =
            "INSERT INTO " +
            table;
        dbQuery += " (";
        dbQuery += cols.toString();
        dbQuery += ") ";
        dbQuery += "VALUES (";
        dbQuery += createQs(vals.length);
        dbQuery += "); ";

        console.log(dbQuery);
        connection.query(dbQuery, vals, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    // Update burger 
    updateOne: function (table, objColVals, condition, cb) {
        var dbQuery =
            "UPDATE " +
            table;
        dbQuery += " SET ";
        dbQuery += Sql(objColVals);
        dbQuery += " WHERE ";
        dbQuery += condition + ";";

        console.log(dbQuery);

        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    // Delete bruger
    deleteOne: function (table, condition, cb) {
        var dbQuery = "DELETE FROM " + table;
        dbQuery += " WHERE ";
        dbQuery += condition + ";";

        console.log(dbQuery);

        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};
module.exports = orm;

// var orm = {
//     all: function (table, cb) {
//         connection.query("SELECT * FROM ??", [table], function (err, data) {
//             if (err) throw err
//             cb(data)
//         })
//     },
//     create: function (table, burgerName, devoured, cb) {
//         connection.query("INSERT INTO ?? (burger_name, devoured) VALUES (?,?) ", [table, burgerName, devoured], function (err, data) {
//             if (err) throw err
//             cb(data)
//         })
//     }
// }

// module.exports = orm;