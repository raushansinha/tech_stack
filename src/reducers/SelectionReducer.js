export default (state = null, action) => {
    switch(action.type) {
        case 'SELECT_LIBRARY':
            return action.payload;
        break;
        default:
         return state;
    }
};