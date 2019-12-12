/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2019-12-10 21:05:21
 * @Description: file content
 */
import React,{useState} from 'react'
import { Route } from "react-router-dom";
import Index from "./container/Index";
import About from "./container/About";

export default (
  <div>
    <Route path="/" exact component={Index}></Route>
    <Route path="/about" exact component={About}></Route>
  </div>
)