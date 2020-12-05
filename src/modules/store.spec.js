import {Store} from './store'


describe('Store が期待通りに動作すること', () => {
  describe('セーブが行われること', () => {
    beforeEach(() => {
      Store.save({'key':'value'})
    })
    it('setItem が呼び出されること', () => {
      expect(localStorage.setItem).toBeCalledTimes(1)
    })
    it('パラメータが JSON であること', () => {
      expect(localStorage.setItem).toBeCalledWith('event', '{"key":"value"}')
    })
  })
  describe('ロードが行われること', () => {
    it('getItem が呼び出されること', () => {
      Store.load()
      expect(localStorage.getItem).toBeCalledTimes(1)
    })
    it('JSON をパースしたオブジェクトが返ること', () => {
      localStorage.getItem.mockReturnValue('{"key":"value"}')
      const target = Store.load()
      expect(target).toEqual({key:"value"})
    })
    it('初期は null が返ること', () => {
      localStorage.getItem.mockReturnValue()
      const target = Store.load()
      expect(target).toBeNull()
    })
    it('指定した初期値が返ること', () => {
      localStorage.getItem.mockReturnValue()
      const target = Store.load('init')
      expect(target).toBe('init')
    })
  })
})
