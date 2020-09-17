import React from 'react';

import audio1 from '../media/normal2.mp3'
import audio2 from '../media/rev.mp3'
import audio22 from '../media/rev2.mp3'

import audio3 from '../media/derev.mp3'

class Game extends React.Component {
  state = {
    startGame: false,
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
    getTime: [0, 0],
  }

  reactionTimeInterval;

  handleStartGameButton = () => {
    this.setState({ startGame: true })
  }

  handleDefaultAudio = () => {
    const audio = document.getElementById('audio-game')

    audio.pause()
    audio.src = audio1;
    audio.load();
    audio.play();


  }

  handleAudio = () => {
    const audio = document.getElementById('audio-game')

    audio.pause()
    audio.src = audio22;
    audio.load();
    audio.play();

  }


  handleClutchPress = (e) => {
    console.log('push')
    // e.preventDefault()
    const lights = []

    //change lights

    setTimeout(() => {



      const audio = document.getElementById('audio-game')
      audio.removeEventListener('ended', this.handleDefaultAudio)
      audio.pause()
      audio.src = audio2;
      audio.load();
      audio.play();
      audio.addEventListener('ended', this.handleAudio)


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
        // let timeStart = new Date()
        // timeStart = timeStart.getTime()


        // times 4 - just for test - check why something is wrong
        this.reactionTimeInterval = setInterval(() => {
          this.setState({
            time: this.state.time + 0.001 * 4,

          })
        }, 1)

        this.setState({
          // getTime: [timeStart, 0],
          isLightRed: {
            light1: false,
            light2: false,
            light3: false,
            light4: false,
            light5: false,
          },
        })
      }, 5 * 1000 + randomTime)
      // --------------






    }, 1000)




    this.setState({
      hideInfo: true,
      time: 0
    })
  }

  handleClutchRelease = () => {
    console.log('release')
    // let endTime = new Date()
    // endTime = endTime.getTime()

    // let time = (endTime - this.state.getTime[0]) / 1000

    this.setState({})



    clearInterval(this.reactionTimeInterval)
    this.setState({
      // time,
      isLightRed: {
        light1: false,
        light2: false,
        light3: false,
        light4: false,
        light5: false,
      },
    }
    )
    const audio = document.getElementById('audio-game')
    audio.removeEventListener('ended', this.handleAudio)
    audio.pause()
    audio.src = audio3;
    audio.load();
    audio.play();
    audio.addEventListener('ended', this.handleDefaultAudio)


  }

  componentDidMount = () => {
    const audio = document.getElementById('audio-game')
    console.log(audio)
    audio.addEventListener('ended', this.handleDefaultAudio)
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


    const audioC = (
      <audio autoPlay id="audio-game">
        {<source src={audio1} type='audio/mp3'></source>}
    Your browser does not support the audio element.
      </audio>


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

          {audioC}

          <div className="clutch" onMouseDown={this.handleClutchPress} onTouchStart={this.handleClutchPress} onTouchEnd={this.handleClutchRelease} onMouseUp={this.handleClutchRelease}>
            <span>clutch</span>
          </div>
        </div>


      </div>


    );
  }
}




export default Game;