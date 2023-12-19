import * as Actions from '../../Apis/ActionTypes'
const initialState ={
     isLoading: false, 
     error: undefined,
     data: {},
     update:{}
    }
const TabTwoReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.TABTWO_PENDING:
            return  {
                ...state,
                isLoading: true, 
            };
        case Actions.TABTWO_ERROR:
            return {
                ...state,
               isLoading: false,
               error: action.error
            }
        case Actions.TABTWO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.data
            }
        case Actions.TABTWO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.data,
                update: action.data
            }
        default:
            return state;
    }
}
export default TabTwoReducer; 