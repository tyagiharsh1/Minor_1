const mongoose = require("mongoose");
async function connectDb() {
  const URI = process.env.URI;
  try {
    mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connection to db successfull');
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}
module.exports = connectDb;
