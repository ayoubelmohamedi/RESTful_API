import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import * as dotenv from "dotenv";

dotenv.config();


const app: Application = express();

// if you want anyone to be able to connect
//app.use(cors({ origin: true }))
app.use(cors({ origin: "<http://localhost:3000>" }))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Healthy");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
