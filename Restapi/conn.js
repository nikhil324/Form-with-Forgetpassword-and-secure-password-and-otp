const mongoose = require("mongoose");
const con = async () => {
    try {
        const res = await mongoose.connect("mongodb://localhost:27017/Students", {
            //useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connect Successfully");
    } catch (err) {
        console.log(err);
    }
}
con();