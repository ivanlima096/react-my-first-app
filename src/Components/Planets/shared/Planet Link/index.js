import React, { Fragment } from 'react'

const PlanetLink = (props) => {
  if (!props.content)
    return null

  if (props.url) {

    return (
      <Fragment>
        <p> {props.content}</p>
        <p>
          <a href={props.url} target='blank'>Clique para saber mais!
          </a>
        </p>
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        <p><u> {props.content} </u> </p>

      </Fragment>
    )
  }
}

export default PlanetLink