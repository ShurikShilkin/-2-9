// Данные игроков для Дня 1
const day1Players = [
    { number: 1, name: "Даня КДД", participation: 3100, start: 2100, rebuy: 2000, exit: 25110, result: 24110 },
    { number: 2, name: "Сергей Ман", participation: 3100, start: 2100, rebuy: 2000, exit: 22075, result: 21075 },
    { number: 3, name: "Михаил Козадой", participation: 3100, start: 2100, rebuy: 2000, exit: 11165, result: 10165 },
    { number: 4, name: "Том", participation: 3100, start: 2100, rebuy: 2000, exit: 10000, result: 9000 },
    { number: 5, name: "Вася Е", participation: 3100, start: 2100, rebuy: 0, exit: 8050, result: 9050 },
    { number: 6, name: "Семён Ануфриев", participation: 3100, start: 2100, rebuy: 0, exit: 7570, result: 8570 },
    { number: 7, name: "Оксана Б", participation: 3100, start: 2100, rebuy: 0, exit: 4260, result: 5260 },
    { number: 8, name: "Славяна", participation: 3100, start: 2100, rebuy: 0, exit: 4145, result: 5145 },
    { number: 9, name: "Всеволод Кузнецов", participation: 3100, start: 2100, rebuy: 2000, exit: 3540, result: 2540 },
    { number: 10, name: "Полина Матыцына", participation: 3100, start: 2100, rebuy: 2000, exit: 2885, result: 1885 },
    { number: 11, name: "Инна М", participation: 3100, start: 2100, rebuy: 0, exit: 2475, result: 3475 },
    { number: 12, name: "Макс Ник", participation: 3100, start: 2100, rebuy: 2000, exit: 1165, result: 165 },
    { number: 13, name: "Саша Б", participation: 3100, start: 2100, rebuy: 2000, exit: 1075, result: 75 },
    { number: 14, name: "Иван John", participation: 3100, start: 2100, rebuy: 2000, exit: 1045, result: 45 },
    { number: 15, name: "Александр Исаев", participation: 3100, start: 2100, rebuy: 0, exit: 765, result: 1765 },
    { number: 16, name: "Александр Будда", participation: 3100, start: 2100, rebuy: 0, exit: 0, result: 1000 },
    { number: 17, name: "Асхат Суханбердин", participation: 3100, start: 2100, rebuy: 0, exit: 0, result: 1000 },
    { number: 18, name: "Вова Баж", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 19, name: "Свидетель", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 20, name: "Иван Антипов", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 21, name: "Egrinderolls", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 22, name: "Саша Коч", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 23, name: "Надя Жб", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 24, name: "Макар Аве", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 25, name: "Шурик Шилкин", participation: 3100, start: 2100, rebuy: 0, exit: 0, result: 1000 },
    { number: 26, name: "Богдан Анц", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 27, name: "Петя Федоров", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 }
];

// Данные игроков для Дня 2
const day2Players = [
    { number: 1, name: "Родион Шашурин", participation: 3100, start: 2100, rebuy: 0, exit: 24605, result: 25605 },
    { number: 2, name: "Сергей Ман", participation: 3100, start: 2100, rebuy: 0, exit: 13710, result: 14710 },
    { number: 3, name: "Даня КДД", participation: 3100, start: 2100, rebuy: 0, exit: 10895, result: 11895 },
    { number: 4, name: "Никита Yellow", participation: 3100, start: 2100, rebuy: 2000, exit: 7480, result: 6480 },
    { number: 5, name: "Саша Коч", participation: 3100, start: 2100, rebuy: 0, exit: 7050, result: 8050 },
    { number: 6, name: "Том", participation: 3100, start: 2100, rebuy: 0, exit: 6725, result: 7725 },
    { number: 7, name: "Даша Yellow", participation: 3100, start: 2100, rebuy: 0, exit: 6290, result: 7290 },
    { number: 8, name: "Богдан Анц", participation: 3100, start: 2100, rebuy: 2000, exit: 5570, result: 4570 },
    { number: 9, name: "Михаил Козадой", participation: 3100, start: 2100, rebuy: 2000, exit: 4610, result: 3610 },
    { number: 10, name: "Иван Антипов", participation: 3100, start: 2100, rebuy: 0, exit: 4300, result: 5300 },
    { number: 11, name: "Макар Аве", participation: 3100, start: 2100, rebuy: 0, exit: 3840, result: 4840 },
    { number: 12, name: "Макс Ник", participation: 3100, start: 2100, rebuy: 2000, exit: 3710, result: 2710 },
    { number: 13, name: "Даниил Глухов", participation: 3100, start: 2100, rebuy: 0, exit: 3675, result: 4675 },
    { number: 14, name: "Всеволод Кузнецов", participation: 3100, start: 2100, rebuy: 2000, exit: 3050, result: 2050 },
    { number: 15, name: "Диана Зак", participation: 3100, start: 2100, rebuy: 2000, exit: 3045, result: 2045 },
    { number: 16, name: "Даниил Ершов", participation: 3100, start: 2100, rebuy: 0, exit: 2670, result: 3670 },
    { number: 17, name: "Василий АБВ", participation: 3100, start: 2100, rebuy: 0, exit: 2630, result: 3630 },
    { number: 18, name: "Славяна", participation: 3100, start: 2100, rebuy: 2000, exit: 2385, result: 1385 },
    { number: 19, name: "Шурик Шилкин", participation: 3100, start: 2100, rebuy: 0, exit: 2085, result: 3085 },
    { number: 20, name: "Вася Е", participation: 3100, start: 2100, rebuy: 2000, exit: 1815, result: 815 },
    { number: 21, name: "Анна К", participation: 3100, start: 2100, rebuy: 0, exit: 1485, result: 2485 },
    { number: 22, name: "Серафима Онежко", participation: 3100, start: 2100, rebuy: 0, exit: 1000, result: 2000 },
    { number: 23, name: "Надя Жб", participation: 3100, start: 2100, rebuy: 0, exit: 970, result: 1970 },
    { number: 24, name: "Вова Гриненко", participation: 3100, start: 2100, rebuy: 2000, exit: 930, result: -70 },
    { number: 25, name: "Саша Б", participation: 3100, start: 2100, rebuy: 0, exit: 305, result: 1305 },
    { number: 26, name: "Инна М", participation: 3100, start: 2100, rebuy: 2000, exit: 170, result: -830 },
    { number: 27, name: "Семён Ануфриев", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 28, name: "Кристина Дым", participation: 3100, start: 2100, rebuy: 0, exit: 0, result: 1000 },
    { number: 29, name: "Влад Сам", participation: 3100, start: 2100, rebuy: 0, exit: 0, result: 1000 },
    { number: 30, name: "Серж", participation: 3100, start: 2100, rebuy: 0, exit: 0, result: 1000 },
    { number: 31, name: "Александр Исаев", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 32, name: "Сергей Логинов", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 33, name: "Федор К", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 34, name: "Егор Полесов", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 35, name: "Даня Гол", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 36, name: "Оксана Б", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 37, name: "Никита Эфа", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 }
];

// Данные игроков для Дня 3
const day3Players = [
    { number: 1, name: "Даша Гри", participation: 3100, start: 2100, rebuy: 2000, exit: 14215, result: 13215 },
    { number: 2, name: "Богдан Анц", participation: 3100, start: 2100, rebuy: 0, exit: 12015, result: 13015 },
    { number: 3, name: "Шурик Шилкин", participation: 3100, start: 2100, rebuy: 0, exit: 8835, result: 9835 },
    { number: 4, name: "Саша Тяжелов", participation: 3100, start: 2100, rebuy: 0, exit: 4335, result: 5335 },
    { number: 5, name: "Иван Антипов", participation: 3100, start: 2100, rebuy: 0, exit: 4165, result: 5165 },
    { number: 6, name: "Сергей Ман", participation: 3100, start: 2100, rebuy: 2000, exit: 3595, result: 2595 },
    { number: 7, name: "Василий АБВ", participation: 3100, start: 2100, rebuy: 0, exit: 3485, result: 4485 },
    { number: 8, name: "Вася Е", participation: 3100, start: 2100, rebuy: 2000, exit: 3090, result: 2090 },
    { number: 9, name: "Макар Аве", participation: 3100, start: 2100, rebuy: 0, exit: 2975, result: 3975 },
    { number: 10, name: "Инна М", participation: 3100, start: 2100, rebuy: 2000, exit: 2365, result: 1365 },
    { number: 11, name: "Анна К", participation: 3100, start: 2100, rebuy: 2000, exit: 2175, result: 1175 },
    { number: 12, name: "Асхат Суханбердин", participation: 3100, start: 2100, rebuy: 0, exit: 0, result: 1000 },
    { number: 13, name: "Олег Гвед", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 14, name: "Евгений Ц", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 15, name: "Саша Коч", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 16, name: "Надя Жб", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 17, name: "Дима БДР", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 }
];

// Обновленные данные для Охоты за головами
const bountyPlayers = [
    { name: "Даня КДД", bounty: 2400 },
    { name: "Даша Гри", bounty: 1575 },
    { name: "Сергей Ман", bounty: 1425 },
    { name: "Александр Гиг", bounty: 1200 },
    { name: "Мария Павлова", bounty: 1200 },
    { name: "Даша Yellow", bounty: 1200 },
    { name: "Вадим Константинов", bounty: 1200 },
    { name: "Руф", bounty: 1200 },
    { name: "Влад Пив", bounty: 1200 },
    { name: "Артур Король", bounty: 1200 },
    { name: "Семён Ануфриев", bounty: 1050 },
    { name: "Родион Шашурин", bounty: 1050 },
    { name: "Надя Жб", bounty: 900 },
    { name: "Саша Коч", bounty: 750 },
    { name: "Даня Гол", bounty: 600 },
    { name: "Никита Yellow", bounty: 600 },
    { name: "Славяна", bounty: 600 },
    { name: "Шурик Шилкин", bounty: 600 },
    { name: "Жан Балацкий", bounty: 600 },
    { name: "Иван Чемодан", bounty: 600 },
    { name: "Олег Сми", bounty: 600 },
    { name: "Саша Тяжелов", bounty: 600 },
    { name: "Ксюша Петрушина", bounty: 600 },
    { name: "Дмитрий Ник", bounty: 600 },
    { name: "Андрей Ф", bounty: 600 },
    { name: "Ладали", bounty: 600 },
    { name: "Искандер", bounty: 600 },
    { name: "Константин Сидорин", bounty: 600 },
    { name: "Том", bounty: 600 },
    { name: "Богдан Анц", bounty: 450 },
    { name: "Михаил Козадой", bounty: 300 },
    { name: "Вова Гриненко", bounty: 300 },
    { name: "Иван Антипов", bounty: 300 },
    { name: "Egrinderolls", bounty: 300 },
    { name: "Асхат Суханбердин", bounty: 150 },
    { name: "Василий АБВ", bounty: 75 },
    { name: "Макар Аве", bounty: 75 }
];

// Данные роста блайндов
const blindsData = [
    { number: 1, startTime: "17-00", endTime: "17-25", sb: 5, bb: 10, ante: 10 },
    { number: 2, startTime: "17-25", endTime: "17-50", sb: 10, bb: 20, ante: 20 },
    { number: 3, startTime: "18-00", endTime: "18-15", sb: 15, bb: 30, ante: 30 },
    { number: 4, startTime: "18-15", endTime: "18-30", sb: 20, bb: 40, ante: 40 },
    { number: 5, startTime: "18-30", endTime: "18-50", sb: 35, bb: 70, ante: 70 },
    { number: 6, startTime: "19-00", endTime: "19-15", sb: 50, bb: 100, ante: 100 },
    { number: 7, startTime: "19-15", endTime: "19-30", sb: 75, bb: 150, ante: 150 },
    { number: 8, startTime: "19-30", endTime: "19-50", sb: 100, bb: 200, ante: 200 },
    { number: 9, startTime: "20-00", endTime: "20-15", sb: 150, bb: 300, ante: 300 },
    { number: 10, startTime: "20-15", endTime: "20-30", sb: 200, bb: 400, ante: 400 },
    { number: 11, startTime: "20-30", endTime: "20-50", sb: 300, bb: 600, ante: 600 },
    { number: 12, startTime: "21-00", endTime: "21-15", sb: 400, bb: 800, ante: 800 },
    { number: 13, startTime: "21-15", endTime: "21-30", sb: 500, bb: 1000, ante: 1000 },
    { number: 14, startTime: "21-30", endTime: "21-50", sb: 700, bb: 1400, ante: 1400 },
    { number: 15, startTime: "22-00", endTime: "22-15", sb: 1000, bb: 2000, ante: 2000 },
    { number: 16, startTime: "22-15", endTime: "22-30", sb: 1500, bb: 3000, ante: 3000 },
    { number: 17, startTime: "22-30", endTime: "22-50", sb: 2000, bb: 4000, ante: 4000 },
    { number: 18, startTime: "23-00", endTime: "23-15", sb: 2500, bb: 5000, ante: 5000 },
    { number: 19, startTime: "23-15", endTime: "23-30", sb: 3000, bb: 6000, ante: 6000 },
    { number: 20, startTime: "23-30", endTime: "23-45", sb: 4000, bb: 8000, ante: 8000 },
    { number: 21, startTime: "23-45", endTime: "0-00", sb: 5000, bb: 10000, ante: 10000 },
    { number: 22, startTime: "0-00", endTime: "0-10", sb: 6000, bb: 12000, ante: 12000 },
    { number: 23, startTime: "0-10", endTime: "0-20", sb: 7500, bb: 15000, ante: 15000 },
    { number: 24, startTime: "0-20", endTime: "0-30", sb: 9000, bb: 18000, ante: 18000 }
];

// Данные участия в финале, Т2 и охоты за головами
const playerBonuses = {
    "Сергей Ман": { finalParticipation: 2000, t2: 3000, bounty: 1425 },
    "Даня КДД": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Родион Шашурин": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Богдан Анц": { finalParticipation: 2000, t2: 3000, bounty: 450 },
    "Шурик Шилкин": { finalParticipation: 2000, t2: 3000, bounty: 600 },
    "Том": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Вася Е": { finalParticipation: 2000, t2: 3000, bounty: 0 },
    "Михаил Козадой": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Даша Гри": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Иван Антипов": { finalParticipation: 2000, t2: 3000, bounty: 300 },
    "Макар Аве": { finalParticipation: 2000, t2: 3000, bounty: 75 },
    "Саша Коч": { finalParticipation: 2000, t2: 3000, bounty: 750 },
    "Василий АБВ": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Семён Ануфриев": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Даша Yellow": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Инна М": { finalParticipation: 2000, t2: 3000, bounty: 0 },
    "Славяна": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Никита Yellow": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Саша Тяжелов": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Даниил Глухов": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Всеволод Кузнецов": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Оксана Б": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Надя Жб": { finalParticipation: 2000, t2: 3000, bounty: 900 },
    "Даниил Ершов": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Анна К": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Макс Ник": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Диана Зак": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Асхат Суханбердин": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Серафима Онежко": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Полина Матыцына": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Саша Б": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Александр Будда": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Серж": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Кристина Дым": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Влад Сам": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Александр Исаев": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Иван John": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Вова Гриненко": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Egrinderolls": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Петя Федоров": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Вова Баж": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Свидетель": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Егор Полесов": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Даня Гол": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Никита Эфа": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Федор К": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Сергей Логинов": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Евгений Ц": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Дима БДР": { finalParticipation: 2000, t2: 0, bounty: 0 },
    "Олег Гвед": { finalParticipation: 2000, t2: 0, bounty: 0 }
};

// Функция переключения вкладок
function showTab(tabName) {
    // Скрываем все вкладки
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));
    
    // Убираем активный класс со всех кнопок
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    
    // Показываем выбранную вкладку
    document.getElementById(tabName).classList.add('active');
    
    // Обновляем интерфейс в зависимости от типа вкладки
    if (tabName === 'final2025' || tabName === 'satellite2025') {
        showSpecialInterface(tabName);
    } else {
        showMainInterface(tabName);
    }
    
    // Сбрасываем развертывание таблицы при переключении вкладок
    resetTableExpand();
    
    // Обновляем поиск для активной вкладки
    searchPlayers();
    
    // Обновляем статистику
    updateStats();
}

// Показать основной интерфейс (дни турнира)
function showMainInterface(tabName) {
    document.getElementById('mainTabs').style.display = 'flex';
    document.getElementById('specialTabs').style.display = 'none';
    document.getElementById('mainStats').style.display = 'grid';
    document.getElementById('specialStats').style.display = 'none';
    
    // Активируем соответствующую кнопку в основных вкладках
    const tabButtons = document.querySelectorAll('#mainTabs .tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    
    const targetButton = document.querySelector(`#mainTabs .tab-button[onclick="showTab('${tabName}')"]`);
    if (targetButton) {
        targetButton.classList.add('active');
    }
    
    // Обновляем заголовок фазы турнира
    const phaseElement = document.getElementById('currentPhase');
    if (tabName === 'day1') {
        phaseElement.textContent = 'День 1 - 23.10.2025';
    } else if (tabName === 'day2') {
        phaseElement.textContent = 'День 2 - 30.10.2025';
    } else if (tabName === 'day3') {
        phaseElement.textContent = 'День 3 - 6.11.2025';
    } else if (tabName === 'final') {
        phaseElement.textContent = 'Финал - 8.11.2025';
    } else if (tabName === 'bounties') {
        phaseElement.textContent = 'Охота за головами';
    } else if (tabName === 'blinds') {
        phaseElement.textContent = 'Структура блайндов';
    }
}

// Показать специальный интерфейс (ФИНАЛ ФИНАЛИСТОВ или САТЕЛЛИТ)
function showSpecialInterface(tabName) {
    document.getElementById('mainTabs').style.display = 'none';
    document.getElementById('specialTabs').style.display = 'flex';
    document.getElementById('mainStats').style.display = 'none';
    document.getElementById('specialStats').style.display = 'grid';
    
    // Обновляем текст специальной вкладки
    const specialTabButton = document.getElementById('specialTabButton');
    const phaseElement = document.getElementById('currentPhase');
    
    if (tabName === 'final2025') {
        specialTabButton.textContent = 'ФИНАЛ ФИНАЛИСТОВ 2025';
        phaseElement.textContent = 'ФИНАЛ ФИНАЛИСТОВ 2025 - 20.12.2025';
    } else if (tabName === 'satellite2025') {
        specialTabButton.textContent = 'САТЕЛЛИТ 2025';
        phaseElement.textContent = 'САТЕЛЛИТ 2025 - 6.12.2025';
    }
    
    // Показываем кнопку "Назад к турниру"
    document.querySelector('.back-button').style.display = 'block';
}

// Функция развертывания таблицы на мобильных
function toggleTableExpand() {
    const activeTab = document.querySelector('.tab-content.active').id;
    const tables = document.querySelectorAll(`#${activeTab} .tournament-table`);
    const button = document.querySelector('.expand-button');
    
    tables.forEach(table => {
        table.classList.toggle('expanded');
    });
    
    if (tables[0] && tables[0].classList.contains('expanded')) {
        button.textContent = 'Свернуть таблицу';
    } else {
        button.textContent = 'Развернуть таблицу';
    }
}

// Сброс развертывания таблицы
function resetTableExpand() {
    const tables = document.querySelectorAll('.tournament-table');
    const button = document.querySelector('.expand-button');
    
    tables.forEach(table => {
        table.classList.remove('expanded');
    });
    
    button.textContent = 'Развернуть таблицу';
}

// Быстрая анимация счетчиков
function animateCounter(element, finalValue, duration = 500) {
    let start = 0;
    const increment = finalValue / (duration / 5);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= finalValue) {
            element.textContent = finalValue;
            clearInterval(timer);
            
            element.style.transform = 'scale(1.05)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 100);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 5);
}

// Расчет среднего стека для активного дня (только положительные значения)
function calculateAverageStack() {
    const activeTab = document.querySelector('.tab-content.active').id;
    let players;
    
    if (activeTab === 'day1') {
        players = day1Players;
    } else if (activeTab === 'day2') {
        players = day2Players;
    } else if (activeTab === 'day3') {
        players = day3Players;
    } else if (activeTab === 'bounties' || activeTab === 'final2025' || activeTab === 'satellite2025' || activeTab === 'blinds') {
        return 0; // Для специальных вкладок не считаем средний стек
    } else if (activeTab === 'final') {
        // Для финала считаем среднее от полного итога (с бонусами)
        const finalPlayers = getAllFinalPlayers();
        const finalPlayersWithBonuses = finalPlayers.map(player => {
            const bonusData = getPlayerBonusData(player.name);
            const total = (player.day1 + player.day2 + player.day3) + 
                         (bonusData.finalParticipation || 0) + 
                         (bonusData.t2 || 0) + 
                         (bonusData.bounty || 0);
            return { total };
        });
        
        const positiveResults = finalPlayersWithBonuses.filter(player => player.total > 0);
        if (positiveResults.length === 0) return 0;
        const totalSum = positiveResults.reduce((sum, player) => sum + player.total, 0);
        return Math.round(totalSum / positiveResults.length);
    } else {
        // Для остальных вкладок (если есть)
        players = getAllFinalPlayers();
        const positiveResults = players.filter(player => (player.day1 + player.day2 + player.day3) > 0);
        if (positiveResults.length === 0) return 0;
        const total = positiveResults.reduce((sum, player) => sum + (player.day1 + player.day2 + player.day3), 0);
        return Math.round(total / positiveResults.length);
    }
    
    // Для дней считаем только положительные результаты
    const positiveResults = players.filter(player => player.result > 0);
    if (positiveResults.length === 0) return 0;
    const total = positiveResults.reduce((sum, player) => sum + Number(player.result), 0);
    return Math.round(total / positiveResults.length);
}

// Получение всех игроков для финала (объединение дней)
function getAllFinalPlayers() {
    const allPlayersMap = new Map();
    
    // Добавляем игроков из дня 1
    day1Players.forEach(player => {
        allPlayersMap.set(player.name, {
            name: player.name,
            day1: player.result,
            day2: 0,
            day3: 0
        });
    });
    
    // Обновляем/добавляем игроков из дня 2
    day2Players.forEach(player => {
        if (allPlayersMap.has(player.name)) {
            allPlayersMap.get(player.name).day2 = player.result;
        } else {
            allPlayersMap.set(player.name, {
                name: player.name,
                day1: 0,
                day2: player.result,
                day3: 0
            });
        }
    });
    
    // Обновляем/добавляем игроков из дня 3
    day3Players.forEach(player => {
        if (allPlayersMap.has(player.name)) {
            allPlayersMap.get(player.name).day3 = player.result;
        } else {
            allPlayersMap.set(player.name, {
                name: player.name,
                day1: 0,
                day2: 0,
                day3: player.result
            });
        }
    });
    
    return Array.from(allPlayersMap.values());
}

// Получение всех игроков до третьего дня (День 1 + День 2)
function getAllPlayersBeforeDay3() {
    const allPlayersMap = new Map();
    
    // Добавляем игроков из дня 1
    day1Players.forEach(player => {
        allPlayersMap.set(player.name, {
            name: player.name,
            day1: player.result,
            day2: 0,
            day3: 0
        });
    });
    
    // Обновляем/добавляем игроков из дня 2
    day2Players.forEach(player => {
        if (allPlayersMap.has(player.name)) {
            allPlayersMap.get(player.name).day2 = player.result;
        } else {
            allPlayersMap.set(player.name, {
                name: player.name,
                day1: 0,
                day2: player.result,
                day3: 0
            });
        }
    });
    
    return Array.from(allPlayersMap.values());
}

// Расчет изменений позиций для Финала (относительно итогов Дня 1+День 2)
function calculateFinalPositionChanges() {
    const changes = new Map();
    
    // Создаем карту позиций из итогов Дня 1+День 2
    const previousPositions = new Map();
    
    // Получаем игроков для Дня 1+День 2 (до третьего дня)
    const playersBeforeDay3 = getAllPlayersBeforeDay3();
    
    // Сортируем по убыванию итогов Дня 1+День 2
    playersBeforeDay3.sort((a, b) => (b.day1 + b.day2) - (a.day1 + a.day2));
    
    // Сохраняем позиции до третьего дня
    playersBeforeDay3.forEach((player, index) => {
        previousPositions.set(player.name, index + 1);
    });
    
    // Получаем финальных игроков (после третьего дня)
    const finalPlayers = getAllFinalPlayers();
    finalPlayers.sort((a, b) => (b.day1 + b.day2 + b.day3) - (a.day1 + a.day2 + a.day3));
    
    // Рассчитываем изменения для финальных игроков
    finalPlayers.forEach((player, newPosition) => {
        const oldPosition = previousPositions.get(player.name);
        
        if (oldPosition) {
            // Игрок был до третьего дня - считаем изменение позиции
            const change = oldPosition - (newPosition + 1);
            changes.set(player.name, {
                change: Math.abs(change),
                type: change > 0 ? 'up' : change < 0 ? 'down' : 'same'
            });
        } else {
            // Новый игрок (впервые в третьем дне)
            changes.set(player.name, {
                change: null,
                type: 'new'
            });
        }
    });
    
    return changes;
}

// Форматирование чисел с разделителями
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Создание HTML для стрелки изменения позиции
function createPositionChangeHTML(changeData) {
    if (!changeData) return '';
    
    const { change, type } = changeData;
    
    let html = '';
    let arrow = '';
    let text = '';
    
    switch (type) {
        case 'up':
            arrow = '↑';
            text = `+${change}`;
            break;
        case 'down':
            arrow = '↓';
            text = `-${change}`;
            break;
        case 'same':
            arrow = '→';
            text = '0';
            break;
        case 'new':
            arrow = '';
            text = 'NEW';
            break;
    }
    
    if (type === 'new') {
        return `<div class="position-change position-${type}">${text}</div>`;
    } else {
        return `<div class="position-change position-${type}">
            <span class="change-arrow">${arrow}</span>${text}
        </div>`;
    }
}

// Функция для получения бонусных данных игрока
function getPlayerBonusData(playerName) {
    return playerBonuses[playerName] || { finalParticipation: 0, t2: 0, bounty: 0 };
}

// Заполнение таблицы Дня 1
function fillDay1Table() {
    const tableBody = document.getElementById('playersTable');
    tableBody.innerHTML = '';
    
    day1Players.forEach((player) => {
        const row = document.createElement('tr');
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const resultClass = player.result >= 0 ? "chips-positive" : "chips-negative";
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${player.name}</td>
            <td>${formatNumber(player.participation)}</td>
            <td>${formatNumber(player.start)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы Дня 2
function fillDay2Table() {
    const tableBody = document.getElementById('day2Table');
    tableBody.innerHTML = '';
    
    day2Players.forEach((player) => {
        const row = document.createElement('tr');
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const resultClass = player.result >= 0 ? "chips-positive" : "chips-negative";
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${player.name}</td>
            <td>${formatNumber(player.participation)}</td>
            <td>${formatNumber(player.start)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы Дня 3
function fillDay3Table() {
    const tableBody = document.getElementById('day3Table');
    tableBody.innerHTML = '';
    
    day3Players.forEach((player) => {
        const row = document.createElement('tr');
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const resultClass = player.result >= 0 ? "chips-positive" : "chips-negative";
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${player.name}</td>
            <td>${formatNumber(player.participation)}</td>
            <td>${formatNumber(player.start)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы Финала
function fillFinalTable() {
    const tableBody = document.getElementById('finalTable');
    tableBody.innerHTML = '';
    
    // Получаем всех игроков для финала
    const finalPlayers = getAllFinalPlayers();
    const positionChanges = calculateFinalPositionChanges();
    
    // Добавляем данные участия в финале, Т2 и охоты за головами
    const finalPlayersWithBonuses = finalPlayers.map(player => {
        const bonusData = getPlayerBonusData(player.name);
        return {
            ...player,
            finalParticipation: bonusData.finalParticipation,
            t2: bonusData.t2,
            bounty: bonusData.bounty
        };
    });
    
    // Сортируем по убыванию общего итога
    finalPlayersWithBonuses.sort((a, b) => {
        const totalA = (a.day1 + a.day2 + a.day3) + (a.finalParticipation || 0) + (a.t2 || 0) + (a.bounty || 0);
        const totalB = (b.day1 + b.day2 + b.day3) + (b.finalParticipation || 0) + (b.t2 || 0) + (b.bounty || 0);
        return totalB - totalA;
    });
    
    // Присваиваем новые номера для финала
    finalPlayersWithBonuses.forEach((player, index) => {
        const row = document.createElement('tr');
        const qualifyingTotal = player.day1 + player.day2 + player.day3;
        const finalTotal = qualifyingTotal + (player.finalParticipation || 0) + (player.t2 || 0) + (player.bounty || 0);
        const changeData = positionChanges.get(player.name);
        const totalClass = finalTotal >= 0 ? "final-total positive" : "final-total negative";
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${player.name}</td>
            <td>${createPositionChangeHTML(changeData)}</td>
            <td class="result-column">${formatNumber(player.day1)}</td>
            <td class="result-column">${formatNumber(player.day2)}</td>
            <td class="result-column">${formatNumber(player.day3)}</td>
            <td class="result-column">${formatNumber(qualifyingTotal)}</td>
            <td class="chips-positive">${player.finalParticipation ? formatNumber(player.finalParticipation) : '-'}</td>
            <td class="chips-positive">${player.t2 ? formatNumber(player.t2) : '-'}</td>
            <td class="chips-positive">${player.bounty ? formatNumber(player.bounty) : '-'}</td>
            <td class="${totalClass}">${formatNumber(finalTotal)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы Охоты за головами
function fillBountiesTable() {
    const tableBody = document.getElementById('bountiesTable');
    tableBody.innerHTML = '';
    
    // Сортируем по убыванию бонуса
    const sortedBounties = [...bountyPlayers].sort((a, b) => b.bounty - a.bounty);
    
    sortedBounties.forEach((player, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td class="player-name">${player.name}</td>
            <td class="chips-positive">${formatNumber(player.bounty)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы Блайндов
function fillBlindsTable() {
    const tableBody = document.getElementById('blindsTable');
    tableBody.innerHTML = '';
    
    blindsData.forEach((level) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td class="number-column">${level.number}</td>
            <td>${level.startTime}</td>
            <td>${level.endTime}</td>
            <td class="chips-positive">${formatNumber(level.sb)}</td>
            <td class="chips-positive">${formatNumber(level.bb)}</td>
            <td class="chips-positive">${formatNumber(level.ante)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Функции для заполнения таблиц с поиском (сохраняют оригинальную нумерацию)

function fillDay1TableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('playersTable');
    tableBody.innerHTML = '';
    
    // Показываем только найденных игроков, но с их оригинальными номерами
    foundPlayers.forEach((player) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const resultClass = player.result >= 0 ? "chips-positive" : "chips-negative";
        
        // Подсвечиваем найденный текст в имени
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${formatNumber(player.participation)}</td>
            <td>${formatNumber(player.start)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function fillDay2TableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('day2Table');
    tableBody.innerHTML = '';
    
    foundPlayers.forEach((player) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const resultClass = player.result >= 0 ? "chips-positive" : "chips-negative";
        
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${formatNumber(player.participation)}</td>
            <td>${formatNumber(player.start)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function fillDay3TableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('day3Table');
    tableBody.innerHTML = '';
    
    if (foundPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 40px; color: #666;">
                    Игроки не найдены
                </td>
            </tr>
        `;
        return;
    }
    
    foundPlayers.forEach((player) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        const resultClass = player.result >= 0 ? "chips-positive" : "chips-negative";
        
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${formatNumber(player.participation)}</td>
            <td>${formatNumber(player.start)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="${resultClass}">${formatNumber(player.result)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function fillFinalTableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('finalTable');
    tableBody.innerHTML = '';
    
    const allFinalPlayers = getAllFinalPlayers();
    const positionChanges = calculateFinalPositionChanges();
    
    // Добавляем бонусы к игрокам
    const finalPlayersWithBonuses = allFinalPlayers.map(player => {
        const bonusData = getPlayerBonusData(player.name);
        return {
            ...player,
            finalParticipation: bonusData.finalParticipation,
            t2: bonusData.t2,
            bounty: bonusData.bounty
        };
    });
    
    // Сортируем как в оригинальной таблице
    finalPlayersWithBonuses.sort((a, b) => {
        const totalA = (a.day1 + a.day2 + a.day3) + (a.finalParticipation || 0) + (a.t2 || 0) + (a.bounty || 0);
        const totalB = (b.day1 + b.day2 + b.day3) + (b.finalParticipation || 0) + (b.t2 || 0) + (b.bounty || 0);
        return totalB - totalA;
    });
    
    // Показываем только найденных игроков с их позициями в финале
    const filteredPlayers = finalPlayersWithBonuses.filter(player => 
        foundPlayers.some(found => found.name === player.name)
    );
    
    if (filteredPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="11" style="text-align: center; padding: 40px; color: #666;">
                    Игроки не найдены
                </td>
            </tr>
        `;
        return;
    }
    
    filteredPlayers.forEach((player, index) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        
        const qualifyingTotal = player.day1 + player.day2 + player.day3;
        const finalTotal = qualifyingTotal + (player.finalParticipation || 0) + (player.t2 || 0) + (player.bounty || 0);
        const changeData = positionChanges.get(player.name);
        const totalClass = finalTotal >= 0 ? "final-total positive" : "final-total negative";
        
        // Находим оригинальную позицию игрока в финале
        const originalPosition = finalPlayersWithBonuses.findIndex(p => p.name === player.name) + 1;
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${originalPosition}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${createPositionChangeHTML(changeData)}</td>
            <td class="result-column">${formatNumber(player.day1)}</td>
            <td class="result-column">${formatNumber(player.day2)}</td>
            <td class="result-column">${formatNumber(player.day3)}</td>
            <td class="result-column">${formatNumber(qualifyingTotal)}</td>
            <td class="chips-positive">${player.finalParticipation ? formatNumber(player.finalParticipation) : '-'}</td>
            <td class="chips-positive">${player.t2 ? formatNumber(player.t2) : '-'}</td>
            <td class="chips-positive">${player.bounty ? formatNumber(player.bounty) : '-'}</td>
            <td class="${totalClass}">${formatNumber(finalTotal)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function fillBountiesTableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('bountiesTable');
    tableBody.innerHTML = '';
    
    // Сортируем как в оригинале
    const sortedBounties = [...bountyPlayers].sort((a, b) => b.bounty - a.bounty);
    const filteredBounties = sortedBounties.filter(player => 
        foundPlayers.some(found => found.name === player.name)
    );
    
    if (filteredBounties.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="2" style="text-align: center; padding: 40px; color: #666;">
                    Игроки не найдены
                </td>
            </tr>
        `;
        return;
    }
    
    filteredBounties.forEach((player) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="player-name">${highlightedName}</td>
            <td class="chips-positive">${formatNumber(player.bounty)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Функция для подсветки найденного текста
function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="search-highlight-text">$1</span>');
}

// Автодополнение для поиска
function setupAutocomplete() {
    const searchInput = document.getElementById('searchInput');
    const autocompleteResults = document.getElementById('autocompleteResults');
    
    // Получаем все уникальные имена игроков
    const allPlayers = [...day1Players, ...day2Players, ...day3Players, ...bountyPlayers.map(p => ({ name: p.name }))];
    const playerNames = [...new Set(allPlayers.map(p => p.name))];
    
    // Добавляем игроков из специальных вкладок
    const final2025Players = [
        "Александр Гиг", "Мария Павлова", "Даша Yellow", "Михаил Козадой", 
        "Вадим Константинов", "Руф", "Влад Пив", "Артур Король", 
        "Шурик Шилкин", "Даня Гол", "Никита Yellow"
    ];
    
    const satellitePlayers = [
        "Жан Балацкий", "Иван Чемодан", "Иван Антипов", "Олег Сми", 
        "Семён Ануфриев", "Egrinderolls", "Саша Тяжелов", "Асхат Суханбердин", 
        "Саша Коч", "Ксюша Петрушина", "Дмитрий Ник", "Андрей Ф", 
        "Ладали", "Даша Гри", "Искандер", "Вова Гриненко", 
        "Даня КДД", "Надя Жб", "Константин Сидорин", "Богдан Анц", "Славяна"
    ];
    
    playerNames.push(...final2025Players, ...satellitePlayers);
    const uniquePlayerNames = [...new Set(playerNames)];
    
    searchInput.addEventListener('input', function() {
        const value = this.value.toLowerCase().trim();
        autocompleteResults.innerHTML = '';
        
        if (value.length < 2) {
            autocompleteResults.style.display = 'none';
            return;
        }
        
        const suggestions = uniquePlayerNames.filter(name => 
            name.toLowerCase().includes(value)
        ).slice(0, 8);
        
        if (suggestions.length > 0) {
            suggestions.forEach(suggestion => {
                const item = document.createElement('div');
                item.className = 'autocomplete-item';
                
                const regex = new RegExp(`(${value})`, 'gi');
                const highlighted = suggestion.replace(regex, '<span class="autocomplete-highlight">$1</span>');
                
                item.innerHTML = highlighted;
                item.addEventListener('click', function() {
                    searchInput.value = suggestion;
                    autocompleteResults.style.display = 'none';
                    searchPlayers();
                });
                
                autocompleteResults.appendChild(item);
            });
            
            autocompleteResults.style.display = 'block';
        } else {
            autocompleteResults.style.display = 'none';
        }
    });
    
    // Скрываем автодополнение при клике вне поля
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !autocompleteResults.contains(e.target)) {
            autocompleteResults.style.display = 'none';
        }
    });
    
    // Обработка клавиш в поле поиска
    searchInput.addEventListener('keydown', function(e) {
        const items = autocompleteResults.querySelectorAll('.autocomplete-item');
        let activeItem = autocompleteResults.querySelector('.autocomplete-item.active');
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (!activeItem) {
                items[0]?.classList.add('active');
            } else {
                activeItem.classList.remove('active');
                const next = activeItem.nextElementSibling || items[0];
                next.classList.add('active');
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (!activeItem) {
                items[items.length - 1]?.classList.add('active');
            } else {
                activeItem.classList.remove('active');
                const prev = activeItem.previousElementSibling || items[items.length - 1];
                prev.classList.add('active');
            }
        } else if (e.key === 'Enter') {
            if (activeItem) {
                e.preventDefault();
                searchInput.value = activeItem.textContent;
                autocompleteResults.style.display = 'none';
                searchPlayers();
            }
        }
    });
}

// Поиск игроков
function searchPlayers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const activeTab = document.querySelector('.tab-content.active').id;
    
    if (searchTerm === '') {
        // Если поиск пустой, показываем все данные
        if (activeTab === 'day1') {
            fillDay1Table();
        } else if (activeTab === 'day2') {
            fillDay2Table();
        } else if (activeTab === 'day3') {
            fillDay3Table();
        } else if (activeTab === 'final') {
            fillFinalTable();
        } else if (activeTab === 'bounties') {
            fillBountiesTable();
        } else if (activeTab === 'blinds') {
            fillBlindsTable();
        }
        document.getElementById('searchResults').style.display = 'none';
        return;
    }
    
    // Ищем игроков по всем вкладкам
    let foundPlayers = [];
    
    if (activeTab === 'day1') {
        foundPlayers = day1Players.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillDay1TableWithSearch(foundPlayers, searchTerm);
    } else if (activeTab === 'day2') {
        foundPlayers = day2Players.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillDay2TableWithSearch(foundPlayers, searchTerm);
    } else if (activeTab === 'day3') {
        foundPlayers = day3Players.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillDay3TableWithSearch(foundPlayers, searchTerm);
    } else if (activeTab === 'final') {
        const allFinalPlayers = getAllFinalPlayers();
        foundPlayers = allFinalPlayers.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillFinalTableWithSearch(foundPlayers, searchTerm);
    } else if (activeTab === 'bounties') {
        foundPlayers = bountyPlayers.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
        fillBountiesTableWithSearch(foundPlayers, searchTerm);
    } else if (activeTab === 'blinds') {
        // Для блайндов поиск не применяется
        fillBlindsTable();
        document.getElementById('searchResults').style.display = 'none';
        return;
    }
    
    // Показываем результаты поиска
    const resultsCount = document.getElementById('resultsCount');
    const searchResults = document.getElementById('searchResults');
    
    if (foundPlayers.length > 0) {
        resultsCount.textContent = foundPlayers.length;
        searchResults.style.display = 'block';
    } else {
        searchResults.style.display = 'block';
        resultsCount.textContent = '0';
    }
}

// Функция для обновления дат в статистике
function updateDates(nextGame, finalDate) {
    const dateItems = document.querySelectorAll('.date-value');
    if (dateItems[0]) dateItems[0].innerHTML = nextGame;
    if (dateItems[1]) dateItems[1].textContent = finalDate;
}

// Обновление статистики при переключении вкладок
function updateStats() {
    const totalPlayersElement = document.getElementById('totalPlayers');
    const averageStackElement = document.getElementById('averageStack');
    const specialTotalPlayersElement = document.getElementById('specialTotalPlayers');
    const activeTab = document.querySelector('.tab-content.active').id;
    
    let totalPlayers, averageStack;
    
    if (activeTab === 'day1') {
        totalPlayers = day1Players.length;
        averageStack = calculateAverageStack();
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        // Обновляем даты для Дня 1
        updateDates('Финал<br>8.11.2025', '8.11.2025');
    } else if (activeTab === 'day2') {
        totalPlayers = day2Players.length;
        averageStack = calculateAverageStack();
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        // Обновляем даты для Дня 2
        updateDates('Финал<br>8.11.2025', '8.11.2025');
    } else if (activeTab === 'day3') {
        totalPlayers = day3Players.length;
        averageStack = calculateAverageStack();
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        // Обновляем даты для Дня 3
        updateDates('Финал<br>8.11.2025', '8.11.2025');
    } else if (activeTab === 'bounties') {
        totalPlayers = bountyPlayers.length;
        averageStack = 0;
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates('Финал<br>8.11.2025', '8.11.2025');
    } else if (activeTab === 'blinds') {
        totalPlayers = blindsData.length;
        averageStack = 0;
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates('Финал<br>8.11.2025', '8.11.2025');
    } else if (activeTab === 'final2025') {
        totalPlayers = 11; // 11 участников в финале финалистов
        animateCounter(specialTotalPlayersElement, totalPlayers);
    } else if (activeTab === 'satellite2025') {
        totalPlayers = 21; // 21 участник в сателлите
        animateCounter(specialTotalPlayersElement, totalPlayers);
    } else {
        const finalPlayers = getAllFinalPlayers();
        totalPlayers = finalPlayers.length;
        averageStack = calculateAverageStack();
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates('Финал<br>8.11.2025', '8.11.2025');
    }
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Турнир Дойля Брансона загружен!');
    
    fillDay1Table();
    fillDay2Table();
    fillDay3Table();
    fillFinalTable();
    fillBountiesTable();
    fillBlindsTable();
    setupAutocomplete();
    
    // Показываем вкладку ФИНАЛ при загрузке
    showTab('final');
    
    document.getElementById('searchInput').addEventListener('input', searchPlayers);
    
    document.getElementById('clearSearch').addEventListener('click', function() {
        document.getElementById('searchInput').value = '';
        document.getElementById('autocompleteResults').style.display = 'none';
        searchPlayers();
    });
    
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', updateStats);
    });
    
    window.addEventListener('scroll', function() {
        document.getElementById('autocompleteResults').style.display = 'none';
    });
});
