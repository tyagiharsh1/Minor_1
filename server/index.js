const express = require("express");
const connectDb = require("./dbConnect");
require('dotenv').config({path:'./.env'})
const morgan=require('morgan');
const App = express();
const PORT_NO=process.env.PORT_NO
const cors=require('cors')
const mainRouter = require("./router/mainRouter");
App.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000", // request from this origin can now access our backend
  })
);
//middlewares:
App.use(express.json()); //for  the body-parser
App.use(morgan('common'));//print the API details
//Routers
App.use("/api", mainRouter);
//connection to database
connectDb();
//server listening
App.listen(PORT_NO, () => {
  console.log("listening on port -->",PORT_NO);
});
