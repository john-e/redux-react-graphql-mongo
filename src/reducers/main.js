import * as Actions from '../actions';
import * as State from './state';

const main = (state = State.products, action) => {
    switch (action.type) {
        case Actions.START_LOADING:
        case Actions.DONE_LOADING:
            let newState = {
                ...state,
                isloading: action.isloading
            }
            return newState;
            break;
        default:
          return state
    }
}

export default main;