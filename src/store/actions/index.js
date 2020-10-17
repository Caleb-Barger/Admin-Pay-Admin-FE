// #############################################################
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS"
export const FETCH_POSTS_START= "FETCH_POSTS_START"
export const FETCH_POSTS_FAIL= "FETCH_POSTS_FAIL"
// #############################################################
export const ADD_ITEM_TO_COLLECTION_SUCCESS = "ADD_ITEM_TO_COLLECTION_SUCCESS"
export const ADD_ITEM_TO_COLLECTION_START = "ADD_ITEM_TO_COLLECTION_START"
export const ADD_ITEM_TO_COLLECTION_FAIL = "ADD_ITEM_TO_COLLECTION_FAIL"
// #############################################################


// !SHOULD FAIL & THE FAKE_FETCH_POSTS_RES ARE TEMPORARY
// THEY NEED TO BE REPLACED ONCE THE API IS UP AND RUNNING!

const FAKE_FETCH_POSTS_RES = [
    "Caleb",
    "Camden",
    "Kyle",
    "Kevin",
    "Michelle",
    "Trey",
    "Jim",
    "Suhr",
    "Run 100"
]; const SHOULD_FAIL = false

export const addItemToCollection = item => {
    return (dispatch) => {
        
        setTimeout(() => {
            dispatch({
                type: ADD_ITEM_TO_COLLECTION_START, payload: { error: "", isFetching: true }
            })
        }, 3000)

        dispatch({
            type: ADD_ITEM_TO_COLLECTION_SUCCESS, 
            payload: { error: "", isFetching: false, item: item}
        })

        if (SHOULD_FAIL) {
            dispatch({
                type: ADD_ITEM_TO_COLLECTION_FAIL, payload: { error: `!ERROR ${ADD_ITEM_TO_COLLECTION_FAIL}!`, isFetching: false}
            })       
        }
        
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({
                type: FETCH_POSTS_START, payload: { error: "", isFetching: true}
            })
        }, 3000)

        
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