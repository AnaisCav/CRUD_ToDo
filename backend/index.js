import "dotenv/config";

import app from "./src/app.js";

const port = process.env.APP_PORT ?? "5000";

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Le serveur tourne sur le port ${port}.`);
  }
});
