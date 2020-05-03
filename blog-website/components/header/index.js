import {
  useState, useEffect
} from 'react';
import 'styles/components/header.less';

export const Header = ({ headerImg, headerTitle, headerSubTitle }) => {
  const [bg, setBg] = useState(['bgWrapper'])
  useEffect(() => {
    setTimeout(() => {
      const bgStyle = bg
      switch (headerImg) {
        case 'homeBg':
          bgStyle.push('homeBg')
          break;
        case 'aboutBg':
          bgStyle.push('aboutBg')
          break;
        case 'lifeBg':
          bgStyle.push('lifeBg')
          break;
        case 'articleBg':
          bgStyle.push('articleBg')
          break;
        default:
          return
      }
      setBg(bgStyle.join(' '))
    }, 300);
  }, [])
  return (
    <div className="header">
      <div className={bg} />
      <div className="siteIntro">
        <div className="introTitle">{headerTitle}</div>
        <div className="introSubtitle">{headerSubTitle}</div>
      </div>
    </div>
  )
}

export default Header;
