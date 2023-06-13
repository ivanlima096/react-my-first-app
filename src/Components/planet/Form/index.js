import React, { Fragment, useState } from "react";

const initialState = {
  name: '',
  content: '',
  url: '',
  img_url: ''
}

const Form = (props) => {
  const [fields, setFields] = useState(initialState)

  const handleFieldsChange = (e) => setFields({
    ...fields,
    [e.currentTarget.name]: e.currentTarget.value
  })

  const handleSubmit = (event) => {
    props.addPlanet(fields)
    event.preventDefault()
    setFields(initialState)
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" name="name" value={fields.name} onChange={handleFieldsChange} />
        </div>
        <br />
        <div>
          <label htmlFor="content">Content: </label>
          <input id="content" type="text" name="content" value={fields.content} onChange={handleFieldsChange} />
        </div>
        <br />
        <div>
          <label htmlFor="url">url: </label>
          <input id="url" type="text" name="url" value={fields.url} onChange={handleFieldsChange} />
        </div>
        <br />
        <div>
          <label htmlFor="img_url">img_url: </label>
          <input id="img_url" type="text" name="img_url" value={fields.img_url} onChange={handleFieldsChange} />
        </div>
        <br />
        <input type="submit" />
      </form>
    </Fragment>
  )
}

export default Form