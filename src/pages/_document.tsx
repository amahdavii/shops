
import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fa" dir="rtl">
        <Head>
          <meta name="theme-color" media="(prefers-color-scheme: light)" content="#004f9e"/>
          <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#004f9e" />
          <link rel="stylesheet" href="https://cdn.map.ir/web-sdk/1.4.2/css/mapp.min.css"/>
          <link rel="stylesheet" href="https://cdn.map.ir/web-sdk/1.4.2/css/fa/style.css"/>
        </Head>
        <body>
          <script type="text/javascript" src="https://cdn.map.ir/web-sdk/1.4.2/js/jquery-3.2.1.min.js"></script>
          <script type="text/javascript" src="https://cdn.map.ir/web-sdk/1.4.2/js/mapp.env.js"></script>
          <script type="text/javascript" src="https://cdn.map.ir/web-sdk/1.4.2/js/mapp.min.js"></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
