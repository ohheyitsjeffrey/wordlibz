import { WikipediaPageJSON, WikipediaQueryJSON } from 'types/Wikipedia';

/**
 * Returns a random cached article query from above
 */
export const createMockArticleQuery = (): WikipediaQueryJSON => {
  return {
    batchcomplete: '',
    continue: {
      grncontinue: '0.479340719817|0.479340972375|32460472|0',
      continue: 'grncontinue||'
    },
    query: {
      pages: {
        '2727573': {
          pageid: 2727573,
          ns: 0,
          title: 'Dairy Farmers of Britain',
          extract:
            'Dairy Farmers of Britain (DFoB) was a UK co-operative milk processor that bought milk directly from farmers and had several factories producing milk and cheese products for sale in various regions throughout the UK. The company was formed as a raw milk trading business (milk broker) in 2002 with the merger of The Milk Group and Zenith Milk.In 2004, DFoB became the third largest milk processor in the UK, processing over 1.35 billion litres of milk each year into 600 different dairy products, by purchasing Tyneside-based Associated Co-operative Creameries for £75 million from the Co-operative Group.Dairy Farmers of Britain went into receivership on 3 June 2009. Its farmer members lost significant sums of money, but a number have at least managed to find alternative customers for their milk.'
        }
      }
    }
  };
};

export const createMockArticle = (): WikipediaPageJSON => {
  return {
    pageid: 2727573,
    ns: 0,
    title: 'Dairy Farmers of Britain',
    extract:
      'Dairy Farmers of Britain (DFoB) was a UK co-operative milk processor that bought milk directly from farmers and had several factories producing milk and cheese products for sale in various regions throughout the UK. The company was formed as a raw milk trading business (milk broker) in 2002 with the merger of The Milk Group and Zenith Milk.In 2004, DFoB became the third largest milk processor in the UK, processing over 1.35 billion litres of milk each year into 600 different dairy products, by purchasing Tyneside-based Associated Co-operative Creameries for £75 million from the Co-operative Group.Dairy Farmers of Britain went into receivership on 3 June 2009. Its farmer members lost significant sums of money, but a number have at least managed to find alternative customers for their milk.'
  }
}
