import express, { Application, Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
import path from "path";
config();

const app: Application = express();
app.use(cors());
app.use(express.json());
const PORT: number | string = process.env.PORT || 5000;

app.get("/terminal", async (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "/data", "terminal.json"));
});

app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "page does not exist" });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
