/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2019-12-12 22:23:52
 * @Description: file content
 */
// 存储的入口
import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import indexReducer from "./index";

const reducer = combineReducers({
    index: indexReducer
})

// 创建store
const store = createStore(reducer, applyMiddleware(thunk))

export default store