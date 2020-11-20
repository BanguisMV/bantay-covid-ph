import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head> 
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/no-virus.png" />
            <link rel="icon" href="%PUBLIC_URL%/no-virus.png" />
            <meta name="theme-color" content="#7579e7" />
            <title>Bantay COVID</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument