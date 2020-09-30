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

    timeToNext: {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }

  }


  findNextRace() {
    const schedule = this.state.schedule

    const checkSchedule1 = schedule.filter(race => race.month.includes(this.state.todaysDate.month))
    if (checkSchedule1.length !== 0) {
      checkSchedule1[checkSchedule1.length - 1].month.includes('/') && checkSchedule1.pop()

      let nextRace = checkSchedule1.filter(race => Number(race.dayEnd) >= this.state.todaysDate.day)
      console.log(nextRace)
      if (nextRace.length === 0) { nextRace = schedule.filter(item => item.id === checkSchedule1[checkSchedule1.length - 1].id + 1) }
      console.log(nextRace)

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

  timeToNext() {

    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

    let { year, month, day, hour, minute, second } = this.state.todaysDate

    second = Number(second)

    month = months.findIndex(id => id === month) + 1

    const todayDate = new Date(year, month, day, hour, minute, second)


    let monthOfRace = this.state.nextRace.month

    let dayOfRace = this.state.nextRace.sessions[4].date
    let hourOfRace = this.state.nextRace.sessions[4].time

    // to split month of the race that end and start on different months
    if (monthOfRace.includes('/')) {
      let indexToDelete = (monthOfRace.indexOf('/')) + 1
      monthOfRace = monthOfRace.split('').splice(indexToDelete, monthOfRace.length - indexToDelete)
      monthOfRace.shift()
      monthOfRace = monthOfRace.join('')
    }

    monthOfRace = months.findIndex(id => id === monthOfRace) + 1

    const raceDate = new Date(year, monthOfRace, dayOfRace, hourOfRace, 10, 0)




    let timeDelta = raceDate.getTime() - todayDate.getTime()
    timeDelta = new Date(timeDelta)


    let daysLeft = hour >= hourOfRace ? timeDelta.getDate() - 1 : timeDelta.getDate()

    const timeToNext = {
      days: daysLeft,
      hours: timeDelta.getHours(),
      minutes: timeDelta.getMinutes(),
      seconds: timeDelta.getSeconds(),
    }


    this.setState({
      timeToNext
    })

  }



  idOfInterval;

  componentDidMount() {

    this.idOfInterval = setInterval(() => {
      this.findNextRace()

      this.state.nextRace !== '' && this.timeToNext()


      const newDate = new Date()

      const newCurrentDate = {
        year: newDate.getFullYear(),
        month: newDate.toLocaleString('en-EN', { month: 'long' }).toLowerCase(),
        // month: 'september',
        day: newDate.getDate(),
        // day: '26',
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
        <h3>Today is</h3>
        <div className="date-callendar">
          <p className='date-today-year'>{todaysDate.year}</p>
          <p className='date-today-month'>{todaysDate.month}</p>
          <p className='date-today-day'>{todaysDate.day}</p>
        </div>
        <div className="date-time">
          <p className='time-hour'>{todaysDate.hour} :</p>
          <p className='time-minute'>{todaysDate.minute} :</p>
          <p className='time-second'>{todaysDate.second}</p>
        </div>
      </div>
    )




    const { country, sessions, month } = this.state.nextRace

    const race = sessions[sessions.length - 1]

    const raceDate = race.date
    // const raceTime = `${race.time}:10`


    let { days, hours, minutes, seconds } = this.state.timeToNext
    let array = [hours, minutes, seconds]

    array.forEach(time => time.toString().length === 1 ? time === `0${time}` : time === `${time}`)

    return (
      <div className='next-race'>

        <div className="date-today">
          {typeof todaysDate.year !== 'undefined' && dateCont}
        </div>

        <div className="next-race-info">

          <h3>Next race: {country}</h3>
          <h4>track: {this.state.nextRace.stats[0].name}</h4>
          <h4>date: {raceDate} {month} {2020}</h4>

          <div className="time-to-next">
            <p>{days > 0 && <span className="next-days">{days} days </span>}<span className="next-hours">{hours.toString().length === 1 ? `0${hours - 1}` : `${hours - 1}`}</span> : <span className="next-minutes">{minutes.toString().length === 1 ? `0${minutes}` : `${minutes}`}</span> : <span className="next-seconds">{seconds.toString().length === 1 ? `0${seconds}` : `${seconds}`}</span></p>
          </div>


        </div>
      </div >
    );
  }
}















export default NextRace;