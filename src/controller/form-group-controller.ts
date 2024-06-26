import formGroupService from "../services/form-group-service";
import formSchemeService from "../services/form-scheme-service";
import { FormGroup } from "../types/form-group";
import asyncErrorHandler from "../utils/async-error-handler";

class FormGroupController {
  save = asyncErrorHandler(async (req, res) => {
    const body = req.body as FormGroup;

    await formSchemeService.findById(body.formSchemeId as string);
    const formGroup = await formGroupService.save(req.body);
    res.status(200).json({
      formGroup,
    });
  });
}

const formGroupController = new FormGroupController();

export default formGroupController;
