import styles from './footer.module.less'

export const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.powerby}>
      Powered by React+Nextjs+Nodejs+Antd
    </div>
    <div className={styles.copyright}>
      <span>Copyright © 2020 porschebz.com</span>
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a href="http://www.beian.miit.gov.cn/" target="_blank"> 浙ICP备20011652号</a>
    </div>
  </div>
)

export default Footer;
