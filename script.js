// Данные игроков для Дня 1
const day1Players = [
    { number: 1, name: "Шурик Шилкин", participation: 1000, start: 3100, rebuy: 0, exit: 17355, finalChips: 3300, result: 4300 },
    { number: 2, name: "Славяна", participation: 1000, start: 3100, rebuy: 0, exit: 17045, finalChips: 3200, result: 4200 },
    { number: 3, name: "Сергей Ман", participation: 1000, start: 3100, rebuy: 0, exit: 7550, finalChips: 3100, result: 4100 },
    { number: 4, name: "Инна М", participation: 1000, start: 3100, rebuy: 0, exit: 7255, finalChips: 3000, result: 4000 },
    { number: 5, name: "Арсений G", participation: 1000, start: 3100, rebuy: 0, exit: 6215, finalChips: 2900, result: 3900 },
    { number: 6, name: "Даня Хал", participation: 1000, start: 3100, rebuy: 0, exit: 5070, finalChips: 2700, result: 3700 },
    { number: 7, name: "Роман Егоров", participation: 1000, start: 3100, rebuy: 0, exit: 4550, finalChips: 2600, result: 3600 },
    { number: 8, name: "Макс Ник", participation: 1000, start: 3100, rebuy: 0, exit: 4525, finalChips: 2500, result: 3500 },
    { number: 9, name: "Полина Матыцына", participation: 1000, start: 3100, rebuy: 0, exit: 3870, finalChips: 2100, result: 3100 },
    { number: 10, name: "Саша Коч", participation: 1000, start: 3100, rebuy: 1000, exit: 4485, finalChips: 2400, result: 2900 },
    { number: 11, name: "Семён Ануфриев", participation: 1000, start: 3100, rebuy: 2000, exit: 5200, finalChips: 2800, result: 2800 },
    { number: 12, name: "Саша Тяжелов", participation: 1000, start: 3100, rebuy: 0, exit: 2360, finalChips: 1800, result: 2800 },
    { number: 13, name: "Александр Игнат", participation: 1000, start: 3100, rebuy: 0, exit: 1420, finalChips: 1700, result: 2700 },
    { number: 14, name: "Богдан Анц", participation: 1000, start: 3100, rebuy: 0, exit: 0, finalChips: 1500, result: 2500 },
    { number: 15, name: "Егор Полесов", participation: 1000, start: 3100, rebuy: 2000, exit: 4100, finalChips: 2300, result: 2300 },
    { number: 16, name: "Egrinderolls", participation: 1000, start: 3100, rebuy: 2000, exit: 3965, finalChips: 2200, result: 2200 },
    { number: 17, name: "Надя Жб", participation: 1000, start: 3100, rebuy: 0, exit: 0, finalChips: 1200, result: 2200 },
    { number: 18, name: "Оксана Б", participation: 1000, start: 3100, rebuy: 2000, exit: 3105, finalChips: 2000, result: 2000 },
    { number: 19, name: "Серафима Онежко", participation: 1000, start: 3100, rebuy: 0, exit: 0, finalChips: 1000, result: 2000 },
    { number: 20, name: "Макар Аве", participation: 1000, start: 3100, rebuy: 2000, exit: 2730, finalChips: 1900, result: 1900 },
    { number: 21, name: "Светлана Мельченко", participation: 1000, start: 3100, rebuy: 4000, exit: 0, finalChips: 1600, result: 1600 },
    { number: 22, name: "Вадим Кри", participation: 1000, start: 3100, rebuy: 2000, exit: 0, finalChips: 1400, result: 1400 },
    { number: 23, name: "Саша Бел", participation: 1000, start: 3100, rebuy: 2000, exit: 0, finalChips: 1300, result: 1300 },
    { number: 24, name: "Иван Тре", participation: 1000, start: 3100, rebuy: 2000, exit: 0, finalChips: 1100, result: 1100 }
];

// Данные игроков для Дня 2 (обновленные)
const day2Players = [
    { number: 1, name: "Никита Зейн", participation: 1000, start: 3100, rebuy: 0, exit: 17680, finalChips: 3000, result: 4000 },
    { number: 2, name: "Константин Сидорин", participation: 1000, start: 3100, rebuy: 0, exit: 17215, finalChips: 2900, result: 3900 },
    { number: 3, name: "Светлана Мельченко", participation: 1000, start: 3100, rebuy: 5200, exit: 11775, finalChips: 2800, result: 1200 },
    { number: 4, name: "Асхат Суханбердин", participation: 1000, start: 3100, rebuy: 0, exit: 10935, finalChips: 2700, result: 3700 },
    { number: 5, name: "Шурик Шилкин", participation: 1000, start: 3100, rebuy: 0, exit: 10050, finalChips: 2600, result: 3600 },
    { number: 6, name: "Богдан Анц", participation: 1000, start: 3100, rebuy: 0, exit: 9090, finalChips: 2500, result: 3500 },
    { number: 7, name: "Даша Гри", participation: 1000, start: 3100, rebuy: 2000, exit: 8290, finalChips: 2400, result: 2400 },
    { number: 8, name: "Саша Тяжелов", participation: 1000, start: 3100, rebuy: 0, exit: 6645, finalChips: 2300, result: 3300 },
    { number: 9, name: "Полина Матыцына", participation: 1000, start: 3100, rebuy: 0, exit: 2355, finalChips: 2200, result: 3200 },
    { number: 10, name: "Макс Ник", participation: 1000, start: 3100, rebuy: 0, exit: 1165, finalChips: 2100, result: 3100 },
    { number: 11, name: "Egrinderolls", participation: 1000, start: 3100, rebuy: 4000, exit: 0, finalChips: 2000, result: 1000 },
    { number: 12, name: "Славяна", participation: 1000, start: 3100, rebuy: 0, exit: 0, finalChips: 1900, result: 2900 },
    { number: 13, name: "Василий АБВ", participation: 1000, start: 3100, rebuy: 0, exit: 0, finalChips: 1800, result: 2800 },
    { number: 14, name: "Свидетель", participation: 1000, start: 3100, rebuy: 2000, exit: 0, finalChips: 1700, result: 1700 },
    { number: 15, name: "Саша Коч", participation: 1000, start: 3100, rebuy: 900, exit: 0, finalChips: 1600, result: 2150 },
    { number: 16, name: "Сергей Ман", participation: 1000, start: 3100, rebuy: 0, exit: 0, finalChips: 1500, result: 2500 },
    { number: 17, name: "Даня КДД", participation: 1000, start: 3100, rebuy: 2000, exit: 0, finalChips: 1400, result: 1400 },
    { number: 18, name: "Роман Егоров", participation: 1000, start: 3100, rebuy: 2000, exit: 0, finalChips: 1300, result: 1300 },
    { number: 19, name: "Инна М", participation: 1000, start: 3100, rebuy: 2000, exit: 0, finalChips: 1200, result: 1200 },
    { number: 20, name: "Надя Жб", participation: 1000, start: 3100, rebuy: 0, exit: 0, finalChips: 1100, result: 2100 },
    { number: 21, name: "Иван Баж", participation: 1000, start: 3100, rebuy: 2000, exit: 0, finalChips: 1000, result: 1000 }
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
    
    // Активируем соответствующую кнопку
    event.currentTarget.classList.add('active');
    
    // Обновляем заголовок фазы турнира
    const phaseElement = document.getElementById('currentPhase');
    if (tabName === 'day1') {
        phaseElement.textContent = 'День 1 - 25.09.2025';
    } else if (tabName === 'day2') {
        phaseElement.textContent = 'День 2 - 2.10.2025';
    } else if (tabName === 'final') {
        phaseElement.textContent = 'Финал - 18.10.2025';
    }
    
    // Сбрасываем развертывание таблицы при переключении вкладок
    resetTableExpand();
    
    // Обновляем поиск для активной вкладки
    searchPlayers();
    
    // Обновляем статистику
    updateStats();
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

// Расчет среднего финального стека для активного дня
function calculateAverageStack() {
    const activeTab = document.querySelector('.tab-content.active').id;
    let players;
    
    if (activeTab === 'day1') {
        players = day1Players;
        const total = players.reduce((sum, player) => sum + Number(player.result), 0);
        return Math.round(total / players.length);
    } else if (activeTab === 'day2') {
        players = day2Players;
        const total = players.reduce((sum, player) => sum + Number(player.result), 0);
        return Math.round(total / players.length);
    } else {
        // Для финала считаем среднее от итогов (столбец ИТОГИ)
        players = getAllFinalPlayers();
        const total = players.reduce((sum, player) => sum + (player.day1 + player.day2), 0);
        return Math.round(total / players.length);
    }
}

// Получение всех игроков для финала (объединение дней)
function getAllFinalPlayers() {
    const allPlayersMap = new Map();
    
    // Добавляем игроков из дня 1
    day1Players.forEach(player => {
        allPlayersMap.set(player.name, {
            name: player.name,
            day1: player.result,
            day2: 0
        });
    });
    
    // Обновляем/добавляем игроков из дня 2
    day2Players.forEach(player => {
        if (allPlayersMap.has(player.name)) {
            // Игрок уже был в дне 1 - обновляем день 2
            allPlayersMap.get(player.name).day2 = player.result;
        } else {
            // Новый игрок - добавляем
            allPlayersMap.set(player.name, {
                name: player.name,
                day1: 0,
                day2: player.result
            });
        }
    });
    
    return Array.from(allPlayersMap.values());
}

// Расчет изменений позиций для Дня 2
function calculateDay2PositionChanges() {
    const changes = new Map();
    
    // Создаем карту позиций из Дня 1 (по имени -> позиция)
    const day1Positions = new Map();
    day1Players.forEach((player, index) => {
        day1Positions.set(player.name, index + 1);
    });
    
    // Рассчитываем изменения для игроков Дня 2
    day2Players.forEach((player, newPosition) => {
        const oldPosition = day1Positions.get(player.name);
        
        if (oldPosition) {
            // Игрок был в Дне 1
            const change = oldPosition - (newPosition + 1); // +1 потому что newPosition это индекс
            changes.set(player.name, {
                change: change,
                type: change > 0 ? 'up' : change < 0 ? 'down' : 'same'
            });
        } else {
            // Новый игрок
            changes.set(player.name, {
                change: null,
                type: 'new'
            });
        }
    });
    
    return changes;
}

// Расчет изменений позиций для Финала
function calculateFinalPositionChanges() {
    const changes = new Map();
    
    // Создаем карту позиций из Дня 2 (по имени -> позиция)
    const day2Positions = new Map();
    day2Players.forEach((player, index) => {
        day2Positions.set(player.name, index + 1);
    });
    
    // Получаем финальных игроков отсортированных по итогу
    const finalPlayers = getAllFinalPlayers();
    finalPlayers.sort((a, b) => (b.day1 + b.day2) - (a.day1 + a.day2));
    
    // Рассчитываем изменения для финальных игроков
    finalPlayers.forEach((player, newPosition) => {
        const oldPosition = day2Positions.get(player.name);
        
        if (oldPosition) {
            // Игрок был в Дне 2
            const change = oldPosition - (newPosition + 1);
            changes.set(player.name, {
                change: change,
                type: change > 0 ? 'up' : change < 0 ? 'down' : 'same'
            });
        } else {
            // Игрок не был в Дне 2 (только в Дне 1)
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
            text = `${change}`;
            break;
        case 'same':
            arrow = '→';
            text = '0';
            break;
        case 'new':
            arrow = '🆕';
            text = 'NEW';
            break;
    }
    
    return `<div class="position-change position-${type}">
        <span class="change-arrow">${arrow}</span>${text}
    </div>`;
}

// Заполнение таблицы Дня 1
function fillDay1Table() {
    const tableBody = document.getElementById('playersTable');
    tableBody.innerHTML = '';
    
    day1Players.forEach((player) => {
        const row = document.createElement('tr');
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${player.name}</td>
            <td>${formatNumber(player.participation)}</td>
            <td>${formatNumber(player.start)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="chips-positive">${formatNumber(player.finalChips)}</td>
            <td class="result-column">${formatNumber(player.result)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Заполнение таблицы Дня 2
function fillDay2Table() {
    const tableBody = document.getElementById('day2Table');
    tableBody.innerHTML = '';
    
    const positionChanges = calculateDay2PositionChanges();
    
    day2Players.forEach((player) => {
        const row = document.createElement('tr');
        const changeData = positionChanges.get(player.name);
        
        const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
        const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
        
        row.innerHTML = `
            <td class="number-column">${player.number}</td>
            <td class="player-name">${player.name}</td>
            <td>${createPositionChangeHTML(changeData)}</td>
            <td>${formatNumber(player.participation)}</td>
            <td>${formatNumber(player.start)}</td>
            <td>${formatNumber(player.rebuy)}</td>
            <td class="${exitClass}">${exitDisplay}</td>
            <td class="chips-positive">${formatNumber(player.finalChips)}</td>
            <td class="result-column">${formatNumber(player.result)}</td>
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
    finalPlayers.sort((a, b) => (b.day1 + b.day2) - (a.day1 + a.day2));
    
    // Присваиваем новые номера для финала
    finalPlayers.forEach((player, index) => {
        const row = document.createElement('tr');
        const total = player.day1 + player.day2;
        const changeData = positionChanges.get(player.name);
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${player.name}</td>
            <td>${createPositionChangeHTML(changeData)}</td>
            <td class="result-column">${formatNumber(player.day1)}</td>
            <td class="result-column">${formatNumber(player.day2)}</td>
            <td class="final-total">${formatNumber(total)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Автодополнение для поиска
function setupAutocomplete() {
    const searchInput = document.getElementById('searchInput');
    const autocompleteResults = document.getElementById('autocompleteResults');
    
    // Получаем все уникальные имена игроков
    const allPlayers = [...day1Players, ...day2Players];
    const playerNames = [...new Set(allPlayers.map(p => p.name))];
    
    searchInput.addEventListener('input', function() {
        const value = this.value.toLowerCase().trim();
        autocompleteResults.innerHTML = '';
        
        if (value.length < 2) {
            autocompleteResults.style.display = 'none';
            return;
        }
        
        const suggestions = playerNames.filter(name => 
            name.toLowerCase().includes(value)
        ).slice(0, 8); // Ограничиваем 8 подсказками
        
        if (suggestions.length > 0) {
            suggestions.forEach(suggestion => {
                const item = document.createElement('div');
                item.className = 'autocomplete-item';
                
                // Подсветка совпадающей части
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
        // Если поиск пустой - показываем все данные
        if (activeTab === 'day1') {
            fillDay1Table();
        } else if (activeTab === 'day2') {
            fillDay2Table();
        } else {
            fillFinalTable();
        }
        document.getElementById('searchResults').style.display = 'none';
        return;
    }
    
    let filteredPlayers;
    if (activeTab === 'day1') {
        filteredPlayers = day1Players.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
    } else if (activeTab === 'day2') {
        filteredPlayers = day2Players.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
    } else {
        filteredPlayers = getAllFinalPlayers().filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
    }
    
    if (filteredPlayers.length > 0) {
        const tableBody = document.getElementById(activeTab === 'day1' ? 'playersTable' : 
                                               activeTab === 'day2' ? 'day2Table' : 'finalTable');
        
        tableBody.innerHTML = '';
        
        if (activeTab === 'day1') {
            filteredPlayers.forEach((player) => {
                const row = document.createElement('tr');
                
                const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
                const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
                
                row.innerHTML = `
                    <td class="number-column">${player.number}</td>
                    <td class="player-name">${player.name}</td>
                    <td>${formatNumber(player.participation)}</td>
                    <td>${formatNumber(player.start)}</td>
                    <td>${formatNumber(player.rebuy)}</td>
                    <td class="${exitClass}">${exitDisplay}</td>
                    <td class="chips-positive">${formatNumber(player.finalChips)}</td>
                    <td class="result-column">${formatNumber(player.result)}</td>
                `;
                
                tableBody.appendChild(row);
            });
        } else if (activeTab === 'day2') {
            const positionChanges = calculateDay2PositionChanges();
            
            filteredPlayers.forEach((player) => {
                const row = document.createElement('tr');
                const changeData = positionChanges.get(player.name);
                
                const exitClass = player.exit !== 0 ? "exit-time" : "exit-zero";
                const exitDisplay = player.exit !== 0 ? formatNumber(player.exit) : "-";
                
                row.innerHTML = `
                    <td class="number-column">${player.number}</td>
                    <td class="player-name">${player.name}</td>
                    <td>${createPositionChangeHTML(changeData)}</td>
                    <td>${formatNumber(player.participation)}</td>
                    <td>${formatNumber(player.start)}</td>
                    <td>${formatNumber(player.rebuy)}</td>
                    <td class="${exitClass}">${exitDisplay}</td>
                    <td class="chips-positive">${formatNumber(player.finalChips)}</td>
                    <td class="result-column">${formatNumber(player.result)}</td>
                `;
                
                tableBody.appendChild(row);
            });
        } else {
            // Для финала
            const positionChanges = calculateFinalPositionChanges();
            const sortedPlayers = [...filteredPlayers].sort((a, b) => (b.day1 + b.day2) - (a.day1 + a.day2));
            
            sortedPlayers.forEach((player, index) => {
                const row = document.createElement('tr');
                const total = player.day1 + player.day2;
                const changeData = positionChanges.get(player.name);
                
                row.innerHTML = `
                    <td class="number-column">${index + 1}</td>
                    <td class="player-name">${player.name}</td>
                    <td>${createPositionChangeHTML(changeData)}</td>
                    <td class="result-column">${formatNumber(player.day1)}</td>
                    <td class="result-column">${formatNumber(player.day2)}</td>
                    <td class="final-total">${formatNumber(total)}</td>
                `;
                
                tableBody.appendChild(row);
            });
        }
        
        document.getElementById('searchResults').style.display = 'block';
        document.getElementById('resultsCount').textContent = filteredPlayers.length;
    } else {
        document.getElementById('searchResults').style.display = 'block';
        document.getElementById('resultsCount').textContent = '0';
        
        const tableBody = document.getElementById(activeTab === 'day1' ? 'playersTable' : 
                                               activeTab === 'day2' ? 'day2Table' : 'finalTable');
        
        const colSpan = activeTab === 'final' ? '6' : activeTab === 'day2' ? '9' : '8';
        tableBody.innerHTML = `
            <tr>
                <td colspan="${colSpan}" style="text-align: center; padding: 40px; color: #666;">
                    Игроки не найдены
                </td>
            </tr>
        `;
    }
}

// Обновление статистики при переключении вкладок
function updateStats() {
    const totalPlayersElement = document.getElementById('totalPlayers');
    const averageStackElement = document.getElementById('averageStack');
    const activeTab = document.querySelector('.tab-content.active').id;
    
    let totalPlayers, averageStack;
    
    if (activeTab === 'day1') {
        totalPlayers = day1Players.length;
        averageStack = calculateAverageStack();
    } else if (activeTab === 'day2') {
        totalPlayers = day2Players.length;
        averageStack = calculateAverageStack();
    } else {
        const finalPlayers = getAllFinalPlayers();
        totalPlayers = finalPlayers.length;
        averageStack = calculateAverageStack();
    }
    
    // Анимируем обновление счетчиков
    animateCounter(totalPlayersElement, totalPlayers);
    animateCounter(averageStackElement, averageStack);
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Турнирная таблица загружена!');
    
    // Инициализация
    fillDay1Table();
    fillDay2Table();
    fillFinalTable();
    setupAutocomplete();
    
    // Анимация статистики
    setTimeout(() => {
        updateStats();
    }, 150);
    
    // Поиск
    document.getElementById('searchInput').addEventListener('input', searchPlayers);
    
    // Очистка поиска
    document.getElementById('clearSearch').addEventListener('click', function() {
        document.getElementById('searchInput').value = '';
        document.getElementById('autocompleteResults').style.display = 'none';
        searchPlayers();
    });
    
    // Обновление статистики при переключении вкладок
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', updateStats);
    });
    
    // Закрытие автодополнения при скролле
    window.addEventListener('scroll', function() {
        document.getElementById('autocompleteResults').style.display = 'none';
    });
});
