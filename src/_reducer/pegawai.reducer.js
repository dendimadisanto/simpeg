import { pegawaiConstants } from '../_constants'

const initialState = {
    isLoading:false,
    data:{},
    accordion:{
        menu : 'personal',
        sub : 'identitas'
    }
  }

  export function pegawai(state = initialState, action) {
    switch (action.type) {
      case pegawaiConstants.PEGAWAI_REQUEST:
        return {
        ...state,
          isLoading: action.value
        };
        case pegawaiConstants.PEGAWAI_SUCCESS:
            return {
            ...state,
              data: action.value
            };
      default:
        return state
    }
  }