import { useState, useEffect } from 'react'
import React from 'react'
import GrayImg from '../shared/gray-img/index'
import PlanetLink from '../shared/Planet Link'

import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Planet = (props) => {
  let title
  if (props.title_with_underline)
    title = <h4><u>{props.name}</u></h4>
  else
    title = <h4>{props.name}</h4>

  return (
    <div>
      <hr></hr>
      <Link to={`/planet/${props.id}`} onClick={() => {
        window.location.href = `/planet/${props.id}`
      }}>{title}</Link>
      < PlanetLink
        content={props.content}
        url={props.url}
      />
      <GrayImg
        img_url={props.img_url}
        gray={props.gray}
      />
    </div>
  )
}


export default Planet