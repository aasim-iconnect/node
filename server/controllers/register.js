const User = require("../model/User");
const {registerValidation} = require("../middlewares/validation");
const bcrypt = require("bcryptjs");

module.exports.register = async (req, res) => {
    //lets validate
    const {error} = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //check if user already exits
    const emailExit = await User.findOne({email: req.body.email});
    if (emailExit) return res.status(400).send("Email already exits");

    //Hash the password
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
    });

    try {
        const savedUser = await user.save();
        res.send("User Registered Successfully");
    } catch (err) {
        res.status(400).send("Form is empty");
    }
};
