import express from 'express';

const router = express.Router();
import {Person} from '../schemas/person.js'; // Подключаем модель Person

// Обработчик GET запроса для получения всех записей о людях
router.get('/', async (req, res) => {
    try {
        const people = await Person.find(); // Используем метод find() для получения всех записей
        res.json(people);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Произошла ошибка при получении данных о людях'});
    }
});

export default router;
