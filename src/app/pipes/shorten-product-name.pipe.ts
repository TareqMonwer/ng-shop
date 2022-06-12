import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenProductName'
})
export class ShortenProductNamePipe implements PipeTransform {

  transform(productName: string, start: number, end?: number): unknown {
    end = end ? end : productName.length;
    return productName.slice(start, end);
  }
}
