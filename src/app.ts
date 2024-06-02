import cors from 'cors';
import express from 'express';
import router from './routes/index.route';

export const app = express();

app.use(cors())
app.use(express.json())
app.use(router)

const PORT = 5000
app.listen(PORT, ()=>{console.log(`Server is running on port ${PORT}`)});
