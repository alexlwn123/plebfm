import mongoose, { Schema } from 'mongoose';

export type Customer = {
  customerName: string, 
  shortName: string, // slug
  spotifyRefreshToken: string
}
const CustomerSchema = new Schema<Customer>({
  customerName: {
    type: String, // slug
    unique: false,
    required: true,
  },
  shortName: {
    type: String, // slug
    unique: true,
    required: true,
  },
  spotifyRefreshToken: {
    type: String,
    required: true
  }
})

const Customers = mongoose.models.Customers || mongoose.model('Customers', CustomerSchema);
export default Customers;
