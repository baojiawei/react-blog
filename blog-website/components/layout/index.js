import Head from 'next/head'
import MyHeader from 'components/header'
import Navbar from 'components/navbar'
import MyFooter from 'components/footer'
import Author from 'components/author'
import Catalog from 'components/catalog'
import { Row, Col } from 'antd'
import { useState, useEffect } from 'react';
import 'styles/components/layout.less'

export const myLayout = ({
  children, title, needAuthor, headerImg,
  headerTitle, headerSubTitle,
  needCatalog
}) => {
  const [showAuthor, setShowAuthor] = useState(true)

  useEffect(() => {
    setShowAuthor(needAuthor)
  }, [needAuthor])

  const [showCatalog, setShowCatalog] = useState(true)

  useEffect(() => {
    setShowCatalog(needCatalog)
  }, [needCatalog])

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
      <Row className="mainContent" type="flex" justify="center">
        {showAuthor
          ? (
            <Col className="mainContentLeft" xs={0} sm={0} md={7} lg={5} xl={5}>
              <Author />
            </Col>
          )
          : ''}
        <Col className="mainContentMiddle" xs={24} sm={24} md={16} lg={15} xl={15}>
          {children}
        </Col>
        {showCatalog
          ? (
            <Col className="mainContentRight" xs={0} sm={0} md={7} lg={5} xl={5}>
              <Catalog />
            </Col>
          )
          : ''}
      </Row>
      <MyFooter />
    </>
  )
}

export default myLayout
