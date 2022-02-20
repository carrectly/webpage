// import NextCors from 'nextjs-cors';
import Cors from 'cors';
import axios from 'axios';
import runMiddleware from '../../../utils/middleware';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'POST', 'HEAD'],
});

const carDatabaseURL =
  'https://carrectly-admin-staging.herokuapp.com/api/cars/';

async function handler(req: any, res: any) {
  // Run the middleware
  await runMiddleware(req, res, cors);
  try {
    const response = await axios.get(`${carDatabaseURL}getAllMakes`);
    res.send(response.data);
  } catch (error: any) {
    return res.status(error.status || 500).end(error.message);
  }
}

export default handler;
