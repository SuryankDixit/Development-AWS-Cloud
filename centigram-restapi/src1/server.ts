import express from "express";
import bodyParser from "body-parser";

import { IndexRoute } from "./controllers/v0/index.router";

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 8080;


// Routes

app.use("/api/v0", IndexRoute);



app.listen(port, function () {
  console.log( `server running http://localhost:${ port }` );
  console.log( `press CTRL+C to stop server` );
});