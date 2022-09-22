/**
 * @jest-environment jsdom
 */
import { getArticle } from "./articles";

describe("getArticle", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([{ quotation: "test" }, { quotation: "test2" }]),
    })
  );

  it("should return 2 quotations", async () => {
    const article = await getArticle("objects");
    expect(article).toBe(
      "<blockquote>test</blockquote><blockquote>test2</blockquote>"
    );
  });
});
