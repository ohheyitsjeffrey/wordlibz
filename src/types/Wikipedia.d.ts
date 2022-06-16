/**
 * Return type for querying the wikipedia API
 * 
 */
export type WikipediaQueryJSON = {
  batchcomplete: string;
  continue: {
    grncontinue: string;
    continue: string;
  },
  query: {
    pages: {
      [key: string]: WikipediaPageJSON
    }
  }
};

/**
 * Wikipedia page info nested in query results
 * 
 * @property {number} pageid  - The id of the article page we just received 
 * @property { number } ns - Wikipedia namespace
 * @property { string } title - The title of the article 
 * @property { string } extract - The abstract of the article we will be libbing   
 */
export type WikipediaPageJSON = {
  pageid: number;
  ns: number;
  title: string;
  extract: string;
}