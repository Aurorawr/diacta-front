import { User } from './user.model';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User('Test', 'User', 'test@mail.com')).toBeTruthy();
  });
});
