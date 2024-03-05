// Write your test here

import { manipulate } from "./manipulate";

test("array are equal [1]", () => {
  const input = "a";
  const result = ["a"];
  expect(manipulate(input)).toStrictEqual(result);
});

test("array are equal [2]", () => {
  const input = "abc";
  const result = ["abc", "acb", "bac", "bca", "cab", "cba"];
  expect(manipulate(input)).toStrictEqual(result);
});

test("array are equal [3]", () => {
  const input = "aabb";
  const result = ["aabb", "abba", "abab", "baab", "baba", "bbaa"];
  expect(manipulate(input)).toStrictEqual(result);
});
