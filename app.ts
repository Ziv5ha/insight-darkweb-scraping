import express from 'express';
import cors from 'cors';
import getPestes from './routers/getAll';
const app = express();

app.use(cors());
app.use('/getPestes', getPestes);

app.listen(3000, () => {
  console.log('lestening on port 3000');
});