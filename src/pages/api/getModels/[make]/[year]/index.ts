// import NextCors from 'nextjs-cors';
import Cors from 'cors';
import axios from 'axios';
// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'POST', 'HEAD'],
});
import runMiddleware from '../../../../../../utils/middleware';

//  need to set up environments to pass in the variable url string
const carDatabaseURL =
  'https://carrectly-admin-staging.herokuapp.com/api/cars/';

async function handler(req: any, res: any) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  try {
    const response = await axios.get(
      `${carDatabaseURL}getModels/${req.query.make}/${req.query.year}`
    );

    res.send(response.data);
  } catch (error: any) {
    return res.status(error.status || 500).end(error.message);
  }
}

export default handler;
