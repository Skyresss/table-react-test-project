import { Action } from '../actions';
import { ActionTypes } from '../action-types';
import { User } from '../user';
import produce from 'immer';

interface tableState {
  users: User[];
  filteredUsers?: User[];
  params: {
    firstName: string;
    state: string;
  };
  foundUserById?: User;
  states: string[];
}

const initialTableState = {
  users: [
    {
      id: 1821231231,
      firstName: 'Aisha',
      lastName: 'Hagan',
      email: 'RRichard@vitae.io',
      phone: '(319)201-9102',
      adress: {
        streetAddress: '852 Lectus Ln',
        city: 'Rosenberg',
        state: 'ND',
        zip: '79157',
      },
      description: '{lorem|32',
    },
  ],
  params: {
    firstName: '',
    state: 'All',
  },
  states: [],
};
const reducer = produce(
  (state: tableState = initialTableState, action: Action) => {
    switch (action.type) {
      case ActionTypes.FETCH_USERS:
        state.users = action.payload;
        state.filteredUsers = state.users;
        return state;
      case ActionTypes.FIND_USER:
        state.params[action.payload.type] = action.payload.value;
        state.filteredUsers = state.users
          .filter(
            (user) =>
              state.params.firstName === '' ||
              user.firstName
                .toLowerCase()
                .includes(state.params.firstName.toLowerCase())
          )
          .filter(
            (user) =>
              state.params.state === 'All' ||
              user.adress.state === state.params.state
          );

        return state;
      case ActionTypes.FILTER_COLUMNS:
        if (action.payload.type === 'ascending') {
          state.filteredUsers!.sort((a, b) =>
            action.payload.value === 'state'
              ? a.adress[action.payload.value].localeCompare(
                  b.adress[action.payload.value],
                  'en',
                  {
                    numeric: true,
                  }
                )
              : a[action.payload.value]
                  .toString()
                  .localeCompare(b[action.payload.value].toString(), 'en', {
                    numeric: true,
                  })
          );
        } else {
          state.filteredUsers = state
            .filteredUsers!.sort((a, b) =>
              action.payload.value === 'state'
                ? a.adress[action.payload.value].localeCompare(
                    b.adress[action.payload.value],
                    'en',
                    {
                      numeric: true,
                    }
                  )
                : a[action.payload.value]
                    .toString()
                    .localeCompare(b[action.payload.value].toString(), 'en', {
                      numeric: true,
                    })
            )
            .reverse();
        }
        return state;
      case ActionTypes.FIND_USER_BY_ID:
        state.foundUserById = state.users.find(
          (user) =>
            user.id === action.payload.id &&
            user.firstName === action.payload.firstName
        );
        return state;
      case ActionTypes.FIND_ALL_STATES:
        state.states = state.users.map((user) => user.adress.state);
        state.states = state.states.filter(function (item, pos) {
          return state.states.indexOf(item) == pos;
        });
        return state;
      default:
        return state;
    }
  }
);

export default reducer;
