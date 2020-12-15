const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();
app.use(fileUpload());
// upload endpoint
app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file was uploaded!" });
  }
  const file = req.filex.file;
  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (er) => {
    if (er) {
      console.error(er);
      return res.status(500).send(er);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});
app.listen(5000, () => console.log("Server started..."));
