import { setCookie } from "cookies-next";
// import { setCookie } from "nookies";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      // res.setHeader(
      //   "Set-Cookie",
      //   cookie.serialize("token", process.env.NEXT_PUBLIC_TOKEN),
      //   { maxAge: 60 * 60, sameSite: "strict", path: "/" }
      // );
      setCookie("token",process.env.NEXT_PUBLIC_TOKEN,{req,res,maxAge: 60*60*24});
      
      res.status(200).json("ログイン成功");
    } else {
      res.status(400).json("認証失敗");
    }
  }
}
