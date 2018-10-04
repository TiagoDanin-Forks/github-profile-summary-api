const request = require("supertest");

const app = require("../src/app");

describe("Integration tests", () => {
  it("Gets 200 when querying /github/userData/${username}", done => {
    request(app)
      .get("/api/v1/ping")
      .expect(200, done);
  });
});
