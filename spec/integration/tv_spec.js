const request = require("request");
const server = require("../../server");
const base = "http://localhost:5000";
let id;



describe("GET /api/tv", () => {
  it("should return status code 200", (done) => {
    let uri = "/api/tv/"
    request.get(base+uri, (err, res, body) => {
      id = JSON.parse(res.body)[0].id;
      expect(res.statusCode).toBe(200);
      done();
    });
  });
  it("should search", (done) => {
    let uri = "/api/tv/search/";
    request.get(base + uri, (err, res, body) => {
      expect(JSON.parse(res.body).search).toBe("What would you like to look for?");
      done();
    });
  });
  it("should return details", (done) => {
    let uri = `/api/tv/details/${id}`;
    request.get(base + uri, (err, res, body) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });
});