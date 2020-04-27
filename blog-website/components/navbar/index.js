import { Menu } from 'antd'
import { HomeOutlined, CoffeeOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './navbar.module.less'


const MENU_STYLE = {
  border: 'none',
  fontSize: '1.2rem',
  background: 'transparent',
  color: '#fff',
  position: 'fixed',
  zIndex: 1
}

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState('block')
  useEffect(() => {
    const navScroll = window.addEventListener('scroll', () => {
      const { scrollTop } = document.documentElement
      if (scrollTop >= 500 && showNavbar !== 'none') {
        setShowNavbar('none')
      } else {
        setShowNavbar('block')
      }
    })
    return () => {
      window.removeEventListener('scroll', navScroll)
    }
  }, []);


  return (
    <div style={{ display: showNavbar }}>
      <Menu mode="horizontal" style={MENU_STYLE}>
        <Menu.Item key="home">
          <Link href="/">
            <a href className={styles.colorWhite}>
              <HomeOutlined className={styles.iconStyle} />
              首页
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="life">
          <Link href="/life">
            <a href className={styles.colorWhite}>
              <CoffeeOutlined className={styles.iconStyle} />
              生活
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link href="/about">
            <a href className={styles.colorWhite}>
              <VideoCameraOutlined className={styles.iconStyle} />
              关于我
            </a>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Navbar;
