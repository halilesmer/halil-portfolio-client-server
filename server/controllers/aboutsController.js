import AboutsModel from "../models/aboutsModel.js";

const getAbouts = async (req, res) => {
  console.log("req.body: getAllAbouts", req.body);
  try {
    const response = await AboutsModel.find();
    res.status(200).json(response);
    console.log("Getting 'abouts' succeed!");
  } catch (error) {
    console.log("error, getting 'abouts' failed: ", error);
    res.status(400).json({
      msg: "getting 'abouts' failed:",
      error: error,
    });
  }
};
export { getAbouts };
