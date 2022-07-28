// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Product from "../../../models/Product";
import dbConnect from "../../../utils/db";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    cookies,
  } = req;

  const token = cookies.token;

  await dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    if (!token || token !== process.env.NEXT_PUBLIC_TOKEN) {
      return res.status(401).json("認証に失敗しました");
    }
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, req.body,{new: true});
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") {
    if (!token || token !== process.env.NEXT_PUBLIC_TOKEN) {
      return res.status(401).json("認証に失敗しました");
    }
    // ここはアドミンサイトでしか使わない
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json("商品は削除されました。");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
