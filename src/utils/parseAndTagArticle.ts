import { WikipediaPageJSON } from "types/Wikipedia";
import  posTagger from  'wink-pos-tagger';
import tokenizer from 'wink-tokenizer';


/**
 * Takes wikipedia article JSON and returns an array of tagged words from wink POS
 * 
 */
export const parseAndTagArticle = (article: WikipediaPageJSON ) => {
  const winkTagger = new posTagger();
  const winkTokenizer = new tokenizer();
  const articleTokens =  winkTokenizer.tokenize(article.extract);
  return winkTagger.tag(articleTokens);
}