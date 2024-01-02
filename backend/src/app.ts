import express from "express"
import morgan from "morgan";
import cors from "cors"
import path from "path";
import { PORT } from "./config";
import { router } from "./routes/car.router";

const app = express();

app.use(morgan("dev"));
app.use(cors())
app.use(express.json());
app.use("/api", router)
app.use(express.static(path.join(__dirname, "../..", "client", "dist")));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));