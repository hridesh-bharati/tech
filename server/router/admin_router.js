import express from "express";
import {
  admin_controler,
  admin_deleted,
  admin_find_data,
  admin_update,
} from "../controller/adminlogin_controler.js";

const adminrouter = express.Router();

adminrouter.get("/", (req, res) => {
  res.send("Admon Login Router");
});

adminrouter.post("/admin/register", admin_controler);
adminrouter.get("/admin/getdata", admin_find_data);
adminrouter.delete("/admin/deleteadmin/:id", admin_deleted);
adminrouter.put("/admin/update/:id",admin_update)
export default adminrouter;
