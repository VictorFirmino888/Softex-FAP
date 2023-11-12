import { Observer } from "./iObserver";

export class Publisher {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notificar(event: string, data?: any): void {
    this.observers.forEach((observer) => observer.update(event, data));
  }
}
