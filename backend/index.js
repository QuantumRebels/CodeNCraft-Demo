import express from "express";
import UserRouter from "./routes/UserRoutes";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],

    optionsSuccessStatus: 200,
  })
);

app.use(express.json());

app.use("/", (req, res) => {
  res.send("App is working!!");
});


app.use('/api',UserRouter)

app.listen(5000, () => console.log("Server is running on port 5000"));
