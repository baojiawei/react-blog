import {
  Anchor
} from 'antd'
import { WechatOutlined } from '@ant-design/icons'
import 'styles/components/catalog.less'

const { Link } = Anchor;
const Catalog = () => (
  <div className="catalog">
    <div className="catalog-title">
      <WechatOutlined />
      文章目录
    </div>
    <Anchor>
      <Link href="#components-anchor-demo-basic" title="Basic demo" />
      <Link href="#components-anchor-demo-static" title="Static demo" />
      <Link href="#components-anchor-demo-basic" title="Basic demo with Target" target="_blank" />
      <Link href="#API" title="API">
        <Link href="#Anchor-Props" title="Anchor Props" />
        <Link href="#Link-Props" title="Link Props" />
      </Link>
    </Anchor>
  </div>  
)

export default Catalog
