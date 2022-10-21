import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private static INFO = `%c☉ %c`;
  private static REQUEST = `%c⇄ %c`;
  private static SUCCESS = `%c☀ %c`;
  private static WARNING = `%c☂ %c`;
  private static ERROR = `%c❄ %c`;

  private static INFO_COLOR = '#598ED1';
  private static REQUEST_COLOR = '#598ED1';
  private static SUCCESS_COLOR = '#1E9E65';
  private static WARNING_COLOR = '#c7c25f';
  private static ERROR_COLOR = '#c74644';

  constructor() {
    const oldTrace= console.trace;
    console.trace = (...args) => { console.groupCollapsed.apply(console, args); oldTrace("Nested Calls"); console.groupEnd()};
  }

  info(msg: string) {
    console.trace(LoggerService.INFO + msg, 'font-size: 2em; color: #d1a87b', `color: ${LoggerService.INFO_COLOR}`);
  }

  request(msg: string) {
    console.trace(LoggerService.REQUEST + msg, 'font-size: 2em; color: #d1a87b', `color: ${LoggerService.REQUEST_COLOR}`);
  }

  success(msg: string, object?: Object) {
    console.trace(LoggerService.SUCCESS + msg, 'font-size: 2em; color: #d1a87b', `color: ${LoggerService.SUCCESS_COLOR}`);
    if (object) console.table(object);
  }

  warning(msg: string) {
    console.trace(LoggerService.WARNING + msg, 'font-size: 2em; color: #d1a87b', `color: ${LoggerService.WARNING_COLOR}`);
  }

  error(msg: string, error?: Error, object?: Object) {
    console.info(LoggerService.ERROR + new Error(msg).stack, 'font-size: 2em; color: #d1a87b', `color: ${LoggerService.ERROR_COLOR}`);
    if (object) console.table(object);
    if (error) console.error(error);
  }

}
