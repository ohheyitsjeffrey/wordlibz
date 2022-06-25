import { WikipediaQueryJSON } from 'types/Wikipedia';
import { extractFirstArticle } from './extractFirstArticle';
import { createMockArticleQuery } from './utilTestHelpers';

it('returns one article if one article is present', () => {
  const query = createMockArticleQuery();
  const article = extractFirstArticle(query);

  expect(article).toBeDefined();
  expect(article).toHaveProperty("pageid");
  expect(article).toHaveProperty("title");
  expect(article).toHaveProperty("extract");
});

it('returns null if no article is present', () => {
  const nullQuery = null as unknown as WikipediaQueryJSON
  const result = extractFirstArticle(nullQuery);
  expect(result).toBe(null);
});

it('returns null if no query is present', () => {
  const nullQuery = null as unknown as WikipediaQueryJSON
  const result = extractFirstArticle(nullQuery);
  expect(result).toBe(null);
});
