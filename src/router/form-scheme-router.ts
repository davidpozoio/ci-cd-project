import { Router } from "express";
import formSchemeController from "../controller/form-scheme-controller";
import { body, param } from "express-validator";
import InvalidUUID from "../errors/invalid-uuid-exception";
import customErrorValidator from "../utils/add-custom-error-validator";

const formSchemeRouter = Router();

formSchemeRouter.route("/").get(formSchemeController.findAll);
formSchemeRouter
  .route("/:id")
  .get(
    [param("id").isUUID().withMessage("id must be a valid UUID")],
    customErrorValidator(InvalidUUID, "the provided id is invalid"),
    formSchemeController.findById
  );

formSchemeRouter
  .route("/")
  .post(
    body("label").isString().withMessage("label is required"),
    formSchemeController.save
  );

export default formSchemeRouter;
