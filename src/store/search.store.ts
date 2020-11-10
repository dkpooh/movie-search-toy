import { makeAutoObservable } from 'mobx'

export default class SearchStore {
  keyword = ''

  constructor() {
    makeAutoObservable(this)
  }

  setKeyword = (keyword: string = '') => {
    this.keyword = keyword
  }
}
