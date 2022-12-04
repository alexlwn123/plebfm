import { NextApiRequest, NextApiResponse } from 'next';
import querystring from 'querystring';
import connectDB from '../../middleware/mongodb';
import Customers, { Customer } from '../../models/Customer';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Gets list of customers
  const queries = req.query;
  const customers: Customer[] = await Customers.find(queries || {});
  if (req.method === 'GET') {
    // return res.status(200).json({success: true, customers: customers});
    if (customers[0])
    return res.status(200).send({success: true, customers: customers});
  // Adds new customer
  } else if (req.method === 'POST') {
    const { customerName, shortName, refreshToken } = JSON.parse(req.body);
    if (!customerName) return res.status(400).json({error: `customerName must be present`});
    if (!shortName) return res.status(400).json({error: `shortName must be present`});
    if (!refreshToken) return res.status(400).json({error: `refreshToken must be present`});
    const customer: Customer = {
      customerName: customerName,
      shortName: shortName,
      spotifyRefreshToken: refreshToken
    }
    const findRes = await customers.find(x => x.spotifyRefreshToken === refreshToken);

    if (findRes)  {
      return res.status(400).json({success: false, error: `customer already exists`});
    }

    const result = await Customers.create(customer).catch(e => {
      console.error('Failed to create customer', e);
    });
    await res.status(200).json({success: true, customer: result});
  }
}

export default connectDB(handler);
