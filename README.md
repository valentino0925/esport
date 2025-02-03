# esport
IKT
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="E-sport Rocket League verseny középiskolásoknak">
    <meta name="keywords" content="E-sport, Rocket League, verseny, regisztráció, iskolai verseny">
    <title>Rocket League E-sport Verseny</title>
    <link rel="stylesheet" href="esport.css">
    <script src="esport.js" defer></script>
</head>
<body>
    <header>
        <img src="p3.png" alt="Rocket League E-sport Verseny Logó" class="logo">
        <h1>Rocket League E-sport Verseny</h1>
        <nav>
            <span class="menu-icon" onclick="toggleMenu()">&#9776;</span>
            <div id="fullScreenMenu" class="full-screen-menu">
                <ul>
                    <li><a href="#about">Mi az E-sport?</a></li>
                    <li><a href="#schedule">Fordulók</a></li>
                    <li><a href="#rules">Szabályok</a></li>
                    <li><a href="#registration">Regisztráció</a></li>
                    <li><a href="#results">Eredmények</a></li>
                </ul>
            </div>
        </nav>
    </header>
    
    <section id="about">
        <h2>Mi az E-sport?</h2>
        
        <p>A verseny célja, hogy népszerűsítsük az elektronikus sportokat, és megismertessük a fiatalokat a Rocket League világával, amely egy autós labdarúgó játék, amit világszerte több millió ember játszik.</p>
    </section>

    <section id="schedule">
        <h2>Fordulók időpontjai</h2>
        <p>A verseny 3 fordulóban zajlik. Az időpontok a következők:</p>
        <ul>
            <li>1. Forduló: 2025. február 10.</li>
            <li>2. Forduló: 2025. február 17.</li>
            <li>3. Forduló: 2025. február 24.</li>
        </ul>
    </section>

    <section id="rules">
        <h2>Versenyszabályok</h2>
        <p>A verseny szabályai a következőek:</p>
        <ul>
            <li>Minden csapat 2 főből állhat.</li>
            <li>Csak a Rocket League szabványos játékmódjait használhatjátok.</li>
            <li>A mérkőzések 5 percig tartanak, ha döntetlen, akkor hosszabbítás következik.</li>
            <li>Sportszerű magatartás elvárt minden játékostól.</li>
            <li>Kizárolag DIA 1 feletti játékosok regisztrálhatnak.</li>
        </ul>
    </section>
<section>
    <h2>Támogatok</h2>
    <ul>
        <li>HSZC Pollák Antal Technikum</li>
        <li>Media Markt</li>
        <li>Gyulai kolbász</li>
    </ul>
</section>
<section>
    <h2>Nyeremények</h2>
<ul>
    <li>1.hely 300.000ft</li>
    <li>2.hely 200.000ft</li>
    <li>3.hely 100.000ft</li>
</ul>
    
</section>

    <section id="registration">
        <h2>Regisztráció</h2>
        <p>Regisztrálj a versenyre, hogy részt vehess! Töltsd ki az alábbi űrlapot:</p>
        <form id="registrationForm">
            <div class="form-group">
                <label for="teamName">Csapat neve:</label>
                <input type="text" id="teamName" name="teamName" required placeholder="Add meg a csapat nevét">
            </div>

            <div class="form-group">
                <label for="player1">Játékos 1 neve:</label>
                <input type="text" id="player1" name="player1" required placeholder="Add meg az első játékos nevét">
            </div>

            <div class="form-group">
                <label for="player2">Játékos 2 neve:</label>
                <input type="text" id="player2" name="player2" required placeholder="Add meg a második játékos nevét">
            </div>

            <div class="form-group">
                <label for="player3">Játékos 3 neve (opcionális):</label>
                <input type="text" id="player3" name="player3" placeholder="Add meg a harmadik játékos nevét (opcionális)">
            </div>

            <button type="submit" class="submit-button">Regisztrálok</button>
        </form>
    </section>

    <section id="results">
        <h2>A csapatok</h2>
        <p>A jelenlegi résztvevők (csapatneve)</p>
        <div id="resultsList"></div>
    </section>




    <footer>
        <p>&copy;2025 Rocket League E-sport Verseny. Minden jog fenntartva.</p>
    </footer>
</body>
</html>


body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #1e1e1e;
    color: white;
}

footer {
    text-align: center;
    margin-top: 20px;
    padding: 20px;
    background-color: #333;
    color: #bbb;
}

.logo {
    width: 120px;
    height: auto;
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
}

header {
    background-image: url('rl2.png');
    background-size: cover;
    background-position: center;
    padding: 120px 20px;
    position: relative;
    color: white;
    text-align: center;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

header::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
}

header h1 {
    position: relative;
    z-index: 1;
    font-size: 4em;
    font-weight: bold;
    color: #e0f000;
    animation: fadeIn 2s ease-out, slideIn 1.5s ease-out;
}

@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

@keyframes slideIn {
    0% { transform: translateY(-30px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
}

nav ul {
    list-style: none;
    text-align: center;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2em;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: #fbbf00;
}

header {
    animation: moveBackground 15s linear infinite;
}

@keyframes moveBackground {
    0% { background-position: center; }
    50% { background-position: top center; }
    100% { background-position: center; }
}

section {
    padding: 60px 20px;
    background-color: #222;
    transition: transform 0.3s ease;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

section:hover {
    transform: translateY(-10px);
}

button {
    background-color: #ffffff;
    color: black;
    padding: 15px 30px;
    border: none;
    cursor: pointer;
    font-size: 1.2em;
    transition: transform 0.3s ease, background-color 0.3s ease;
    border-radius: 5px;
    margin-top: 20px;
}

button:hover {
    background-color: #fbbf00;
    transform: scale(1.1);
}

#resultsList {
    animation: fadeInResults 2s ease-in-out;
}

@keyframes fadeInResults {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

/* Regisztrációs szekció stílusok */
#registration {
    background-color: #2c2c2c;
    border-radius: 10px;
    padding: 40px;
    max-width: 800px;
    margin: 50px auto;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    color: white;
    text-align: center;
    transition: transform 0.3s ease;
}

#registration:hover {
    transform: translateY(-10px);
}

#registration h2 {
    font-size: 2.5em;
    font-weight: bold;
    color: #fbbf00;
    margin-bottom: 20px;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

#registration p {
    font-size: 1.2em;
    margin-bottom: 20px;
    color: #ddd;
}

.form-group {
    margin-bottom: 20px;
    text-align: left;
}

input {
    width: 100%;
    padding: 12px;
    margin-top: 5px;
    border: 2px solid #444;
    border-radius: 5px;
    background-color: #333;
    color: white;
    font-size: 1.1em;
    transition: border-color 0.3s ease, background-color 0.3s ease;
}

input::placeholder {
    color: #bbb;
}

input:focus {
    border-color: #fbbf00;
    background-color: #444;
    outline: none;
}

button {
    background-color: #fbbf00;
    color: black;
    padding: 15px 30px;
    border: none;
    cursor: pointer;
    font-size: 1.2em;
    transition: transform 0.3s ease, background-color 0.3s ease;
    border-radius: 8px;
    margin-top: 20px;
}

button:hover {
    background-color: #e0a900;
    transform: scale(1.1);
}

@media (max-width: 768px) {
    #registration {
        padding: 30px;
    }

    #registration h2 {
        font-size: 2em;
    }

    input {
        padding: 10px;
        font-size: 1em;
    }

    button {
        padding: 12px 25px;
        font-size: 1em;
    }
}

