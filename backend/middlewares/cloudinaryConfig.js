import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export default cloudinary;

// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + file.originalname);
//   },
//   limits: { fileSize: 500000 }, // 500kb
// });

// const upload = multer({ storage: storage });

// export default upload;
