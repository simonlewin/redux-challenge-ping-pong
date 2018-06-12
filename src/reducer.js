// reducer functions 
import initial from './initial';

// winning score and alternate server 
const target = 11;
const switchServer = 2;
const switchServerAlt = 1;
const margin = 2;

// test for winner - first to target and at least a two point margin
const won = (a, b) => a >= target && a - b >= margin;

const winner = state => {
  const { player1, player2 } = state;
  return {
    ...state,
    winner: won(player1, player2) ? 1 : (won(player2, player1) ? 2 : null)
  };
}

// change server - alternate between 0 and 1 every 5 points
// until scores > 21 then alternate every 2 points
const server = state => {
  const { player1, player2 } = state;
  let alternate = (player1 > target - 1) || (player2 > target - 1) ? switchServerAlt : switchServer; 
  return { 
    ...state, 
    serving: Math.floor((player1 + player2) / alternate) % 2
  }
}

// update players' points 
const change = (state, { player }) => {
  return { 
    ...state, 
    [player]: state[player] + 1, 
  };
};

// reducer transforms data based on the action's type property
const reducer = (state, action) => {
  switch (action.type) {
    // change - call the change, server and winner functions 
    case 'change': return winner(server(change(state, action)));
    // reset - return initial state
    case 'reset': return initial;
    default: return state;
  }
};

// export the reducer
export default reducer;