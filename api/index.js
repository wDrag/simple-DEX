import express from "express";
import Moralis from "moralis";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index.js";

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

Moralis.start({
  apiKey: process.env.MORALIS_API_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
