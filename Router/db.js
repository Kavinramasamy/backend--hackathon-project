import mongoose from "mongoose";

const db_connect =await mongoose.connect(process.env.DB_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("DB connected......")
})
.catch((err)=>console.log("no connected....",err))

export {db_connect}