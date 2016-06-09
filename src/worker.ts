import App from "./app";

export default class Worker {
  id: number;

  constructor (id: number) {
    this.id = id;
  }

  start () {
    new App();
  }
}
