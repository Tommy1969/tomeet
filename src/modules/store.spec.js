import {Store} from './store'


describe('Store が期待通りに動作すること', () => {
  it('setItem が呼び出されること', () => {
    localStorage.clear()
    const key = 'key001'
    const value = 'value001'
    Store.save(key, value)
    expect(localStorage.setItem).toBeCalledTimes(1)
    expect(localStorage.setItem).toBeCalledWith(key, value)
  })
  it('getItem が呼び出されること', () => {
    const key = 'key002'
    Store.load(key)
    expect(localStorage.getItem).toBeCalledTimes(1)
    expect(localStorage.getItem).toBeCalledWith(key)
  })
})
