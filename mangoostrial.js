const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Course", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection successful"))
    .catch((err) => console.log(err));

const CourseSchema = new mongoose.Schema({
    Name: String,
    Author: String,
    Fees: Number,
    Students: Number,
    Lunchdate: {
        type: Date,
        default: Date.now
    }
})
const CourseDetails = new mongoose.model("CourseDetails", CourseSchema);
// const createdata = async () => {
//     const Coursedata1 = new CourseDetails({
//         Name: "React.js",
//         Author: "Thereactman",
//         Fees: 22000,
//         Students: 110,
//     });
//     const Coursedata2 = new CourseDetails({
//         Name: "python",
//         Author: "Thepyman",
//         Fees: 25000,
//         Students: 150,
//     });
//     const Coursedata3 = new CourseDetails({
//         Name: "javascript",
//         Author: "Thejsman",
//         Fees: 29500,
//         Students: 90,
//     });
//     const Coursedata4 = new CourseDetails({
//         Name: "MYSql",
//         Author: "Thesqlman",
//         Fees: 20000,
//         Students: 170,
//     });
//     const res = await CourseDetails.insertMany([Coursedata1, Coursedata2, Coursedata3, Coursedata4]);
//     //console.log(res);
// }
// createdata();
const datafun = async () => {
    const data = await CourseDetails.find({ Students: { $nin: [90, 120, 150] } })
        .select({ Name: 1 })
        .sort({ Name: 1, Fees: -1 });
    console.log(data);
}
datafun();
