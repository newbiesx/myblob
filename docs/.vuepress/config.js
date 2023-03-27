module.exports = {
    title: '沅芷湘兰',
    description: 'Just playing around',
    head: [
        ['link', { rel: 'icon', href: '/img/img.jpg' }]
    ],
    base: '/myblob/',
    themeConfig: {
        nav: [{
                text: 'Hmoe',
                link: '/'
            },
            {
                text: 'CSS',
                link: '/css/'
            },
            { //这个导航栏对应多个子导航栏
                text: 'js', // 这里的text就是导航栏上的名字
                items: [
                    { text: 'vue2', link: '/js/vue2/' },
                    { text: 'vue3', link: '/js/vue3/' },
                    { text: 'react', link: '/js/react/' },
                    { text: '数据库', link: '/js/database/' },
                ]
            },
            { //这个导航栏对应多个子导航栏
                text: '数据可视化', // 这里的text就是导航栏上的名字
                items: [
                    { text: 'gos', link: '/chat/gojs/' },
                    { text: 'antVg6', link: '/chat/antvg6/' },
                    { text: 'D3', link: '/chat/d3/' },
                    { text: 'echarts', link: '/chat/echarts/' },
                ]
            },
            {
                text: 'GitHub',
                link: 'https://github.com/newbiesx/myblob'
            }
        ],
        sidebar: {
            "/css/": ["cssBase"]
        },
    },


}