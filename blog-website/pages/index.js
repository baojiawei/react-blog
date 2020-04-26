import Layout from 'components/layout'
import { Row, Col } from 'antd'

export default function Home() {
  return (
    <Layout title="首页">
      <Row className="mainContent" type="flex" justify="center">
        <Col className="mainContentLeft" xs={0} sm={0} md={7} lg={5} xl={4}>
          左侧
        </Col>
        <Col className="mainContentRight" xs={24} sm={24} md={16} lg={18} xl={14}>右侧</Col>
      </Row>
    </Layout>
  )
}
