import express from "express";
import userRouter from "./router/user-router";
import ENV from "./consts/env";
import globalErrorController from "./controller/global-error-controller";
import formSchemeRouter from "./router/form-scheme-router";
import formGroupRouter from "./router/form-group-router";

const app = express();

app.use(express.json());

app.get(`${ENV.API_PREFIX}/health`, async (req, res) => {
  res.status(200).json({
    message: "health",
  });
});

app.use(`${ENV.API_PREFIX}/users`, userRouter);
app.use(`${ENV.API_PREFIX}/form-schemes`, formSchemeRouter);
app.use(`${ENV.API_PREFIX}/form-groups`, formGroupRouter);

app.use(globalErrorController);

app.use("*", async (req, res) => {
  res.status(404).json({
    message: "route not found",
  });
});

export default app;
