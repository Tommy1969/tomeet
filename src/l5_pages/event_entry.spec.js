import React from 'react'
import { render, screen } from '@testing-library/react'
import { EventEntry } from './event_entry'

describe('入力フォームパーツが動作すること', () => {
  it('"イベント名" があること', () => {
    render(<EventEntry
      id = "aaa001"
    />)
    const target = screen.getByLabelText('イベント名')
    expect(target).toBeInTheDocument()
  })
})
