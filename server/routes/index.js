import moduleRouter from "./moduleRoutes.js";
import userRouter from "./userRoutes.js";
import cardRouter from "./cardsRoutes.js";

const routes = (app) => {
  app.use("/module", moduleRouter);
  app.use("/user", userRouter);
  app.use("/cards", cardRouter);
};
export default routes;
