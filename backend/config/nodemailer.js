const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASS,
    },
});


async function sendVerificationEmail(userEmail, userName, code) {
    const htmlContent = `
    <html>
      <head>
        <style>
          /* You can include your styles here */
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            
          </div>
          <div class="content">
            <h2>Welcome to SideHustle!</h2>
            <p>Hello ${name},</p>
            <p>Thank you for registering with us. To complete your registration, please verify your email by using the verification code below:</p>
            <p><strong>${code}</strong></p>
            <p>This verification code will expire in 10 minutes. If it expires, you can request a new one by clicking the “Send New Code” link on the verification page.</p>
          </div>
          <div class="footer">
            <p>If you did not request this, please ignore this email.</p>
            <p>Best regards,</p>
            <p>The SideHustle Team</p>
          </div>
        </div>
      </body>
    </html>
  `;
    const mailOptions = {
        from: process.env.SENDER_EMAIL,
        to: userEmail,
        subject: 'Verify Your Email',
        html: htmlContent,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Verification email sent');
    } catch (error) {
        console.log('Error sending email:', error);
    }
}

module.exports = { generateVerificationCode, sendVerificationEmail };
