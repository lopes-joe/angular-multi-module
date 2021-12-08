import { DateBrPipe } from './date-br.pipe';

describe('DateBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DateBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar a data 2017-03-31 para 31/03/2017', ()=> {
    const pipe = new DateBrPipe();
    expect(pipe.transform('2017-03-31')).toEqual('31/03/2017');
  })
});
