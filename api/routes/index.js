import getTokenPrice from "./getTokenPrice.js";

const routes = (app) => {
  app.get("/api/getTokenPrice", getTokenPrice);
};

export default routes;
