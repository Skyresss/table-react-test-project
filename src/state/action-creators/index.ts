import { Dispatch } from 'redux';
import api from '../../api/axios';
import { ActionTypes } from '../action-types';
import { Action } from '../actions';

export const fetchUsers = () => async (dispatch: Dispatch<Action>) => {
  const response = await api.get('');
  return dispatch({
    type: ActionTypes.FETCH_USERS,
    payload: response.data,
  });
};
type test = 'firstName' | 'state';
export const filterUsers = (value: string, type: test) => {
  return {
    type: ActionTypes.FIND_USER,
    payload: {
      value,
      type,
    },
  };
};
export const filterColumns = (
  type: 'ascending' | 'descending',
  value: 'id' | 'firstName' | 'lastName' | 'phone' | 'state' | 'email'
) => {
  return {
    type: ActionTypes.FILTER_COLUMNS,
    payload: {
      type,
      value,
    },
  };
};
export const findUserByID = (id: number, firstName: string) => {
  return {
    type: ActionTypes.FIND_USER_BY_ID,
    payload: {
      id,
      firstName,
    },
  };
};
