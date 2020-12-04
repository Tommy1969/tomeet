import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {LabeledText} from '../l2_ molecules/labeled_text'

const FieldSet = styled.fieldset`
  margin:                 1rem;
  display:                grid;
  grid-template-columns:  1fr;
  grid-row-gap:           1rem;
`

const Span = styled.span`
  text-align: right;
`

const Button = ({label, ...props}) =>
  <Span>
    <input
      type    = "button"
      value   = {label}
      onClick = {props.handleClick}
      />
  </Span>

Button.propTypes = {
  label:        PropTypes.string.isRequired,
  handleClick:  PropTypes.func.isRequired
}

export const EventEntry = ({id, title, place, ...props}) =>
  <FieldSet>
    <legend>イベント登録</legend>
    <LabeledText
      id            = {id+'_title'}
      name          = "title"
      label         = "イベント名"
      value         = {title}
      handleChange  = {props.handleChange}
      />
    <LabeledText
      id            = {id+'_place'}
      name          = "place"
      label         = "開催地"
      value         = {place}
      handleChange  = {props.handleChange}
      />
    <Button
      label         = "保存"
      handleClick   = {props.handleSave}
      />
  </FieldSet>
