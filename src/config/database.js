import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

const { MONGO_URI, TEST_MONGO_URI, NODE_ENV } = process.env

const CONNECT_DB = NODE_ENV === 'test'
  ? TEST_MONGO_URI
  : MONGO_URI

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(CONNECT_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log(`Mongo is connect in ${url}`);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
