/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2019-12-10 21:05:21
 * @Description: file content
 */
import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { getUserInfo } from "../store/user";

function User(props) {
    return <div>
        <h1> OK ! {props.userinfo.name} 's favourite fruit is  {props.userinfo.best}</h1>
    </div>
}

User.loadData = (store) => {
    return store.dispatch(getUserInfo())
}

export default connect(
    state => ({
        userinfo: state.user.userinfo
    }),
    { getUserInfo }
)(User)