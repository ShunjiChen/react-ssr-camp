/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2019-12-22 15:54:28
 * @Description: file content
 */
import React from 'react'
import {Route} from 'react-router-dom'

function Status({ code, children }) {
    return <Route render={({ staticContext }) => {
        if (staticContext) {
            staticContext.statuscode = code
        }
        return children
    }}>

    </Route>
}


function Notfound() {
    return <Status code={404}>
        <h1>页面不存在！</h1>
        <img id="img-404" src="/404.gif" alt="" />
    </Status>
}

export default Notfound