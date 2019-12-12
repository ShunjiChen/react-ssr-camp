/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2019-12-10 21:05:21
 * @Description: file content
 */
import React from 'react'
import { renderToString } from "react-dom/server"
import express from 'express'
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from '../src/App'
import store from "../src/store/store";
import { strict } from 'assert';

const app = express()
app.use(express.static('public'))

app.get('*', (req, res) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>{App}</StaticRouter>
    </Provider>
  )
  res.send(`
    <html>
      <head>
        <meta charset="utf-8" />
        <title>react ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `)
})
app.listen(9093, () => {
  console.log('监听完毕！')
})