const mongoose = require('mongoose')
const {peopleMockData, insuranceTermsMockData, regionsMockData} = require('./mockData/index'); // Путь к вашим мок-данным

const Person = require('./schemas/person'); // Путь к вашей модели Person
const InsuranceTerm = require('./schemas/insuranceTerm'); // Путь к вашей модели InsuranceTerm
const Region = require('./schemas/region'); // Путь к вашей модели Region

// Функция для очистки базы данных и загрузки мок-данных
const initializeDatabase = async () => {
    const client = await mongoose.connect("mongodb+srv://admin:123@test.uovfgjr.mongodb.net/?retryWrites=true&w=majority");

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

