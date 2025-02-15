import express from "express";
import {projectController,getProject} from "../controller/poroject_controller.js";
 
const projectRouter = express.Router();

projectRouter.post("/allprojects", projectController);
projectRouter.get("/getallprojects",getProject );




export default projectRouter;