import { Router } from "express";
import formGroupController from "../controller/form-group-controller";
import { body } from "express-validator";

const formGroupRouter = Router();

formGroupRouter
  .route("/")
  .post(
    [
      body("formSchemeId").isUUID().withMessage("formSchemeId is required"),
      body("label").isString().withMessage("lable is required"),
    ],
    formGroupController.save
  );

export default formGroupRouter;
