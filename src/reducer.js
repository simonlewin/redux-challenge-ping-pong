// reducer functions 
import initial from './initial';

// winning score and alternate server
const target = 21;
const alternate = 5;

// test for winner - first to target
const winner = state => {
  if (state.player1 === target) {
    return { ...state, winner: 1}
  } else if (state.player2 === target) {
    return { ...state, winner: 2}
  }
  return state;
}

// change server - serving alternates between 0 and 1 every `alternate` points 
const server = state => {
  return { ...state, serving: Math.floor((state.player1 + state.player2) / alternate) % 2 }
}

// increment points 
const change = (state, { player }) => {
  if ( player === 1) {
    return { ...state, player1: state.player1 + 1 };
  } 
  if (player === 2 ) {
    return { ...state, player2: state.player2 + 1 };
  }
};

// reducer transforms data based on the action's type property
const reducer = (state, action) => {
  switch (action.type) {
    // call the change, server and winner functions 
    case 'change': return winner(server(change(state, action)));
    case 'reset': return initial;
    default: return state;
  }
};

// export the reducer
export default reducer;