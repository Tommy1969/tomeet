export const Store = {
  KEY: 'event',
  save: obj => {
    localStorage.setItem(Store.KEY, JSON.stringify(obj))
  },
  load: (init=null) => {
    const raw = localStorage.getItem(Store.KEY)
    return raw ? JSON.parse(raw) : init
  }
}
