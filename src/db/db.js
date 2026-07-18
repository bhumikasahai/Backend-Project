const mongoose = require("mongoose")

async function connectDb(){
    await mongoose.connectDb("mongodb+srv://yt:ZbxHClVfE4aWyO5G@cluster0.re5rmwv.mongodb.net/project1")
    console.log("Connected to db")
}

module.exports = connectDb