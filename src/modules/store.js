export const Store = {
  save: (key, value) => {
    localStorage.setItem(key, value)
  },
  load: (key) => {
    return localStorage.getItem(key)
  }
}
