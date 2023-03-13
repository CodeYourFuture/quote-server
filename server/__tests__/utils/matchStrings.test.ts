import matchStrings from "../../src/utils/matchStrings";

describe("matchStrings function", () => {
    it("should return true if two strings are equal", () => {
      expect(matchStrings("test", "test")).toBe(true);
    });
    it("should return true if there are matching strings", () => {
        expect(matchStrings("test", "abc test asd")).toBe(true);
    });
    it("should return true if there are multiple matching strings", () => {
        expect(matchStrings("test", "abc tesst asd", "test, hello there")).toBe(true);
    })
    it("should return false if there are no matching strings", () => {
        expect(matchStrings("test", "abc tesst asd")).toBe(false);
    })
});