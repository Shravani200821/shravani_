const express = require("express");
const Router = express.Router()

const {
    createComplaint,
    getAllComplaints,
    getComplaintById,
    updateComplaint,
    deleteComplaint,
} = require("../controllers/complaint_controller");

//Create Complaint
Router.post("/",createComplaint);

//Get All Complaint
Router.get("/",getAllComplaints);

//Get Complaint BY ID 
Router.get("/:id",getComplaintById);

//Update Complaint
Router.put("/:id",updateComplaint);

//Delete Complaint
Router.delete("/:id",deleteComplaint)

module.exports = Router;