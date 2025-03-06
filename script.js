// Başlangıç skorları
let team1Score = 0;
let team2Score = 0;
let team1Name = 'Takım A';
let team2Name = 'Takım B';

// Skor artırma/azaltma işlevi
function updateScore(team, change) {
    if (team === 'team1') {
        team1Score += change;
        if (team1Score < 0) team1Score = 0; 
        document.getElementById('team1-score').innerText = team1Score;
    } else if (team === 'team2') {
        team2Score += change;
        if (team2Score < 0) team2Score = 0; 
        document.getElementById('team2-score').innerText = team2Score;
    }
}

// Skor belirleme işlevi
function setScore(team) {
    const score = prompt('Yeni skor girin (sadece sayı):');
    const numericScore = parseInt(score); 

    if (isNaN(numericScore) || numericScore === '') {
        alert('Geçerli bir sayı giriniz.');
    } else {
        if (team === 'team1') {
            team1Score = numericScore;
            document.getElementById('team1-score').innerText = team1Score;
        } else if (team === 'team2') {
            team2Score = numericScore;
            document.getElementById('team2-score').innerText = team2Score;
        }
    }
}

// Takım ismi değiştirme işlevi
function changeTeamName(team) {
    const currentTeamName = team === 'team1' ? team1Name : team2Name;
    const newName = prompt(`Yeni takım ismini girin (şu anda: ${currentTeamName}):`);

    if (newName && newName.trim() !== "") {
        if (team === 'team1') {
            team1Name = newName;
            document.getElementById('team1-name').innerText = team1Name;
        } else if (team === 'team2') {
            team2Name = newName;
            document.getElementById('team2-name').innerText = team2Name;
        }
    } else {
        alert('Geçersiz isim. Lütfen geçerli bir isim giriniz.');
    }
}
