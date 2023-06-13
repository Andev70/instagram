export const testFile = async (req, res) => {
  try {
    res.status(200).json({ msg: "success" });
    console.log(req.body);
    console.log(req.files);
  } catch (e) {
    console.log(e);
  }
};

export const testVim = async (req, res) => {
  try {
    res.status(200).json({ msg: "new message success" });
    console.log(req.body);
  } catch (e) {
    res.status(500).json({ message: "server failed to response" });
    console.log(e);
  }
};
