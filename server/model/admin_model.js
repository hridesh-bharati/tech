import mongoose from "mongoose";
const Adminloginschema = new mongoose.Schema(
  {
    adminid: {
      type: String,
      require: true,
    },
    adminname: {
      type: String,
      require: true,
    },
    adminemail: {
      type: String,
      require: true,
    },
    adminpassword: {
      type: String,
      require: true,
    }
   
  },
  { timestamps: true }
);

const Adminlogin = mongoose.model("Adminlogin", Adminloginschema);
export default Adminlogin;
