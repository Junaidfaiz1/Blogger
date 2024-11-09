import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address'],
    }, 
    password: {
        type: String,
        trim: true,
        minlangth: 6,
    },
    question: {
        type: String,
        enum: ["yes", "no"],
        required: true,
        default: "no",
    },
    profilePicture:{
        type: String,
        default: "",
    }
});

const User = mongoose.model("User", UserSchema);\
module.exports = User;
 
