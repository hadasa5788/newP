import React from 'react'
import { useNavigate, useParams } from 'react-router'
import countrys from '../data/Data';

const CountryDetails = () => {
    const navigate=useNavigate();
    const {countryId}=useParams();
    const country=countrys.find((c)=>c.id===countryId)
  return (
    <div>
      <h4>Gitbdika</h4>
<h2>{country.name}</h2>
<h2>{country.id}</h2>
<img src={country.image}
style={{width:"150px",height:"150px",objectFit:"cover"}}
/>
<div>
<button onClick={()=>navigate(-1)}>GoBack</button>
</div>
    </div>
  )
}

export default CountryDetails