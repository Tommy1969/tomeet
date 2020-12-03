import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import {EventContainer} from './event'

describe('', () => {
  const mockChange  = jest.fn()
  const mockSave    = jest.fn()
  beforeEach(() => {
    render(<EventContainer
      title         = "品川アジャイル定例会"
      place         = "東京駅"
      handleChange  = {mockChange}
      handleSave    = {mockSave}
    />)
  })
  it('タイトルが設定されること', () => {
    const target = screen.getByDisplayValue('品川アジャイル定例会')
    expect(target).toBeInTheDocument()
  })
  it('開催地が設定されること', () => {
    const target = screen.getByDisplayValue('東京駅')
    expect(target).toBeInTheDocument()
  })
  it('イベント名のチェンジハンドラーが呼ばれること', () => {
    const target = screen.getByLabelText('イベント名')
    fireEvent.change(target, {target: {value: ''}})
    expect(mockChange).toBeCalledTimes(1)
  })
  it('開催地のチェンジハンドラーが呼ばれること', () => {
    const target = screen.getByLabelText('開催地')
    fireEvent.change(target, {target: {value: ''}})
    expect(mockChange).toBeCalledTimes(1)
  })
  it('保存ハンドラーが呼ばれること', () => {
    const target = screen.getByDisplayValue('保存')
    fireEvent.click(target)
    expect(mockSave).toBeCalledTimes(1)
  })
})
