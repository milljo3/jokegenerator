import {useCallback, useEffect, useReducer} from "react";

function useJoke() {
    const [state, dispatch] = useReducer(jokeReducer, initialState);

    const fetchJoke = useCallback(() => {
        dispatch({type: "FETCH_START"});

        fetch("https://official-joke-api.appspot.com/jokes/random/")
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: "FETCH_SUCCESS",
                    payload: data,
                })
            })
            .catch(error => {
                dispatch({
                    type: "FETCH_FAIL",
                    payload: error.message,
                })
            });
    }, []);

    useEffect(() => {
        fetchJoke();
    }, [fetchJoke]);

    return {
        ...state,
        refresh: fetchJoke,
    };
}


function jokeReducer(state, action) {
    switch (action.type) {
        case 'FETCH_START': {
            return {
                ...state,
                loading: true,
                error: null
            };
        }
        case 'FETCH_SUCCESS': {
            return {
                joke: action.payload,
                loading: false,
                error: null
            };
        }
        case 'FETCH_FAIL': {
            return {
                joke: null,
                loading: false,
                error: action.payload
            };
        }
        default: {
            return state;
        }
    }
}

const initialState = {
    joke: null,
    loading: true,
    error: null,
}

export default useJoke;