import React from 'react'

function RegionCard({country}) {
  return (
    <div className='card'>
      <div className="card-img-wrapper">
        <img src={country.flags.svg} alt={country.name} />
      </div>
      <div className="card-content">
        <h3 className='subtitle'>{country.name}</h3>
        <ul>
          <li><p><span className='bold'>Population: </span>{country.population.toLocaleString()}</p></li>
          <li><p><span className='bold'>Region: </span>{country.region}</p></li>
          <li><p><span className='bold'>Capital: </span>{country.capital}</p></li>
        </ul>
      </div>
    </div>
  )
}

export default RegionCard
