const initialState = {film : "star wars"};

const reducerFilm = (state = initialState, action) => {
    let nextState = state;

    switch(action.type) {
        case "TEST1" :
            console.log(nextState)
            nextState = {...state, film : action.film};
            console.log(nextState)
            return nextState;
        default :
            nextState = {...state, film : "bleu"}
    }
    return nextState;   
}

export default reducerFilm;