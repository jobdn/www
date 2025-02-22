import { isEmpty } from ".";

describe("when given an empty list", () => {
  it("should return `true`", () => {
    expect(isEmpty([])).toEqual(true);
  });
});

describe("when given an empty object", () => {
  it("should return `true`", () => {
    expect(isEmpty({})).toEqual(true);
  });
});

describe("when given a non-empty collection", () => {
  const collections = [[1, 2, 3], { a: 42 }];
  const each = it.each<SomeCollection>(collections);

  each("should return `false` for %p", (collection) => {
    expect(isEmpty(collection)).toEqual(false);
  });
});

describe("when given not a collection", () => {
  it("should throw an error", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const call = () => isEmpty(42 as any);
    expect(call).toThrowErrorMatchingInlineSnapshot(`"Collection must be a list or an object."`);
  });
});
