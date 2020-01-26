import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const repoLoadingError = (error: object) =>
  action(ActionTypes.LOAD_REPOS_ERROR, error);
