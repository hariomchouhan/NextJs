import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, "Please provide a username"],
        unique: [true, "username already exists"]
    },
    email: {
        type: String,
        require: [true, "Please provide a email"],
        unique: [true, "email already exists"]
    },
    password: {
        type: String,
        require: [true, "Please provide a password"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User