import { orderNames } from '../src/data.js';


describe('orderNames', () => {
  it('is a function', () => {
    expect(typeof orderNames).toBe('function');
  });

  it('returns `orderAz`', () => {
    expect(orderAz(data.sort)).toBe('orderAz');
  });
});





describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
