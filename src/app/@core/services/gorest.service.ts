import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

import { Owner, OwnerRaw } from 'src/app/@shared';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class GorestService {
  private baseUrl = environment.baseUrl;
  private lastPage: number = 0;
  private lastSearchPage: number = 0;

  constructor(private http: HttpClient) { }

  getOwners(): Observable<Owner[]> {
    this.lastPage++;
    return this.http
      .get<OwnerRaw[]>(`${this.baseUrl}/users?page=${this.lastPage}&per_page=10`)
      .pipe(
        map((items: OwnerRaw[]) => this.mapOwners(items)),
        retry(1),
        catchError(this.handleError)
      );
  }

  findOwnersByName(name: string) {
    this.lastSearchPage++;
    return this.http
      .get<OwnerRaw[]>(`${this.baseUrl}/users?name=${name}&page=${this.lastSearchPage}&per_page=10`)
      .pipe(
        map((items: OwnerRaw[]) => this.mapOwners(items)),
        retry(1),
        catchError(this.handleError)
      );
  }

  private mapOwners(items: OwnerRaw[]) {
    return items
      .map(owner => ({
        id: owner.id,
        firstName: this.getFirstName(owner.name),
        lastName: this.getLastName(owner.name),
        gender: owner.gender,
        status: this.mapStatus(owner.status),
        email: owner.email
      } as Owner));
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

  handleError(error: any): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(() => {
      return errorMessage;
    });
  }
}