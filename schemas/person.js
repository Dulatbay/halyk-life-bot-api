import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    patronymic: String,
    inn: { type: String, required: true },
    age: { type: Number, required: true },
    region: { type: mongoose.Schema.Types.ObjectId, ref: 'Region' }, // Ссылка на регион
    hasDisability: { type: Boolean, default: false },
    hasCriminalRecord: { type: Boolean, default: false },
    hasMedicalConditions: { type: Boolean, default: false },
    hasOncologicalDiseases: { type: Boolean, default: false },
    isRegisteredInPsychiatricDispensary: { type: Boolean, default: false },
});

export const Person = mongoose.model('Person', personSchema);
