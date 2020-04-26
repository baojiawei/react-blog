import Head from 'next/head'
import MyHeader from 'components/header'
import MyFooter from 'components/footer'

export const myLayout = ({ children, title }) => (
  <>
    <Head>
      <link rel="icon" href="/global/favicon.ico" />
      <meta
        name="description"
        content="porschebz的博客"
      />
      <title>
        Blog-
        {title}
      </title>
    </Head>
    <MyHeader />
    {children}
    <MyFooter />
  </>
)

export default myLayout
