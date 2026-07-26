const express = require("express");
const Router = express.Router()

const {
    createComplaint,
    getAllComplaints,
    getComplaintById,
    updateComplaint,deleteComplaint,
} = require("../controllers/complaint_controller");

Router.post("/",createComplaint);
Router.get("/",getAllComplaints);
Router.get("/:id",getComplaintById);
Router.put("/:id",updateComplaint);
Router.delete("/:id",deleteComplaint);

module.exports = Router;