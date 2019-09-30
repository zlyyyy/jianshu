import * as types from './actionType'

const defaultState = {
    value: '',
    listData: []
}

export default (state = defaultState, action) => {
    // console.log(state, action)
    const newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.CHANGE_INPUT_VALUE:
            newState.value = action.value
            return newState
        case types.ADD_TODO_ITEM:
            newState.listData = [...newState.listData, newState.value]
            newState.value = ''
            return newState
        case types.DELETE_TODO_ITEM:
            newState.listData.splice(action.index, 1)
            return newState
        case types.SET_TODOLIST:
            newState.listData = action.data
            return newState
        default:
            return state
    }
}