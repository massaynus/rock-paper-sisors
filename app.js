const plays = [
    ['paper', ['rock', 'sissors']],
    ['rock', ['sissors', 'paper']],
    ['sissors', ['paper', 'rock']]
]


const CPPlay = document.querySelector('#CPPlay');
const result = document.querySelector('#result');


function Play(played) {
    let index = Math.floor(Math.random() * 3)
    CPPlay.innerHTML = plays[index][0];

    if (played === index) result.innerHTML = 'Draw';
    else {
        result.innerHTML = plays[played][1].indexOf(plays[index][0]) === 0 ? "You WIN!!!!!!!!!!!" : 'Loooserrrrrrrr';
    }
}