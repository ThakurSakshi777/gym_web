import nodeMailer from "nodemailer";

export const sendEmail = async (options) => {
    const transporter = nodeMailer.createTransport({
         host: process.env.SMTP_HOST,
         port: process.env.SMTP_PORT,
         service: process.env.SMTP_SERVICE,

         auth: {
          user: process.env.SMTP_MAIL,
          pass: process.env.SMTP_PASSWORD,
         },
    });

    const mailOptions = {
       from: process.env.SMTP_MAIL,
       to: options.email,
       subject: options.subject,
       text: `${options.message} \n\n Email of user who sent the Message: ${options.email} \n\n Name of user who sent the Message: ${options.name}`,
    };
    await transporter.sendMail(mailOptions)
};