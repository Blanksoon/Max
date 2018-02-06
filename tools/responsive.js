// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components'

const sizes = {
  iphone5: 376, //325,
  phone: 376, //376,
  ipad: 376, //768,
  ipadxl: 376, //850,
  ipadpro: 376, //1024,
  desktop: 376, //1120,
}

export const theme = {
  breakpoints: [
    // min-width breakpoints in em
    23.44, // 20.1, //iphone5
    23.44, // 23.44, //phone
    23.44, // 48.1, //ipad
    23.44, // 64.1, //ipadpro
    23.44, // 70.1, //desktop
  ],
}
// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
