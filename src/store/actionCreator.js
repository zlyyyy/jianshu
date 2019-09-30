import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, SET_TODOLIST } from './actionType'
import { getRanking } from '../api'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getTodoListAddAction = () => ({
    type: ADD_TODO_ITEM
})

export const getTodoListDeleteAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const setTodoList = (data) => ({
    type: SET_TODOLIST,
    data
})

export const getTodoList = () => {
    return (dispatch) => {
        getRanking().then(res => {
            let _data = []
            res.data.forEach(ele => {
                _data = [..._data, ele.title]
            });
            dispatch(setTodoList(_data))
        })
    }
}