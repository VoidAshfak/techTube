import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config({ 
  cloud_name: process.env.CLOIDINARY_CLOUD_NAME, 
  api_key: process.env.CLOIDINARY_API_KEY, 
  api_secret: process.env.CLOIDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null

        // UPLOAD FILE ON CLOUDINARY
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        // FILE UPLOAD SUCCESS
        console.log("file uploaded");
        fs.unlinkSync(localFilePath)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) //REMOVES THE LOCALLY SAVED TEMP FILE AS THE UPLOAD OPERATION IS FAILED
        return null;
    }
}

export {uploadOnCloudinary};