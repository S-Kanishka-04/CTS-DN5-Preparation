import { Pipe, PipeTransform } from '@angular/core';

/**
 * CreditLabelPipe — HOL 3 Task 3.
 * Transforms a raw `credits` number into a human-readable label:
 *   1        -> "1 Credit"
 *   2, 3, 4… -> "N Credits"
 *   null / 0 -> "No Credits"
 *
 * Pure by default (the default `pure: true`), meaning it only re-runs
 * when the input reference/value changes — perfectly fine here since
 * `credits` is a primitive number.
 */
@Pipe({
  name: 'creditLabel',
  standalone: true
})
export class CreditLabelPipe implements PipeTransform {
  transform(credits: number | null | undefined): string {
    if (credits === null || credits === undefined || credits === 0) {
      return 'No Credits';
    }
    return credits === 1 ? '1 Credit' : `${credits} Credits`;
  }
}
