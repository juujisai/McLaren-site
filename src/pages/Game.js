import React from 'react';


class Game extends React.Component {
  state = {
    startGame: true,
    hideInfo: true,
    showLights: true,
    clutchPressed: false,
    clutchReleased: true,
    isLightRed: {
      light1: false,
      light2: false,
      light3: false,
      light4: false,
      light5: false,
    },
    time: 0,
  }

  reactionTimeInterval;

  handleStartGameButton = () => {
    this.setState({ startGame: true })
  }

  handleClutchPress = (e) => {
    console.log('push')
    // e.preventDefault()
    const lights = []

    //change lights

    setTimeout(() => {

      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          lights.push(true)
          console.log(lights)


          this.setState({
            isLightRed: {
              light1: lights[0],
              light2: lights[1],
              light3: lights[2],
              light4: lights[3],
              light5: lights[4],
            }
          })


        }, 1000 * i + 1)
      }

      let randomTime = Math.floor(Math.random() * (1000 - 300) + 300)

      // --------------
      setTimeout(() => {
        this.reactionTimeInterval = setInterval(() => {
          this.setState({
            time: this.state.time + 0.001,

          })
        }, 1)

        this.setState({
          isLightRed: {
            light1: false,
            light2: false,
            light3: false,
            light4: false,
            light5: false,
          },
        })
      }, 1000 + 5 * 1000 + randomTime)
      // --------------






    }, 1000)




    this.setState({
      hideInfo: true,
      time: 0
    })
  }

  handleClutchRelease = () => {
    console.log('release')

    clearInterval(this.reactionTimeInterval)
    this.setState({
      isLightRed: {
        light1: false,
        light2: false,
        light3: false,
        light4: false,
        light5: false,
      },
    }
    )

  }


  render() {

    const info = (
      <div className="info-game">
        <p>Press clutch to start the engine. Release after 5 red lights disappear</p>
      </div>
    )

    const isLightRed = this.state.isLightRed

    const lights = (
      <div className="game-lights">
        <div className="light-main-1">
          <span className="light-1"></span>
          <span className={`light-2 ${isLightRed.light1 ? `light-red` : null}`}></span>
        </div>
        <div className="light-main-2">
          <span className="light-1"></span>
          <span className={`light-2 ${isLightRed.light2 ? `light-red` : null}`}></span>
        </div>
        <div className="light-main-3">
          <span className="light-1"></span>
          <span className={`light-2 ${isLightRed.light3 ? `light-red` : null}`}></span>
        </div>
        <div className="light-main-4">
          <span className="light-1"></span>
          <span className={`light-2 ${isLightRed.light4 ? `light-red` : null}`}></span>
        </div>
        <div className="light-main-5">
          <span className="light-1"></span>
          <span className={`light-2 ${isLightRed.light5 ? `light-red` : null}`}></span>
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

          {this.state.time !== 0 && <div className='reaction-time'>{this.state.time.toFixed(3)}</div>}


          <div className="clutch" onMouseDown={this.handleClutchPress} onTouchStart={this.handleClutchPress} onTouchEnd={this.handleClutchRelease} onMouseUp={this.handleClutchRelease}>
            <span>clutch</span>
          </div>
        </div>


      </div>


    );
  }
}




export default Game;