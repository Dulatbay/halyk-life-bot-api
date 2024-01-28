const express = require('express')
const router = express.Router();
const Person = require('../schemas/person'); // Подключаем модель Person
router.get('/', async (req, res) => {
    try {
        const people = await Person.find(); // Используем метод find() для получения всех записей
        res.json(people);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Произошла ошибка при получении данных о людях'});
    }
});


module.exports = {router}