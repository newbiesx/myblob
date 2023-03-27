module.exports = {
    title: '沅芷湘兰',
    description: 'Just playing around',
    head: [
        ['link', { rel: 'icon', href: '/img/img.jpg' }]
      ],
    // base: '.',
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
                text: 'CS与浏览器', // 这里的text就是导航栏上的名字
                items: [
                    { text: '计算机网络', link: '/cs/network/' },
                    { text: '浏览器相关', link: '/cs/browser/' }, // 对应的路径如下图所示
                    { text: '数据库', link: '/cs/database/' },
                    { text: '操作系统', link: 'cs/os/' }
                ]
            }
        ],
        sidebar: {
            "/foo/":['vue']
        },
    },


}