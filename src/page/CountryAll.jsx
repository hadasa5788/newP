import React from 'react'
import { Link } from 'react-router'
import countrys from '../data/Data';

const CountryAll = () => {
  return (
    <div>
{countrys.map((c)=>(
    <div key={c.id}>
        <Link to={c.id}>{c.name}</Link>
            </div>

))}
    </div>
  )
}

export default CountryAll;