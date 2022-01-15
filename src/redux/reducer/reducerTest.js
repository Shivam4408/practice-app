const initialState = {
    value: 0
};

const reducerTest = (state = initialState, action) => {
    if(action.type === "increament") {
        return {
            ...state,
            value: state.value + action.payload
        }
    }
    if(action.type === "decrement") {
        return {
            ...state,
            value: state.value - action.payload
        }
    }
    return state;
}
export default reducerTest;