const router = require("express").Router();
const { secretKey } = require("../config");
const stripe = require("stripe")(secretKey);

router.post("/payment", (req, res) => {
      stripe.charges.create(
            {
                  source: req.body.tokenId,
                  amount: req.body.amount,
                  currency: "usd",
            },
            (stripeErr, stripeRes) => {
                  if (stripeErr) {
                        res.status(500).json(stripeErr);
                  } else {
                        res.status(200).json(stripeRes);
                  }
            }
      );
});

module.exports = router;