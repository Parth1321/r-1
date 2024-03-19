const { default: mongoose } = require("mongoose");
const mondoose = require("mongoose");


const userModel = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        trim: true,

        required:[true, "Username is required"],
        moinLength: [3, "Username must be at least 3 characters"],
    },
    email:{
        type: String,
        lowercasr: true,
        required: [true, "Email is required"],
         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },

    password:{
        type: String,
        required: [true, "Password is required"],
        minLength: [3, "username must be at least 3 character"],
        maxLength: [15, "username must be at least 15 character"],
    },


},{timestamps: true});
const user = mongoose.model("user", userModel);

module.exports = user;