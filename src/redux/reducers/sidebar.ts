import { Action, AppState } from '../actions/types';

const initialState: AppState = {
  open: false
};

const sidebar = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        open: !action.open
      };
    default:
      return state;
  }
};

export default sidebar;
