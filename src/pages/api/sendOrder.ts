// import NextCors from 'nextjs-cors';
import axios from 'axios';
import Cors from 'cors';
import runMiddleware from '../../../utils/middleware';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'POST', 'HEAD'],
});

async function handler(req: any, res: any) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  try {
    const data = await axios.post(
      'https://carrectly-admin-staging.herokuapp.com/wpbookings/neworder',
      {
        param: req.body,
      }
    );
    res.status(200).send(data.statusText);
  } catch (error: any) {
    return res.status(error.status || 500).end(error.message);
  }
}

export default handler;
