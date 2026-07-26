import { CreditLabelPipe } from './credit-label.pipe';

describe('CreditLabelPipe', () => {
  const pipe = new CreditLabelPipe();

  it('creates an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms 1 credit to singular label', () => {
    expect(pipe.transform(1)).toBe('1 Credit');
  });

  it('transforms 3 credits to plural label', () => {
    expect(pipe.transform(3)).toBe('3 Credits');
  });

  it('transforms 0 or null/undefined to "No Credits"', () => {
    expect(pipe.transform(0)).toBe('No Credits');
    expect(pipe.transform(null)).toBe('No Credits');
    expect(pipe.transform(undefined)).toBe('No Credits');
  });
});
