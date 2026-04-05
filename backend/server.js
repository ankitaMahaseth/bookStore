import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { connectDB } from "./config/dbConfig.js";

//Server Running
app.listen(process.env.PORT, async () => {
  try {
    await connectDB();
    console.log(`Server is running on : `, process.env.PORT);
  } catch (error) {
    console.log(error);
  }
});

//Server ShutDown

// setTimeout(()=>{
//     server.close(()=>{
//         console.log("server Stopped")
//     })
// }, 10000)
