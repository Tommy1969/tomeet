import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import {ButtonPalette} from './button_palette'

/** @test {ButtonPalette} */
describe('ボタンが期待通りに動作すること', () => {
  const mockClick = jest.fn()
  let target = null
  beforeEach(() => {
    render(<ButtonPalette
      label         = "テストボタン"
      handleClick   = {mockClick}
    />)
    target = screen.getByDisplayValue('テストボタン')
  })
  it('ボタンがあること', () => {
    expect(target).toBeInTheDocument()
  })
  it('タイプがボタンであること', () => {
    expect(target).toHaveAttribute('type', 'button')
  })
  it('クリックハンドラーが呼ばれること', () => {
    fireEvent.click(target)
    expect(mockClick).toBeCalledTimes(1)
  })
})
