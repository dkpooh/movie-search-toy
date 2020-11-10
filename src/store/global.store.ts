import { makeAutoObservable, runInAction } from 'mobx'

export class GlobalStore {
  text: string = 'hi'

  constructor() {
    makeAutoObservable(this)
  }

  updateText = (text: string = '') => {
    this.text = text
    return text
  }
}
