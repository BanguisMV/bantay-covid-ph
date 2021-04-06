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
            <link rel="shortcut icon" href="/no-virus.png" />
            <link rel="apple-touch-icon" href="/no-virus.png" />
            <meta name="theme-color" content="#7579e7" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-WLZN988T7N"></script>
            <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-WLZN988T7N');`
                    }}
          />
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