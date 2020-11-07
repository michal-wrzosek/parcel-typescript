import { exampleFunction } from "./example-module";

describe("example-module", () => {
  describe("exampleFunction", () => {
    it("works", () => {
      expect(exampleFunction()).toBe("working");
    });
  });
});
