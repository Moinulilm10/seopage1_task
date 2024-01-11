const { Schema, model } = require("mongoose");

const fileModel = new Schema(
  {
    fileNames: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true, collection: "files" }
);

const File = model("File", fileModel);

module.exports = File;
