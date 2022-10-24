import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription, throwError, of } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

import { Owner, OwnerRaw, safeSubscribe } from 'src/app/@shared';
import { environment } from 'src/environments/environment';
import { LoggerService } from './logger.service';
@Injectable({
  providedIn: 'root',
})
export class GorestService {
  apiURL = 'https://gorest.co.in/public/v2/';
  matagatos: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  owners: BehaviorSubject<Owner[]> = new BehaviorSubject<Owner[]>([]);

  ownersSubscription!: Subscription;
  ownersPeriodicSubscription!: Subscription;

  constructor(private http: HttpClient, private logger: LoggerService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.gorestToken}`
    }),
  };

  handleGetOwners(): Observable<Owner[]> {
    if (this.owners.value.length > 0) return this.getOwnersReminder();
    else return this.getOwners();
  }

  private getOwners(): Observable<Owner[]> {
    this.matagatos.next(this.matagatos.value + 1);
    return this.http
      .get<OwnerRaw[]>(this.apiURL + '/users')
      .pipe(
        map((items: OwnerRaw[]) => items
          .map(owner => ({ id: owner.id, firstName: this.getFirstName(owner.name), lastName: this.getLastName(owner.name), gender: owner.gender, status: this.mapStatus(owner.status), email: owner.email } as Owner))
        ),
        retry(1),
        catchError(this.handleError)
      );
  }

  private getOwnersReminder(): Observable<Owner[]> {
    return of(this.owners.value);
  }

  perdiodicUpdateOwners() {
    setInterval(() => {
      this.ownersPeriodicSubscription = safeSubscribe(this.getOwners(), this.ownersPeriodicSubscription)
        .subscribe((o: Owner[]) => this.owners.next(o));
    }, 300000);
  }

  subscribeOwners(): void {
    this.ownersSubscription = safeSubscribe(this.handleGetOwners(), this.ownersSubscription)
      .subscribe((o: Owner[]) => this.owners.next(o));
  }

  private getFirstName(name: string): string {
    return name.substring(0, name.indexOf(' '));
  }

  private getLastName(name: string): string {
    return name.substring(name.indexOf(' ') + 1, name.length);
  }

  private mapStatus(status: string): boolean {
    return status === 'active' ? true : false;
  }

  getOwner(id: any): Observable<Owner> {
    this.matagatos.next(this.matagatos.value + 1);
    return this.http
      .get<Owner>(this.apiURL + '/users/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  createOwner(owner: Owner): Observable<Owner> {
    this.matagatos.next(this.matagatos.value + 1);
    return this.http
      .post<Owner>(
        this.apiURL + '/users',
        JSON.stringify(owner),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  updateOwner(id: number, employee: Owner): Observable<Owner> {
    this.matagatos.next(this.matagatos.value + 1);
    return this.http
      .put<Owner>(
        this.apiURL + '/users/' + id,
        JSON.stringify(employee),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteOwner(id: number): Observable<Owner> {
    this.matagatos.next(this.matagatos.value + 1);
    return this.http
      .delete<Owner>(this.apiURL + '/users/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    this.logger.error(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}