export const testFile = async (req, res) => {
  try {
    res.status(200).json({ msg: "success" });
    console.log(req.body);
    console.log(req.files);
  } catch (e) {
    console.log(e);
  }
};
