import ResumesModel from "../models/resumesModel.js";

const getResumes = async (req, res) => {
  console.log("req.body: getAllResumes", req.body);
  try {
    const response = await ResumesModel.find();
    res.status(200).json(response);
    console.log("Getting 'resumes' succeed!");
  } catch (error) {
    console.log("error, getting 'resumes' failed: ", error);
    res.status(400).json({
      msg: "getting 'resumes' failed:",
      error: error,
    });
  }
};
export { getResumes };
