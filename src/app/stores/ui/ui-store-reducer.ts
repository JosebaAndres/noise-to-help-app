import { UiStoreActions, UiStoreActionTypes } from './ui-store-actions';
import { initialUiStoreState, UiStoreState } from './ui-store-state';

export function uiReducer(state = initialUiStoreState, action: UiStoreActions): UiStoreState {
  switch (action.type) {
    case UiStoreActionTypes.OpenMenu: {
      return {
        ...state,
        menuOpened: true,
      };
    }

    case UiStoreActionTypes.CloseMenu: {
      return {
        ...state,
        menuOpened: false,
      };
    }

    case UiStoreActionTypes.SetMediaQuery: {
      return {
        ...state,
        mediaQuery: action.payload,
      };
    }

    case UiStoreActionTypes.SetDeviceType: {
      return {
        ...state,
        deviceType: action.payload,
      };
    }

    case UiStoreActionTypes.SetScrollTop: {
      return {
        ...state,
        scrollTop: action.payload,
      };
    }

    case UiStoreActionTypes.SetSignatures: {
      return {
        ...state,
        signatures: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
