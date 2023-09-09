import userController from "../controllers/userController.js"

const initWebRouter = (app) => {
    app.get("/getuser", userController.getUser)
}
export default initWebRouter;