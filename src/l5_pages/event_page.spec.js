import {render, screen} from '@testing-library/react'
import {EventPage} from './event_page'

/** @test {EventPage} */
describe('イベントページが動作すること', () => {
  beforeEach(() => {
    render(<EventPage
      handleChange  = {()=>{}}
      handleSave    = {()=>{}}
      />)
  })
  it('イベント登録があること', () => {
    const target = screen.getByTestId('event_entry')
    expect(target).toBeInTheDocument()
  })
  it('イベント一覧があること', () => {
    const target = screen.getByTestId('event_list')
    expect(target).toBeInTheDocument()
  })
})
