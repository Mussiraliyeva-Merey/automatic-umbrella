/**
 * Экологические привычки будущего - JavaScript файл
 * Содержит функции для интерактивности сайта
 */

/**
 * Отображает текст информации при клике на экокруг
 * @param {string} text - Текст для отображения
 */
function showText(text) {
    const infoElement = document.getElementById("info");
    infoElement.innerHTML = text;
    infoElement.style.opacity = "0";
    setTimeout(() => {
        infoElement.style.transition = "opacity 0.3s ease";
        infoElement.style.opacity = "1";
    }, 10);
}

/**
 * Запускает игру на основе типа игры
 * @param {string} gameType - Тип игры (waste, light, forest, transport)
 */
function playGame(gameType) {
    const games = {
        waste: "♻️ Сортировка мусора: Разделите мусор на категории!",
        light: "💡 Выключи свет: Найдите все источники света и выключите их!",
        forest: "🌳 Спаси лес: Посадите деревья и защитите лес от вредителей!",
        transport: "🚲 Выбери экотранспорт: Выберите экологичный вид транспорта!"
    };

    if (games[gameType]) {
        alert(games[gameType]);
        console.log(`Игра запущена: ${gameType}`);
    }
}

/**
 * Запускает игровой режим
 */
function startGame() {
    const message = "Добро пожаловать в экологические игры! Выберите игру ниже.";
    alert(message);
    // Прокрутка к разделу с играми
    document.querySelector('.games-container').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Инициализирует событие клавиатуры для доступности
 */
document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.circle');
    const games = document.querySelectorAll('.game');

    // Добавляем обработчик Enter для кругов
    circles.forEach(circle => {
        circle.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                this.click();
            }
        });
    });

    // Добавляем обработчик Enter для игр
    games.forEach(game => {
        game.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                this.click();
            }
        });
    });

    // Добавляем обработчик для кнопки начала игры
    const startBtn = document.querySelector('.btn');
    startBtn.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            startGame();
        }
    });

    console.log("Приложение инициализировано");
});

/**
 * Логирование в консоль для отладки
 */
console.log("Экологические привычки будущего - Приложение загружено");
