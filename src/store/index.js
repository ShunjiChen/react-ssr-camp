/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2019-12-12 22:23:46
 * @Description: file content
 */
// 首页的逻辑
import axios from "axios";
// actionType
const GET_LIST = 'INDEX/GET_LIST'

// actionCreator
const changeList = list => ({
    type: GET_LIST,
    list
})

export const getIndexList = server => {
    return (dispath, getState, axiosInstance) => {
        return axios.get('http://localhost:9090/api/course/list')
        .then(res => {
            const {list} = res.data
            dispath(changeList(list))
        })
    }
}

const defaultState = {
    list: []
}

export default (state =  defaultState, action) => {
    switch (action.type) {
        case GET_LIST:
            const newState = {
                ...state,
                list: action.list
            }
            return newState
        default:
            return state;
    }
}