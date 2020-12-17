import styled from 'styled-components'
import {LabeledText} from '../l2_ molecules/labeled_text'
import {ButtonPalette} from '../l2_ molecules/button_palette'

const FieldSet = styled.fieldset`
  margin:                 1rem;
  display:                grid;
  grid-template-columns:  1fr;
  grid-row-gap:           1rem;
`

export const EventEntry = ({id, title, place, ...props}) =>
  <FieldSet data-testid="event_entry">
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
    <ButtonPalette
      label         = "保存"
      handleClick   = {props.handleSave}
      />
  </FieldSet>
