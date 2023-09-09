import { Router } from "express";
import userController from "../controllers/userController.js"
let router = Router();
const initWebRouter = (app) => {
    router.get("/getuser", userController.getUser)
}
export default initWebRouter;