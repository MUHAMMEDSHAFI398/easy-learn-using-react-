const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const studentSchema = new Schema(
  {
    registerId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      uppercase: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    parent_name: {
      type: String,
      required: true,
      trim: true,
    },
    parent_phone: {
      type: Number,
      required: true,
    },
    address: {
      house_name: {
        type: String,
        trim: true,
      },
      place: {
        type: String,
        required: true,
        trim: true,
      },
      post: {
        type: String,
        required: true,
        trim: true,
      },
      pin: {
        type: String,
        required: true,
      },
      district: {
        type: String,
        required: true,
        trim: true,
      },
      state: {
        type: String,
        required: true,
        trim: true,
      },
    },
    education: {
      type: String,
      required: true,
      trim: true,
    },
    institute: {
      type: String,
      required: true,
      trim: true,
    },
    batch: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },
    image:[{
      url:{
        type:String
      },
      filename:{
        type:String
      }
    }],
    isBlocked:{
      type:Boolean
    }      
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);