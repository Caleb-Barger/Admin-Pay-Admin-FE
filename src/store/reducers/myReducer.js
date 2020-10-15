const initalState = {
    collection: []
}

export const myReducer = (state=initalState, action) => {
    switch(action.type) {
        default:
            return {
                ...state
            }
    }
}