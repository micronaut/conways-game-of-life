import {foo} from './index';

describe('conway', () => {
    xtest('should update board', () => {
      const board = [
        0, 1, 1,
        0, 1, 0,
        0, 1, 1
      ];

      const expectedBoard = [
        0, 1, 1,
        1, 0, 0,
        0, 1, 1
      ];

      expect(foo(board)).toEqual(expectedBoard);
    });

    test('should update larger board', () => {
      const board = [
        0, 1, 1, 0, 1, 1,
        0, 1, 0, 0, 1, 1,
        0, 1, 1, 0, 1, 1, 
        0, 1, 1, 0, 1, 1, 
        0, 1, 1, 0, 1, 1, 
        0, 1, 1, 0, 1, 1, 
      ];

      const expectedBoard = [
        0, 1, 1, 1, 1, 1, 
        1, 0, 0, 0, 0, 0, 
        1, 0, 0, 0, 0, 0, 
        1, 0, 0, 0, 0, 0, 
        1, 0, 0, 0, 0, 0, 
        0, 1, 1, 0, 1, 1
      ];

      expect(foo(board)).toEqual(expectedBoard);
    });
});
