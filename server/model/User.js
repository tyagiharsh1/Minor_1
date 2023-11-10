const mongoose=require('mongoose');
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  blood_group: {
    type: String,
    required: true,
  },
  phone_no: {
      type:String,
      required:true
  },
  password: {
    type: String,
    required: true,
    select:false
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
});
module.exports=mongoose.model('user',userSchema);