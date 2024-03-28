import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {        // *TODO*
      cb(null, file.originalname)               // Unique Filename Implementation
    }
  })
  
export const upload = multer({ 
    storage
})