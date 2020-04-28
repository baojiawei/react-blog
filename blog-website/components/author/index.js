import {
  Avatar, Divider, Affix, Tag
} from 'antd'
import { GithubOutlined, WechatOutlined, CreditCardOutlined } from '@ant-design/icons'
import 'styles/components/author.less'

const Author = () => (
  <Affix offsetTop={5}>
    <div className="authorDiv">
      <div>
        <Avatar size={100} src="/images/global/profile.jpg" />
      </div>
      <div className="authorIntroduction">
        <h2>Porschebz</h2>
        <p>从Java后端转前端的开发</p>
        <Divider>社交账号</Divider>
        <GithubOutlined className="account" />
        <WechatOutlined className="account" />
        <CreditCardOutlined className="account" />
        <Divider>技术栈</Divider>
        <Tag color="red">Java</Tag>
        <Tag color="green">Vue</Tag>
        <Tag color="blue">React</Tag>
        <Tag color="purple">Nodejs</Tag>
      </div>
    </div>
  </Affix>
)

export default Author
