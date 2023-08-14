const express = require("express");
const app = express();
const { mailperform1, mailperform2 } = require("./controllers/mailperform");
app.get("/", (req, res) => {
    res.send("I am a server");
});
app.get("/sendmail1", mailperform1);
app.get("/sendmail2", mailperform2);
const start = async () => {
    try {
        app.listen(5000, () => {
            console.log("I am listening at port no. 5000");
        });
    } catch (error) { console.log(error); }
};
start();