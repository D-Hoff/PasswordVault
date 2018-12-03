const shelfsReducerDefaultState = [];
export default (state = shelfsReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_SHELFS':
            return action.shelfs;
        default:
            return state;
    }
};