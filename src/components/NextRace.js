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



    // const months = schedule.map(race => race.month)

    const checkSchedule1 = schedule.filter(race => race.month.includes(this.state.todaysDate.month))

    let lastRace = checkSchedule1.filter(race => race.dayStart < this.state.todaysDate.day)

    lastRace = lastRace[lastRace.length - 1]


    if (typeof lastRace !== 'undefined') {


      this.setState({
        lastRace: this.state.schedule[lastRace.id],
        nextRace: this.state.schedule[lastRace.id + 1]

      })
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
        // month: 'october',
        day: newDate.getDate(),
        hour: newDate.getHours(),
        minute: newDate.getMinutes(),
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
          Next race {country}
          <br />
          date: {raceDate}-{month}-{raceTime}

        </p>


        Hello from next race</div >
    );
  }
}















export default NextRace;