import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rishbur:33858627@cluster0.zaqskgv.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}