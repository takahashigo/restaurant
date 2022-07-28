import Stripe from "stripe";

const KEY = process.env.STRIPE_SECRET_KEY;
const stripe = Stripe(KEY);

export default async function handler(req, res) {
  const { method } = req;
  if (method === "POST") {
    stripe.charges.create(
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "jpy",
      },
      (stripeErr, stripeRes) => {
        if (stripeErr) {
          res.status(500).json(stripeErr);
        } else {
          res.status(200).json(stripeRes);
        }
      }
    );
  }
}
