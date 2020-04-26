import Head from 'next/head'
import MyHeader from 'components/header'
import MyFooter from 'components/footer'
import Author from 'components/author'
import { Row, Col, Affix } from 'antd'
import { useState, useEffect } from 'react';
import styles from './layout.module.less'

export const myLayout = ({
  children, title, needAuthor
}) => {
  const [showAuthor, setShowAuthor] = useState(true)
  const [animationMainContentLeft, setAnimationMainContentLeft] = useState([styles.mainContentLeft])
  const [animationMainContentRight, setAnimationMainContentRight] = useState([styles.mainContentRight])

  useEffect(() => {
    setShowAuthor(needAuthor)
  }, [needAuthor])

  useEffect(() => {
    setTimeout(() => {
      animationMainContentLeft.push(styles.introFadeIn)
      setAnimationMainContentLeft(animationMainContentLeft.join(' '))
      animationMainContentRight.push(styles.introFadeIn)
      setAnimationMainContentRight(animationMainContentRight.join(' '))
    }, 300);
  }, [])
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
      <MyHeader />
      <Row className={styles.mainContent} type="flex" justify="center">
        {showAuthor
          ? (
            <Col className={animationMainContentLeft} xs={0} sm={0} md={7} lg={5} xl={4}>
              <Affix offsetTop={5}>
                <Author />
              </Affix>
            </Col>
          )
          : ''}
        <Col className={animationMainContentRight} xs={24} sm={24} md={16} lg={18} xl={14}>
          {children}
        </Col>
      </Row>
      <MyFooter />
    </>
  )
}

export default myLayout
