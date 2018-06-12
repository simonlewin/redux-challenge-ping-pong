# Redux

First, create a new app using `create-react-app`. We won't be using React for this exercise, but it will setup Webpack and Babel for us.

You'll also need to run `yarn add redux` in the app directory once it's setup.

Clear the `index.js` file and then get the app from the notes up and running.

---

# Challenges

We're going to change the counter into a ping-pong scoring app.

Use Bootstrap styling throughout this challenge to make things look nice:

- Add a second `<p>` tag to your page. It should also display `value` from state.

- Update the shape of your state so that it has two properties: `player1` and `player2` (you should get rid of `value`). They should both start at `0`. Your first `<p>` should display the value of `player1` and the second `<p>` should display the value of `player2`

- Change the `+` button to say "Player 1" and the `-` button to say "Player 2". When the "Player 1" button is clicked the value of `player1` should go up by 1 and when the "Player 2" button is clicked the value of `player2` should go up by 1.

- If the "Reset" button is pressed it should update the values of both `player1` and `player2` to be `0`

- Make sure you don't have any reducers left over that you're not using any more (i.e. `increment` and `decrement`)

- Using the `classList.add()` method add a class `serving` to the `<p>` that represents the Player 1 score. You'll need to add a `<style>` tag to the `<head>` and think of some sort of appropriate styling.

- Now, make it so that the `serving` class alternates between the Player 1 `<p>` and the Player 2 `<p>` every 5 times either button is pressed. Remember the rules about whether logic should go in the reducer or the view.

    **Hint**: remember you can compose functions:

    ```javascript
    let add = (a, b) => a + b;
    let square = n => n * n;

    // this
    let added = add(1, 2);
    let thenSquared = square(added);

    // is the same as
    let addedThenSquared = square(add(1, 2));
    ```

    This can be useful in reducers if you want to change the state in more than one way for a single action.

- Finally, if the value of `player1` gets to 21 then you should show a "Player 1 Wins" message. If the value of `player2` gets to 21 then you should show a "Player 2 Wins" message. Again, keep in mind the rules about where the logic should go.

---

## Tricksy

- The "Player X Wins" message should only show if the player is also ahead by at least two points
- The server should alternate every two serves once the score goes above 21