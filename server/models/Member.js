// server/models/Member.js
import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String },
  surname: { type: String, required: true },
  nickname: { type: String },
  useNickname: { type: Boolean },
  relationship: {     type: String, required: true, enum: ['Spouse', 'Child', 'Parent', 'Sibling', 'Friend'] },  
  status: { type: String, enum: ['Living', 'Deceased'], required: true },
  birthDate: { type: Date },
  birthPlace: { type: String },
  currentPlace: { type: String },
},{ timestamps: true });

export const Member = mongoose.model('Member', memberSchema);
