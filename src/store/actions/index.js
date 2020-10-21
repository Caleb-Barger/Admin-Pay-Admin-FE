// #############################################################
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS"
export const FETCH_POSTS_START= "FETCH_POSTS_START"
export const FETCH_POSTS_FAIL= "FETCH_POSTS_FAIL"
// #############################################################
export const ADD_ITEM_TO_COLLECTION_SUCCESS = "ADD_ITEM_TO_COLLECTION_SUCCESS"
export const ADD_ITEM_TO_COLLECTION_START = "ADD_ITEM_TO_COLLECTION_START"
export const ADD_ITEM_TO_COLLECTION_FAIL = "ADD_ITEM_TO_COLLECTION_FAIL"
// #############################################################
export const SET_KARMA_SUCCESS = "SET_KARMA_SUCCESS"

// !SHOULD FAIL & THE FAKE_FETCH_POSTS_RES ARE TEMPORARY
// THEY NEED TO BE REPLACED ONCE THE API IS UP AND RUNNING!

const FAKE_FETCH_POSTS_RES = [
    "some text",
    "some more text",
    "other item that has a desc",
    "another desc",
    "some other fancy desc",
    "yes an item that you can purchase for some karma!",
    "KARMA FOR ME",
    "PLS get",
    "Great admin resource!"
]; const SHOULD_FAIL = false

export const addItemToCollection = items => {
    return (dispatch) => {
        dispatch({
            type: ADD_ITEM_TO_COLLECTION_START, payload: { error: "", isFetching: true }
        })
        dispatch({
            type: ADD_ITEM_TO_COLLECTION_SUCCESS, 
            payload: { error: "", isFetching: false, items: items}
        })
        if (SHOULD_FAIL) {
            dispatch({
                type: ADD_ITEM_TO_COLLECTION_FAIL, payload: { error: `!ERROR ${ADD_ITEM_TO_COLLECTION_FAIL}!`, isFetching: false}
            })       
        }
    }
}

export const setKarma = newKarma => {
    return(dispatch) => {
        dispatch({
            type: SET_KARMA_SUCCESS,
            payload: {error: "", isFetching: false, karma: newKarma}
        })
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch({
            type: FETCH_POSTS_START, payload: { error: "", isFetching: true}
        })
        dispatch({
            type: FETCH_POSTS_SUCCESS,
            payload: { error: "", isFetching: false, items: FAKE_FETCH_POSTS_RES }
        })
        if ( SHOULD_FAIL ) {
            dispatch({
                type: FETCH_POSTS_FAIL, payload: { error: `!ERROR ${FETCH_POSTS_FAIL}!`,
                isFetching: false}
            })
        }
    }
}