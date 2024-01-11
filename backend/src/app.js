const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const multer = require("multer");

const cors = require("cors");
const {
  errorResponse,
  successResponse,
} = require("./controllers/responseController");
const File = require("./models/fileModel");
const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/files");
  },
  filename: function (req, file, cb) {
    // Create a unique filename for each file using originalname and a timestamp
    const uniqueFileName = `${Date.now()}_${file.originalname}`;
    cb(null, uniqueFileName);
  },
});

const upload = multer({ storage }).any();

// middleware
const corsOptions = {
  origin: "https://seopage1-task-front-end.onrender.com", // frontend URI (ReactJS)
}

app.use(cors(corsOptions));
// app.use(rateLimiter);
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Router
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post("/api/user/upload", upload, async (req, res, next) => {
  try {
    const files = req.files || []; // Access uploaded files directly from req.files

    const fileSave = new File({
      fileNames: files.map((file) => file.filename), // Extract filenames from req.files
    });

    await fileSave.save();

    return successResponse(res, {
      statusCode: 200,
      message: "File uploaded successfully",
      payload: {
        fileSave,
      },
    });
  } catch (err) {
    next(err);
  }
});

// file name and count get
app.get("/api/user/fileName", async (req, res, next) => {
  try {
    const fileNamesData = await File.find({}, "fileNames");
    const fileNames = fileNamesData.map((file) => file.fileNames).flat();
    return res.status(200).json({
      statusCode: 200,
      message: "File names fetched successfully",
      payload: {
        fileNames,
      },
    });
  } catch (err) {
    next(err);
  }
});

// Client error handling
app.use((req, res, next) => {
  next(createError(404, "route not found!"));
});

// Server error handling
app.use((err, req, res, next) => {
  return errorResponse(res, {
    statusCode: err.status,
    message: err.message,
  });
});

module.exports = app;
