import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get(
      `${process.env.CARRECTLY_ADMIN_URL}/api/cars/getAllMakes`
    );
    res.send(response.data);
  } catch (error: any) {
    return res.status(error.status || 500).end(error.message);
  }
}
