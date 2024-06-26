import formSchemeService from "../services/form-scheme-service";
import asyncErrorHandler from "../utils/async-error-handler";

class FormSchemeController {
  findAll = asyncErrorHandler(async (req, res) => {
    const formSchemes = await formSchemeService.findAll();
    res.status(200).json({
      formSchemes,
    });
  });

  save = asyncErrorHandler(async (req, res) => {
    const formScheme = await formSchemeService.save(req.body);
    res.status(200).json({ formScheme });
  });

  findById = asyncErrorHandler(async (req, res) => {
    const { id } = req.params;
    const formScheme = await formSchemeService.findById(id);

    res.status(200).json({
      formScheme,
    });
  });
}

const formSchemeController = new FormSchemeController();

export default formSchemeController;
