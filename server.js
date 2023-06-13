import app from "./app.js";
import dotenv from "dotenv";
import "./config/database.js";

dotenv.config({ path: "./config/config.env" });


app.get("/", (req, res, next) => {
  res.send("<h1>Working</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is working on port ${process.env.PORT}`);
});
