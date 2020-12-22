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
  it('イベント名を変更できること', () => {
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
  it('保存ボタン押下でデータが保存されること', () => {
    const target = screen.getByDisplayValue('保存')
    expect(target).toBeInTheDocument()
    fireEvent.click(target)
    const exp = [{
      title:    '',
      place:    '',
      position: [35.681236, 139.767125]  
    }]
    expect(localStorage.getItem('event')).toEqual(JSON.stringify(exp))
  })
})
