import { quotes } from "../../src/constants";
import request from "supertest";
import createServer from "../../src/createServer";

const app = createServer();
describe("Test Resolver for /api/v1/quotes", () => {
  it("should return quotes without errors", (done) => {
    request(app).get("/api/v1/quotes").expect(200, done);
  });
  it("should return all quotes", (done) => {
    request(app)
      .get("/api/v1/quotes")
      .expect(200)
      .then((res) => {
        expect(res.body.length).toBe(quotes.length);
        done();
      })
      .catch(done);
  });
  it("should return quotes in the correct format", (done) => {
    request(app)
      .get("/api/v1/quotes")
      .expect(200)
      .then((res) => {
        expect(res.body[0]).toHaveProperty("quote");
        expect(res.body[0]).toHaveProperty("author");
        done();
      })
      .catch(done);
  });
});

describe("Test Resolver for /api/v1/quotes/random", () => {
  it("should return quotes without errors", (done) => {
    request(app).get("/api/v1/quotes/random").expect(200, done);
  });
  it("should return quotes in the correct format", (done) => {
    request(app)
      .get("/api/v1/quotes/random")
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveProperty("quote");
        expect(res.body).toHaveProperty("author");
        done();
      })
      .catch(done);
  });
});

describe("Test Resolver for /api/v1/quotes/search", () => {
  it("should return quotes without errors", (done) => {
    request(app).get("/api/v1/quotes/search?term=a").expect(200, done);
  });

  it("should throw error if 'term' isn't passed", (done) => {
    request(app).get("/api/v1/quotes/search").expect(400, done);
  });

  it("should throw error if quotes aren't found", (done) => {
    request(app)
      .get("/api/v1/quotes/search?term=393939399393")
      .expect(404, done);
  });
});
