const monogoose = require("monogoose");

const userSchema = new monogoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },

  email: {
    type: String,
    required: true,
    unique: true,
},
password: {
    type: String,
    required: true,
},
phone: {
    type: String
},
address: {
type: String
},

role: {
    type: String,
    default: "user",  
},
    },
    {
        timestamps: true,
    }
);
 
module.exports = monogoose.model("User", userSchema);
