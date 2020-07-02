import React from 'react'
import Login from "./Login"
import Game from "./Game"
import Navbar from "./Navbar"
import EndGame from "./EndGame"

import images from '../../img/karta.png';
import '../../style/MainMemoryGame.css';

class MemoryGame extends React.Component {
    state = {
        showLogin: true,
        showEndGame: false,
        showGame: false,
        name: "",
        score: 0,
      };
    
      handleLogin = (name, boolean) => {
        this.setState({ name: name, showLogin: boolean });
        this.setState({ showGame: true});
      };

      handleEndGame = (boolean) => {
        if (boolean) {
          this.setState({ showEndGame: boolean, score: this.state.score + 1 });
          this.setState({ showGame: false});
        } else {
          this.setState({ showEndGame: boolean });
          this.setState({ showGame: true});
        }
      };
      render() {
        const { showLogin, name, score, showEndGame, showGame } = this.state;
        return (
          <div>
            {showLogin ? <Login name={this.handleLogin} /> : <Navbar name={name} score={score} />}
            {showGame ? <Game endGame={this.handleEndGame} /> : null} 
            {showEndGame ? <EndGame newGame={this.handleEndGame} /> : null}
          </div>
        );
      }
    }

export default MemoryGame