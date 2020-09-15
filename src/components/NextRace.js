import React from 'react';

import Loader from './Loader'




class NextRace extends React.Component {

  date = new Date()

  state = {
    todaysDate: {
      year: this.date.getFullYear(),
      month: this.date.toLocaleString('en-EN', { month: 'long' }),
      day: this.date.getDate(),
      hour: this.date.getHours(),
      minute: this.date.getMinutes(),
      second: this.date.getSeconds()
    },

    schedule: this.props.info,
    lastRace: '',
    nextRace: '',

  }


  findNextRace() {
    const schedule = this.state.schedule

    const checkSchedule1 = schedule.filter(race => race.month.includes(this.state.todaysDate.month))

    if (checkSchedule1.length !== 0) {
      checkSchedule1[checkSchedule1.length - 1].month.includes('/') ? checkSchedule1.pop() : console.log('left alone')

      let nextRace = checkSchedule1.filter(race => Number(race.dayEnd) >= this.state.todaysDate.day)

      let daysDelta = nextRace.map(one => Math.abs(one.dayEnd - this.state.todaysDate.day))

      let daysDeltaMin = Math.min(...daysDelta)

      let idOfNextRace = daysDelta.indexOf(daysDeltaMin)

      nextRace = nextRace[idOfNextRace]

      if (typeof nextRace == 'undefined') {
        this.setState({
          nextRace: schedule[schedule.length - 1]
        })
      }

      if (typeof nextRace !== 'undefined') {
        this.setState({
          nextRace
        })
      }
    }
  }





  idOfInterval;

  componentDidMount() {


    this.idOfInterval = setInterval(() => {
      this.findNextRace()

      const newDate = new Date()

      const newCurrentDate = {
        year: newDate.getFullYear(),
        month: newDate.toLocaleString('en-EN', { month: 'long' }).toLowerCase(),
        // month: 'august',
        day: newDate.getDate(),
        // day: '1',
        hour: newDate.getHours().toLocaleString().length === 1 ? `0${newDate.getHours()}` : newDate.getHours(),
        minute: newDate.getMinutes().toLocaleString().length === 1 ? `0${newDate.getMinutes()}` : newDate.getMinutes(),
        second: newDate.getSeconds().toLocaleString().length === 1 ? `0${newDate.getSeconds()}` : newDate.getSeconds()
      }

      this.setState({
        todaysDate: newCurrentDate
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.idOfInterval)
  }


  render() {
    if (this.state.nextRace === '') {
      return <Loader />
    }



    const todaysDate = this.state.todaysDate


    const dateCont = (
      <div>
        Today is:
        <p>{todaysDate.year}</p>
        <p>{todaysDate.month}</p>
        <p>{todaysDate.day}</p>
        <p>{todaysDate.hour}</p>
        <p>{todaysDate.minute}</p>
        <p>{todaysDate.second}</p>
      </div>
    )




    const { country, sessions, month } = this.state.nextRace

    const race = sessions[sessions.length - 1]

    const raceDate = race.date
    const raceTime = `${race.time}:10`



    return (
      <div>

        {typeof todaysDate.year !== 'undefined' && dateCont}

        <p>
          Next race {country} {this.state.nextRace.stats[0].name}
          <br />
          date: {raceDate}-{month}-{raceTime}

        </p>


        Hello from next race</div >
    );
  }
}















export default NextRace;