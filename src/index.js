import dotenv from 'dotenv'
import connectDb from "./db/index.js";

dotenv.config({
    path : './env'
});

connectDb();




// (async () => {
//   try {
//     await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
//   } catch (error) {
//     console.error(error);
//   }
// })();
