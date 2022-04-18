let githubPage = 'https://github.com/TaylorAndTony';
let biliPage = 'https://space.bilibili.com/47256272';
let giteePage = 'https://gitee.com/taylorandtony';
let acfunPage = 'https://www.acfun.cn/u/29348557';
let weiboPage = 'https://weibo.com/u/5264623497';
let happyPage = 'https://TaylorAndTony.github.io/happy-simple';

function toUrl(url) {
    window.open(url);
}

/**
 * Add a wesite jump card to page
 * @param {string} website 
 * @param {string} favicon 
 * @param {string} domain 
 */
function webpageBoxFactory(website, favicon, domain, mountToID, largeBox = false) {
    let wrapper = document.createElement('div');
    wrapper.className = 'box webpage-box';

    let boxWidth = null;
    if (largeBox) {
        boxWidth = '200px';
    } else {
        boxWidth = '150px';
    }

    wrapper.style.cssText = `
    width: ${boxWidth};
    height: 40px;
    display: flex;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    padding-left:20px;
    `;
    wrapper.addEventListener('click', () => {
        toUrl(website);
    })

    let img = document.createElement('img');
    img.src = favicon;
    img.style.cssText = `
    width: 20px;
    height: 20px;
    `;
    img.className = 'web-icon';

    let desc = document.createElement('div');
    desc.innerHTML = domain;
    desc.className = 'web-text';

    wrapper.appendChild(img);
    wrapper.appendChild(desc);

    document.getElementById(mountToID).appendChild(wrapper);
}

function webpageBoxJsonFactory(jsonString) {
    for (let dict of jsonString) {
        webpageBoxFactory(
            dict.website,
            dict.favicon,
            dict.name,
            dict.id,
            dict.large)
    }
}

// init
window.onload = function () {
    // repo
    let config = [
        {
            website: 'https://gitee.com/taylorandtony/avatar-with-border',
            favicon: 'https://gitee.com/favicon.ico',
            name: '头像加边框',
            id: 'repo-list',
            large: true
        },
        {
            website: 'https://gitee.com/taylorandtony/learn-rar-pls',
            favicon: 'https://gitee.com/favicon.ico',
            name: '简明解压教程',
            id: 'repo-list',
            large: true
        },
        {
            website: 'https://gitee.com/taylorandtony/play-linux',
            favicon: 'https://gitee.com/favicon.ico',
            name: '折腾 Linux',
            id: 'repo-list',
            large: true
        },
        {
            website: 'https://github.com/TaylorAndTony/AHK_Scripts',
            favicon: 'https://github.githubassets.com/favicon.ico',
            name: 'My AHK Script',
            id: 'repo-list',
            large: true
        },
        {
            website: 'https://github.com/TaylorAndTony/PhoneImageOCR',
            favicon: 'https://github.githubassets.com/favicon.ico',
            name: 'OCR your phone',
            id: 'repo-list',
            large: true
        },
        // my pages
        {
            website: biliPage,
            favicon: 'https://static.hdslb.com/images/favicon.ico',
            name: 'Bilibili',
            id: 'website-list',
            large: false,
        },
        {
            website: giteePage,
            favicon: 'https://gitee.com/favicon.ico',
            name: 'Gitee',
            id: 'website-list',
            large: false,
        },
        {
            website: githubPage,
            favicon: 'https://github.githubassets.com/favicon.ico',
            name: 'Github',
            id: 'website-list',
            large: false,
        },
        {
            website: weiboPage,
            favicon: 'https://weibo.com/favicon.ico',
            name: 'Weibo',
            id: 'website-list',
            large: false,
        },
        {
            website: acfunPage,
            favicon: 'https://www.acfun.cn/favicon.ico',
            name: 'Acfun',
            id: 'website-list',
            large: false,
        },
        {
            website: happyPage,
            favicon: 'https://TaylorAndTony.github.io/happy-simple/favicon.ico',
            name: 'Happy Simple',
            id: 'website-list',
            large: false,
        },
        // load instersting box
        {
            website: 'https://neumorphism.io/#e0e0e0',
            favicon: 'https://neumorphism.io/favicon.ico',
            name: '2.5D 生成器',
            id: 'interesting-list',
            large: true
        },
        {
            website: 'https://byrut.org/',
            favicon: 'https://byrut.org/favicon.png',
            name: 'Russian torrents',
            id: 'interesting-list',
            large: true
        },
        {
            website: 'https://myacg.xyz/',
            favicon: 'https://mynovel.life/img/favicon.ico', 
            name: 'MyACG 导航',
            id: 'interesting-list',
            large: true
        },
        // anime
        {
            website: 'https://bbs.mihoyo.com/', 
            favicon: 'https://bbs.mihoyo.com/favicon.ico', 
            name: '米游社', 
            id: 'anime-list',
            large: false
        },
        {
            website: 'http://www.imomoe.live/',
            favicon:  'https://github.githubassets.com/favicon.ico', 
            name: '樱花动漫', 
            id: 'anime-list',
            large: false
        },
        {
            website: 'https://xsear.ch/', 
            favicon:  'https://xsear.ch/favicon.ico', 
            name: 'Xsearch',
            id: 'anime-list',
            large: false
        },
        {
            website: 'https://gelbooru.com/',
            favicon:  'https://gelbooru.com/favicon.ico',
            name:  'Gelbooru', 
            id: 'anime-list',
            large: false
        },
        {
            website: 'https://safebooru.org/index.php', 
            favicon:  'https://safebooru.org/favicon.ico', 
            name:  'safebooru', 
            id: 'anime-list',
            large: false
        },
    ]
    webpageBoxJsonFactory(config);
}