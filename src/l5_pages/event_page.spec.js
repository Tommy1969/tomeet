import {RecoilRoot} from "recoil"
import {render, screen} from '@testing-library/react'
import {EventPage} from './event_page'

/** @test {EventPage} */
describe('イベントページが動作すること', () => {
  beforeEach(() => {
    render(
      <RecoilRoot>
        <EventPage
          handleChange  = {()=>{}}
          handleSave    = {()=>{}}
          />
      </RecoilRoot>
    )
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
