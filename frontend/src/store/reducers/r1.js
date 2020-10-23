import {FETCH_POSTS_SUCCESS, FETCH_POSTS_START, FETCH_POSTS_FAIL,
        ADD_ITEM_TO_COLLECTION_SUCCESS, ADD_ITEM_TO_COLLECTION_START, ADD_ITEM_TO_COLLECTION_FAIL,
        SET_KARMA_SUCCESS
} from '../actions'

const initalState = {
    karma : 2,
    collection: [],
    items: [],
    error: "",
    isFetching: false
}

export const r1 = (state=initalState, action) => {
    switch(action.type) {
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                error : action.payload.error,
                isFetching: action.payload.isFetching,
                items: action.payload.items
            }
        case FETCH_POSTS_START: 
            return {
                ...state,
                error: action.payload.error,
                isFetching: action.payload.isFetching
            }
        case FETCH_POSTS_FAIL:
            return {
                ...state,
                error: action.payload.error,
                isFetching: action.payload.isFetching
            }
        case ADD_ITEM_TO_COLLECTION_SUCCESS:
            return {
                ...state,
                error: action.payload.error,
                isFetching: action.payload.isFetching,
                collection: action.payload.items 
            }
        case ADD_ITEM_TO_COLLECTION_START:
            return {
                ...state,
                error: action.payload.error,
                isFetching: action.payload.isFetching
            }
        case ADD_ITEM_TO_COLLECTION_FAIL:
            return {
                ...state,
                error: action.payload.error,
                isFetching: action.payload.isFetching
            }

        case SET_KARMA_SUCCESS:
            return {
                ...state,
                error: action.payload.error,
                isFetching: action.payload.isFetching,
                karma : action.payload.karma
            }
        default:
            return {
                ...state
            }
    }
}