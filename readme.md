####1、第三次课，解决Promise.all中有一个promise失败导致整个ssr失败，可用Promise.allSettle完美解决

```
const promises = [
  fetch('/api-1'),
  fetch('/api-2'),
  fetch('/api-3'),
];

await Promise.allSettled(promises);
removeLoadingIndicator();
```