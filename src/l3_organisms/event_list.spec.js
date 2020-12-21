import {fireEvent, render, screen} from '@testing-library/react'
import {EventList} from './event_list'

const dummy = [
  {title: '忘年会', place: '軽井沢'},
  {title: 'RSGT2021', place: 'お茶の水ソラシティ'}
]
const mockFocus = jest.fn()

/** @test {EventList} */
describe('イベント一覧が動作すること', () => {
  beforeEach(() => {
    mockFocus.mockClear()
    render(<EventList
      events      = {dummy}
      handleFocus = {mockFocus}
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
  it('一つ目のクリックでフォーカスが変わること', () => {
    const target = screen.getByText(dummy[0].place)
    fireEvent.click(target)
    expect(mockFocus).toBeCalledTimes(1)
    expect(mockFocus).toBeCalledWith(0)
  })
  it('二つ目の title があること', () => {
    const target = screen.getByText(dummy[1].title)
    expect(target).toBeInTheDocument()
  })
  it('二つ目の place があること', () => {
    const target = screen.getByText(dummy[1].place)
    expect(target).toBeInTheDocument()
  })
  it('二つ目のクリックでフォーカスが変わること', () => {
    const target = screen.getByText(dummy[1].place)
    fireEvent.click(target)
    expect(mockFocus).toBeCalledTimes(1)
    expect(mockFocus).toBeCalledWith(1)
  })
})
