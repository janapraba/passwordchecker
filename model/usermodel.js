const mongoose = require ("mongoose");

const User = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    output: {
        type: String,
        require: true
    },
})
 
const usermodel = new mongoose.model("User",User);
module.exports = usermodel