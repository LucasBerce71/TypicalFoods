import express from 'express'; 
import path from 'path'; 
import cors from 'cors';
import 'express-async-errors';

const app = express();

app.use(cors()); 
app.use(express.json()); 

app.listen(3333);