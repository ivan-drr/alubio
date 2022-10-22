import { Observable, Subscription } from 'rxjs';

export function disrupSubscription(sub: Subscription): boolean {
  if (!sub) return false;

  sub.unsubscribe();
  sub.closed = true;
  return sub.closed;
}

export function safeSubscribe(observer: Observable<any>, sub: Subscription): Observable<any> {
  if (sub) sub.unsubscribe();
  return observer;
}