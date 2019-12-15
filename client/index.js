/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2019-12-10 22:05:44
 * @Description: file content
 */
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import routes from '../src/App'
import Header from '../src/component/Header'
import {getClientStore} from "../src/store/store";

const store = getClientStore()
// 注水 客户端入口
const Page = (<Provider store={store}>
    <BrowserRouter>
        <Header></Header>
        {routes.map(route => <Route {...route}></Route>)}
    </BrowserRouter>
</Provider>)


ReactDom.hydrate(Page, document.getElementById('root'))