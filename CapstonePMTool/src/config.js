const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb://localhost:27017/Capstone");

connect.then(() => {
    console.log("Database connected!");
})
.catch((error) => {
    console.error(error);
})

const LoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const collection = new mongoose.model("User", LoginSchema);

module.exports = collection;