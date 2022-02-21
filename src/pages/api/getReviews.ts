// import NextCors from 'nextjs-cors';
import Cors from 'cors';
import axios from 'axios';
import runMiddleware from '../../../utils/middleware';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'POST', 'HEAD'],
});

const yelpReviews =
  'https://www.yelp.com/biz/TJwlpHYs_n7FyoTK3jN5-A/review_feed?rl=en&q=&sort_by=rating_desc&start=0';

async function handler(req: any, res: any) {
  // Run the middleware
  await runMiddleware(req, res, cors);
  try {
    const response = await axios.get(yelpReviews);
    res.send(response.data);
  } catch (error: any) {
    return res.status(error.status || 500).end(error.message);
  }
}

export default handler;
