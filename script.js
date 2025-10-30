// Данные игроков для Дня 1
const allPlayers = [
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
    } else if (tabName === 'final') {
        phaseElement.textContent = 'Финал - 18.10.2025';
    }
    
    // Сбрасываем развертывание таблицы при переключении вкладок
    resetTableExpand();
    
    // Обновляем поиск для активной вкладки
    searchPlayers();
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

// Расчет среднего финального стека
function calculateAverageStack() {
    const total = allPlayers.reduce((sum, player) => sum + Number(player.result), 0);
    return Math.round(total / allPlayers.length);
}

// Форматирование чисел с разделителями
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Заполнение таблицы Дня 1
function fillDay1Table() {
    const tableBody = document.getElementById('playersTable');
    tableBody.innerHTML = '';
    
    allPlayers.forEach((player) => {
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

// Заполнение таблицы Финала
function fillFinalTable() {
    const tableBody = document.getElementById('finalTable');
    tableBody.innerHTML = '';
    
    // Берем ВСЕХ игроков для финала
    const finalPlayers = [...allPlayers];
    
    // Сортируем по убыванию итога
    finalPlayers.sort((a, b) => b.result - a.result);
    
    // Присваиваем новые номера для финала
    finalPlayers.forEach((player, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td class="number-column">${index + 1}</td>
            <td class="player-name">${player.name}</td>
            <td class="result-column">${formatNumber(player.result)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Поиск игроков
function searchPlayers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const activeTab = document.querySelector('.tab-content.active').id;
    
    if (searchTerm === '') {
        if (activeTab === 'day1') {
            fillDay1Table();
        } else {
            fillFinalTable();
        }
        document.getElementById('searchResults').style.display = 'none';
        return;
    }
    
    let filteredPlayers;
    if (activeTab === 'day1') {
        filteredPlayers = allPlayers.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
    } else {
        filteredPlayers = allPlayers.filter(player => 
            player.name.toLowerCase().includes(searchTerm)
        );
    }
    
    if (filteredPlayers.length > 0) {
        const tableBody = activeTab === 'day1' ? 
            document.getElementById('playersTable') : 
            document.getElementById('finalTable');
        
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
        } else {
            // Для финала сортируем по убыванию итога
            const sortedPlayers = [...filteredPlayers].sort((a, b) => b.result - a.result);
            
            sortedPlayers.forEach((player, index) => {
                const row = document.createElement('tr');
                
                row.innerHTML = `
                    <td class="number-column">${index + 1}</td>
                    <td class="player-name">${player.name}</td>
                    <td class="result-column">${formatNumber(player.result)}</td>
                `;
                
                tableBody.appendChild(row);
            });
        }
        
        document.getElementById('searchResults').style.display = 'block';
        document.getElementById('resultsCount').textContent = filteredPlayers.length;
    } else {
        document.getElementById('searchResults').style.display = 'block';
        document.getElementById('resultsCount').textContent = '0';
        
        const tableBody = activeTab === 'day1' ? 
            document.getElementById('playersTable') : 
            document.getElementById('finalTable');
            
        tableBody.innerHTML = `
            <tr>
                <td colspan="${activeTab === 'day1' ? '8' : '3'}" style="text-align: center; padding: 40px; color: #666;">
                    Игроки не найдены
                </td>
            </tr>
        `;
    }
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Турнирная таблица загружена!');
    
    setTimeout(() => {
        animateCounter(document.getElementById('totalPlayers'), allPlayers.length);
        animateCounter(document.getElementById('averageStack'), calculateAverageStack());
    }, 150);
    
    fillDay1Table();
    fillFinalTable();
    
    // Поиск
    document.getElementById('searchInput').addEventListener('input', searchPlayers);
    
    // Очистка поиска
    document.getElementById('clearSearch').addEventListener('click', function() {
        document.getElementById('searchInput').value = '';
        searchPlayers();
    });
});
