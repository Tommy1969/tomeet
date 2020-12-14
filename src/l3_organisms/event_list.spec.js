import {render, screen} from '@testing-library/react'
import {EventList} from './event_list'

const dummy = [
  {title: '忘年会', place: '軽井沢'},
  {title: 'RSGT2021', place: 'お茶の水ソラシティ'}
]

/** @test {EventList} */
describe('イベント一覧が動作すること', () => {
  beforeEach(() => {
    render(<EventList
      events = {dummy}
      />)
  })
  it('一つ目の title があること', () => {
    const target = screen.getByText(dummy[0].title)
    expect(target).toBeInTheDocument()
  })
  it('一つ目の place があること', () => {
    const target = screen.getByText(dummy[0].place)
    expect(target).toBeInTheDocument()
  })
  it('二つ目の title があること', () => {
    const target = screen.getByText(dummy[1].title)
    expect(target).toBeInTheDocument()
  })
  it('二つ目の place があること', () => {
    const target = screen.getByText(dummy[1].place)
    expect(target).toBeInTheDocument()
  })
})
