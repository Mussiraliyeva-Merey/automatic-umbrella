# automatic-umbrella
```html
<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Экологические привычки будущего</title>

<style>
body{
    margin:0;
    font-family:Arial,sans-serif;
    background:#f4fff4;
    color:#333;
}

header{
    background:linear-gradient(135deg,#4caf50,#81c784);
    color:white;
    text-align:center;
    padding:40px 20px;
}

header h1{
    font-size:42px;
}

header p{
    font-size:20px;
}

.btn{
    background:#ff9800;
    color:white;
    padding:15px 30px;
    border:none;
    border-radius:30px;
    font-size:18px;
    cursor:pointer;
}

section{
    padding:50px 20px;
    text-align:center;
}

.eco-circle{
    display:grid;
    grid-template-columns:repeat(2,150px);
    justify-content:center;
    gap:20px;
    margin-top:30px;
}

.circle{
    width:150px;
    height:150px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    font-weight:bold;
    cursor:pointer;
    transition:0.3s;
}

.circle:hover{
    transform:scale(1.1);
}

.blue{background:#2196f3;}
.brown{background:#795548;}
.green{background:#4caf50;}
.gray{background:#757575;}
.orange{background:#ff9800;}

.cards{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:20px;
}

.card{
    background:white;
    width:250px;
    padding:20px;
    border-radius:20px;
    box-shadow:0 4px 10px rgba(0,0,0,0.1);
}

.game{
    background:#e8f5e9;
    padding:20px;
    margin:10px;
    border-radius:15px;
}

footer{
    background:#4caf50;
    color:white;
    text-align:center;
    padding:20px;
}
</style>
</head>

<body>

<header>
<h1>Экологические привычки будущего</h1>
<p>Маленькие привычки — большое будущее!</p>
<button class="btn">Начать играть</button>
</header>

<section>
<h2>Экокруг</h2>

<div class="eco-circle">

<div class="circle blue" onclick="showText('Экономь воду!')">
Вода
</div>

<div class="circle brown" onclick="showText('Сортируй мусор!')">
Мусор
</div>

<div class="circle green" onclick="showText('Береги деревья!')">
Лес
</div>

<div class="circle gray" onclick="showText('Выбирай экологичный транспорт!')">
Транспорт
</div>

<div class="circle orange" onclick="showText('Выключай свет!')">
Энергия
</div>

</div>

<h3 id="info"></h3>
</section>

<section>
<h2>Экорюкзак</h2>

<div class="cards">

<div class="card">
<h3>Снежный барс</h3>
<p>Редкое животное из Красной книги.</p>
</div>

<div class="card">
<h3>Каспийский тюлень</h3>
<p>Страдает от загрязнения воды.</p>
</div>

<div class="card">
<h3>Сайгак</h3>
<p>Нуждается в защите природы.</p>
</div>

</div>
</section>

<section>
<h2>Экологические игры</h2>

<div class="game">♻ Сортировка мусора</div>
<div class="game">💡 Выключи свет</div>
<div class="game">🌳 Спаси лес</div>
<div class="game">🚲 Выбери экотранспорт</div>

</section>

<section>
<h2>Экотермины</h2>

<div class="cards">

<div class="card">
<h3>Экология</h3>
<p>Наука о природе и её защите.</p>
</div>

<div class="card">
<h3>Переработка</h3>
<p>Повторное использование мусора.</p>
</div>

<div class="card">
<h3>Климат</h3>
<p>Погода на Земле за долгое время.</p>
</div>

</div>
</section>

<footer>
<p>© 2026 Экологические привычки будущего</p>
</footer>

<script>
function showText(text){
    document.getElementById("info").innerHTML=text;
}
</script>

</body>
</html>
```
