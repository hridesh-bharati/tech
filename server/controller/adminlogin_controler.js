import Adminlogin from "../model/admin_model.js";
const admin_controler = async (req, res) => {
  try {
    const { adminid, adminname, adminemail, adminpassword } = req.body;
    const admin_login_data = new Adminlogin({
      adminid,
      adminname,
      adminemail,
      adminpassword,
    });
    const savedLogin = await admin_login_data.save();
    res.status(201).json(savedLogin);
  } catch (error) {
    console.log("Failed to login" + error);
  }
};
const admin_find_data = async (req, res) => {
  try {
    const admin_loged_data = await Adminlogin.find();
    res.status(200).json(admin_loged_data);
  } catch (error) {
    console.log("Failed to find admin login", error);
  }
};
const admin_deleted = async (req, res) => {
  try {
    const { id } = req.params;
    const del_admin = await Adminlogin.findByIdAndDelete(id);
    if (!del_admin) {
      res.status(404).json({ message: "Admin not found" });
    }
    res.status(200).json({ message: "ADMIN DELETE" });
  } catch (error) {
    console.log("Failed to delete", error);
    res.status(500).json({ message: "Enternal server error/Not Delete" });
  }
};
const admin_update = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const admin_update = await Adminlogin.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!admin_update) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.status(200).json({ message: "Admin updated successfully",admin_update });
  } catch (error) {
    console.log("Failed to update");
    res.status(500).json({ message: "Enternal server error", error });
  }
};
export { admin_controler, admin_find_data, admin_deleted, admin_update };
