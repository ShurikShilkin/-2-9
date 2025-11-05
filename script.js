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

// Данные игроков для Дня 3 (пока пустые - заполним позже)
const day3Players = [];

// Данные для Охоты за головами
const bountyPlayers = [
    { name: "Даня КДД", bounty: 2400 },
    { name: "Саша Коч", bounty: 1500 },
    { name: "Сергей Ман", bounty: 1350 },
    { name: "Александр Гиг", bounty: 1200 },
    { name: "Мария Павлова", bounty: 1200 },
    { name: "Даша Yellow", bounty: 1200 },
    { name: "Вадим Константинов", bounty: 1200 },
    { name: "Руф", bounty: 1200 },
    { name: "Влад Пив", bounty: 1200 },
    { name: "Артур Король", bounty: 1200 },
    { name: "Семён Ануфриев", bounty: 1050 },
    { name: "Родион Шашурин", bounty: 1050 },
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
    { name: "Даша Гри", bounty: 600 },
    { name: "Искандер", bounty: 600 },
    { name: "Константин Сидорин", bounty: 600 },
    { name: "Том", bounty: 600 },
    { name: "Михаил Козадой", bounty: 300 },
    { name: "Вова Гриненко", bounty: 300 },
    { name: "Иван Антипов", bounty: 300 },
    { name: "Egrinderolls", bounty: 300 },
    { name: "Асхат Суханбердин", bounty: 300 },
    { name: "Надя Жб", bounty: 300 },
    { name: "Богдан Анц", bounty: 150 }
];

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
    } else if (activeTab === 'bounties' || activeTab === 'final2025' || activeTab === 'satellite2025') {
        return 0; // Для специальных вкладок не считаем средний стек
    } else {
        // Для финала считаем среднее от итогов (только положительные)
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

// Расчет изменений позиций для Финала (относительно Дня 1)
function calculateFinalPositionChanges() {
    const changes = new Map();
    
    // Создаем карту позиций из Дня 1
    const day1Positions = new Map();
    day1Players.forEach((player, index) => {
        day1Positions.set(player.name, index + 1);
    });
    
    // Получаем финальных игроков отсортированных по итогу (День 1 + День 2)
    const finalPlayers = getAllFinalPlayers();
    finalPlayers.sort((a, b) => (b.day1 + b.day2 + b.day3) - (a.day1 + a.day2 + a.day3));
    
    // Рассчитываем изменения для финальных игроков
    finalPlayers.forEach((player, newPosition) => {
        const oldPosition = day1Positions.get(player.name);
        
        if (oldPosition) {
            // Игрок был в Дне 1 - считаем изменение позиции
            const change = oldPosition - (newPosition + 1);
            changes.set(player.name, {
                change: Math.abs(change),
                type: change > 0 ? 'up' : change < 0 ? 'down' : 'same'
            });
        } else {
            // Новый игрок (не было в Дне 1)
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
    
    if (day3Players.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 40px; color: #666;">
                    Данные по Дню 3 появятся после 6.11.2025
                </td>
            </tr>
        `;
        return;
    }
    
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
    
    // Сортируем по убыванию общего итога
    finalPlayers.sort((a, b) => (b.day1 + b.day2 + b.day3) - (a.day1 + a.day2 + a.day3));
    
    // Присваиваем новые номера для финала
    finalPlayers.forEach((player, index) => {
        const row = document.createElement('tr');
        const total = player.day1 + player.day2 + player.day3;
        const changeData = positionChanges.get(player.name);
        const totalClass = total >= 0 ? "final-total positive" : "final-total negative";
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${player.name}</td>
            <td>${createPositionChangeHTML(changeData)}</td>
            <td class="result-column">${formatNumber(player.day1)}</td>
            <td class="result-column">${formatNumber(player.day2)}</td>
            <td class="result-column">${formatNumber(player.day3)}</td>
            <td class="${totalClass}">${formatNumber(total)}</td>
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
    
    // Сортируем как в оригинальной таблице
    allFinalPlayers.sort((a, b) => (b.day1 + b.day2 + b.day3) - (a.day1 + a.day2 + a.day3));
    
    // Показываем только найденных игроков с их позициями в финале
    const filteredPlayers = allFinalPlayers.filter(player => 
        foundPlayers.some(found => found.name === player.name)
    );
    
    if (filteredPlayers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 40px; color: #666;">
                    Игроки не найдены
                </td>
            </tr>
        `;
        return;
    }
    
    filteredPlayers.forEach((player, index) => {
        const row = document.createElement('tr');
        row.className = 'search-highlight';
        
        const total = player.day1 + player.day2 + player.day3;
        const changeData = positionChanges.get(player.name);
        const totalClass = total >= 0 ? "final-total positive" : "final-total negative";
        
        // Находим оригинальную позицию игрока в финале
        const originalPosition = allFinalPlayers.findIndex(p => p.name === player.name) + 1;
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${originalPosition}</td>
            <td class="player-name">${highlightedName}</td>
            <td>${createPositionChangeHTML(changeData)}</td>
            <td class="result-column">${formatNumber(player.day1)}</td>
            <td class="result-column">${formatNumber(player.day2)}</td>
            <td class="result-column">${formatNumber(player.day3)}</td>
            <td class="${totalClass}">${formatNumber(total)}</td>
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
    } else if (activeTab === 'day2') {
        totalPlayers = day2Players.length;
        averageStack = calculateAverageStack();
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
    } else if (activeTab === 'day3') {
        totalPlayers = day3Players.length;
        averageStack = calculateAverageStack();
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
    } else if (activeTab === 'bounties') {
        totalPlayers = bountyPlayers.length;
        averageStack = 0;
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
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
