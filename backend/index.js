import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectDB from './src/DB/indexDB.js';
import app from './src/app.js';


connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((error)=>{
    console.error('Failed to connect to MongoDB:', error);
});
app.get('/',(req,res)=>{
    res.send('Hello World');
});