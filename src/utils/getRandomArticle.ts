import { WikipediaQueryJSON } from "types/Wikipedia";

/**
 * Returns a promise which resolves to random article summary from Wikipedia in JSON format.  The url for 
 * the request is baked in, so it requires no parameters.
 * 
 * @async
 */
export const getRandomArticle = async (): Promise<WikipediaQueryJSON>  => { 
    // gives us a random summary from wikipedia.
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&&origin=*&prop=extracts&list=&generator=random&exintro=1&explaintext=1&exsectionformat=plain&grnnamespace=0`
    const query = await fetch(url);
    return query.json();
}

