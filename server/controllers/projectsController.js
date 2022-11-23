import projectsModel from "../models/projectsModel.js";

const getProjects = async (req, res) => {
  console.log("req.body: getAllProjects", req.body);
  try {
    const response = await projectsModel.find();
    res.status(200).json(response);
    console.log("Getting 'projects' succeed!");
  } catch (error) {
    console.log("error, getting 'projects' failed: ", error);
    res.status(400).json({
      msg: "getting 'projects' failed:",
      error: error,
    });
  }
};
export { getProjects };
