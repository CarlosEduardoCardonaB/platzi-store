import { ProdCountPipe } from './prod-count.pipe';

describe('ProdCountPipe', () => {
  it('create an instance', () => {
    const pipe = new ProdCountPipe();
    expect(pipe).toBeTruthy();
  });
});
