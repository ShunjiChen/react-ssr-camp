/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2019-12-10 21:05:21
 * @Description: file content
 */
import React from 'react'
import { renderToString } from "react-dom/server"
import express from 'express'
import path from 'path'
import fs from 'fs'
import { StaticRouter, matchPath, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import proxy from 'http-proxy-middleware'
import routes from '../src/App'
import { getServerStore } from "../src/store/store";
import Header from '../src/component/Header'

const store = getServerStore()
const app = express()
app.use(express.static('public'))

// csr降级处理
function csrRender(res){
  // 读取csr文件
  const filename = path.resolve(process.cwd(), 'public/index.csr.html')
  const html = fs.readFileSync(filename, 'utf-8')
  return res.send(html)
}

// 客户端来的api请求
app.use(
  '/api',
  proxy({
    target: 'http://localhost:9090',
    changeOrigin: true
  })
)

app.get('*', (req, res) => {
  
  if (req.query._mode == 'csr') {
    console.log('url参数开启csr降级处理')
    return csrRender(res)
  }
  // 存储网络请求
  const promises = []
  routes.some((route) => {
    const match = matchPath(req.path, route)
    if (match) {
      // 获取根据路由渲染出的组件，并拿到loadData方法 获取数据
      const { loadData } = route.component
      if (loadData) {
        promises.push(loadData(store))
      }
    }
  })



  // 使用Promise.allSettled代替Promise.all
  Promise.allSettled(promises).then((results) => {
    const context = {
      css:[]
    }
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <Header></Header>
          <Switch>
            {routes.map(route => <Route {...route}></Route>)}
          </Switch>
        </StaticRouter>
      </Provider>
    )
    if (context.statuscode) {
      // 状态切换和頁面跳轉
      res.status(context.statuscode)
    }

    if (context.action == 'REPLACE') {
      res.redirect(301,context.url)
    }

    const css = context.css.join('\n')

    res.send(`
      <html>
        <head>
          <meta charset="utf-8" />
          <title>react ssr</title>
          <style>
            ${css}
          </style>
        </head>
        <body>
          <div id="root">${content}</div>
          <script>
            window.__context = ${JSON.stringify(store.getState())}
          </script>
          <script src="/bundle.js"></script>
        </body>
      </html>
    `)
  })
})
app.listen(9093, () => {
  console.log('监听完毕！')
})