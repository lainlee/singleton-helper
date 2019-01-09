const singletonHelper = (func = Promise.resolve) => {
  return (() => {
    let single = null
    return (...params) => {
      if (!single) {
        single = Promise.resolve()
          .then(() => {
            return func(...params)
          })
          .then((rs) => {
            single = null
            return rs
          })
          .catch((err) => {
            throw err
          })
      }
      return single
    }
  })()
}

module.exports = singletonHelper