import { useState, useEffect } from 'react';
import styles from './header.module.less'

export const Header = () => {
  const [animationSiteTitle, setAnimationSiteTitle] = useState([styles.introTitle])
  const [animationSiteSubTitle, setAnimationSiteSubTitle] = useState([styles.introSubtitle])

  useEffect(() => {
    const siteTitleStyle = animationSiteTitle
    siteTitleStyle.push(styles.introFadeIn)
    const siteSubTitleStyle = animationSiteSubTitle
    siteSubTitleStyle.push(styles.introFadeIn)
    setAnimationSiteTitle(siteTitleStyle.join(' '))
    setAnimationSiteSubTitle(siteSubTitleStyle.join(' '))
  }, [])
  return (
    <div className={styles.header}>
      <div className={styles.headerBg} />
      <div className={styles.siteIntro}>
        <div className={animationSiteTitle}>Porschebz's Studio</div>
        <div className={animationSiteSubTitle}>it's better to burn out than to fade away</div>
      </div>
    </div>
  )
}

export default Header;
