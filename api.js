import fetch from 'isomorphic-fetch'
//139.59.127.206
//159.203.140.5
//localhost
//api.maxmuaythai.com
//beta-api.maxmuaythai.com
export const SERVER = 'http://api.maxmuaythai.com'
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
