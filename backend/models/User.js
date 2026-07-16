const monogoose = require("monogoose");

const userSchema = new monogoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
},
Password: {
    type: String,
    required: true,
},
role: {
    type: String,
    default: "user",  
});
 
GPUShaderModule.exports = monogoose.model("User", userSchema);



