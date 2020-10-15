export const ADD_ITEM_TO_COLLECTION_SUCCESS = "ADD_ITEM_TO_COLLECTION_SUCCESS"
export const ADD_ITEM_TO_COLLECTION_START = "ADD_ITEM_TO_COLLECTION_START"
//export const ADD_ITEM_TO_COLLECTION_FAIL = "ADD_ITEM_TO_COLLECTION_FAIL"

export const addItemToCollection = item => {
    return (dispatch) => {
        dispatch({
            type: ADD_ITEM_TO_COLLECTION_START, payload: { error: "", isFetching: true }
        })

        // this is where the axios call will go but for now no axios call
        dispatch({
            type: ADD_ITEM_TO_COLLECTION_SUCCESS, 
            payload: { error: "", isFetching: false, item: item}
        })

        // in the future will will have a fail state dispatch call something like
        // dispatch({
        //     type: ADD_ITEM_TO_COLLECTION_FAIL, payload: { error: "Something bad happened", isFetching: false}
        // })
    }
}