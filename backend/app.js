import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';

const app = express();
const router = express.Router();

config({ path: './config.env' });

// console.log('Environment Variables:', process.env.PORT);

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['GET'],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get('/', (req, res ,next) => {
    res.json({ success:true , message: "hello network"});
}) ;

app.use(router);
 
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});