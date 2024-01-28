import mongoose from 'mongoose';

const regionSchema = new mongoose.Schema({
    name: {type: String, required: true},
    coefficient: {type: Number, required: true},
});
export const Region = mongoose.model('Region', regionSchema);