import request from "supertest";
import createServer from "../src/createServer";
import { WELCOME_TEXT } from "../src/constants";

const app = createServer();
describe("Server is Running", () => {
  it("Should create an express Server without errors", (done) => {
    request(app).get("/").expect(200, done);
  });
  it("Should return rest api welcome text", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .then((res) => {
        expect(res.text).toBe(WELCOME_TEXT);
        done();
      });
  });
});
