import Head from 'next/head'
import { Button } from 'antd'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>porschebz-blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button>你好</Button>
    </div>
  )
}
