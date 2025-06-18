import { merge } from "../src/merge";

describe("merge test", () => {
    it("should merge and sort correctly", () => {
        expect(merge([1 ,3, 5], [7, 4, 2], [6, 8, 9])).toEqual([
            1, 2, 3, 4, 5, 6, 7, 8, 9
        ]);
    });

    it("works with empty arrays", () => {
        expect(merge([], [], [])).toEqual([]);
        expect(merge([1, 2, 3], [], [])).toEqual([1, 2, 3]);
        expect(merge([], [6, 5, 4], [])).toEqual([4, 5, 6]);
        expect(merge([], [], [7, 8, 9])).toEqual([7, 8, 9]);
    });

    it("works with negative numbers", () => {
        expect(merge([-12, -11, -10, -9, -8, -7], [-1, -2, -3, -4, -5, -6,], [0, 1, 2, 3, 4, 5])).toEqual([
            -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5
        ]);
    });

    it("handles duplicates", () => {
        expect(merge([1, 2, 2], [4, 4, 3], [5, 5, 6])).toEqual([
            1, 2, 2, 3, 4, 4, 5, 5, 6
        ]);
    });
});