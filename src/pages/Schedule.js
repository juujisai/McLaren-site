import React from 'react';

import { ScheduleContext } from '../context/ScheduleContext'

const Schedule = () => {
  console.log(React.useContext(ScheduleContext))
  return (
    <div>Hello from schedule page</div>
  );
}

export default Schedule;