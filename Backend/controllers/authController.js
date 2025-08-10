const User = require('../models/User')
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn: "1h", });
};

exports.registerUser = async (req, res) => {
                const { fullname, email, password, profileImageUrl } = req.body;
                if (!fullname || !email || !password) {
                    return res.status(400).json({ message: "All fields are required" });
                }
                try {
                                const existingUser = await User.findOne({email});
                                if (existingUser) {
                                    return res.status(400).json({ message: "Email already in use " });
                                }
                                
                                const user = await User.create({
                                                fullname,
                                                email,
                                                password,
                                                profileImageUrl
                                })

};
exports.loginUser = async (req, res) => {};
exports.getUserInfo = async (req, res) => {};