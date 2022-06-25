import { WikipediaQueryJSON, WikipediaPageJSON } from "types/Wikipedia";

/**
 * Extracts the first article from the query
 */
export const extractFirstArticle = (queryResponse: WikipediaQueryJSON): WikipediaPageJSON | null => {
  const pages = queryResponse && queryResponse.query && queryResponse.query.pages ? queryResponse.query.pages : null;
  const pageKeys = pages ? Object.keys(pages) : null;  

  if( pages && pageKeys && pageKeys.length > 0 ) {
    const firstKey = pageKeys[0];
    return pages[firstKey];
  }
  
  return null;
}