import Head from 'next/head'

export const myLayout = ({ children, title }) => (
  <>
    <Head>
      <link rel="icon" href="/global/favicon.ico" />
      <meta
        name="description"
        content="porschebz的博客"
      />
      <title>{title}</title>
    </Head>
    {children}
  </>
)

export default myLayout
