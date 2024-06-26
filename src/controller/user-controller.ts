import asyncErrorHandler from "../utils/async-error-handler";

class UserController {
  findAll = asyncErrorHandler(async (req, res) => {
    res.status(200).json({
      users: [],
    });
  });
}

const userController = new UserController();

export default userController;
