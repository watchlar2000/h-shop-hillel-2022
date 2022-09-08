import express from 'express';
// import data from './src/data.js';
import cors from 'cors';
import { prodRouter } from './src/routers/productsRouter.js';

const PORT = 5000;

const app = express();
app.use(cors());

app.use(express.json());

app.use('/api/products', prodRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});

// app.get('/api/products', (req, res) => {
//   res.send(data.products);
// });
