import express from "express";
import { commonHello } from "@food-waste/common";

export const app = express();

app.get("/", function (req, res) {
  res.send(commonHello());
});
