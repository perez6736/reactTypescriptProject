import { ActionType } from '../action-types';

interface SearchRepoAction {
  type: ActionType.SEARCH_REPOS;
  payload?: any;
}

interface SearchRepoSuccessAction {
  type: ActionType.SEARCH_REPOS_SUCCESS;
  payload: string[];
}

interface SearchRepoErroAction {
  type: ActionType.SEARCH_REPOS_ERROR;
  payload: string;
}

export type Action =
  | SearchRepoAction
  | SearchRepoSuccessAction
  | SearchRepoErroAction;
