import React, { Fragment, useState, useEffect } from 'react'
import Planet from "./Planet"
import Form from '../planet/Form'

async function getPlanets() {
  let response = await fetch('http://localhost:3000/api/planets.json')
  let data = await response.json()
  return data
}

const Planets = () => {

  const [planets, setPlanets] = useState([])

  useEffect(() => {
    getPlanets().then(data => {
      setPlanets(data['planets'])
    })
  }, [])

  const addPlanet = (newPlanet) => {
    setPlanets([...planets, newPlanet])
  }

  return (
    <Fragment>
      <h3>Planet List</h3>
      <hr />
      <Form addPlanet={addPlanet} />
      {planets.map((planet, index) =>
        <Planet
          id={planet.id}
          name={planet.name}
          content={planet.content}
          url={planet.url}
          img_url={planet.img_url}
          key={index}
        />
      )}
    </Fragment>
  )
}


export default Planets