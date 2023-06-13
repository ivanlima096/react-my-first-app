import { useState, useEffect } from 'react'
import React from 'react'
import GrayImg from '../../../src/Components/Planets/shared/gray-img/index'
import PlanetLink from '../../../src/Components/Planets/shared/Planet Link/index'
import Form from '../Planets/SatellitesForm/index'

import { useParams, Link, Redirect } from "react-router-dom"

async function getPlanet(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`)
  let data = await response.json()
  return data
}

const Planet = () => {
  const [satellites, setSatellites] = useState([])
  const [planet, setPlanet] = useState({})
  const [redirect, setRedirect] = useState(false)

  let { id } = useParams()

  useEffect(() => {
    getPlanet(id).then(data => {
      setSatellites(data['satellites'])
      setPlanet(data['data'])
    }, error => {
      setRedirect(true)
    })
  }, [])

  const addSatellite = (newSatellite) => {
    setSatellites([...satellites, newSatellite])
  }

  let title
  if (planet.title_with_underline)
    title = <h4><u>{planet.name}</u></h4>
  else
    title = <h4>{planet.name}</h4>

  if (redirect)
    return <Redirect to="/" />
  return (
    <div>
      <hr></hr>
      {title}
      < PlanetLink
        content={planet.content}
        url={planet.url}
      />
      <GrayImg
        img_url={planet.img_url}
        gray={planet.gray}
      />
      <h4>Satélites</h4>
      <hr />
      <Form addSatellite={addSatellite} />
      <hr />
      <ul>
        {satellites.map((satellite, index) =>
          <li key={index}>{satellite.name}</li>
        )}

      </ul>
      <Link to='/' onClick={() => { window.location.href = "/" }}> Voltar a listagem</Link>
    </div>
  )
}


export default Planet