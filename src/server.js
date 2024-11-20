import connectDb from "./config/db.js";
import app from "./index.js";


// const app = require(".")  // extra line added.
const PORT = 5454;

app.listen(PORT, async() => {
  await connectDb()
  console.log(`E_Commerce api listing on PORT : ${PORT} `);
});
