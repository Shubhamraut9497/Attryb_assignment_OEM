import mongoose from 'mongoose';
import validator from 'validator';

const carData=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    }
})