const passwordReducerDefaultState = '';
export default (state = passwordReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_PASSWORD':
            return  action.password;
        default:
            return state;
    }
};