import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import {LabeledText} from './labeled_text'

/** @test {LabeledText} */
describe('ラベル付き入力が期待通りに動作すること', () => {
  const mockChange = jest.fn()
  let target = null
  beforeEach(() => {
    render(<LabeledText
      id            = "aaa001"
      name          = "name002"
      label         = "ラベル01"
      handleChange  = {mockChange}
      value         = "値009"
    />)
    target = screen.getByLabelText('ラベル01')
  })
  it('ラベル付きの入力欄があること', () => {
    expect(target).toBeInTheDocument()
  })
  it('テキスト入力欄であること', () => {
    expect(target).toHaveAttribute('type', 'text')
  })
  it('渡した name 設定されること', () => {
    expect(target).toHaveAttribute('name', 'name002')
  })
  it('渡した ID が設定されること', () => {
    expect(target).toHaveAttribute('id', 'aaa001')
  })
  it('渡した値が設定されること', () => {
    expect(target).toHaveValue('値009')
  })
  it('チェンジハンドラーが呼ばれること', () => {
    fireEvent.change(target, {target: {value: '新しい'}})
    expect(mockChange).toBeCalledTimes(1)
  })
})
