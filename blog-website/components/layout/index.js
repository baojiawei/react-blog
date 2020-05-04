import Head from 'next/head'
import MyHeader from 'components/header'
import Navbar from 'components/navbar'
import MyFooter from 'components/footer'
import { useState, useEffect } from 'react';
import 'styles/components/layout.less'

export const myLayout = ({
  children, title, headerImg,
  headerTitle, headerSubTitle
}) => {
  
  return (
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
      <Navbar />
      <MyHeader headerImg={headerImg} headerTitle={headerTitle} headerSubTitle={headerSubTitle}/>
      {children}
      <MyFooter />
    </>
  )
}

export default myLayout
