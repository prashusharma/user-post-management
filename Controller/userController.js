const User = require("../Model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const userController = {
    login : async (req, res) => {
        // console.log(req.body);
        try {
            const user = await User.findOne({email: req.body.email})
            if(!user){
                res.status(400).json({"message": "Enter Correct Credentials"})
            }
            else{
                if(!(await bcrypt.compare(req.body.password, user.password))){
                    res.status(400).json({"message": "Enter Correct Credentials"})
                }
                else{
                    const token = await jwt.sign({"id":user._id}, "thisIsSecretKey")
                    res.cookie("id", token);
                    res.status(200).json(`Login Success.. your user id is ${user._id} and token is ${token}`);
                }
               
            }

        } catch (error) {
            res.status(400).json({"message": "Error in logging try again later"})
        }
    },

    create : async (req, res) => {
        // console.log(req.body);
        try {
            const user = await  User.create({
                name : req.body.name,
                email : req.body.email,
                mobile : req.body.mobile,
                password : req.body.password
            })
            res.json({"message":"User Created successfully"})
        } catch (error) {
            if(error.code == 11000){
                res.json({"message":"User already registered"})
            }
            // console.log(error);
        }
       
    },
    
    update : async (req, res)=>{
        const id = req.body.id;
        try {
            await User.findByIdAndUpdate(id, req.body);
            res.json({"message": "User Updated Successfully"})
        } catch (error) {
            res.json({"message": "Error in updating the user"})
        }
        
    },

    delete : async (req, res)=>{
        const id = req.body.id;
        try {
            await User.findByIdAndDelete(id);
            res.json({"message": "User deleted Successfully"})
        } catch (error) {
            res.json({"message": "Error in deleting the user"})
        }
        
    }

}

module.exports = userController;