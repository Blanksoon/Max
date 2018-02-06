// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components'

const sizes = {
  iphone5: 325,
  phone: 376,
  ipad: 768,
  ipadxl: 850,
  ipadpro: 1024,
  desktop: 1120,
}

export const theme = {
  breakpoints: [
    // min-width breakpoints in em
    18.75, //iphone5
    23.44, //phone
    48.1, //ipad
    64.1, //ipadpro
    70.1, //desktop
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
