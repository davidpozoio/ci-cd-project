import app from "./app";
import sequelize from "./config/sequelize";

sequelize
  .authenticate()
  .then(async () => {
    await sequelize.sync();
    console.log("database connected!");

    app.listen(8000, () => {
      console.log("the server has started");
    });
  })
  .catch(() => {
    console.log("there was an error to connect");
  });
