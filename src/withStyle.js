/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2019-12-22 21:40:10
 * @Description: file content
 */
import React from 'react'

function withStyle(Comp, styles) {
    return function (props) {
        if (props.staticContext) {
            props.staticContext.css.push(styles._getCss())
        }
        return <Comp {...props} />
    }
}

export default withStyle