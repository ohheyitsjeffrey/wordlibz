/**
 * Returns a promise which resolves to random article summary from Wikipedia in JSON format.  The url for 
 * the request is baked in, so it requires no parameters.
 * 
 * @async
 * @param none
 */
export const getRandomArticle = async ()  => {

    // gives us a random summary from wikipedia.
    const url = 'https://en.wikipedia.org/api/rest_v1/page/random/summary'

    const article = await fetch(url);

    return article.json();
}

