import { ShortenProductNamePipe } from './shorten-product-name.pipe';

describe('ShortenProductNamePipe', () => {
  it('create an instance', () => {
    const pipe = new ShortenProductNamePipe();
    expect(pipe).toBeTruthy();
  });

  
  it('shortens a string to given end position', () => {
    const pipe = new ShortenProductNamePipe();
    let productName = 'Winner Drinking Hot Pot'
    expect(pipe.transform(productName, 6))
      .toEqual('Winner')
    expect(pipe.transform(productName, 6).length)
      .toEqual(6)
  })
});
