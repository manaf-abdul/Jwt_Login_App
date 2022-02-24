import mongoose from 'mongoose'

const connectDB = async()=>{
    
    try {
        const URI='mongodb+srv://abdulmanafp1996:man451619@multistoredatabase.wfa8z.mongodb.net/multistoredatabase?retryWrites=true&w=majority'
        const conn= await mongoose.connect('mongodb://localhost:27017/multiSoreDB',{
            useUnifiedTopology: true,
            useNewUrlParser:true,

        })
        console.log("Database connected");
        console.log(`MongoDB Connected:${conn.connection.host}`);
    } catch (error) {
        console.log(`Error:${error.message}`);
        process.exit(1);
    }

}
export default connectDB