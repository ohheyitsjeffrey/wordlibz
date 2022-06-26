import { isJSDocTypedefTag, isTaggedTemplateExpression } from "typescript";
import { parseAndTagArticle } from "./parseAndTagArticle";
import { createMockArticle } from "./utilTestHelpers"

it('Returns an array of tags when passed an article', () => {
  const article = createMockArticle();
  const parsed = parseAndTagArticle(article)
  
  expect(Array.isArray(parsed)).toBe(true)

  const firstTag = parsed[0];

  expect(firstTag).toHaveProperty("value")
  expect(firstTag).toHaveProperty("tag")
  expect(firstTag).toHaveProperty("pos")
});