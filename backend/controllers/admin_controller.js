const Complaint = require("../models/Complaint");
const User = require("../models/User");

//Get All Users
const getallUsers = async (req,res) =>{
    try{
        const users = await User.find();

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//Get All Complaint
const getAllComplaints = async(req,res) =>{
    try{
        const complaint = await Complaint.find();

         res.status(200).json(complaints);
    } catch (error) {
        res.status(500).json({message: error.message});
    } 
        
};



//Update Complaint Status
const updateComplaintStatus = async(req,res) =>{
    try{
        const complaint = await Complaint.findByAndUpdate(
            req.params.id,
            { status: req.body.status },
            {new: true}
        );

        if (!complaint) {
            return res.status(404).json({
                message: "Complaint Not Found",
            });
        }

        res.status(200).json({
            messgae: "Complaint Status Update Successfully",
            complaint
        });

    }
};

//Delete User 
const deleteUser = async(req,res) =>{
    try{
        const user = await 
        User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({
        message: "User Not Found",
    });

    } 
    res.status(200).json({
        message: "User Deleted Successfully",
    });
} catch (error) {
    res.status(500).json({message: error.messge});
}
};

module.exports = {
    getAllUsers,
    getAllComplaints,
    updateComplaintStatus,
    deleteUser,
};
