const mongoose = require("mongoose");
const validator = require("validator");
const makeConnection = async () => {
    try {
        const respons = await mongoose.connect("mongodb://localhost:27017/Course", { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("connection success");
        // console.log(respons);
    } catch (err) {
        console.log(err);
    }
}
makeConnection();
const CourseSchema = new mongoose.Schema({
    Name: String,
    Email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid");
            }
        }
    },
    Author: String,
    Fees: Number,
    Students: {
        type: Number,
        validate(value) {
            if (value < 1) {
                throw new Error("Students are not possible less than 1");
            }
        }
    },
    Lunchdate: {
        type: Date,
        default: Date.now
    }
})
const CourseDetails = new mongoose.model("CourseDetails", CourseSchema);
const createdata = async () => {
    const Coursedata1 = new CourseDetails({
        Name: "React.js",
        Email: "nikhillko02@gmail.com",
        Author: "Thereactman",
        Fees: 22000,
        Students: 110,
    });
    //     // const Coursedata2 = new CourseDetails({
    //     //     Name: "python",
    //     //     Author: "Thepyman",
    //     //     Fees: 25000,
    //     //     Students: 150,
    //     // });
    //     // const Coursedata3 = new CourseDetails({
    //     //     Name: "javascript",
    //     //     Author: "Thejsman",
    //     //     Fees: 29500,
    //     //     Students: 90,
    //     // });
    //     // const Coursedata4 = new CourseDetails({
    //     //     Name: "MYSql",
    //     //     Author: "Thesqlman",
    //     //     Fees: 20000,
    //     //     Students: 170,
    //     // });
    const res = await CourseDetails.insertMany([Coursedata1]);
    console.log(res);
}
createdata();
const updateData = async (_id) => {
    try {
        const res = await CourseDetails.findByIdAndUpdate({ _id }, {
            $set: {
                Fees: "29500"
            }
        },
            {
                new: true,
                useFindAndModify: false
            });
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}
const deleteData = async (_id) => {
    try {
        const res = await CourseDetails.findByIdAndDelete({ _id });
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}
const findData = async () => {
    try {
        const d1 = await CourseDetails.find({ _id: "641b581c33f53eec226dfeac" });
        console.log(d1);
    }
    catch (err) {
        console.log(err);
    }
}
findData();
// deleteData("641ac28c6d46ced38406bc0e")
// updateData("641ac28c6d46ced38406bc0e");