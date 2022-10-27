import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MatagatosService {

    private matagatos: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    matagatos$: Observable<number> = this.matagatos.asObservable();

    constructor() { }

    incrementMatagatos() {
        this.matagatos.next(this.matagatos.value + 1);
    }

}