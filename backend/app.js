import express from "express";
import UserRouter from "./routes/UserRoutes";
import connectdb from "./db/db.js";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],

    optionsSuccessStatus: 200,
  })
);

app.use(express.json());

connectdb()

app.get("/", (req, res) => {
  res.send("App is working!!");
});


app.use('/users',UserRouter)

app.listen(5000, () => console.log("Server is running on port 5000"));
