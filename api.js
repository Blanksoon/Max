import fetch from 'isomorphic-fetch'
//139.59.127.206
export const SERVER = 'http://139.59.127.206:3002'
export const get = url => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .catch(err => Promise.reject(err))
}

export const post = (url, json) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      //Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify(json),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .catch(err => Promise.reject(err))
}
