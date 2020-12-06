import React from 'react'
import {RecoilRoot} from "recoil"
import {fireEvent, render, screen} from '@testing-library/react'
import {EventContainer} from './event'

/** @test {EventContainer} */
describe('イベントコンテナが動作すること', () => {
  beforeEach(() => {
    render(
      <RecoilRoot>
        <EventContainer />
      </RecoilRoot>
    )
  })
  it('イベント名が変更できること', () => {
    const target = screen.getByLabelText('イベント名')
    expect(target).toHaveValue('')
    fireEvent.change(target, {target: {value: '品川アジャイル定例会'}})
    expect(target).toHaveValue('品川アジャイル定例会')
  })
  it('開催地を変更できること', () => {
    const target = screen.getByLabelText('開催地')
    expect(target).toHaveValue('')
    fireEvent.change(target, {target: {value: '東京駅'}})
    expect(target).toHaveValue('東京駅')
  })
  it('localStorage.setItem が呼ばれること', () => {
    const target = screen.getByDisplayValue('保存')
    expect(target).toBeInTheDocument()
    fireEvent.click(target)
    expect(localStorage.setItem).toBeCalledTimes(1)
  })
})
