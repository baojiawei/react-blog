import Layout from 'components/layout'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/scss/monokai-sublime.scss'
import 'styles/pages/post.less'
import GeneratorCatalog from 'utils/generatorCatalog'
import { MenuOutlined } from '@ant-design/icons'
import {
  Row,
  Col
} from 'antd'

export default function Post() {
  let markdown='# P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '## P01-01:课程介绍和环境搭建\n'+
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '## P02-01:课程介绍和环境搭建\n'+
  '### P02-01:课程介绍和环境搭建\n'+
  '### P02-01:课程介绍和环境搭建\n'+
  '#### P02-01:课程介绍和环境搭建\n'+
  '##### P02-01:课程介绍和环境搭建\n'+
  '### P02-01:课程介绍和环境搭建\n'+
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```\n' +
  '# P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '## P01-01:课程介绍和环境搭建\n'+
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '## P02-01:课程介绍和环境搭建\n'+
  '### P02-01:课程介绍和环境搭建\n'+
  '### P02-01:课程介绍和环境搭建\n'+
  '### P02-01:课程介绍和环境搭建\n'+
  '>> bbbbbbbbb\n'

  const renderer = new marked.Renderer()
  const generatorCatalog = new GeneratorCatalog()

  renderer.heading = (text, level) => {
    const anchor = generatorCatalog.add(text, level)
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>`
  }
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    highlight: function(code) {
      return hljs.highlightAuto(code).value
    }
  })

  let html = marked(markdown)
  return (
    <Layout
      title="博客详情"
      headerImg="articleBg"
      headerTitle="Porschebz's Studio"
      headerSubTitle="it's better to burn out than to fade away"
    >
     
      <Row className="mainContent" type="flex" justify="center">
        <Col className="mainContentMiddle" xs={24} sm={24} md={16} lg={15} xl={15}>
          <div dangerouslySetInnerHTML={{__html:html}} />
        </Col>
        <Col className="mainContentLeft" xs={0} sm={0} md={7} lg={5} xl={5}>
          <div className="catalog">
            <div className="catalog-title">
              <MenuOutlined />
              文章目录
            </div>
            {generatorCatalog && generatorCatalog.render()}
          </div>  
        </Col>
      </Row>
    </Layout>
  )
}
