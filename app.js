require('dotenv').config();
//*async errors

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const productsRouter = require('./routes/products-routes');

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

//* middleware
app.use(express.json());

//* Routes

app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a hreef="/api/v1/products">Products Route</a>');
});

app.use('/api/v1/products', productsRouter);

//* products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //* ConnectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
