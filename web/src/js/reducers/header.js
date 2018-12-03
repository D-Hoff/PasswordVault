const headerReducerDefaultState = true;
export default (state = headerReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_IS_COLLAPSED':
            return action.isCollapsed;
        default:
            return state;
    }
};