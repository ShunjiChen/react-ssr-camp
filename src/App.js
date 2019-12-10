/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2019-12-10 21:05:21
 * @Description: file content
 */
import React,{useState} from 'react'

function App (props) {
  const [count, setCount] = useState(1)

  return <div>
    <h1> hello world ! {props.title} + {count}</h1>

    <button onClick={() => setCount(count + 1)}>Add By 1</button>
  </div>
}

export default <App title="react-ssr-camp"></App>