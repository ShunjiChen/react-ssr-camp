/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2019-12-15 19:53:55
 * @Description: file content
 */
import React from 'react'
import {Link} from 'react-router-dom'

export default () => {
    return (
        <div>
            <Link to="/">首页</Link> / 
            <Link to="/about">关于</Link> / 
            <Link to="/user">用户</Link> /
            <Link to="/notfound">更多</Link>
        </div>
    )
}