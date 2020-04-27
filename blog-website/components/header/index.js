import {
  useState, useEffect
} from 'react';
import styles from './header.module.less';

export const Header = ({ headerImg }) => {
  const [animationSiteTitle, setAnimationSiteTitle] = useState([styles.introTitle])
  const [animationSiteSubTitle, setAnimationSiteSubTitle] = useState([styles.introSubtitle])
  const [bg, setBg] = useState([styles.bgWrapper])
  useEffect(() => {
    setTimeout(() => {
      const siteTitleStyle = animationSiteTitle
      siteTitleStyle.push(styles.introFadeIn)
      setAnimationSiteTitle(siteTitleStyle.join(' '))
      const siteSubTitleStyle = animationSiteSubTitle
      siteSubTitleStyle.push(styles.introFadeIn)
      setAnimationSiteSubTitle(siteSubTitleStyle.join(' '))
      const bgStyle = bg
      switch (headerImg) {
        case 'homeBg':
          bgStyle.push(styles.homeBg)
          break;
        case 'aboutBg':
          bgStyle.push(styles.aboutBg)
          break;
        case 'lifeBg':
          bgStyle.push(styles.lifeBg)
          break;
        case 'articleBg':
          bgStyle.push(styles.articleBg)
          break;
        default:
          return
      }
      setBg(bgStyle.join(' '))
    }, 300);
  }, [])
  return (
    <div className={styles.header}>
      <div className={bg} />
      <div className={styles.siteIntro}>
        <div className={animationSiteTitle}>Porschebz's Studio</div>
        <div className={animationSiteSubTitle}>it's better to burn out than to fade away</div>
      </div>
    </div>
  )
}

export default Header;
