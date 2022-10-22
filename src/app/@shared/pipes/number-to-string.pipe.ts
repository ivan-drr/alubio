import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numberToString'
}) export class NumberToString implements PipeTransform {

    transform(input: number): string {
        return input.toString();
    }
}