import React from 'react';


class Game extends React.Component {
  state = {
    startGame: true,
    hideInfo: true,
    showLights: true,
    clutchPressed: false,
    clutchReleased: true,
  }

  handleStartGameButton = () => {
    this.setState({ startGame: true })
  }

  handleClutchPress = () => {
    console.log('push')


    this.setState({
      hideInfo: true,

    })
  }

  handleClutchRelease = () => {
    console.log('release')
  }


  render() {

    const info = (
      <div className="info-game">
        <p>Press clutch to start the engine. Release after 5 red lights disappear</p>
      </div>
    )


    const lights = (
      <div className="game-lights">
        <div className="light-main-1">
          <span className="light-1"></span>
          <span className="light-2"></span>
        </div>
        <div className="light-main-2">
          <span className="light-1"></span>
          <span className="light-2"></span>
        </div>
        <div className="light-main-3">
          <span className="light-1"></span>
          <span className="light-2"></span>
        </div>
        <div className="light-main-4">
          <span className="light-1"></span>
          <span className="light-2"></span>
        </div>
        <div className="light-main-5">
          <span className="light-1"></span>
          <span className="light-2"></span>
        </div>
      </div>
    )

    return (
      <div className='game'>

        <div className={`screen-start ${this.state.startGame ? 'hide' : ''}`}>
          <button className="start-game" onClick={this.handleStartGameButton}>
            Start game
        </button>
        </div>

        <div className="game-window">
          {this.state.hideInfo ? null : info}
          {this.state.showLights ? lights : null}

          <div className="clutch" onMouseDown={this.handleClutchPress} onTouchStart={this.handleClutchPress} onTouchEnd={this.handleClutchRelease} onMouseUp={this.handleClutchRelease}>
            <span>clutch</span>
          </div>
        </div>


      </div>


    );
  }
}




export default Game;