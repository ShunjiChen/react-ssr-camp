/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2019-12-10 22:05:44
 * @Description: file content
 */
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from '../src/App'
import store from "../src/store/store";

// 注水 客户端入口
const Page = (<Provider store={store}>
    <BrowserRouter>
        {App}
    </BrowserRouter>
</Provider>)


ReactDom.hydrate(Page, document.getElementById('root'))