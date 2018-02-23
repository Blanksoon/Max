// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components'

const sizes = {
  iphone5: 325, //325,
  phone: 376, //376,
  iphone7p: 415, //415
  ipad: 768, //768,
  ipadxl: 850, //850,
  ipadpro: 1024, //1024,
  desktop: 1280, //1120,
}

export const theme = {
  breakpoints: [
    //26, //25.875 //iphone7ps
    // min-width breakpoints in em
    20.1, // 20.1, //iphone5
    23.5, // 23.44, //phone
    48, // 48.1, //ipad
    64, // 64.1, //ipadpro
    80, // 70.1, //desktop
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
