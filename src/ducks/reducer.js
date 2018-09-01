
//set up initial state
const INITIAL_STATE = {
    num: 0
};

// add action type variable to maintain spelling consitency
const ADD_NUMBER = "ADD_NUMBER";

// reducer
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ADD_NUMBER:
            // make copy of state, add new num property to our copy, and increase num by current value plus one
            return {...state, num: state.num + 1};

            // if no action type is found then return state as it is
        default: return state;
    }
};

// action creator which will be passed and invije
export function add(){
    return {
        type: ADD_NUMBER,
        //this value is left null because we are simply adding one number to the previous state value so you dont need to pass a number to your reducer, it will always just increment by 1 
        payload: null
    }
}