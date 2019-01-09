# singleton-helper
A helper which convert your function to a singleton function, e.g. a async Promise you want fetch once at a certain time

将你的方法转化为单例模式，比如，你有一个异步请求，想在请求成功之前无论谁调用都只触发一次，可以用这个库封装一下你的请求

# install
```
  npm install singleton-helper
```

# useage
```
  const singletonHepler = require('singleton-helper')

  // your api request, must be a Promise request
  // 你的常规请求，必须是一个Promise请求
  const getProfile = (id) => {
    console.log('getProfile')
    return Request.get('xxx')
  }

  const getProfileNew = singletonHepler(getProfile)

  getProfileNew(12)
  getProfileNew(12)
  getProfileNew(12)

  // only console one time  'getProfile'
```

