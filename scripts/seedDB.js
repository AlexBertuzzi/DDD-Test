const mongoose = require("mongoose");
const db = require("../models");
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/Daily-Diet-Directory"
  );

const newUser = [
    {
     name: "Test User",
     email: "test@email.com",
     password: "test",
     meal: [],
     food: [],   
    }
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(newUser))
    .then(data => {
        console.log(data.result.n  + "data inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
