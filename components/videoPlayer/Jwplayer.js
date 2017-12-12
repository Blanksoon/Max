import md5 from 'md5'

const cache = {}
const cached = key => {
  return typeof cache[key] !== 'undefined'
}
const expired = key => {
  const now = Date.now()
  const signature = cache[key]
  return signature.expire < now
}
export const Jwplayer = path => {
  let signature = ''
  let expire = ''
  // Cache missed
  if (!cached(path) || expired(path)) {
    expire = Date.now() + '7200'
    signature = md5(`${path}:${expire}:${'93pia1YERFQ9VXWeNQVbDU97'}`)
    cache[path] = {
      signature,
      expire,
    }
  } else {
    // Cache hit
    signature = cache[path].signature
    expire = cache[path].expire
  }
  return `https://content.jwplatform.com/${path}?exp=${expire}&sig=${signature}`
}
