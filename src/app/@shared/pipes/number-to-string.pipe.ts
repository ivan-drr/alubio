import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numberToString'
}) export class NumberToStringPipe implements PipeTransform {

    transform(input: number): string {
        return input.toString();
    }
}