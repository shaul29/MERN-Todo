import axios from 'axios'
import {
    TODO_LIST_MY_REQUEST,
    TODO_LIST_MY_SUCCESS,
    TODO_LIST_MY_FAIL,
    TODO_CREATE_REQUEST,
    TODO_CREATE_SUCCESS,
    TODO_CREATE_FAIL,
    TODO_DELETE_REQUEST,
    TODO_DELETE_SUCCESS,
    TODO_DELETE_FAIL,
    TODO_UPDATE_REQUEST,
    TODO_UPDATE_SUCCESS,
    TODO_UPDATE_FAIL,
} from '../constants/todoConstants'

export const createTodo = (todo) => async (dispatch, getState) => {
    try {
        dispatch({
            type: TODO_CREATE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.post(`/api/todo`, todo, config)

        dispatch({
            type: TODO_CREATE_SUCCESS,
            payload: data,
        })
        dispatch(listMyTodo())


    } catch (error) {
        dispatch({
            type: TODO_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const listMyTodo = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: TODO_LIST_MY_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.get(`/api/todo`, config)

        dispatch({
            type: TODO_LIST_MY_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: TODO_LIST_MY_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const deleteTodo = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: TODO_DELETE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.delete(`/api/todo/${id}`, config)

        dispatch({
            type: TODO_DELETE_SUCCESS
        })
        dispatch(listMyTodo())
    } catch (error) {
        dispatch({
            type: TODO_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const updateTodo = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: TODO_UPDATE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.put(`/api/todo/${id}`, config)

        dispatch({
            type: TODO_UPDATE_SUCCESS
        })
        dispatch(listMyTodo())
    } catch (error) {
        dispatch({
            type: TODO_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

