const Complaint = require("../models/Complaint");

//Create Complaint
const createComplaint = async(req,res) =>{
    try{
        const complaint = new Complaint(req.body);
        await complaint.save();

        res.status(201).json({
            message: "Complaint Registered Successfully",
            complaint,
        });

    } catch (error){
        res.status(500).json({message: error.message});

    }
};

//Get All Complaint
const getAllComplaints = async(req,res) =>{
    try{
        const complaint = await Complaint.find();

        res.status(200).json(Complaint);
    } catch (error) {
        res.status(500).json({message: error.message});
    }

};

//Get Complaint By Id
const getComplaintById = async(req,res) =>{
    try{
        const complaint = await complaint.findById(req.params.id);

        if(!complaint){
            return res.status(404).json({
                message: "Complaint Not Found",
            });
        }
        res.status(200).json(Complaint);
    } catch(error){
        res.status(500).json({

        });
    }
};

//Update Complaint
const updateComplaint = async(req,res) =>{
    try{
        const complaint = await Complaint.findByandUpdate(
            req.params.id,
            req.body,
            {new: true}
        );

        if (!complaint) {
            return res.status(404).json({
                message: "Complaint Not Found",
            });

        }
        res.status(200).json({
            message: "Complaint Update Successfully",
            complaint
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//Delete Complaint
const deleteComplaint = async (req,res) =>{
    try{
        const complaint = await Complaint.findByAndDelete(req.params.id);
        if(!complaint) {
            return res.status(404).json({
                message:"Complaint Not Found",
            });
        }

        res.ststus(200).json({
            message: "complaint Delelted Successfully",
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }

};

module.exports = {
    createComplaint,
    getAllComplaints,
    getComplaintById,
    updateComplaint,
    deleteComplaint,
};