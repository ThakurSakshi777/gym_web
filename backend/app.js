import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import { sendEmail } from './utils/sendEmail.js';

config({ path: './config.env' });

const app = express();
const router = express.Router();



// console.log('Environment Variables:', process.env.PORT);

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['GET','POST'],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.post("/send/mail" , async (req , res , next)=>{
 const { name ,email , message} = req.body;
 if ( !name || !email || !message) {
    return next (
        res.status(400).json ({
        success: false ,
        message: "please proivide all details"
    })
    );
  }
  try {
    await  sendEmail({
      email: "thakursakshisingh8318@gmail.com",
      subject: "GYM_WEB cONTACT",
      message,
      userEmail: email,
    });
    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    })
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to send email",
      
    });
    
  }
 
});

app.use(router);
 
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});