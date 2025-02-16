
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.navbar nav ul').classList.toggle('show');
});


document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const teamName = document.getElementById('team-name').value;
    const experience = document.getElementById('experience').value;
    const acceptRules = document.getElementById('accept-rules').checked;
    
    if (!acceptRules) {
        alert("El kell fogadnod a szabályokat!");
        return;
    }

    alert(`Sikeresen regisztráltál! \nNév: ${name} \nE-mail: ${email} \nJátékosnév: ${username} \nCsapatnév: ${teamName} \nTapasztalat: ${experience}`);
    
    document.getElementById('registration-form').reset();
});
