import request from "supertest";
import { app } from "../src/server";

describe("Test server root path", () => {
  test("Server responds to GET request on root", () => {
    return request(app).get("/").expect(200);
  });
});
