import appReducer from '../reducer';
import { repoLoadingError } from '../actions';
import { ContainerState } from '../types';

describe('appReducer', () => {
  let state: ContainerState;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {} as any)).toEqual(expectedResult);
  });

  it('should handle the repoLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };

    const expectedResult = {
      error: fixture,
      loading: false,
    };

    expect(appReducer(state, repoLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
