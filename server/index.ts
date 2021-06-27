import express, { Application, Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
config();

const app: Application = express();
app.use(cors());
app.use(express.json());
const PORT: number | string = process.env.PORT || 5000;

app.get("/api", async (req: Request, res: Response) => {});

app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "page does not exist" });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
