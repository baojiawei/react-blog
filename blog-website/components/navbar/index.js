import { Menu } from 'antd'
import { HomeOutlined, CoffeeOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { useState, useEffect, useRef } from 'react'
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
    window.addEventListener('scroll', () => {
      const { scrollTop } = document.documentElement
      if (scrollTop >= 500 && showNavbar !== 'none') {
        setShowNavbar('none')
      } else {
        setShowNavbar('block')
      }
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, []);


  return (
    <div style={{ display: showNavbar }}>
      <Menu mode="horizontal" style={MENU_STYLE}>
        <Menu.Item key="home">
          <HomeOutlined className={styles.iconStyle} />
          首页
        </Menu.Item>
        <Menu.Item key="video">
          <CoffeeOutlined className={styles.iconStyle} />
          生活
        </Menu.Item>
        <Menu.Item key="life">
          <VideoCameraOutlined className={styles.iconStyle} />
          关于我
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Navbar;
