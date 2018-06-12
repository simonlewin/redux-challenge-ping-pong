import { createStore } from 'redux';

import initial from './initial';
import reducer from './reducer';

// create store - pass it reducer, initial state and Redux DevTools
const store = createStore(
  reducer, 
  initial,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// get elements
let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let click1 = document.getElementById('click1');
let click2 = document.getElementById('click2');
let reset = document.getElementById('reset');

let serve1 = document.getElementById('serve1');
let serve2 = document.getElementById('serve2');

let winner = document.getElementById('winner');
let jumbo = document.getElementById('jumbo');

// render when state changes
let render = () => {
  let state = store.getState();

  // highlight server
  if (state.serving === 0) {
    serve1.classList.add('table-danger');
    serve2.classList.remove('table-danger');
  } else {
    serve2.classList.add('table-danger');
    serve1.classList.remove('table-danger');
  }

  // render scores
  player1.textContent = state.player1;
  player2.textContent = state.player2;

  // render winner
  if (state.winner > 0) {
    jumbo.classList.remove('invisible');
    jumbo.classList.add('visible');
    winner.textContent = `Player ${ state.winner } Wins`;
  } else {
    jumbo.classList.remove('visible');
    jumbo.classList.add('invisible');    
  }
}

//  add event listeners to buttons and dispatch actions 
click1.addEventListener('click', () => store.dispatch({ type: 'change', player: 1 }));
click2.addEventListener('click', () => store.dispatch({ type: 'change', player: 2 }));
reset.addEventListener('click', () => store.dispatch({ type: 'reset' }));

// subscribe to any changes
store.subscribe(render);
render();