/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2019-12-12 23:00:24
 * @Description: file content
 */
// 模拟接口数据
const express = require('express')
const app = express()

app.get('/api/course/list', (req, res) => {
    // 支持跨域调用
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
    res.header('Content-Type', 'application/json;charset=utf-8')
    res.json({
        code: 0,
        list: [{
            id: 1,
            name: '🍌🍌🍌🍌'
        },{
            id: 2,
            name: '🍍🍍🍍🍍'
        },{
            id: 3,
            name: '🍓🍓🍓🍓',
        },{
            id: 4,
            name: '🍎🍎🍎🍎'
        }]
    })
})

app.listen(9090,() => {
    console.log('mock启动完毕!')
})