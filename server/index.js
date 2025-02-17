import express from "express";
import cors from "cors"; // Import the cors package
import database from "./database/database.js";
import projectRouter from "./router/project_router.js";
import adminrouter from "./router/admin_router.js";
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/projects", projectRouter);
app.use("/newadmin", adminrouter);
// Connect to the database and start the server
database()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Database connection error:", err);
  });
