import express from "express";
import { commonHello } from "@dsc/common";

const PORT = process.env.PORT ?? 5000;
const app = express();

app.get("/", function (req, res) {
  res.send(commonHello());
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
