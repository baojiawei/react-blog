import Head from 'next/head'
import MyHeader from 'components/header'
import Navbar from 'components/navbar'
import MyFooter from 'components/footer'
import Author from 'components/author'
import { Row, Col } from 'antd'
import { useState, useEffect } from 'react';
import 'styles/components/layout.less'

export const myLayout = ({
  children, title, needAuthor, headerImg
}) => {
  const [showAuthor, setShowAuthor] = useState(true)

  useEffect(() => {
    setShowAuthor(needAuthor)
  }, [needAuthor])

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
      <MyHeader headerImg={headerImg} />
      <Row className="mainContent" type="flex" justify="center">
        {showAuthor
          ? (
            <Col className="contentLeft" xs={0} sm={0} md={7} lg={5} xl={4}>
              <Author />
            </Col>
          )
          : ''}
        <Col className="contentRight" xs={24} sm={24} md={16} lg={18} xl={14}>
          {children}
        </Col>
      </Row>
      <MyFooter />
    </>
  )
}

export default myLayout
