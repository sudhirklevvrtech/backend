import dotenv from 'dotenv'
import connectDb from "./db/index.js";
import { app } from './app.js';
dotenv.config({
    path : './env'
});
const PORT = process.env.PORT || 8080

connectDb()
.then(()=>{
    app.on("error", (error)=>{
        console.log("ERROR : ", error);
        throw error
    })
    app.listen(PORT, ()=>{
        console.log(`Server is ruining at port : ${PORT}`)
    })
})
.catch((error)=>{
    console.log("MONGO DB CONNECTION FAILD!");
})



// (async () => {
//   try {
//     await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
//   } catch (error) {
//     console.error(error);
//   }
// })();
