<h1>1、第三次课，解决Promise.all中有一个promise失败导致整个ssr失败，可用Promise.allSettle完美解决</h1>
`Promise.allSettled()`方法接受一组 `Promise` 实例作为参数，包装成一个新的 `Promise` 实例。只有等到所有这些参数实例都返回结果，不管是`fulfilled`还是`rejected`，包装实例才会结束。
