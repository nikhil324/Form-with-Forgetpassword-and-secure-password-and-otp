const mongoose = require("mongoose");
const validator = require("validator");
const StudentSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        unique: true,
        required: true,
        validator(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid");
            }
        }
    },
    RollNo: {
        type: Number,
        Unique: true,
        required: true,
    },
    Add: {
        type: String,
    },
    MobNo: {
        type: Number,
        Max: 12,
        Min: 10,
        required: true,
        unique: true,
    },
    Course: String,
});

const StuDetail = new mongoose.model("StuDetail", StudentSchema);

module.exports = StuDetail;