import mongoose from 'mongoose';


export const Connection =async(username,password) =>
{
    const url = 'mongodb://ritiktiwaryyo:K0N3do9ZLFWXA0mw@onlinemarketplace-shard-00-00.gb5mj.mongodb.net:27017,onlinemarketplace-shard-00-01.gb5mj.mongodb.net:27017,onlinemarketplace-shard-00-02.gb5mj.mongodb.net:27017/?ssl=true&replicaSet=atlas-7vyzc2-shard-0&authSource=admin&retryWrites=true&w=majority&appName=OnlineMarketPlace';
    try {
        await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("Database connected successfully");
    }
    catch (error) {
        console.log("Error while connecting to database", error);
    }
}

export default Connection;