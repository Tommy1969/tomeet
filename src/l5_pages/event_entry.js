import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FieldSet = styled.fieldset`
  margin:                 1rem;
  display:                grid;
  grid-template-columns:  1fr;
  grid-row-gap:           1rem;
`

const Div = styled.div`
  display:                grid;
  grid-template-columns:  100px 1fr;
`

const LabeledText = ({id, label, value, ...props}) =>
  <Div>
    <label htmlFor={id}>{label}</label>
    <input id={id} type="text" value={value} onChange={props.handleChange || (() => {})} />
  </Div>

LabeledText.propTypes = {
  id:     PropTypes.string.isRequired,
  label:  PropTypes.string.isRequired
}

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

export const EventEntry = ({id, title, place, ...props}) =>
  <FieldSet>
    <legend>イベント登録</legend>
    <LabeledText
      id            = {id+'_title'}
      label         = "イベント名"
      value         = {title}
      handleChange  = {props.handleChange}
      />
    <LabeledText
      id            = {id+'_place'}
      label         = "開催地"
      value         = {place}
      handleChange  = {props.handleChange}
      />
    <Button
      label       = "保存"
      handleClick = {props.handleSave}
      />
  </FieldSet>
