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
