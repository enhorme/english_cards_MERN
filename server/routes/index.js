import moduleRouter from "./moduleRoutes.js";
import userRouter from "./userRoutes.js";

const routes = (app) => {
  app.use("/module", moduleRouter);
  app.use("/user", userRouter);
};
export default routes;
