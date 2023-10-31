import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { companyEmail, number, email, message } = req.body;

    try {
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: "gmail",
        port: 465,
        secure: true,
        auth: {
          user: "justiceyba@gmail.com",
          pass: "sjmm bttd hkdy cetl",
        },
      });
      // Send the email
      await transporter.sendMail({
        from: companyEmail,
        to: "justiceyba@gmail.com",
        subject: `${message}`,
        text: `You have a message from\n\nEmail: ${email}\n\nPhone No: ${number}\n\nMessage: ${message}`,
      });
      // Email sent successfully
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      // Error occurred while sending the email
      res.status(500).json({ message: error });
    }
  } else {
    // Invalid request method
    res.status(405).json({ message: "Method not allowed" });
  }
}
