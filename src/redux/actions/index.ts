import { Action } from './types';

export const toggleSidebar = (open: boolean): Action => ({
  type: 'TOGGLE_SIDEBAR',
  open
});
