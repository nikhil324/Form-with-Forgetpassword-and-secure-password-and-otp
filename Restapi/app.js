const express = require("express");
require("./conn");
const StuDetail = require("./students");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("I am at the home page");
});
app.post("/students", async (req, res) => {
    const data = new StuDetail(req.body);
    const msg = await data.save();
    console.log(msg);
    res.send("hello from  the other sides");
});
app.get("/students", async (req, res) => {
    const Studata = await StuDetail.find();
    console.log(Studata);
    res.send(Studata);
});
// const add = async () => {
//     const d1 = new StuDetail({
//         Name: "Nikhil Gupta",
//         Email: "nikhillko02@gmail.com",
//         RollNo: 19151,
//         Add: "Lucknow",
//         MobNo: 7524051858,
//         Course: "Java",

//     });
//     const d2 = new StuDetail({
//         Name: "Niraj Gupta",
//         Email: "nirajgkp02@gmail.com",
//         RollNo: 19153,
//         Add: "Gorakhpur",
//         MobNo: 7227188112,
//         Course: "Python",
//     });
//     const res = await StuDetail.insertMany([d1, d2]);
//     console.log(res);
// }
const start = async () => {
    try {
        app.listen(8000, () => {
            //add();
            console.log("I am listening at the port 8000");
        });
    } catch (err) {
        console.log(err);
    }
}
start();
