import {Store} from './store'

/** @test {Store} */
describe('Store が動作すること', () => {
  const store = new Store('event')
  beforeEach(() => {
    localStorage.clear()
  })
  it('初期は null が返ること', () => {
    const target = store.load()
    expect(target).toBeNull()
  })
  it('指定した初期値が返ること', () => {
    const target = store.load('init')
    expect(target).toBe('init')
  })
  it('保存したデータをロードできること', () => {
    store.save({key:'value'})
    const target = store.load()
    expect(target).toEqual({key:"value"})
  })
})
