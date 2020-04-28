import { Menu } from 'antd'
import { HomeOutlined, CoffeeOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import 'styles/components/navbar.less'


const MENU_STYLE = {
  border: 'none',
  fontSize: '1.2rem',
  background: 'transparent',
  color: '#fff',
  position: 'fixed',
  zIndex: 1,
  width: '100%',
  textAlign: 'center'
}

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState('block')
  useEffect(() => {
   const onScroll = () => {
    const { scrollTop } = document.documentElement
    if (scrollTop >= 500 && showNavbar !== 'none') {
      setShowNavbar('none')
    } else {
      setShowNavbar('block')
    }
  }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, []);


  return (
    <div style={{ display: showNavbar }}>
      <Menu mode="horizontal" style={MENU_STYLE}>
        <Menu.Item key="home">
          <Link href="/">
            <a className="colorWhite">
              <HomeOutlined spin className="iconStyle" />
              首页
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="life">
          <Link href="/life">
            <a className="colorWhite">
              <CoffeeOutlined spin className="iconStyle" />
              生活
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link href="/about">
            <a className="colorWhite">
              <VideoCameraOutlined spin className="iconStyle" />
              关于我
            </a>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Navbar;
