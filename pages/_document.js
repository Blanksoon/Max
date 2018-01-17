import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import ReactGA from 'react-ga'

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    ReactGA.initialize('UA-112325602-1')
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {styleTags}
          {/* Global site tag (gtag.js) - Google Analytics
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-112325602-1"
          />
          <script>
            window.dataLayer = window.dataLayer || [] function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date()) gtag('config', 'UA-112325602-1')
          </script> */}
        </Head>
        <body>
          <div className="root">{main}</div>
          <NextScript />
        </body>
      </html>
    )
  }
}
