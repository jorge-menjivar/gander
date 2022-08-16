import bodyParser from "body-parser";
import express from "express";
const app = express();
const port = process.env.PORT || 5000;
const jsonParser = bodyParser.json();

app.listen(port, () => console.log(`Listening on port ${port}`));

app.post("/add", jsonParser, (_req, _res) => {
  const body = _req.body;
  const a = parseFloat(body["n1"]);
  const b = parseFloat(body["n2"]);

  const total = a + b;
  _res.send({ total: total.toFixed(4) });
});
