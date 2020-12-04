import React from 'react'
import {render, screen} from '@testing-library/react'
import {EventEntry} from './event_entry'

describe('イベント登録フォームが期待通りに動作すること', () => {
  describe('イベント名入力欄が期待通りに動作すること', () => {
    let target = null
    beforeEach(() => {
      render(<EventEntry
        id            = "aaa001"
        handleChange  = {jest.fn()}
        handleSave    = {jest.fn()}
      />)
      target = screen.getByLabelText('イベント名')
    })
    it('入力欄があること', () => {
      expect(target).toBeInTheDocument()
    })
    it('テキスト入力欄であること', () => {
      expect(target).toHaveAttribute('type', 'text')
    })
  })

  describe('開催地名入力欄が期待通りに動作すること', () => {
    let target = null
    beforeEach(() => {
      render(<EventEntry
        id            = "aaa001"
        handleChange  = {jest.fn()}
        handleSave    = {jest.fn()}
      />)
      target = screen.getByLabelText('開催地')
    })
    it('入力欄があること', () => {
      expect(target).toBeInTheDocument()
    })
    it('テキスト入力欄であること', () => {
      expect(target).toHaveAttribute('type', 'text')
    })
  })

  describe('保存ボタンが期待通りに動作すること', () => {
    let target = null
    beforeEach(() => {
      render(<EventEntry
        id            = "aaa001"
        handleChange  = {jest.fn()}
        handleSave    = {jest.fn()}
      />)
      target = screen.getByDisplayValue('保存')
    })
    it('ボタンがあること', () => {
      expect(target).toBeInTheDocument()
    })
    it('ボタンであること', () => {
      expect(target).toHaveAttribute('type', 'button')
    })
  })
})
