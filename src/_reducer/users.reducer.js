import { userConstants } from '../_constants';

const initialState = {
    error: {},
    isLogin: false,
    user: {},
    isLoading:false,
    message:'',
  }

  export function users(state = initialState, action) {
    switch (action.type) {
      case userConstants.LOGIN_REQUEST:
        return {
        ...state,
          isLoading: action.value
        };
      case userConstants.LOGIN_FAILURE:
        return {
        ...state,
        error: action.value,
        };
      case userConstants.LOGIN_SUCCESS:
          return {
          ...state,
          user: action.user,
          };
      case userConstants.LOGOUT:
        return {...state};
      default:
        return state
    }
  }