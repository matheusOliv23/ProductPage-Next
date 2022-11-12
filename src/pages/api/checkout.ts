import { NextApiRequest, NextApiResponse } from "next";
import { NextApiRequestQuery } from "next/dist/server/api-utils";
import { stripe } from "src/lib/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { priceId } = req.body;

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  if (!priceId) {
    return res.status(400).json({ error: "Preço não encontrado" });
  }

  const success_url = `https://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancel_url = `https://localhost:3000/cancel`;

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    cancel_url: cancel_url,
    success_url: success_url,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
