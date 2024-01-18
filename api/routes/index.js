import getTokenPrice from "./getTokenPrice.js";

const routes = (app) => {
  app.get("/getTokenPrice", getTokenPrice);
};

export default routes;
