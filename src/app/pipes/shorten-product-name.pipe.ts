import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenProductName'
})
export class ShortenProductNamePipe implements PipeTransform {

  transform(productName: string, end?: number): string {
    return productName.slice(0, end);
  }
}
