import mongoose from 'mongoose';
import {peopleMockData, insuranceTermsMockData, regionsMockData} from './mockData/index.js'; // Путь к вашим мок-данным

export const client = await mongoose.connect("mongodb+srv://admin:123@test.uovfgjr.mongodb.net/?retryWrites=true&w=majority");
import {Person} from './schemas/person.js'; // Путь к вашей модели Person
import {InsuranceTerm} from './schemas/insuranceTerm.js'; // Путь к вашей модели InsuranceTerm
import {Region} from './schemas/region.js'; // Путь к вашей модели Region

// Функция для очистки базы данных и загрузки мок-данных
const initializeDatabase = async () => {
    try {
        // Очистка базы данных
        await Promise.all([Person.deleteMany(), InsuranceTerm.deleteMany(), Region.deleteMany()]);

        // Загрузка мок-данных
        await Promise.all([
            Person.insertMany(peopleMockData),
            InsuranceTerm.insertMany(insuranceTermsMockData),
            Region.insertMany(regionsMockData),
        ]);

        console.log('База данных инициализирована успешно.');
    } catch (error) {
        console.error('Ошибка инициализации базы данных:', error);
    }
};

// Вызов функции для инициализации базы данных
initializeDatabase();