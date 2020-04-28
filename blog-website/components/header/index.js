import {
  useState, useEffect
} from 'react';
import { CSSTransition } from 'react-transition-group'
import 'styles/components/header.less';

export const Header = ({ headerImg }) => {
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
      <CSSTransition
        classNames="fade"
        appear={true}
        timeout={1000}
        >
        <div className="siteIntro">
          <div className="introTitle">Porschebz's Studio</div>
          <div className="introSubtitle">it's better to burn out than to fade away</div>
        </div>
      </CSSTransition>
    </div>
  )
}

export default Header;
