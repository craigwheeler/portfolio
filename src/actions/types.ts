import { Action as ReduxAction } from 'redux';

export interface IToggleSidebar extends ReduxAction {
  type: 'TOGGLE_SIDEBAR';
  open: boolean;
}

export type Action = IToggleSidebar;

export type AppState = {
  open: boolean;
};
