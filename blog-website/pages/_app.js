import globalStyles from '../styles/global.less'
import 'antd/dist/antd.less'

export const App = ({ Component, pageProps }) => (
  <Component {...pageProps} globalStyles={globalStyles} />
)

export default App
