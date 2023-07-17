import { Html, Head, Main, NextScript } from 'next/document'
import { grey } from '@mui/material/colors'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <style>
          {`body { margin: 0; background: ${grey[100]}; } /* custom! */`}
        </style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
