import { makeAutoObservable } from "mobx";

export default class StoreProps {
  navHeight = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setHeight(newHeight) {
    this.navHeight = newHeight;
  }
}
