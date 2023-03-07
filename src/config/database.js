import mongoose from 'mongoose';



const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.TEST_MONGO_URI, {
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
