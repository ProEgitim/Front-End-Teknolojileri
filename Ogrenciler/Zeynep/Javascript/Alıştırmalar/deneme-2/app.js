class Request {
  get(url) {
    return new Promise ((resolve, reject) => {
      fetch(url)
          .then(response => response.JSON())
          .then(data => resolve (data))
          .catch(err => reject (err));
    })
  }
}


post (url, data) {
  return new Promise ((resolve, reject) => {
    fetch(url,)
  })
}












delete (url) {
  return new Promise ((resolve, reject) => {
    fetch(url, )
  })
}