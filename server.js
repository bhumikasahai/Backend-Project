const app = require("./src/app")
const connectDb = require("./src/db/db")



app.listen(5000, () => {
    console.log("Server is running on port 5000")
})