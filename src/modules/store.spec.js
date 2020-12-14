import {Store} from './store'

/** @test {Store} */
describe('Store が期待通りに動作すること', () => {
  beforeEach(() => {
    localStorage.clear()
  })
  it('初期は null が返ること', () => {
    const target = Store.load()
    expect(target).toBeNull()
  })
  it('指定した初期値が返ること', () => {
    const target = Store.load('init')
    expect(target).toBe('init')
  })
  it('保存したデータをロードできること', () => {
    Store.save({key:'value'})
    const target = Store.load()
    expect(target).toEqual({key:"value"})
  })
})
