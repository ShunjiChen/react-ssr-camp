/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2019-12-12 22:23:46
 * @Description: file content
 */
// 首页的逻辑
// import axios from "axios";
// actionType
const GET_LIST = 'INDEX/GET_USERINFO'

// actionCreator
const changeList = data => ({
    type: GET_LIST,
    data
})

export const getUserInfo = server => {
    return (dispath, getState, $axios) => {
        return $axios.get('/api/user/info')
            .then(res => {
                const { data } = res.data
                console.log('user', data)
                dispath(changeList(data))
            })
    }
}

const defaultState = {
    userinfo: {}
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_LIST:
            const newState = {
                ...state,
                userinfo: action.data
            }
            return newState
        default:
            return state;
    }
}