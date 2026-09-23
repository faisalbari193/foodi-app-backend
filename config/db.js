const mongoose=require('mongoose');

exports.connectDB=()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Database connected successfully");
    })
    .catch((err)=>{
        console.log(err);
    })
}
