const User = require("../moduls/User");

//Register User
const registerUser = async (req,res) =>{
    try{
        const user = new User(req.body);
        await user.save();

        res.status(201).json({
            message: "User Registered successfully",
            user
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//Login User 
const loginUser = async(req,res) =>{
    try{
        const {email, password} =req.body;

        const user = await User.findOne({email, password});
        if (!user) {
            return res.status(401).json({message: "Invalid Email or Password",});

        }
        res.status(200).json({massage: "Login Successfully", 
            user,
        });
    } catch (error){
        res.status(500).json({message: error.message});
    }

};

//Get All Users
const getallUsers = async (req,res) =>{
    try{
        const users = await User.find();

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//Get User BY Id
const getUserById = async (req,res) =>{
    try{
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({
                message: "User Not Found",
            });
        }
        res.status(500).json({message: eror.message});
    }
};



        //Update User
        const updateuser = async(req,res) =>{
    try{
        const user = await 
        User.findByIdAndUpdate(req.params.id,req.body{
            new: true,
        });
        res.status(200).json({
            message: "User Updated Successfully",
            user,
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }

 } ;
    


//Delete User 
const deleteUser = async(req,res) =>{
    try{
        const user = await 
        User.findByIdAndDelete(req.params.id);

        
    } 
    res.status(200).json({
        message: "User Deleted Successfully",
    });
} catch (error) {
    res.status(500).json({message: error.messge});
  }




module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
};
