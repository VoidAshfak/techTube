import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { varifyJWT } from "../middleware/auth.middleware.js";
import { 
    loginUser, 
    logoutUser, 
    registerUser, 
    refreshAccessToken, 
    changeCurrentPassword, 
    getCurrentUser,
    updateAccountDetails,
    updateUserAvatar,
    updateUserCoverImage,
    getUserChannelProfile,
    getWatchHistory
} from "../controllers/user.controller.js";

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),    
    registerUser
)

router.route("/login").post(loginUser)

// secured routes
router.route("/logout").post(varifyJWT, logoutUser)

router.route("/refresh-token").post(refreshAccessToken)

router.route("/change-password").post(varifyJWT, changeCurrentPassword)

router.route("/current-user").get(varifyJWT, getCurrentUser)

router.route("/update-account-details").patch(varifyJWT, updateAccountDetails)

router.route("/avatar").patch(varifyJWT, upload.single("avatar"), updateUserAvatar)

router.route("/cover-image").patch(varifyJWT, upload.single("coverImage"), updateUserCoverImage)

router.route("/c/:username").get(varifyJWT, getUserChannelProfile)

router.route("/history").get(varifyJWT, getWatchHistory)


export default router