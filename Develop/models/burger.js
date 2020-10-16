var orm = require("../config/orm.js");

var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },

  updateOne: function (condition, cb) {
    // id = {devoured: true};
    // var condition = "id=" + id;
    orm.updateOne("burgers", { devoured: true }, condition, cb);
  },

  deleteOne: function (condition, cb) {
    orm.deleteOne("burgers", condition, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;
