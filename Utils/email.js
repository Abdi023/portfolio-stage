const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP__HOST,
  port: process.env.MAILTRAP__PORT,
  auth: {
    user: process.env.MAILTRAP__USERNAME,
    pass: process.env.MAILTRAP__PASSWORD
  },
});

exports.sendContactEmail = async (req, res) => {
  try {
    const { username, email, subject, message } = req.body;

    const mailOptions = {
      from: 'abdikarimabdi80@gmail.com', // Corrected the 'from' email address
      to: 'recipient_email@example.com',
      subject: subject,
      text: `Name: ${username}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    // Send an HTML response with the success message and "Go back" button
    const responseHtml = `
      <html>
      <head>
      <link rel="stylesheet" href="./css/style.css">
        <title>Email Sent</title>
      </head>
      <body>
        <main class="mainSend">
            <div class="sender">
                <h1 class="sender__success" > Dit bericht is succesful verzonden </h1>
                <button class="sender__terugButton" onclick="goBack()">Terug</button>
            </div>
        </main>
        <script>
          function goBack() {
            window.location.href = "/contact";
          }
        </script>
      </body>
      </html>
    `;

    res.send(responseHtml);
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Email could not be sent');
  }
};
