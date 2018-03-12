import Router from 'next/router'

export const redirect = (url, options = { res: {}, isServer: false }) => {
  const { res, isServer } = options
  if (isServer) {
    res.writeHead(302, {
      Location: url,
    })
    res.end()
    res.finished = true
  } else {
    Router.replace(url)
  }
  return {}
}
