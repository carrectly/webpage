// import NextCors from 'nextjs-cors';
import axios from 'axios';
// export default async function handler(req, res) {
//   // Run the cors middleware
//   // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
//   await NextCors(req, res, {
//     // Options
//     methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
//     origin: '*',
//     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
//   });
//   console.log('here is the request', req);
//   await axios.post('http://localhost:1337/wpbookings/neworder', req.body);
//   // Rest of the API logic
//   res.json({ message: 'Hello NextJs Cors!' });
// }

import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
  methods: ['POST', 'HEAD'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  try {
    console.log('sending order', req.body);
    // const data = await axios.post('http://localhost:1337/wpbookings/neworder', {
    //   param: req.body,
    // });
    const data = await axios.post(
      'https://carrectly-admin-staging.herokuapp.com/wpbookings/neworder',
      {
        param: req.body,
      }
    );
    console.log('data from server', data);
    res.status(200).send(data.statusText);
  } catch (error: any) {
    return res.status(error.status || 500).end(error.message);
  }
}

export default handler;
