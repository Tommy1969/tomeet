export class Store {
  #key
  constructor(key) {
    this.#key = key
  }
  get key() { return this.#key }
  save(obj) {
    localStorage.setItem(this.key, JSON.stringify(obj))
  }
  load(init=null) {
    return JSON.parse(localStorage.getItem(this.key)) ?? init
  }
}
