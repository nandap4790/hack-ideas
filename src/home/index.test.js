import { sortByUpvote } from "./index";

test("sorts the challenges based on highest upvotes", () => {
  const expected = [5, 4, 3, 2, 1];
  const actual = sortByUpvote([5, 1, 2, 4, 3])
  expect(actual).toStrictEqual(expected);
})