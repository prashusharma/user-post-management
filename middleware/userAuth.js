const User = require("../Model/userModel")
const jwt = require("jsonwebtoken")
const userAuth = async (req, res, next) => {
    const verify = jwt.verify(req.cookies.id, "thisIsSecretKey");
    if (!verify.id) {
        res.status(400).json("Login to Continue")
        return;
    }
    try {
        const user = await User.findById(verify.id)
        if (!user) {
            res.status(400).json("Login to Continue")
            return;
        }
    } catch (error) {
        res.status(400).json("Login to Continue")
        return;
    }
    req.id = verify.id;
    next()
    
}

module.exports = userAuth