export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/primitive-diagram/index',
    'pages/ant-chart/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#9b9b9b',
    selectedColor: '#2c2c2c',
    backgroundColor: '#fff',
    list: [
      {
        text: '主页',
        pagePath: 'pages/index/index',
      },
      {
        text: 'primitive',
        pagePath: 'pages/primitive-diagram/index',
      },
      {
        text: 'ant',
        pagePath: 'pages/ant-chart/index',
      },
    ]
  },

})
