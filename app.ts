import express from 'express';
import cors from 'cors';
import getPestes from './routers/getAll';
import { connectSSE } from './middlewares/SSE';
const app = express();

app.use(cors());
app.use('/', connectSSE, getPestes);

app.listen(8080, () => {
  console.log('lestening on port 8080');
});
