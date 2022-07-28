import nodemailer from "nodemailer";

//本番環境設定
const EMAIL_USER = process.env.EMAIL_USER;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

const smtp = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: EMAIL_USER,
    pass: GOOGLE_API_KEY,
  },
});

export default async function handler(req, res) {
  const { method } = req;
  const { name, email, content } = req.body;
  const message = {
    from: `"pizza" <${EMAIL_USER}>`,
    to: email,
    subject: "お問い合わせありがとうございます。",
    text: `${name}様、お問い合わせいただきありがとうございます。(${content})の内容を確認致しました。早急に対応させていただきます。`,
  };

  if (method === "POST") {
    try {
      await smtp.verify().then(() => console.log("メールサーバーに接続成功"));
      await smtp.sendMail(message);
      res.status(200).json("送信成功");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
