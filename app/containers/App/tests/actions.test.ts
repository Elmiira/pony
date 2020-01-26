import ActionTypes from '../constants';

import { repoLoadingError } from '../actions';
import { action } from 'typesafe-actions';

describe('App Actions', () => {
  describe('repoLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = action(
        ActionTypes.LOAD_REPOS_ERROR,
        fixture,
      );

      expect(repoLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
