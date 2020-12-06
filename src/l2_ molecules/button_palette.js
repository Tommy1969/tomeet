import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Span = styled.span`
  text-align: right;
`

export const ButtonPalette = ({label, handleClick, ...props}) =>
  <Span>
    <input
      type    = "button"
      value   = {label}
      onClick = {handleClick}
      {...props}
      />
  </Span>

ButtonPalette.propTypes = {
  label:        PropTypes.string.isRequired,
  handleClick:  PropTypes.func.isRequired
}
