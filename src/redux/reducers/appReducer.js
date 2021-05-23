const initialState = {
  userIsAdmin: false,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_ADMIN_STATUS': {
      return { userIsAdmin: !state.userIsAdmin };
    }

    default:
      return state;
  }
}
