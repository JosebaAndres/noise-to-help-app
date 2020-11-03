import { UiStoreActions, UiStoreActionTypes } from './ui-store-actions';
import { initialUiStoreState, UiStoreState } from './ui-store-state';

export function uiReducer(state = initialUiStoreState, action: UiStoreActions): UiStoreState {
  switch (action.type) {
    case UiStoreActionTypes.OpenMenu: {
      return {
        ...state,
      };
    }
    case UiStoreActionTypes.OpenMenuSuccess: {
      return {
        ...state,
        menuOpened: action.payload.menuOpened,
      };
    }

    case UiStoreActionTypes.CloseMenu: {
      return {
        ...state,
      };
    }

    case UiStoreActionTypes.CloseMenuSuccess: {
      return {
        ...state,
        menuOpened: action.payload.menuOpened,
      };
    }

    default: {
      return state;
    }
  }
}
