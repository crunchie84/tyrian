import { Player } from './player';

const p = new Player();
p.Coordinate = { X: 125, Y: 70 };

const game = document.getElementById('game');
game.style.width = '500px';
game.style.height = '500px';
game.style.backgroundColor = 'red';
game.style.display = 'block';