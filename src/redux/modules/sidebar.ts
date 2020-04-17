import { Action } from '../../types/sidebar';

export const initialState = {
  open: false
};

export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        open: !action.open
      };
    default:
      return state;
  }
}

export const toggleSidebar = (open: boolean): Action => ({
  type: 'TOGGLE_SIDEBAR',
  open
});
