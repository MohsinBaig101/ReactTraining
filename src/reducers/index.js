const Reducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                isAuthenticated: action.payload
            };
        case 'countries':
            return {
                ...state,
                countries: action.payload
            };
        case 'country':
            console.log('called counrty reducer')
            return {
                ...state,
                country: action.payload
            };
        case 'ads':
            return {
                ...state,
                ads: action.payload
            };
        case 'authUser':
            return {
                ...state,
                authUser: action.payload
            };
        case 'loader':
                return {
                    ...state,
                    loader: action.payload
                };
        case 'no_record':
            return {
                ...state,
                noRecord: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;