import Document, { Head, Html, Main, NextScript } from 'next/document'
import { isLang, DEFAULT_LANG } from '../lib/i18n'

// Static export: the [lang] route param is known at build time, so each
// exported page gets the right <html lang>.
export default class MyDocument extends Document {
  render() {
    const q = this.props.__NEXT_DATA__.query?.lang
    const lang = isLang(q) ? q : DEFAULT_LANG
    return (
      <Html lang={lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
