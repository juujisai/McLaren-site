import React from 'react';
import { Link, useParams } from 'react-router-dom'


const TrackPage = () => {
  const { id } = useParams()
  return (
    <div>Hello from track page {id}

      <Link to='/schedule' className="btn-link" > Go back to schedule</Link>
    </div>
  );
}

export default TrackPage;