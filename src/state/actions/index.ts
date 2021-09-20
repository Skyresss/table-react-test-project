import { ActionTypes } from '../action-types';
import { User } from '../user';

export interface filterUsersAction {
  type: ActionTypes.FIND_USER;
  payload: {
    value: string;
    type: 'firstName' | 'state';
  };
}

export interface fetchUsersAction {
  type: ActionTypes.FETCH_USERS;
  payload: User[];
}
export interface filterColumnsAction {
  type: ActionTypes.FILTER_COLUMNS;
  payload: {
    type: 'ascending' | 'descending';
    value: 'id' | 'firstName' | 'lastName' | 'phone' | 'state' | 'email';
  };
}
export interface findUserByIdAction {
  type: ActionTypes.FIND_USER_BY_ID;
  payload: {
    id: number;
    firstName: string;
  };
}
export interface findAllStatesAction {
  type: ActionTypes.FIND_ALL_STATES
}
export type Action =
  | fetchUsersAction
  | filterUsersAction
  | filterColumnsAction
  | findUserByIdAction
  | findAllStatesAction