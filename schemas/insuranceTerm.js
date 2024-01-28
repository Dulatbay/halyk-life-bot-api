import mongoose from 'mongoose';

const insuranceTermSchema = new mongoose.Schema({
    value: { type: Number, required: true },
    coefficient: { type: Number, required: true },
});

export const InsuranceTerm = mongoose.model('InsuranceTerm', insuranceTermSchema);
