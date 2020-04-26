import { Avatar, Divider } from 'antd'
import { GithubOutlined, WechatOutlined, CreditCardOutlined } from '@ant-design/icons'
import styles from './author.module.less'

const Author = ({ globalStyles }) => (
  <div className={[styles.authorDiv, globalStyles.mainContentLeft].join(' ')}>
    <div>
      <Avatar size={100} src="/global/profile.jpg" />
    </div>
    <div className={styles.authorIntroduction}>
      <h2>Porschebz</h2>
      <p>从Java后端转前端的开发</p>
      <Divider>社交账号</Divider>
      <GithubOutlined spin className={styles.account} />
      <WechatOutlined spin className={styles.account} />
      <CreditCardOutlined spin className={styles.account} />
      <Divider />
      <div className={styles.aboutMe}>About me</div>
    </div>
  </div>
)

export default Author