import {
  Avatar, Divider, Affix, Tag
} from 'antd'
import { GithubOutlined, WechatOutlined, CreditCardOutlined } from '@ant-design/icons'
import styles from './author.module.less'

const Author = () => (
  <Affix offsetTop={5}>
    <div className={styles.authorDiv}>
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
        <Divider>技术栈</Divider>
        <Tag color="red">Java</Tag>
        <Tag color="green">Vue</Tag>
        <Tag color="blue">React</Tag>
        <Tag color="purple">Nodejs</Tag>
        <Divider />
        <div className={styles.aboutMe}>About me</div>
      </div>
    </div>
  </Affix>
)

export default Author
