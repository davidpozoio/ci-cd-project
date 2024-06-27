import formSchemeService from "../services/form-scheme-service";
import { FormScheme } from "../types/form-scheme";
import asyncErrorHandler from "../utils/async-error-handler";
import { Where, WhereOperators } from "../respository/respository";

class FormSchemeController {
  findAll = asyncErrorHandler(async (req, res) => {
    const { label } = req.query;
    const options: Where<FormScheme> = {};

    if (label !== undefined) {
      options.label = {
        [WhereOperators.search]: {
          value: `${label}`,
        },
        [WhereOperators.like]: {
          value: `%${label}%`,
        },
      };
    }

    const formSchemes = await formSchemeService.findAll(options);

    res.status(200).json({
      total: formSchemes.length,
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
