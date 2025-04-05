import express, { Request, Response } from "express";
import evaRoutes from "./routes/eva.router";
import cors from "cors";

const app = express();
app.use(cors());

const port = process.env.PORT || 3000; 


app.get("/", (req: Request, res: Response) => {
  res.send("This is the app's API");
});

app.use("/eva", evaRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

