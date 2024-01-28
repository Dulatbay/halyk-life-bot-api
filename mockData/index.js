// Мок-данные для схемы Region
const regionsMockData = [
    {name: 'Алматы', coefficient: 1.2},
    {name: 'Нур-Султан', coefficient: 1.5},
    {name: 'Шымкент', coefficient: 1.1},
    {name: 'Актау', coefficient: 1.3},
    // Добавьте другие регионы Казахстана по мере необходимости
];

const peopleMockData = [
    {
        firstName: 'Айдос',
        lastName: 'Жумабаев',
        patronymic: 'Серикович',
        inn: '1234567890',
        age: 25,
        region: regionsMockData[0]._id, // Ссылка на регион Алматы
        hasDisability: false,
        hasCriminalRecord: false,
        hasMedicalConditions: true,
        hasOncologicalDiseases: false,
        isRegisteredInPsychiatricDispensary: false,
    },
    {
        firstName: 'Гульназ',
        lastName: 'Кенжебаева',
        patronymic: 'Асылбековна',
        inn: '9876543210',
        age: 30,
        region: regionsMockData[1]._id, // Ссылка на регион Нур-Султан
        hasDisability: true,
        hasCriminalRecord: false,
        hasMedicalConditions: false,
        hasOncologicalDiseases: true,
        isRegisteredInPsychiatricDispensary: false,
    },
];

// Мок-данные для схемы InsuranceTerm
const insuranceTermsMockData = [
    {value: 1, coefficient: 0.3}, // 1 месяц
    {value: 3, coefficient: 0.4}, // 3 месяца
    {value: 6, coefficient: 0.5}, // 6 месяцев
    {value: 12, coefficient: 0.6}, // 1 год
    {value: 24, coefficient: 0.7}, // 2 года
    // Добавьте другие сроки страхования по мере необходимости
];

module.exports = {insuranceTermsMockData, peopleMockData, regionsMockData}

