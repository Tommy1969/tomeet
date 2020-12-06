import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Div = styled.div`
  display:                grid;
  grid-template-columns:  100px 1fr;
`

export const LabeledText = ({id, label, handleChange, ...props}) =>
  <Div>
    <label htmlFor={id}>{label}</label>
    <input
      id        = {id}
      type      = "text"
      onChange  = {handleChange}
      {...props}
      />
  </Div>

LabeledText.propTypes = {
  id:           PropTypes.string.isRequired,
  name:         PropTypes.string.isRequired,
  label:        PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value:        PropTypes.string
}
