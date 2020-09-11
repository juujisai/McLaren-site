import React from 'react';
import { useParams, Link } from 'react-router-dom'

const DriverPage = () => {

  const { name } = useParams()

  return (
    <div>Hello from {name}
      <Link to="/drivers">Go back to drivers</Link>

    </div>
  );
}



export default DriverPage;