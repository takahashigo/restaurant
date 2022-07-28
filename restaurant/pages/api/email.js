import nodemailer from "nodemailer";

const smtp = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'go20001104@gmail.com',
    pass: 'xaflhggxaoxuexfo',
  },
});


export default async function handler(req, res) {
  const {method} = req;
  const {name,email,content} = req.body;
  const message = {
    from: `"pizza" <go20001104@gmail.com>`,
    to: email,
    subject: "お問い合わせありがとうございます。",
    text: `${name}様、お問い合わせいただきありがとうございます。(${content})の内容を確認致しました。早急に対応させていただきます。`,
  };

  if (method === "POST"){
    try {
      await smtp.verify().then(() => console.log("メールサーバーに接続成功"));
      await smtp.sendMail(message);
      res.status(200).json("送信成功");
    } catch (err) {
      res.status(500).json(err);
    }
    
};
}
