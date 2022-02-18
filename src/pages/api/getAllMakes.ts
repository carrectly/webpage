// import NextCors from 'nextjs-cors';
import Cors from 'cors';
import axios from 'axios';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'POST', 'HEAD'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req: any, res: any, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

async function handler(req: any, res: any) {
  // Run the middleware
  await runMiddleware(req, res, cors);
  try {
    const response = await axios.get(
      'https://carrectly-admin-staging.herokuapp.com/api/cars/getAllMakes'
    );
    res.send(response.data);
  } catch (error: any) {
    return res.status(error.status || 500).end(error.message);
  }
}

export default handler;
