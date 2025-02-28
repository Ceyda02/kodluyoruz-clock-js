let myName = prompt("Lütfen isminizi girin:");

let now = new Date();
let day = now.toLocaleDateString('tr-TR', { weekday: 'long' });
let time = now.toLocaleTimeString('tr-TR');

document.getElementById('myClock').innerText = `Hello, ${myName}! Bugün günlerden ${day} ve şimdiki saat ${time}.`;
