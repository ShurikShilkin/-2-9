// Данные игроков для Дня 1
const day1Players = [
    { number: 1, name: "Вася Е", participation: 3100, start: 2100, rebuy: 0, exit: 14485, result: 15485 },
    { number: 2, name: "Богдан Анц", participation: 3100, start: 2100, rebuy: 0, exit: 12000, result: 13000 },
    { number: 3, name: "Вова Гриненко", participation: 3100, start: 2100, rebuy: 0, exit: 11040, result: 12040 },
    { number: 4, name: "Анна К", participation: 3100, start: 2100, rebuy: 0, exit: 10640, result: 11640 },
    { number: 5, name: "Евгений Ц", participation: 3100, start: 2100, rebuy: 0, exit: 9275, result: 10275 },
    { number: 6, name: "Михаил Козадой", participation: 3100, start: 2100, rebuy: 0, exit: 6740, result: 7740 },
    { number: 7, name: "Иван Антипов", participation: 3100, start: 2100, rebuy: 2000, exit: 7175, result: 6175 },
    { number: 8, name: "Славяна", participation: 3100, start: 2100, rebuy: 0, exit: 4215, result: 5215 },
    { number: 9, name: "Владимир Vladecbeer", participation: 3100, start: 2100, rebuy: 0, exit: 3735, result: 4735 },
    { number: 10, name: "Свидетель", participation: 3100, start: 2100, rebuy: 0, exit: 3575, result: 4575 },
    { number: 11, name: "Полина Матыцына", participation: 3100, start: 2100, rebuy: 0, exit: 1490, result: 2490 },
    { number: 12, name: "Марина Ермакова", participation: 3100, start: 2100, rebuy: 0, exit: 660, result: 1660 },
    { number: 13, name: "Шурик Шилкин", participation: 3100, start: 2100, rebuy: 0, exit: 300, result: 1300 },
    { number: 14, name: "Макар Аве", participation: 3100, start: 2100, rebuy: 2000, exit: 2270, result: 1270 },
    { number: 15, name: "Саша Коч", participation: 3100, start: 2100, rebuy: 0, exit: 0, result: 1000 },
    { number: 16, name: "Саша Бел", participation: 3100, start: 2100, rebuy: 0, exit: 0, result: 1000 },
    { number: 17, name: "Светлана Иванова", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 18, name: "Асхат Суханбердин", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 19, name: "Михаил Наб", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 20, name: "Макс Ник", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 21, name: "Даня КДД", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 22, name: "Максим Spy", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 23, name: "Николай Роз", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 24, name: "Сергей Ман", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 25, name: "Александр Будда", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 26, name: "Никита Зейн", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 },
    { number: 27, name: "Инна М", participation: 3100, start: 2100, rebuy: 2000, exit: 0, result: -1000 }
];

// Данные для охоты за головами
const bountyPlayers = [
    { name: "Александр Гиг", bounty: 1200 },
    { name: "Мария Павлова", bounty: 1200 },
    { name: "Даша Yellow", bounty: 1200 },
    { name: "Михаил Козадой", bounty: 1200 },
    { name: "Вадим Константинов", bounty: 1200 },
    { name: "Руф", bounty: 1200 },
    { name: "Влад Пив", bounty: 1200 },
    { name: "Артур Король", bounty: 1200 },
    { name: "Шурик Шилкин", bounty: 1200 },
    { name: "Даня Гол", bounty: 1200 },
    { name: "Никита Yellow", bounty: 1200 },
    { name: "Богдан Анц", bounty: 1200 },
    { name: "Семён Ануфриев", bounty: 1200 },
    { name: "Вова Гриненко", bounty: 900 },
    { name: "Свидетель", bounty: 900 },
    { name: "Жан Балацкий", bounty: 600 },
    { name: "Иван Чемодан", bounty: 600 },
    { name: "Олег Сми", bounty: 600 },
    { name: "Egrinderolls", bounty: 600 },
    { name: "Саша Тяжелов", bounty: 600 },
    { name: "Ксюша Петрушина", bounty: 600 },
    { name: "Дмитрий Ник", bounty: 600 },
    { name: "Андрей Ф", bounty: 600 },
    { name: "Ладали", bounty: 600 },
    { name: "Даша Гри", bounty: 600 },
    { name: "Искандер", bounty: 600 },
    { name: "Надя Жб", bounty: 600 },
    { name: "Константин Сидорин", bounty: 600 },
    { name: "Славяна", bounty: 600 },
    { name: "Андрей Джип", bounty: 600 },
    { name: "Вася Е", bounty: 600 },
    { name: "Иван Антипов", bounty: 300 },
    { name: "Асхат Суханбердин", bounty: 300 },
    { name: "Саша Коч", bounty: 300 },
    { name: "Даня КДД", bounty: 300 }
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
        phaseElement.textContent = 'День 1 - 13.11.2025';
    } else if (tabName === 'day2') {
        phaseElement.textContent = 'День 2 - 20.11.2025';
    } else if (tabName === 'day3') {
        phaseElement.textContent = 'День 3 - 27.11.2025';
    } else if (tabName === 'final') {
        phaseElement.textContent = 'Финал - 29.11.2025';
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
    } else if (activeTab === 'final') {
        // Для финала считаем среднее от итогов Дня 1
        const positiveResults = day1Players.filter(player => player.result > 0);
        if (positiveResults.length === 0) return 0;
        const total = positiveResults.reduce((sum, player) => sum + Number(player.result), 0);
        return Math.round(total / positiveResults.length);
    } else if (activeTab === 'bounties' || activeTab === 'final2025' || activeTab === 'satellite2025') {
        return 0; // Для специальных вкладок не считаем средний стек
    } else {
        // Для остальных вкладок пока возвращаем 0
        return 0;
    }
    
    // Для дней считаем только положительные результаты
    const positiveResults = players.filter(player => player.result > 0);
    if (positiveResults.length === 0) return 0;
    const total = positiveResults.reduce((sum, player) => sum + Number(player.result), 0);
    return Math.round(total / positiveResults.length);
}

// Получение всех игроков для финала (пока только День 1)
function getAllFinalPlayers() {
    return day1Players.map(player => ({
        name: player.name,
        day1: player.result,
        day2: 0,
        day3: 0
    }));
}

// Форматирование чисел с разделителями
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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

// Заполнение таблицы Финала
function fillFinalTable() {
    const tableBody = document.getElementById('finalTable');
    tableBody.innerHTML = '';
    
    // Получаем всех игроков для финала (пока только День 1)
    const finalPlayers = getAllFinalPlayers();
    
    // Сортируем по убыванию итогов Дня 1
    finalPlayers.sort((a, b) => b.day1 - a.day1);
    
    // Присваиваем новые номера для финала
    finalPlayers.forEach((player, index) => {
        const row = document.createElement('tr');
        const qualifyingTotal = player.day1 + player.day2 + player.day3;
        const totalClass = qualifyingTotal >= 0 ? "final-total positive" : "final-total negative";
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${player.name}</td>
            <td></td> <!-- Изменение (пока пусто) -->
            <td class="result-column">${formatNumber(player.day1)}</td>
            <td class="result-column">${formatNumber(player.day2)}</td>
            <td class="result-column">${formatNumber(player.day3)}</td>
            <td class="result-column">${formatNumber(qualifyingTotal)}</td>
            <td class="chips-positive">-</td> <!-- Участие в финале -->
            <td class="chips-positive">-</td> <!-- Т2 -->
            <td class="chips-positive">-</td> <!-- Охота за головами -->
            <td class="${totalClass}">${formatNumber(qualifyingTotal)}</td>
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

// Функции для заполнения таблиц с поиском

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

function fillFinalTableWithSearch(foundPlayers, searchTerm) {
    const tableBody = document.getElementById('finalTable');
    tableBody.innerHTML = '';
    
    const allFinalPlayers = getAllFinalPlayers();
    
    // Сортируем как в оригинальной таблице
    allFinalPlayers.sort((a, b) => b.day1 - a.day1);
    
    // Показываем только найденных игроков с их позициями в финале
    const filteredPlayers = allFinalPlayers.filter(player => 
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
        const totalClass = qualifyingTotal >= 0 ? "final-total positive" : "final-total negative";
        
        // Находим оригинальную позицию игрока в финале
        const originalPosition = allFinalPlayers.findIndex(p => p.name === player.name) + 1;
        const highlightedName = highlightText(player.name, searchTerm);
        
        row.innerHTML = `
            <td class="number-column">${originalPosition}</td>
            <td class="player-name">${highlightedName}</td>
            <td></td> <!-- Изменение (пока пусто) -->
            <td class="result-column">${formatNumber(player.day1)}</td>
            <td class="result-column">${formatNumber(player.day2)}</td>
            <td class="result-column">${formatNumber(player.day3)}</td>
            <td class="result-column">${formatNumber(qualifyingTotal)}</td>
            <td class="chips-positive">-</td>
            <td class="chips-positive">-</td>
            <td class="chips-positive">-</td>
            <td class="${totalClass}">${formatNumber(qualifyingTotal)}</td>
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
    const allPlayers = [...day1Players, ...bountyPlayers.map(p => ({ name: p.name }))];
    const playerNames = [...new Set(allPlayers.map(p => p.name))];
    
    // Добавляем игроков из специальных вкладок
    const final2025Players = [
        "Александр Гиг", "Мария Павлова", "Даша Yellow", "Михаил Козадой", 
        "Вадим Константинов", "Руф", "Влад Пив", "Артур Король", 
        "Шурик Шилкин", "Даня Гол", "Никита Yellow", "Богдан Анц", "Семён Ануфриев"
    ];
    
    const satellitePlayers = [
        "Жан Балацкий", "Иван Чемодан", "Иван Антипов", "Олег Сми", 
        "Egrinderolls", "Саша Тяжелов", "Асхат Суханбердин", 
        "Саша Коч", "Ксюша Петрушина", "Дмитрий Ник", "Андрей Ф", 
        "Ладали", "Даша Гри", "Искандер", "Вова Гриненко", 
        "Даня КДД", "Надя Жб", "Константин Сидорин", "Славяна", "Андрей Джип"
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
        
        // Обновляем даты
        updateDates('20.11.2025', '29.11.2025');
    } else if (activeTab === 'final') {
        totalPlayers = day1Players.length;
        averageStack = calculateAverageStack();
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates('20.11.2025', '29.11.2025');
    } else if (activeTab === 'bounties') {
        totalPlayers = bountyPlayers.length;
        averageStack = 0;
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates('20.11.2025', '29.11.2025');
    } else if (activeTab === 'final2025') {
        totalPlayers = 13; // 13 участников в финале финалистов
        animateCounter(specialTotalPlayersElement, totalPlayers);
    } else if (activeTab === 'satellite2025') {
        totalPlayers = 20; // 20 участников в сателлите
        animateCounter(specialTotalPlayersElement, totalPlayers);
    } else {
        // Для остальных вкладок показываем 0
        totalPlayers = 0;
        averageStack = 0;
        animateCounter(totalPlayersElement, totalPlayers);
        animateCounter(averageStackElement, averageStack);
        
        updateDates('20.11.2025', '29.11.2025');
    }
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Турнир Тощего Джека J-2 загружен!');
    
    fillDay1Table();
    fillFinalTable();
    fillBountiesTable();
    setupAutocomplete();
    
    // Показываем вкладку День 1 при загрузке
    showTab('day1');
    
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
