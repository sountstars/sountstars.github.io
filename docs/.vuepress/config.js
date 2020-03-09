module.exports = {
    title: 'my blog',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
      nav:[ // 导航栏配置
        {text: '前端基础', link: '/accumulate/' , target:'_self' },
        {text: 'github', link: 'https://baidu.com'},
        //提供了一个 items 数组而不是一个单一的 link 时，它将显示为一个 下拉列表 
        // items: [
        //   { text: 'Chinese', link: '/language/chinese/' },
        //   { text: 'Japanese', link: '/language/japanese/' }
        // ]      
      ],
      // sidebar: 'auto', // 侧边栏配置
      // sidebarDepth: 2, // 深度  最大深度2
      sidebar : [
        {
          title :'JS',
          collapsable : true ,
          children : [
            // 'js/home',
            'js/two',
            'js/regular',
            'js/this',            
            'js/prototype',     
            'js/arr',
            'js/string',
          ],
          sidebarDepth : 0
        },
        // {
        //   title :'git',
        //   collapsable : true ,
        //   children : [
        //     'git/command'
        //   ],
        //   sidebarDepth : 0
        // },
        {
          title :'Css',
          collapsable : true ,
          children : [
            'css/process',
          ],
          sidebarDepth : 0
        },
        {
          title :'REACT',
          collapsable : true ,
          children : [
            'react/lifecycle',  //生命周期
            'react/hooklifecycle',  //hooks生命周期 
                     
          ],
          sidebarDepth : 0
        },
        // {
        //   title :'webpack',
        //   collapsable : true ,
        //   children : [
        //     'webpack/summary',  //            
        //   ],
        //   sidebarDepth : 0
        // },
        // {
        //   title :'Webworker',
        //   collapsable : true ,
        //   children : [
        //     // 'Webworker/use'
        //   ],
        //   sidebarDepth : 0
        // },
        {
          title :'communication',
          collapsable : true ,
          children : [
            'communication/protocol',
            'communication/cache',
            'communication/Url_procudure',
          ],
          sidebarDepth : 0
        },
 
      ]
    }
  };