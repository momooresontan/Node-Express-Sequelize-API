const express = require('express');
const cors = require('cors');

const productRouter = require('./routes/productRoute');

const app = express();

var corOptions = {
  origin: 'https://localhost:8081',
};

//middleware
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//mount routers
app.use('/api/v1/products', productRouter);

//testing api

app.get('/', (req, res) => {
  res.json({ message: 'hello from api' });
});

//port

const PORT = process.env.PORT || 8080;

//server

app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT}`
  );
});
