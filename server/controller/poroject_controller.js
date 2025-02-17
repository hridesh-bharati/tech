import Project from "../model/project.model.js"; // Ensure the path is correct

// Controller to handle project creation
const projectController = async (req, res) => {
  try {
    const { project_name, description, thumbnail, demoLink, githubLink } =
      req.body;
    if (
      !project_name ||
      !description ||
      !thumbnail ||
      !demoLink ||
      !githubLink
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newProject = new Project({
      project_name,
      description,
      thumbnail,
      demoLink,
      githubLink,
    });
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    console.error("Project error:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// Controller to get all projects
const getProject = async (req, res) => {
  try {
    const projectsData = await Project.find();
    res.status(200).json(projectsData);
  } catch (error) {
    console.log("Can't find project data:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// Named exports for both controllers
export { projectController, getProject };
