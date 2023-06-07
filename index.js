const express = require("express")


const app = express();
const port = process.env.PORT || 7000;


app.get("/",(req, res)=>{
    res.send("this is server merge frontend")
})



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});