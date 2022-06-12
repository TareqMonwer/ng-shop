import { ShortenProductNamePipe } from './shorten-product-name.pipe';

describe('ShortenProductNamePipe', () => {
  it('create an instance', () => {
    const pipe = new ShortenProductNamePipe();
    expect(pipe).toBeTruthy();
  });
});
